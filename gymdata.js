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
	{name: "Mahnmal Alte Synagoge", district: "Rotherbaum", address: "Grindelallee 48", location: [53.566776,9.982391]},
	{name: "Mahnmal Dorfplatz", district: "Bramfeld", address: "Bramfelder Dorfplatz", location: [53.614094,10.076377], park: "way/103572068"},
	{name: "Mahnmal Französische Besetzung", district: "Harburg", address: "Bissingstraße 13", location: [53.465298,9.967723], park: "way/5028368"},
	{name: "Mahnmal Gegen Das Unrecht Und Krieg", district: "Harksheide", address: "Kirchenplatz Kirchliches Zentrum am Falkenberg", location: [53.706039,10.008538]},
	{name: "Mahnmal des Krieges", district: "Stellingen", address: "Molkenbuhrstraße 6", location: [53.590324,9.925583]},
	{name: "Mahnmal gegen den Krieg", district: "Kreis Pinneberg", address: "Hauptstraße 1", location: [53.657433,9.869824]},
	{name: "Mahnmal gegen den Krieg", district: "Neustadt", address: "Stephansplatz", location: [53.558784,9.989106]},
	{name: "Mahnmal „Tisch mit 12 Stühlen“", district: "Niendorf", address: "Kurt-Schill-Weg Tisch mit 12 Stühlen", location: [53.642765,9.948963], park: "way/70586197"},
	{name: "Maibaum Börnsen", district: "Neu-Börnsen", address: "Hamfelderedder 17", location: [53.475018,10.289242]},
	{name: "Maibaum Oststeinbek", district: "Oststeinbek", address: "Möllner Landstraße Barsbüttler Weg Oststeinbek", location: [53.541908,10.165289]},
	{name: "Maihak-Gebäude", district: "Winterhude", address: "Semperstraße 26", location: [53.585758,10.015829]},
	{name: "Makake mit Vogel", district: "Ottensen", address: "Elbchaussee 19", location: [53.545586,9.929824]},
	{name: "Mama Bear with Children", district: "Marienthal", address: "Bärenallee 31a", location: [53.569931,10.065112]},
	{name: "Mammutblatt Infotafel", district: "Osdorf", address: "Wüstenwanderweg Steingarten", location: [53.562286,9.86317], park: "way/32389126"},
	{name: "Mangal Palast", district: "Wilhelmsburg", address: "Kornweide", location: [53.481514,9.992902]},
	{name: "Mann Mit Flöte Rahlstedt", district: "Rahlstedt", address: "Düpheid 3", location: [53.588749,10.16203]},
	{name: "Mann Und Pferd", district: "Wentorf bei Hamburg", address: "Sollredder 3", location: [53.486507,10.263748]},
	{name: "Mann auf Giraffe", district: "Stellingen", address: "Koppelstraße Mann auf Giraffe", location: [53.593506,9.942712], park: "way/34906894"},
	{name: "Mann auf der Bille", district: "Bergedorf", address: "Weidenbaumsweg 9", location: [53.489304,10.208906]},
	{name: "Mann mit Hut", district: "Bergedorf", address: "Chrysanderstraße", location: [53.499794,10.213495]},
	{name: "Marble Ball Fountain", district: "Harksheide", address: "Am Hallenbad 14", location: [53.68961,9.999797], park: "way/152333662"},
	{name: "Marder Am Marderstieg", district: "Poppenbüttel", address: "Marderstraat 33", location: [53.657932,10.070633]},
	{name: "Margarethenbrunnen", district: "Ohlsdorf", address: "Cordesallee", location: [53.620129,10.039315]},
	{name: "Maria Magdalenen", district: "Ohlsdorf", address: "Stübeheide 175", location: [53.633717,10.056]},
	{name: "Maria-Magdalenen-Kirche", district: "Reinbek", address: "Kirchenallee Maria-Magdalenen-Kirche", location: [53.513573,10.253379]},
	{name: "Marienkirche", district: "Altes Dorf", address: "4 St.-Marien-Kirche", location: [53.687225,10.496708]},
	{name: "Marienkrankenhaus", district: "Hohenfelde", address: "Alfredstraße 9", location: [53.55933,10.031631]},
	{name: "Marienkäferkasten", district: "Glinde", address: "Mühlenstraße 33a", location: [53.546211,10.212026]},
	{name: "Marinedenkmal", district: "Altona-Altstadt", address: "Große Elbstraße", location: [53.545372,9.939346], park: "way/138974313"},
	{name: "Marktplatz Hechthausen", district: "Hechthausen", address: "Marktplatz 5 Saal Golsch", location: [53.640057,9.241513]},
	{name: "Marktplatz Norderstedt", district: "Norderstedt", address: "Marktplatz", location: [53.704674,10.008105]},
	{name: "Martin Luther Kirche Fliegenberg", district: "Stelle", address: "Kapellenweg 1", location: [53.417774,10.128031]},
	{name: "Martin-Luther Kirche", district: "Trittau", address: "Kirchenstraße Martin-Luther-Kirche", location: [53.612015,10.404375]},
	{name: "Maschine F.A. Dörner", district: "Geesthacht", address: "Ilenweg 13", location: [53.440327,10.382014]},
	{name: "Mathias-Claudius-Kirche", district: "Stelle", address: "Wolliner Straße 98", location: [53.608723,10.140131]},
	{name: "Matthias-Kruse-Platz", district: "Elmshorn", address: "B 431", location: [53.732044,9.649545], park: "way/152301286"},
	{name: "Matthäuskirche", district: "Winterhude", address: "Krohnskamp Matthäuskirche", location: [53.58894,10.010914]},
	{name: "Mauerrelief 1899", district: "Wandsbek", address: "Walddörferstraße 115", location: [53.579742,10.081547]},
	{name: "Maurer Statue", district: "Horn", address: "Horner Weg 105", location: [53.55505,10.07258]},
	{name: "Maus-Ohriges Wunder", district: "Rahlstedt", address: "Am Knill 1b", location: [53.604191,10.125912]},
	{name: "Medizinhistorisches Museum Hamburg UKE", district: "Eppendorf", address: "Geschwister-Scholl-Straße N30", location: [53.593636,9.976894]},
	{name: "Medizinische Sonnenuhr", district: "Lohbrügge", address: "Bergedorfer Straße 10", location: [53.50666,10.178643]},
	{name: "Megawaffel", district: "Wedel", address: "Caudry-Platz", location: [53.582066,9.701281]},
	{name: "Meiendorfer SV Stadion Eingang", district: "Rahlstedt", address: "Meiendorfer Straße", location: [53.632141,10.184492]},
	{name: "Meilenstein nach Altona", district: "Norderstedt", address: "Segeberger Chaussee Altona 3M;Lübeck 6½M", location: [53.700527,10.055037]},
	{name: "Memorial - Wilhelm I.", district: "Poppenbüttel", address: "Poppenbüttler Hauptstraße Wilhelm I.", location: [53.659847,10.086673], park: "way/33096804", exraid: true},
	{name: "Memorial Stone", district: "Reinbek", address: "Parkallee 27", location: [53.512424,10.254179]},
	{name: "Mensch Maschine - Kraftwerk Fan", district: "Eppendorf", address: "Tarpenbekstraße 64", location: [53.594883,9.984128]},
	{name: "Merkur in Wedel", district: "Wedel", address: "Deichstraße Planetenlehrpfad", location: [53.573318,9.698195], park: "way/124065041"},
	{name: "Merkur-Säule", district: "Rahlstedt", address: "Merkurring", location: [53.607067,10.188936]},
	{name: "Messe Hamburg", district: "St. Pauli", address: "Messeplatz Eingang Mitte Hamburg Messe", location: [53.561981,9.975568]},
	{name: "Messingvioline", district: "Stellingen", address: "Holstenkamp", location: [53.572186,9.931284]},
	{name: "Metallener Turm", district: "Reinbek", address: "Am Ladenzentrum 2", location: [53.510464,10.234686]},
	{name: "Metallised XM", district: "Rotherbaum", address: "Schlüterstraße 7", location: [53.565155,9.986227]},
	{name: "Metallkunst", district: "Billstedt", address: "Kandinskyallee 25", location: [53.532005,10.149995]},
	{name: "Metallplatte", district: "Osdorf", address: "Osdorfer Landstraße 131", location: [53.570534,9.861426]},
	{name: "Meyers Park Westeingang", district: "Heimfeld", address: "Am Waldschlößchen 19", location: [53.466438,9.944573]},
	{name: "MidSommerland", district: "Wilstorf", address: "Gotthelfweg Midsommerland", location: [53.447506,9.98067]},
	{name: "Millerntor 2", district: "St. Pauli", address: "Harald-Stender-Platz", location: [53.553448,9.968114]},
	{name: "Mineralogisches Museum", district: "Rotherbaum", address: "Grindelallee 48", location: [53.566257,9.982147]},
	{name: "Miniatur Wunderland Hamburg", district: "HafenCity", address: "Kehrwieder 3 Block D", location: [53.543663,9.988815]},
	{name: "Mit Fingerfarben bemaltes Haus", district: "Ahrensburg", address: "Weißdornweg 26", location: [53.672226,10.208741]},
	{name: "Mitten Auf der Kuhweide", district: "Niendorf", address: "Sachsenstieg 5", location: [53.648312,9.972724]},
	{name: "Modern Art Design House", district: "Ottensen", address: "Elbchaussee 96", location: [53.546211,9.921722], park: "way/73810103"},
	{name: "Moderne Kunst", district: "Kreis Pinneberg", address: "Datumer Chaussee 1", location: [53.643864,9.798224]},
	{name: "Moltke Haus", district: "Othmarschen", address: "Bernadottestraße 77", location: [53.549263,9.906848]},
	{name: "Monkey", district: "Heimfeld", address: "Seehafenstraße", location: [53.468925,9.972038], park: "way/158470920"},
	{name: "Monolith der Alten", district: "Wandsbek", address: "Friedrich-Ebert-Damm", location: [53.591282,10.106201]},
	{name: "Monolith", district: "Eidelstedt", address: "Halstenbeker Weg 111b", location: [53.61779,9.879375], park: "way/120951736"},
	{name: "Monument am Christianeum", district: "Othmarschen", address: "Otto-Ernst-Straße 34", location: [53.558186,9.873023]},
	{name: "Monumentaler Platz Am See", district: "Quickborn", address: "Quickborn-Heide A 7", location: [53.724125,9.938529]},
	{name: "Moorblick", district: "Langenhorn", address: "Herzmoor 39", location: [53.662296,10.035204], park: "way/147066711"},
	{name: "Moore bei Buxtehud", district: "Eilendorf", address: "Polderweg 3", location: [53.475445,9.724831]},
	{name: "Moorlandschaft", district: "Neu Wulmstorf", address: "Berlepschkamp", location: [53.48246,9.800124]},
	{name: "Mosaik Brunnen", district: "Wellingsbüttel", address: "Lagerlöfstraße Pröckelmoorteich", location: [53.629112,10.067181]},
	{name: "Mosaik Kunst", district: "Harburg", address: "Eißendorfer Straße 150a", location: [53.456036,9.955603]},
	{name: "Mosaikbank an der Stadtbücherei", district: "Schenefeld", address: "Timmermannsweg 1b", location: [53.600098,9.83728]},
	{name: "Moschee in der Böckmannstr.", district: "St. Georg", address: "Böckmannstraße 40", location: [53.554207,10.01624]},
	{name: "Motoren-Museum", district: "Lütjensee", address: "Großenseer Straße Nordstrand", location: [53.635105,10.358421]},
	{name: "Motorkolben", district: "Finkenwerder", address: "Hein-Saß-Weg", location: [53.536415,9.8695]},
	{name: "Muehle spielen im Park", district: "Thesdorf", address: "Burmeisterallee Rosengarten", location: [53.652035,9.806505], park: "way/82121406"},
	{name: "Muh-Kuh", district: "Oststeinbek", address: "Stormarnstraße 28", location: [53.525887,10.169575], park: "way/306210449"},
	{name: "Museum Langes Tannen", district: "Kreis Pinneberg", address: "Heidgrabener Straße Museumsscheune Langes Tannen", location: [53.692326,9.675366]},
	{name: "Museum f. Kunst u. Gewerbe", district: "St. Georg", address: "Steintorplatz 1", location: [53.551369,10.009882]},
	{name: "Museumsbahn", district: "Aumühle", address: "Am Geleise Eisenbahnmuseum Lokschuppen Aumühle", location: [53.530296,10.32146]},
	{name: "Museumshafen Neumühlen", district: "Othmarschen", address: "Wohnunterkunft Hombrook W714", location: [53.543552,9.91334]},
	{name: "Museumshafen Oevelgönne", district: "Othmarschen", address: "Wohnunterkunft Hombrook W714", location: [53.543575,9.913603]},
	{name: "Music Love", district: "Barsbüttel", address: "Soltausredder Bürgerhaus", location: [53.571945,10.162891]},
	{name: "Musterhauspark", district: "Othmarschen", address: "Himmelmoorweg", location: [53.748821,9.865592]},
	{name: "Mutter mit Kind am Wasserturm", district: "Wilhelmsburg", address: "Groß-Sand 4", location: [53.503426,9.985]},
	{name: "Mutter und Kind", district: "Allermöhe", address: "Moorfleeter Deich", location: [53.483475,10.104993], park: "way/28896004"},
	{name: "Mystischer Steinkreis", district: "Billstedt", address: "Kaltenbergen 22", location: [53.542442,10.143931]},
	{name: "Mädchen Mit Walkman", district: "Altona-Altstadt", address: "Esmarchstraße 53", location: [53.554218,9.949177]},
	{name: "Mädchen an der Oase", district: "Barmbek-Nord", address: "Elligersweg 65", location: [53.601971,10.04937]},
	{name: "Mädchen mit Gänsen", district: "Bramfeld", address: "Lohkoppel 20", location: [53.610065,10.07869]},
	{name: "Mülleimer mit Hamburg Graffiti", district: "Osdorf", address: "European XFEL XFEL XTL", location: [53.578732,9.873552], park: "way/135747074"},
	{name: "Mümmelmannsberger Sportverein", district: "Billstedt", address: "Kandinskyallee 27 PJACA Montenegro", location: [53.533356,10.150905]},
	]};
}
