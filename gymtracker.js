/*
 * Copyright (c) 2018 Bert Freudenberg
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

const $ = _ => document.getElementById(_);
const byClass = (_, cls) => Array.from(_.getElementsByClassName(cls));

let storage = {}; try {storage = localStorage} catch(e) {}; // for testing in private window

let refreshMap = null;

const {gyms, city} = getGyms();

const storageKey = city + ':gym-levels';
const storageKeyOld = city + ':gym-levels-old';

(function start() {
    updateSums();
    if (location.search) {
        $('content').style.display = 'none';
        $('restore').style.display = 'inline';
        return;
    }
    if (location.hash === '#undo' && getOldLevelsString()) {
        $('undo').style.display = 'inline';
    }
    makeList();
    updateShare();
    switch (location.hash) {
        case '#map': showAsMap(); break; 
        case '#district': showByDistrict(); break; 
        case '#level': showByLevel(); break; 
        default: showByName();
    }
})();

// add divs for each gym
function makeList() {
    for (const gym of gyms) {
        gym.div = document.createElement('div');
        gym.div.className = gym.exraid ? 'item exraid' : 'item';
        gym.div.innerHTML = `
            <img src="gym${gym.level}.png" class="badge" width="36" height="48">
            <div><b>${gym.name}</b>
                ${typeof gym.park == 'string' ? '(<a href="http://www.openstreetmap.org/' + gym.park + '">EX</a>)' : ''}<br>
                ${gym.district ? gym.district+',' : ''}
                <a href="https://www.google.com/maps/?q=${gym.location}">${gym.address || 'map'}</a>
            </div>${gym.exraid ? '<img src="exraid.png" class="exbadge">' : ''}`;
        const badge = byClass(gym.div, 'badge')[0];
        badge.onclick = () => {
            incLevel(gym.id);
            badge.src = `gym${gym.level}.png`;
            if (gym.setMarker) gym.setMarker(gym.level);   // update map marker
        };
    }
}


// leaflet.js map
function makeMap(ex) {

    // center map on higher-level gyms
    function weightedCenter(weights = [1, 4, 16, 64]) {
        let center = [0, 0],
            count = 0;
        for (const gym of gyms) {
            const weight = weights[gym.level];
            center[0] += weight * gym.location[0];
            center[1] += weight * gym.location[1];
            count += weight;
        }
        return center.map(sum => sum / count);
    }

    const bounds = L.latLngBounds(gyms.map(gym => gym.location)).pad(0.3);
    const map = L.map('map', {
        center: weightedCenter(),
        zoom: 14,
        maxBounds: bounds,
        fullscreenControl: true,
    });
    // Please get your own token at https://www.mapbox.com/signup/ It's free.
    const mapboxToken = 'pk.eyJ1IjoiemVyb3BvaW50bGlicmEiLCJhIjoiY2pjYWlxd2VnMDhoajMzcDZtYmgxeGloeCJ9.tjcCHRX_1aOLaeKG_9ZXBQ';
    // For testing only, you could use the OSM tile server instead:
    // L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    L.tileLayer(`https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=${mapboxToken}`, {
        attribution: '© <a href="http://openstreetmap.org">OpenStreetMap</a> | © <a href="http://mapbox.com">Mapbox</a>',
        minZoom: 10,
        maxZoom: 17,
    }).addTo(map);

    // add gym markers
    // level 0-4 are regular gyms, 5-9 exraid gyms
    const icons = [0,1,2,3,4].map(level => L.icon({
        iconUrl: `gym${level}.png`,
        iconSize: [36, 48],
        iconAnchor: [18, 42],
        popupAnchor: [18, 6],
        shadowUrl: 'gym_.png',
        shadowSize: [36, 48],
        shadowAnchor: [18, 35],
    }));
    for (const gym of gyms) {
        const loc = L.latLng(gym.location);
        const marker = L.marker(loc, {icon: icons[gym.level], riseOnHover: true});
        const id = S2.latLngToKey(loc.lat, loc.lng, 13).slice(-2).split('').reduce((s, n) => +s * 4 + +n);
        marker.bindTooltip(`${String.fromCodePoint(0x24B6 + id)} ${gym.name}`);
        if (ex==1){
            if (gym.exraid || gym.park){
                marker.addTo(map);
                }
        } else {
            marker.addTo(map);
            }
        gym.setMarker = lv => marker.setIcon(icons[lv]);    // used in makeList()
    }
    
    
    // used in showAsMap()
    refreshMap = _ => L.Util.requestAnimFrame(map.invalidateSize, map, !1, map._container);
}

// add <a> jump targets and nav bar
function makeJumpTable(nameFn = _ => _.name) {
    const targets = [];
    let target = '';
    for (const gym of gyms) {
        const name = nameFn(gym);
        const initial = name[0].toUpperCase();
        if (target !== initial && initial.match(/[A-Z0-9]/i)) {
            target = initial;
            const a = document.createElement('a');
            a.id = target;
            a.className = 'jumptarget';
            gym.div.insertBefore(a, gym.div.childNodes[0]);
            if (initial.match(/[A-Z]/i)) targets.push(target);
        }
    }
    $('jump').innerHTML = targets.map(t => `<a href="#${t}">&nbsp;${t}&nbsp;</a>`).join(' ');
}

function deleteListItems() {
    const list = $('list');
    while (list.firstChild)
        list.removeChild(list.firstChild);
}

function updateSums() {
    const sums = [0, 0, 0, 0, 0];
    for (const gym of gyms)
        sums[gym.level]++;
    for (let i = 0; i < 5; i++)
        $(`sum${i}`).innerText = sums[i];
    $(`sum`).innerText = gyms.length;
}

//////////////// View Switching ////////////////

function show(ids) {
    for (const id of ['list', 'jump', 'map'])
        $(id).style.display = ids.includes(id) ? 'block' : 'none';
}

function showList(sortFn, jumpFn, filterFn = _ => true) {
    deleteListItems();
    gyms.sort(sortFn);     // for jump table
    gyms.filter(filterFn).forEach(gym => $('list').appendChild(gym.div));
    if (jumpFn) makeJumpTable(jumpFn);
    show(jumpFn ? ['list','jump'] : ['list']);
}

function showByName() {
    showList(compareNames, gym => gym.name);
    history.replaceState(null, "By Name", "#name");
}

function showByDistrict() {
    showList(compareDistricts, gym => gym.district);
    history.replaceState(null, "By District", "#district");
}

function showByLevel(level) {
    showList(compareLevels, gym => '' + gym.level);
    if (level !== undefined) location.hash = "#" + level;
    else history.replaceState(null, "By Level", "#level");
}


function showAsMap() {
    const ex = 0;
    const mapContent = $('map').children.length;
    if (!mapContent) makeMap(ex);
    show(['map']);
    refreshMap();
    history.replaceState(null, "Map", "#map");
}


//////////////// Sharing ////////////////

function reload(suffix) {
    location.href = thisURL(suffix);
}

function thisURL(suffix) {
    const {protocol, host, pathname} = document.location;
    return protocol + '//' + host + pathname + (suffix ? suffix : '');
}

function updateShare() {
    $('share-url').href = thisURL('?' + getLevelsString());
}

function doRestore() {
    const undo = getLevelsString();
    setLevelsString(location.search.substr(1));
    if (undo) {
        setOldLevelsString(undo);
        reload('#undo');
    } else {
        reload();
    }
}

function undoRestore() {
    const redo = getLevelsString();
    setLevelsString(getOldLevelsString());
    setOldLevelsString(redo);
    reload();
}

//////////////// Sorting ////////////////

function compareNames(a, b) {
    return a.name.localeCompare(b.name);
}

function compareAddress(a, b) {
    const [, streetA, nrA] = a.address.match(/^([^0-9]*)(.*)$/);
    const [, streetB, nrB] = b.address.match(/^([^0-9]*)(.*)$/);
    const result = streetA.localeCompare(streetB);
    if (result) return result;
    return parseInt(nrA) - parseInt(nrB);
}

function compareDistricts(a, b) {
    let result = a.district.localeCompare(b.district);
    if (result) return result;
    result = b.level - a.level;
    if (result) return result;
    return compareAddress(a, b);
}

function compareLevels(a, b) {
    const result = b.level - a.level;
    if (result) return result;
    return compareDistricts(a, b);
}

function compareExraid(a, b) {
    if (a.exraid !== b.exraid) return !a.exraid - !b.exraid;
    return compareLevels(a, b);
}

//////////////// Badge Storage ////////////////

function sanitize(s) { return String(s).replace(/[^0-4]/g, '0'); }
function getLevelsString() { return sanitize(storage[storageKey] || storage['gym-levels'] || ''); }
function setLevelsString(s) { storage[storageKey] = sanitize(s); updateShare(); }

function getOldLevelsString() { return sanitize(storage[storageKeyOld] || ''); }
function setOldLevelsString(s) { storage[storageKeyOld] = sanitize(s); }

function setLevel(i, level) {
    let s = getLevelsString();
    while (s.length <= i) s += '0';
    setLevelsString(s.substr(0, i) + level + s.substr(i + 1));
    updateSums();
}
function getLevel(i) { return getLevelsString()[i] & 4; }
function incLevel(i) {
    const level = (getLevel(i) + 1) % 5;
    setLevel(i, level);
    return level;
}

//////////////// Gym Data ////////////////

// Add id to raw gym data and filter deleted gyms
// also add level accessor
function getGyms() {
    const {city, gyms} = gymData();
    return {
        city: city,
        gyms: gyms.map((gym, index) => Object.assign({
                id: index,          // gym's index in storage string
                get level() { return getLevel(index) },
            }, gym))
            .filter(({deleted}) => !deleted),
    };
}
