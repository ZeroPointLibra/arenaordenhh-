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
	{name: "Riesen Skateboard", district: "Bahrenfeld", address: "HERA Skateplatz", location: [53.589993,9.887629], park: "way/20779979"},
	{name: "Riesen Weinflasche Oldland", district: "Landkreis Stade", address: "Osterjork Obsthof Lefers", location: [53.526012,9.706507], park: "way/71284754"},
	{name: "Riesen am AEZ", district: "Poppenbüttel", address: "Heegbarg 31", location: [53.654556,10.092258]},
	{name: "Riesenbaby", district: "Langenhorn", address: "Dortmunder Straße 12a", location: [53.670761,9.995081]},
	{name: "Riesenboje am Kanuverleih", district: "Landkreis Stade", address: "Salztorswall 3", location: [53.600903,9.479397]},
	{name: "Riesendämpfer", district: "Schenefeld", address: "Hasselbinnen 24", location: [53.593262,9.830015]},
	]};
}
