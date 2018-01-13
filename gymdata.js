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
	{name: "Obelisk Am Heckenrosenweg", district: "Lokstedt", address: "Heckenrosenweg Obelisk", location: [53.606342,9.958696]},
	{name: "Obelisk", district: "Ohlsdorf", address: "Rosenweg Hanseatische Kampfgenossen", location: [53.617283,10.040856]},
	{name: "Oberhafenkantine", district: "HafenCity", address: "Stockmeyerstraße Oberhafen-Kantine", location: [53.544575,10.006866]},
	{name: "Obst In Der Wand", district: "Altona-Nord", address: "Haubachstraße 50", location: [53.558681,9.94111]},
	{name: "Obstfrau", district: "Neuallermöhe", address: "Elisabeth-von-Thadden-Kehre 12", location: [53.480278,10.168793]},
	{name: "Ohrenhase", district: "Osdorf", address: "Blomkamp 61 Generalleutnant-Graf-von-Baudissin-Kaserne (Führungsakademie der Bundeswehr)", location: [53.578743,9.858405]},
	{name: "Old Gravestone", district: "Sachsenwald", address: "Am Riesenbett Riesenbett", location: [53.507637,10.367532]},
	{name: "Old Writing", district: "Horn", address: "Beim Rauhen Hause Handwerker-Haus", location: [53.553555,10.071415]},
	{name: "Oldschool Phone", district: "Niendorf", address: "Kollaustraße 136 OHM Autoradio", location: [53.611702,9.95654]},
	{name: "Oldtimer-Tankstelle Brandshof", district: "Rothenburgsort", address: "Billhorner Röhrendamm 4", location: [53.539917,10.027274]},
	{name: "On the Beach", district: "Glinde", address: "Kiefernbogen 1", location: [53.555752,10.220923]},
	{name: "Orthodoxe Kirche", district: "St. Pauli", address: "Tschaikowskyplatz 1", location: [53.557587,9.976327]},
	{name: "Ortsstein Siek", district: "Siek", address: "Jacobsrade", location: [53.640907,10.28587], park: "way/106879166"},
	{name: "Ostedeichkirche", district: "Cuxhaven", address: "Bei der Kirche", location: [53.752506,9.146282]},
	{name: "Osterkirche", district: "Ottensen", address: "Bei der Osterkirche 17", location: [53.554878,9.932412]},
	{name: "Osterkirche", district: "Bramfeld", address: "Bramfelder Chaussee Osterkirche Bramfeld", location: [53.609695,10.073875]},
	{name: "Ostkreuz Center", district: "Oststeinbek", address: "Willinghusener Weg 1", location: [53.547241,10.153393]},
	{name: "Oststeinbek-West", district: "Oststeinbek", address: "Möllner Landstraße Willinghusener Weg", location: [53.542652,10.152853], park: "way/189261550"},
	{name: "Oststeinbeker Kirche", district: "Oststeinbek", address: "Möllner Landstraße 50", location: [53.541706,10.170627]},
	{name: "Ottensener Torbogen", district: "Ottensen", address: "Ottenser Hauptstraße 24", location: [53.552135,9.930305]},
	{name: "Otters Sculpture", district: "Barmbek-Nord", address: "Schmachthäger Straße 70", location: [53.607449,10.043327]},
	{name: "Otto Fürst von Bismarck", district: "Aumühle", address: "Birkenstraße", location: [53.523125,10.31055], park: "way/182491166"},
	{name: "Otto Linne", district: "Ohlsdorf", address: "Mittelallee Otto Linne", location: [53.623089,10.062726]},
	{name: "Otto Schokoll-Höhenweg", district: "Rissen", address: "Am Leuchtturm 1", location: [53.565048,9.741377]},
	{name: "Otto Sponholz 1982", district: "Eimsbüttel", address: "Margaretenstraße Brunnen", location: [53.566002,9.960744], park: "way/137433766"},
	{name: "Owl Art", district: "Wohltorf", address: "Tonteichsteg", location: [53.514259,10.267612]},
	]};
}
