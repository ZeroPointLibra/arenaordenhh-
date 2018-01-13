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
	{name: "NABU Gruppe Eimsbüttel", district: "Niendorf", address: "Jägerdamm", location: [53.633064,9.93323], park: "way/164811599"},
	{name: "NABU Infotafel", district: "Billstedt", address: "Grootmoorredder", location: [53.558506,10.134869]},
	{name: "NABU Tafel", district: "Nienstedten", address: "Baron-Voght-Straße 50a", location: [53.553108,9.867287], park: "way/132800850"},
	{name: "NABU Vogelschutzgebiet am Krupunder See", district: "Kreis Pinneberg", address: "Halstenbek Seegrabenweg", location: [53.62521,9.872487]},
	{name: "Namenloser Grabstein", district: "St. Georg", address: "Philipsstraße Gebäude P", location: [53.558762,10.0202]},
	{name: "Naos Griechisches Restaurant", district: "Roseggerstraße", address: "41 Restaurant Naos", location: [53.443527,9.995281]},
	{name: "Natur- und Geschichtspfad", district: "Bergedorf", address: "August-Bebel-Straße", location: [53.477428,10.251681]},
	{name: "Natur- und Geschichtspfad", district: "Neu-Börnsen", address: "Grüner Weg 44", location: [53.473358,10.276664]},
	{name: "Naturbrunnen", district: "Quickborn", address: "Kieler Straße", location: [53.734322,9.893256]},
	{name: "Naturerlebnisstation A11", district: "Norderstedt", address: "Wilstedter Weg", location: [53.706593,10.053181]},
	{name: "Naturerlebnisstation A23", district: "Norderstedt", address: "Am Tangstedter Forst", location: [53.72271,10.040854]},
	{name: "Naturerlebnisstation AT 04", district: "Norderstedt", address: "Schleswig-Holstein-Straße", location: [53.699169,10.017843]},
	{name: "Naturlehrpfad Liether Moor", district: "Elmshorn", address: "Klein Nordende Liether Moor", location: [53.725494,9.687417], park: "way/36777619"},
	{name: "Naturorchester", district: "Quickborn", address: "Renzel Himmelmoorstraße", location: [53.740749,9.860902]},
	{name: "Naturschutzgebiet Boberg", district: "Lohbrügge", address: "Boberger Furt 1", location: [53.511623,10.161016]},
	{name: "Naturschutzgebiet Borghorster Elblandschaft", district: "Altengamme", address: "Am Knollgraben", location: [53.452049,10.314376], park: "way/337351093"},
	{name: "Naturschutzgebiet Eppendorfer Moor Eingang Süd Ost", district: "Groß Borstel", address: "Kleingartenverein 428  Alsterkrug Weg Nr. 173", location: [53.610126,9.988062]},
	{name: "Naturschutzgebiet Fischbeker Heide Neugraben 2", district: "Hausbruch", address: "Moostal 2", location: [53.451584,9.869254]},
	{name: "Naturschutzgebiet Fischbeker Heide", district: "Neugraben-Fischbek", address: "Heidblick", location: [53.457932,9.852437]},
	{name: "Naturschutzgebiet Kirchwerder - Die Wiesenvögel", district: "Kirchwerder", address: "Fersenweg", location: [53.438599,10.145297]},
	{name: "Naturschutzgebiet Liether Kalkgrube", district: "Elmshorn", address: "Finckhörn", location: [53.721859,9.677129]},
	{name: "Naturschutzgebiet Moore bei Buxtehude", district: "Neu Wulmstorf", address: "Apfelgarten Berlepschkamp", location: [53.481476,9.800116]},
	{name: "Naturschutzgebiet Ohemoor", district: "Niendorf", address: "Sachsenstieg Ohmoor", location: [53.650261,9.968839], park: "way/189319781"},
	{name: "Naturschutzgebiet Ost Wittenbergen", district: "Rissen", address: "Tinsdaler Kirchenweg 293", location: [53.571087,9.745529]},
	{name: "Naturschutzgebiet", district: "Seevetal", address: "An der Seeve", location: [53.420841,10.101212], park: "way/285025904"},
	{name: "Naturschutzgebiete Fischbeker Heide", district: "Neuwiedenthal", address: "Talweg 49", location: [53.465607,9.875511]},
	{name: "Nec aspera terrent - Wandgemälde", district: "Neuenkirchen", address: "Dorfstraße 52", location: [53.527405,9.605507]},
	{name: "Nemo", district: "Glinde", address: "Kiefernbogen 18", location: [53.555847,10.221327]},
	{name: "Neptun Statue", district: "Neustadt", address: "Herrengraben 25", location: [53.547527,9.982736]},
	{name: "Nettelnburg SBahn", district: "Bergedorf", address: "Friedrich-Frank-Bogen 150", location: [53.488171,10.181282]},
	{name: "Nettelnburg Süden", district: "Bergedorf", address: "Hackmackbogen 86", location: [53.474396,10.186058], park: "way/291440287"},
	{name: "Nettelnburger Kirche", district: "Bergedorf", address: "Nettelnburger Kirchenweg 4", location: [53.480957,10.185472]},
	{name: "Neuallermöher Kunstwerk", district: "Neuallermöhe", address: "Neuallermöher Querweg KiöR", location: [53.485497,10.168225], park: "way/158084088"},
	{name: "Neuapostolische Gemeinde Lurup", district: "Lurup", address: "Rugenbarg ", location: [53.585957,9.870044]},
	{name: "Neuapostolische Kirche Pinneberg", district: "Pinneberg-Mitte", address: "Friedrich-Ebert-Straße", location: [53.662979,9.794685]},
	{name: "Neuapostolische Kirche Wedel", district: "Wedel", address: "Rissener Straße 27", location: [53.582752,9.715284]},
	{name: "Neuapostolische Kirche", district: "Hoheluft-Ost", address: "Curschmannstraße", location: [53.585911,9.97904], park: "way/81807468"},
	{name: "Neuapostolische Kirche", district: "Langenhorn", address: "Wördenmoorweg Neuapostolische Kirche Langenhorn", location: [53.654671,10.017963]},
	{name: "Neuapostolische Kirche", district: "Lohkampstraße", address: "71 Gemeinde Hamburg-Eidelstedt", location: [53.610737,9.896123]},
	{name: "Neuapostolische Kirche", district: "Wandsbek", address: "Pillauer Straße 10", location: [53.592644,10.078914]},
	{name: "Neuapostolische Kirche", district: "Heimfeld", address: "Wattenbergstraße 23", location: [53.462399,9.963688]},
	{name: "Neue Flora", district: "Altona-Nord", address: "Stresemannstraße S Holstenstraße", location: [53.562332,9.949266]},
	{name: "Neun Hydranten", district: "Halstenbek", address: "Industriestraße 21", location: [53.631004,9.856406]},
	{name: "Niedersachsenhaus von 1765", district: "Heimfeld", address: "Heimfelder Straße 42", location: [53.464191,9.956359]},
	{name: "Niendorfer Gehege", district: "Niendorf", address: "Bondenwald HH-E-4002", location: [53.613239,9.939415]},
	{name: "Nienstedtener Kirche", district: "Nienstedten", address: "Elbchaussee 410", location: [53.55143,9.84241]},
	{name: "Nikolaikirche Elmshorn", district: "Elmshorn", address: "Kirchenstraße 3", location: [53.753258,9.652682]},
	{name: "Nilpferd", district: "Poppenbüttel", address: "Lambert-Strus-Weg 10", location: [53.668262,10.076831]},
	{name: "Nomi 1. Bauabschnitt", district: "Norderstedt", address: "Heidbergstraße", location: [53.704082,9.990316]},
	{name: "Nomi Brunnen", district: "Norderstedt", address: "Rathausallee Norderstedt Mitte", location: [53.707001,9.992935]},
	{name: "Nordakademie Elmshorn", district: "Elmshorn", address: "Köllner Chaussee Nordakademie Elmshorn", location: [53.753902,9.672069]},
	{name: "Nordic Walking Fischbeker Heide", district: "Neugraben-Fischbek", address: "Schnuckendrift 30", location: [53.466438,9.836418]},
	{name: "Nordic Walking Park 01", district: "Ohlsdorf", address: "Alsterparkbrücke", location: [53.628708,10.027973], park: "way/136130804"},
	{name: "Nordic Walking Park Alstertal 26", district: "Lemsahl-Mellingstedt", address: "Ödenweg Kupferteich", location: [53.675621,10.08147]},
	{name: "Nordport Towers Tower One (Yellow)", district: "Norderstedt", address: "Südportal 3", location: [53.653069,9.984177]},
	{name: "North-East Entrance DOM Hamburg", district: "St. Pauli", address: "Feldstraße", location: [53.556267,9.974492]},
	{name: "Nulon Fusion 2003", district: "Billstedt", address: "Billstedter Hauptstraße 20", location: [53.541298,10.09831]},
	{name: "Nun auch mit Vogel", district: "Wilhelmsburg", address: "Finkenrieker Hauptdeich", location: [53.474167,10.000282]},
	]};
}
