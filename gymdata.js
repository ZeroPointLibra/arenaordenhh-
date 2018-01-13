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
	{name: "Reformationskirche", district: "Hamburg-Altstadt", address: "Ferdinandstraße 21", location: [53.554157,10.000273]},
	{name: "Regie Budni", district: "Hamm", address: "Droopweg 25", location: [53.553261,10.061998]},
	{name: "Reinbek-Ohe: kleine Dorfkapell", district: "Reinbek", address: "Große Straße 16", location: [53.54538,10.277056]},
	{name: "Reinbeker Maibaum", district: "Reinbek", address: "Am Rosenplatz 11", location: [53.512474,10.251008]},
	{name: "Reiter", district: "Hummelsbüttel", address: "Eichstraße 34", location: [53.743896,9.655904]},
	{name: "Reitfisch", district: "Billstedt", address: "Pergamentweg 30", location: [53.53989,10.122208]},
	{name: "Rescue Rock Neuenfelde", district: "Neuenfelde", address: "Arp-Schnitger-Stieg 41", location: [53.517948,9.811391]},
	{name: "Restaurant Kim Chi", district: "Eimsbüttel", address: "Tornquiststraße Kim Chi", location: [53.574211,9.950306]},
	{name: "Restaurant Storchennest", district: "Finkenwerder", address: "Osterfelddeich 2", location: [53.520134,9.885717]},
	{name: "Rethfeld", district: "Elmshorn", address: "Friedrich-Naumann-Weg 13", location: [53.745075,9.67822], park: "way/282877304"},
	{name: "Retro Uhr Pinneberger Chaussee", district: "Eidelstedt", address: "Ellerauer Weg 42", location: [53.61171,9.899192]},
	{name: "Revierförsterei Niendorfer Gehegr", district: "Niendorf", address: "Bondenwald", location: [53.612514,9.940747]},
	{name: "Richtungsstein", district: "Sülldorf", address: "Am Waldpark", location: [53.57645,9.782548]},
	{name: "Riesen Libelle", district: "Osdorf", address: "Achtern Born Libellenplatz", location: [53.585979,9.84888]},
	{name: "Riesen Plattfisch", district: "Langenhorn", address: "Essener Straße 90", location: [53.67382,9.995764]},
	{name: "Riesen Rasenmäher", district: "Lurup", address: "Hanfstieg Giebel Motorgeräte", location: [53.594738,9.852254]},
	{name: "Riesen Skateboard", district: "Bahrenfeld", address: "HERA Skateplatz", location: [53.589993,9.887629], park: "way/20779979"},
	{name: "Riesen Weinflasche Oldland", district: "Landkreis Stade", address: "Osterjork Obsthof Lefers", location: [53.526012,9.706507], park: "way/71284754"},
	{name: "Riesen am AEZ", district: "Poppenbüttel", address: "Heegbarg 31", location: [53.654556,10.092258]},
	{name: "Riesenbaby", district: "Langenhorn", address: "Dortmunder Straße 12a", location: [53.670761,9.995081]},
	{name: "Riesenboje am Kanuverleih", district: "Landkreis Stade", address: "Salztorswall 3", location: [53.600903,9.479397]},
	{name: "Riesendämpfer", district: "Schenefeld", address: "Hasselbinnen 24", location: [53.593262,9.830015]},
	{name: "Riesenrad Am Ufer", district: "HafenCity", address: "Hübenerstraße", location: [53.539989,9.995039], park: "way/238983377", exraid: true},
	{name: "Riesenrad Hamburger Dom", district: "Rothenburgsort", address: "Billhorner Brückenstraße Billhorner Röhrendamm", location: [53.538033,10.031129]},
	{name: "Riesenraupe", district: "Osdorf", address: "Lesebergweg 23", location: [53.574425,9.840363]},
	{name: "Riesenstuhl Am Riesentisch", district: "Osdorf", address: "Achtern Born Außenbereich KL!CK Kindermuseum", location: [53.587708,9.847419]},
	{name: "Riesiges Insektenhotel", district: "Altona-Altstadt", address: "Max-Brauer-Allee 138", location: [53.55724,9.947732], park: "way/4275521"},
	{name: "Ringelpietz-Mural Behringstraße/Griegstraße", district: "Ottensen", address: "Griegstraße 53", location: [53.554211,9.909524]},
	{name: "Ringwallanlage Wikingerdorf bei Jork", district: "Landkreis Stade", address: "Jork", location: [53.551563,9.668313]},
	{name: "Ritter", district: "Sülldorf", address: "Sülldorfer Landstraße 246", location: [53.580696,9.789861]},
	]};
}
