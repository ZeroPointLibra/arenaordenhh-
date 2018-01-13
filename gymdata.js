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
	{name: "Riesenrad Am Ufer", district: "HafenCity", address: "Hübenerstraße", location: [53.539989,9.995039], park: "way/238983377", exraid: true},
	{name: "Riesenrad Hamburger Dom", district: "Rothenburgsort", address: "Billhorner Brückenstraße Billhorner Röhrendamm", location: [53.538033,10.031129]},
	{name: "Riesenraupe", district: "Osdorf", address: "Lesebergweg 23", location: [53.574425,9.840363]},
	{name: "Riesenstuhl Am Riesentisch", district: "Osdorf", address: "Achtern Born Außenbereich KL!CK Kindermuseum", location: [53.587708,9.847419]},
	]};
}
