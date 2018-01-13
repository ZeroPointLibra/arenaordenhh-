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
	{name: "Robin Hout Im Großstadtjungel", district: "St. Pauli", address: "Beim Grünen Jäger 8", location: [53.557098,9.962963]},
	{name: "Roboter", district: "Norderstedt", address: "Rugenbarg 69", location: [53.666965,9.989485]},
	{name: "Rohrportal", district: "Neu Wulmstorf", address: "Talweg Imbiss Freibad Neu Wulmstorf", location: [53.459427,9.807134]},
	{name: "Rollschuhbahn Planten un Blomen", district: "Neustadt", address: "Holstenwall 30", location: [53.553406,9.97553], park: "way/19412399"},
	{name: "Rosskastanienminiermotte", district: "Ohlsdorf", address: "Mittelallee", location: [53.624664,10.066631]},
	{name: "Rostige Blume", district: "Osdorf", address: "Wüstenwanderweg", location: [53.562634,9.862069], park: "way/32389126"},
	{name: "Rostiges Windrad", district: "Finkenwerder", address: "Rüschweg", location: [53.54221,9.857045]},
	{name: "Rote Flora", district: "Sternschanze", address: "Schulterblatt 71 Rote Flora", location: [53.562,9.961582]},
	{name: "Rote Seewassertonne", district: "Warstade", address: "Am Zentrum Deutsche Post AG", location: [53.686222,9.158541]},
	{name: "Rote Tafel", district: "Wilstorf", address: "Hohe Straße 24", location: [53.452099,9.983154]},
	{name: "Rotes Piratenschiff", district: "Lohbrügge", address: "Binnenfeldredder 30", location: [53.503262,10.211639]},
	{name: "Rothenburgsort Wandgemälde", district: "Rothenburgsort", address: "Billhorner Röhrendamm 132", location: [53.53413,10.038507]},
	{name: "Rothsteinsmoor Naturschutzgebiet", district: "Langenhorn", address: "Krohnstieg Krohnstiegtunnel", location: [53.649326,9.988368]},
	{name: "Rudersport Protesia", district: "Barmbek-Süd", address: "Osterbekstraße Ruder-Club Protesia", location: [53.582153,10.021576]},
	{name: "Ruhestätte Hornung", district: "Billstedt", address: "West-Ring Mausoleum", location: [53.556271,10.124272]},
	{name: "Ruine", district: "Großhansdorf", address: "zur Mielerstede", location: [53.66349,10.295969], park: "way/109460374"},
	{name: "Rutsche beim Beachclub Wedel", district: "Wedel", address: "Hakendamm DLRG", location: [53.570335,9.697129], park: "way/314914619"},
	{name: "Rutsche im Freibad", district: "Bargteheide", address: "Hans-Behnke-Weg Freibad Bargteheide", location: [53.723049,10.250124], park: "way/141391921"},
	{name: "Rutsche", district: "Billstedt", address: "An der Glinder Au", location: [53.535458,10.147743], park: "way/335013596"},
	{name: "Rutschenturm", district: "Reinbek", address: "Dorfstraße 1c", location: [53.529755,10.258311]},
	{name: "Römischer Junge", district: "Hamm", address: "Hammer Steindamm 117", location: [53.562737,10.056527]},
	]};
}
