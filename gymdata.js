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
	{name: "Riesiges Insektenhotel", district: "Altona-Altstadt", address: "Max-Brauer-Allee 138", location: [53.55724,9.947732], park: "way/4275521"},
	{name: "Ringelpietz-Mural Behringstraße/Griegstraße", district: "Ottensen", address: "Griegstraße 53", location: [53.554211,9.909524]},
	{name: "Ringwallanlage Wikingerdorf bei Jork", district: "Landkreis Stade", address: "Jork", location: [53.551563,9.668313]},
	{name: "Ritter", district: "Sülldorf", address: "Sülldorfer Landstraße 246", location: [53.580696,9.789861]},
	]};
}
