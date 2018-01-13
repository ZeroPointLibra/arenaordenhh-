/*
Raw gym data - include a different file for different city

NEVER change order of gyms or delete gyms
ONLY append at the end, and mark deleted gyms with 'deleted: true'
BECAUSE progress is stored in user's localStorage by gym index

Entries for each gym:
{
  name: "The Gym Name",                // required
  location: [latitude,longitude],      // required
  district: "A Neighborhood",          // optional, used for sorting by neighborhood
  address: "e.g. street and house#",   // optional, used as label for google maps link
  park: true | "OSM feature",          // optional, potential EX raid location. If string, link to that OSM feature
  exraid: true,                        // optional, confirmed EX raid location (a raid actually happened here)
  deleted: true,                       // optional, used for hiding removed gyms without changing IDs
  
  // added by program in getGyms()
  id: number,                          // index in this list. THIS MUST NEVER CHANGE!
}
*/

function gymData() {
	return {
	city: "DE-MD", // country-city (used in localStorage key to allow tracking multiple cities)
	gyms: [
	{name: "Der kleine Rat", district: "Neugraben-Fischbek", address: "Petershof 13", location: [53.467484,9.860243]},
	{name: "Deutsche Post", district: "Barmbek-Nord", address: "Hellbrookstraße Deutsche Telekom", location: [53.591667,10.048121]},
	{name: "Dialog Karl August Ohrt", district: "Rissen", address: "Wedeler Landstraße 34", location: [53.581829,9.757353]},
	{name: "Die Pforte des Himmels", district: "Kreis Pinneberg", address: "Klosterhof Klosterkirche", location: [53.681923,9.656382]},
	{name: "Die Ameisen", district: "Othmarschen", address: "Elbchaussee", location: [53.54594,9.900533]},
	{name: "Die Betende in Stein", district: "Billstedt", address: "Billstedt Grootmoorredder", location: [53.554394,10.13402]},
	{name: "Die Fledermaus & Eule", district: "Fuhlsbüttel", address: "Alsterkrugchaussee 586", location: [53.631184,10.014814]},
	{name: "Die Gattung Eiche", district: "Winterhude", address: "Rhododendronpfad", location: [53.597767,10.023087], park: "way/23734712"},
	{name: "Die Geschichte Des Ochsenzoll", district: "Norderstedt", address: "Schmuggelstieg 10", location: [53.68129,9.999408]},
	{name: "Die Kirche Maria", district: "Ahrensburg", address: "Hamburger Straße Sankt Marien", location: [53.669891,10.232393]},
	{name: "Die Kniende (Statue)", district: "Lurup", address: "Ueckerstraße 8", location: [53.602428,9.879792]},
	{name: "Die Kupferbrüder", district: "Ottensen", address: "Große Elbstraße 273", location: [53.544609,9.928611]},
	{name: "Die Kämpfer", district: "Hummelsbüttel", address: "Gerckensplatz 1", location: [53.639057,10.02395]},
	{name: "Die Liebe hört nimmer auf", district: "Rellingen", address: "Wiesengrund Alte Kapelle", location: [53.649227,9.832956]},
	{name: "Die Liegende", district: "Harvestehude", address: "Hallerstraße 1", location: [53.572552,9.979054]},
	{name: "Die Muschel", district: "Winterhude", address: "Sydneystraße", location: [53.606052,10.017328]},
	{name: "Die Nackte Dame", district: "St. Pauli", address: "Tiergartenstraße Große weibliche Figur", location: [53.563335,9.978829], park: "way/244020773"},
	{name: "Die Pequod von Captain Ahab", district: "Othmarschen", address: "Övelgönne 52", location: [53.544628,9.906395]},
	{name: "Die Rickmer Rickmers", district: "Neustadt", address: "Johannisbollwerk Rickmer Rickmers", location: [53.544704,9.972185]},
	{name: "Die Rätsel des Waldes", district: "Glinde", address: "Bei den Tannen", location: [53.553368,10.202667]},
	{name: "Die Schreitende", district: "Harvestehude", address: "Oberstraße 14 c", location: [53.575878,9.979033], park: "way/137154561"},
	{name: "Die Seefee", district: "Bremervörde", address: "Fresenburg", location: [53.493038,9.147831]},
	{name: "Die Sitzende Frau", district: "Lohbrügge", address: "Richard-Linde-Weg 14b", location: [53.501125,10.194464]},
	{name: "Die Sonne Wedel", district: "Wedel", address: "Deichstraße Planetenlehrpfad", location: [53.573463,9.699082]},
	{name: "Die Spinne im Netz", district: "Ahrensburg", address: "Voßberg 13", location: [53.665073,10.239957]},
	{name: "Die Toten Mahnen uns", district: "Bergedorf", address: "Schorrhöhe", location: [53.47818,10.247366]},
	{name: "Die Trauernde Witwe", district: "Ohlsdorf", address: "Nordring Wasserspeicher", location: [53.628403,10.050419]},
	{name: "Die Träumende", district: "Barmbek-Süd", address: "Flachsland Die Träumende", location: [53.584736,10.042124]},
	{name: "Die Vögel", district: "Horn", address: "Speckenreye 53a", location: [53.552303,10.100325]},
	{name: "Die Wachenden", district: "Landkreis Stade", address: "Breite Straße 2", location: [53.598885,9.475394]},
	{name: "Die Weiße Frau", district: "Bergedorf", address: "Weidenbaumsweg 66", location: [53.485867,10.201931]},
	{name: "Die Windsbraut", district: "Neustadt", address: "Lombardsbrücke Die Windsbraut", location: [53.557072,9.993746]},
	{name: "Die Zwei Frauen", district: "Ohlsdorf", address: "Westring Mausoleum Gundlach", location: [53.628555,10.044858]},
	]};
}
