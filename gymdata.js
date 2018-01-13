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
	{name: "RP WA - Eingang S-bahn Wedel", district: "Wedel", address: "Auweide 7", location: [53.582993,9.705674]},
	{name: "RV Wandsbek e.V.", district: "Alsterdorf", address: "Alsterkrugchaussee 226", location: [53.609173,9.99439]},
	{name: "Rachs Restaurant", district: "Bahrenfeld", address: "Holstenkamp 71", location: [53.570618,9.918348]},
	{name: "Rad & Schiene", district: "Neustadt", address: "Millerntorplatz Rad & Schiene", location: [53.550365,9.96988]},
	{name: "Radisson Blu Hotel Hamburg Plaza", district: "St. Pauli", address: "Marseiller Straße 2", location: [53.561295,9.987264]},
	{name: "Radstation Elmshorn", district: "Elmshorn", address: "Geschwister-Scholl-Straße", location: [53.754368,9.658886]},
	{name: "Radwegeplan Bargteheide 2", district: "Bargteheide", address: "Am Krögen", location: [53.739834,10.266414]},
	{name: "Rammhammer von 1908", district: "Finkenwerder", address: "Doggerbankweg 1", location: [53.534973,9.872559]},
	{name: "Rasenmaeher Von Haupt", district: "Ahrensburg", address: "Bogenstraße 38", location: [53.664612,10.229276]},
	{name: "Rastplatz an der Streuobstwiese 2001", district: "Elmshorn", address: "Wisch 30", location: [53.749146,9.636854]},
	{name: "Rathaus Bergedorf", district: "Bergedorf", address: "Wentorfer Straße 38", location: [53.487198,10.220544]},
	{name: "Rathaus Brunnen", district: "Hamburg-Altstadt", address: "Rathausmarkt Hygieia-Brunnen", location: [53.550259,9.991955]},
	{name: "Rathaus Ellerau", district: "Ellerau", address: "Berliner Damm Ellerau", location: [53.750122,9.919023]},
	{name: "Rathaus Harburg", district: "Harburg", address: "Harburger Rathausplatz", location: [53.45961,9.979891]},
	{name: "Rathaus Wilhelmsburg", district: "Wilhelmsburg", address: "Mengestraße 19", location: [53.49889,9.997318], park: "way/67003985"},
	{name: "Rathauspassage Trittau", district: "Trittau", address: "Poststraße Emek Imbiss 3", location: [53.609833,10.408512]},
	{name: "Rathausplatz Quickborn", district: "Quickborn", address: "Torfstraße Rathaus Quickborn", location: [53.732761,9.903114]},
	{name: "Raupenlaufwerk", district: "Norderstedt", address: "Gutenbergring 11", location: [53.663532,9.979739]},
	{name: "Ready for Takeoff", district: "Neuenfelde", address: "Organistenweg 6a", location: [53.520695,9.810019]},
	{name: "Recycling Firma der Natur - Pilze", district: "Glinde", address: "Am Walde", location: [53.551159,10.195016], park: "way/89728036"},
	{name: "Red Cube", district: "Samtgemeinde Horneburg", address: "Agathenburg Hauptstraße", location: [53.561337,9.533579], park: "way/233132480"},
	{name: "Red Frog", district: "Ahrensburg", address: "Natternstieg", location: [53.642796,10.221201]},
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
	{name: "Riesen Skateboard", district: "Bahrenfeld", address: "HERA Skateplatz", location: [53.589993,9.887629] park: "way/20779979"},
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
