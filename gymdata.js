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
	{name: "100 Jahre Bahnhof Hasloh", district: "Hasloh", address: "Bahnhofstraße 51", location: [53.693085,9.920132]},
	{name: "100 Jahre Genossenschaft - Gedenkstein", district: "Langenhorn", address: "Theodor-Fahr-Straße 2b", location: [53.666981,10.010437]},
	{name: "100 Jahre HNT Graffiti", district: "Neugraben-Fischbek", address: "Cuxhavener Straße 253", location: [53.471676,9.872465]},
	{name: "100 Jahre Hamburger Dom", district: "St. Pauli", address: "U Feldstraße Stadion- und Domwache", location: [53.554855,9.969742]},
	{name: "1875-1965 Albert Schweitzer Siedlung", district: "Rahlstedt", address: "Pogwischrund 9a", location: [53.590038,10.149868]},
	{name: "1908 Up Ewig Ungedelt", district: "Schulau", address: "Bei der Doppeleiche", location: [53.574245,9.705644]},
	{name: "1914", district: "Bahrenfeld", address: "Bahrenfelder Chaussee 10", location: [53.564499,9.917329]},
	{name: "1943 to 1956 Zerstört Und Aufgebaut", district: "Hamm", address: "Hirtenstraße 37a", location: [53.556267,10.049901]},
	{name: "20 Vor 6", district: "Barmbek-Nord", address: "Hellbrookstraße Hamburger Sparkasse", location: [53.59132,10.044172]},
	{name: "25. Juni 1943 Bomben auf Hamburg", district: "Altona-Altstadt", address: "Jessenstraße Pierre Trillaud", location: [53.551159,9.946589]},
	{name: "3 Einradler", district: "Quickborn", address: "Schleswag-HeinGas-Platz 1", location: [53.744896,9.94188]},
	{name: "3 Säulen", district: "Kreis Pinneberg", address: "Großer Sand 2", location: [53.683613,9.664837]},
	{name: "4 Freunde", district: "Wentorf bei Hamburg", address: "Schanze 47b", location: [53.485409,10.25854]},
	{name: "420 Mural", district: "Bramfeld", address: "Bramfelder Chaussee 420", location: [53.625565,10.085274]},
	{name: "50Jahre Schleswig Holstein 1898", district: "Hummelsbüttel", address: "Hummelsbüttler Dorfstraße Schleswig-Holstein-Gedenkstein", location: [53.643829,10.045796]},
	{name: "900 Jahre Bützfleth", district: "Landkreis Stade", address: "Kreisel L111 (Obstmarschweg Volksbank Kehdingen eG", location: [53.650967,9.48186]},
	{name: "AK Rissen - Das gute Omen", district: "Rissen", address: "Suurheid Asklepios Westklinikum (West)", location: [53.582199,9.773611]},
	{name: "AKN Eidelstedt Zentrum", district: "Eidelstedt", address: "Lentföhrdener Weg 1", location: [53.610889,9.901832]},
	{name: "AKN Eidelstedt Zentrum", district: "Eidelstedt", address: "Pinneberger Chaussee 15", location: [53.60984,9.901127]},
	{name: "AKO Wasserturm", district: "Langenhorn", address: "Jütlandring 47", location: [53.672192,10.010867]},
	{name: "ARGUS Detector", district: "Bahrenfeld", address: "PETRA III 11a", location: [53.574154,9.880099]},
	{name: "AUFGEBAUT 1954", district: "Barmbek-Nord", address: "Habichtstraße 57", location: [53.592194,10.053824]},
	{name: "AWO Park", district: "Lohbrügge", address: "Boberger Anger 119", location: [53.516636,10.168109]},
	{name: "Abenteuer Spielplatz Gretchenkoppel", district: "Poppenbüttel", address: "Koppelweg 9", location: [53.663883,10.063848], park: "way/27655724"},
	]};
}
