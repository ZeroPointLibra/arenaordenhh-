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
	{name: "Paar auf Pferd (Statue)", district: "Lurup", address: "Franzosenkoppel 39", location: [53.600739,9.880488]},
	{name: "Pagode Baoquang", district: "Billbrook", address: "Billbrookdeich 307", location: [53.529617,10.112653]},
	{name: "Painted Box DSF", district: "Rotherbaum", address: "Grindelallee Taxenstand Grindelallee", location: [53.571617,9.978075], park: "way/27096587"},
	{name: "Painted Box", district: "Reinbek", address: "Arthur-Goldschmidt-Weg Regenwasserrückhaltebecken", location: [53.518555,10.242603]},
	{name: "Painted Box", district: "Reinbek", address: "Kurzer Rehm 2", location: [53.511436,10.231895]},
	{name: "Painted Bus Stop", district: "Rosengarten", address: "Am Sandberg Museumsweg Vahrendorf", location: [53.432854,9.902892]},
	{name: "Panda", district: "Geesthacht", address: "Am Moor 70", location: [53.442242,10.34872]},
	{name: "Panorama Nettelnburg", district: "Bergedorf", address: "Friedrich-Frank-Bogen 168", location: [53.48912,10.184168]},
	{name: "Panorama", district: "Langenbek", address: "Buchholzer Weg 21", location: [53.431126,9.990411]},
	{name: "Panther Statue", district: "Barmbek-Nord", address: "Elligersweg 26", location: [53.603554,10.044337]},
	{name: "Panther", district: "Rotherbaum", address: "Von-Melle-Park Campus der Uni Hamburg", location: [53.566269,9.984638], park: "way/26802597"},
	{name: "Papa Und Sohn", district: "Glinde", address: "Möllner Landstraße Mühlenstraße Glinde", location: [53.542637,10.212567]},
	{name: "Papierflieger Blau Beleuchtet Beim Airport Hotel", district: "Langenhorn", address: "Langenhorner Chaussee 157", location: [53.646004,10.012219]},
	{name: "Paradies Für Vögel", district: "Wedel", address: "Lülanden Fährmannssand", location: [53.589577,9.649413]},
	{name: "Park Rehrsteg", district: "Neuwiedenthal", address: "Rehrstieg 23a", location: [53.475624,9.875058], park: "way/5133372"},
	{name: "Parkanlage Finkenwerder", district: "Finkenwerder", address: "Neßpriel Gedenkstätte Außenlager KZ-Neuengamme", location: [53.535938,9.858175], park: "way/154191388"},
	{name: "Parkanlage Vossbarg", district: "Schnelsen", address: "Zum Niendorfer Grenzhaus", location: [53.64761,9.946912]},
	{name: "Parkett Schmudlach", district: "Billstedt", address: "Manshardtstraße 135", location: [53.557255,10.11719]},
	{name: "Parkschaf", district: "Norderstedt", address: "Am Stadtpark", location: [53.716442,10.013889], park: "way/154452692"},
	{name: "Paternoster Des Lebens", district: "Ottensen", address: "Tönsfeldtstraße", location: [53.549881,9.920125]},
	{name: "Paul Wilhelm Bäumer Denkmal", district: "Fuhlsbüttel", address: "Preetzer Straße Paul Wilhelm Bäumer", location: [53.633251,10.010419]},
	{name: "Paul-Gerhardt Kirche", district: "Norderstedt", address: "Altes Buckhörner Moor 16 ", location: [53.700668,9.986289]},
	{name: "Paulskirche Schenefeld", district: "Schenefeld", address: "Gorch-Fock-Straße Pauls Kirche", location: [53.606422,9.854796]},
	{name: "Pavilion", district: "Winterhude", address: "Otto-Wels-Straße Hamburg Wasser", location: [53.592663,10.0157], park: "way/23734712"},
	{name: "Pavillon Am Dahliengarten", district: "Bahrenfeld", address: "DESY/ZEUS HERA", location: [53.579952,9.890976]},
	{name: "Pavillon Im Park", district: "Norderstedt", address: "Lütjenmoor 13", location: [53.684582,9.989377], park: "way/23806882"},
	{name: "Pavillon Uetersen", district: "Kreis Pinneberg", address: "Berliner Straße Musikpavillon", location: [53.684364,9.671981], park: "way/23129741"},
	{name: "Pegasos", district: "Eißendorf", address: "Ehestorfer Weg Pegasos", location: [53.453186,9.924858]},
	{name: "Peggis Schwester", district: "Barmbek-Nord", address: "Wiesendamm 7", location: [53.586624,10.044762]},
	{name: "Pelikan Apotheke", district: "Neustadt", address: "Großneumarkt 37", location: [53.550201,9.979553]},
	{name: "Penelope von Bernd Stöcker", district: "Wandsbek", address: "Hinterm Stern 20", location: [53.573868,10.067969]},
	{name: "Pergola im Bustan", district: "Norderstedt", address: "Moorloop Lionswerkstatt", location: [53.715694,10.014133], park: "way/154452692"},
	{name: "Pferd mit Reiter", district: "Hummelsbüttel", address: "Eitnerweg 37", location: [53.639915,10.045893]},
	{name: "Pferde Im Vorgarten", district: "Billwerder", address: "Billwerder Billdeich 272", location: [53.502609,10.141148]},
	{name: "Pferde Statue", district: "Lohbrügge", address: "Korachstraße 44", location: [53.510937,10.19783]},
	{name: "Pferdemarkt Stade", district: "Landkreis Stade", address: "Goos 2", location: [53.599747,9.475681]},
	{name: "Pflanz Einen Baum", district: "Ehestorf", address: "Ameisenlehrpfad Habichtkauz", location: [53.444752,9.88448], park: "way/60674252"},
	{name: "Philemon Kirche Poppenbüttel", district: "Poppenbüttel", address: "Poppenbütteler Weg 97", location: [53.651291,10.068078]},
	{name: "Phoenix", district: "Elmshorn", address: "Bauerweg 19", location: [53.756325,9.661158]},
	{name: "Phoenixe", district: "Neugraben-Fischbek", address: "Ohrnsweg 25", location: [53.472832,9.819035]},
	{name: "Picknick Haus", district: "Rissen", address: "Egenbüttelweg Waldspielplatz", location: [53.59293,9.732087], park: "way/26589164"},
	{name: "Pik Koenig", district: "Horn", address: "Rennbahnstraße Tribünenweg", location: [53.559948,10.081111]},
	{name: "Pillemann", district: "Winterhude", address: "Gertigstraße 31", location: [53.582451,10.016135]},
	{name: "Pilz Skulptur", district: "Stellingen", address: "Flaßheide 33", location: [53.591999,9.916756]},
	{name: "Pinguin Brunnen", district: "Winterhude", address: "Rhododendronpfad Pinguin-Brunnen", location: [53.595093,10.028471], park: "way/23734712"},
	{name: "Pink Graffiti Wall", district: "Ahrensburg", address: "Ostring Ruine Schießstand", location: [53.67469,10.25289]},
	{name: "Pirat", district: "Bergedorf", address: "Schillerufer Bille-Bad", location: [53.492535,10.213099]},
	{name: "Piratenfass", district: "Neuallermöhe", address: "Adolf-Köster-Damm 44", location: [53.485779,10.148475], park: "way/54460709"},
	{name: "Pizza Max Ahrensburg", district: "Ahrensburg", address: "Hamburger Straße 37", location: [53.670509,10.234504]},
	{name: "Plambeck Brunnen", district: "Norderstedt", address: "Ochsenzoller Straße 147", location: [53.681591,9.987595]},
	{name: "Planetarium im ehemaligen Wasserturm", district: "Winterhude", address: "Linnering 1", location: [53.597206,10.009108], park: "way/23734712"},
	{name: "Plattenstatue", district: "Steilshoop", address: "Borchertring 21", location: [53.616661,10.065951]},
	{name: "Platz Montoir-de-Bretagne", district: "Hoisbüttel", address: "Lübecker Straße", location: [53.691723,10.167796]},
	{name: "Pohlmann", district: "Friedrichsgabe", address: "Ulzburger Straße 400", location: [53.723186,9.998049]},
	{name: "Polizeimuseum Hamburg", district: "Winterhude", address: "Krochmannstraße Polizeimuseum Hamburg", location: [53.603191,10.00602]},
	{name: "Polizist Aus Holz", district: "Friedrichsgabe", address: "Friedrichsgaber Weg 290", location: [53.702217,9.981026]},
	{name: "Ponihof Totem", district: "Niendorf", address: "Niendorfer Gehege Grillplatz", location: [53.616573,9.932858]},
	{name: "Pop Art", district: "Rotherbaum", address: "Schlüterstraße 5", location: [53.564709,9.986357]},
	{name: "Popeye the Sailorman", district: "Altona-Altstadt", address: "Carsten-Rehder-Straße 64", location: [53.544571,9.946257]},
	{name: "Porsche In Wand", district: "Schnelsen", address: "Frohmestraße 106", location: [53.629013,9.930449]},
	{name: "Portal 1895", district: "Uhlenhorst", address: "Hofweg 3", location: [53.569092,10.017529]},
	{name: "Post Art Jump", district: "Barsbüttel", address: "Barsbütteler Landstraße 17", location: [53.565331,10.198167], park: "way/380481134"},
	{name: "PostIt!-Kunst", district: "Hammerbrook", address: "Friesenstraße 13", location: [53.543922,10.029429]},
	{name: "PostbankWürfel", district: "Neugraben-Fischbek", address: "Georg-Heyken-Straße 10", location: [53.482357,9.903534]},
	{name: "Postonika", district: "Landkreis Stade", address: "Osterjork 31", location: [53.531902,9.685062]},
	{name: "Prehistoric Ingress Portal", district: "Bergedorf", address: "An der Sternwarte Kristallformation", location: [53.481792,10.239356], park: "way/178451631"},
	{name: "Prellbock am Güterbahnhof", district: "Landkreis Stade", address: "Am Güterbahnhof 7", location: [53.596802,9.48269]},
	{name: "Prophet und Genius Jona", district: "Ohlsdorf", address: "Cordesallee", location: [53.619457,10.035805], park: "way/186885445"},
	{name: "Prunkpforte Stechmann", district: "Landkreis Stade", address: "Lühe", location: [53.570019,9.636246]},
	{name: "Prunkvolles Wappen d. Hansestadt", district: "St. Georg", address: "Steintorplatz 1", location: [53.551777,10.008951]},
	{name: "Pulverfabrik Direktoren Villa", district: "Geesthacht", address: "Lichterfelder Straße 29", location: [53.432842,10.348038]},
	{name: "Quelle des LEBENS", district: "Bergedorf", address: "Holtenklinker Straße 67", location: [53.483086,10.222338]},
	{name: "Quellental Brunnen", district: "Kreis Pinneberg", address: "Heinrich-Christiansen-Straße 43", location: [53.652451,9.790395]},
	{name: "Quickborn Bahnhof", district: "Quickborn", address: "Bahnhofstraße 96-120", location: [53.731087,9.904442]},
	]};
}
