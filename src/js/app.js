var nationalParks = [
	{
		name: 'Acadia',
		location: {lat: 44.35, lng: -68.21},
		state: 'Maine',
		description: 'Covering most of Mount Desert Island and other coastal islands, Acadia features the tallest mountain on the Atlantic coast of the United States, granite peaks, ocean shoreline, woodlands, and lakes. There are freshwater, estuary, forest, and intertidal habitats.'
	},
	{
		name: 'American Samoa',
		location: {lat: -14.25, lng: -170.68},
		state: 'American Samoa',
		description: 'The southernmost National Park is on three Samoan islands and protects coral reefs, rainforests, volcanic mountains, and white beaches. The area is also home to flying foxes, brown boobies, sea turtles, and 900 species of fish.'
	},
	{
		name: 'Arches',
		location: {lat: 38.68, lng: -109.57},
		state: 'Utah',
		description: 'This site features more than 2,000 natural sandstone arches, with some of the most popular arches in the park being Delicate Arch, Landscape Arch and Double Arch.[13] Millions of years of erosion have created these structures located in a desert climate where the arid ground has life-sustaining biological soil crusts and potholes that serve as natural water-collecting basins. Other geologic formations include stone pinnacles, fins, and balancing rocks.'
	},
	{
		name: 'Badlands',
		location: {lat: 43.75, lng: -102.50},
		state: 'South Dakota',
		description: 'The Badlands are a collection of buttes, pinnacles, spires, and mixed-grass prairies. The White River Badlands contain the largest assemblage of known late Eocene and Oligocene mammal fossils.[15] The wildlife includes bison, bighorn sheep, black-footed ferrets, and prairie dogs.'
	},
	{
		name: 'Big Bend',
		location: {lat: 29.25, lng: -103.25},
		state: 'Texas',
		description: 'Named for the prominent bend in the Rio Grande along the US–Mexico border, this park encompasses a large and remote part of the Chihuahuan Desert. Its main attraction is backcountry recreation in the arid Chisos Mountains and in canyons along the river. A wide variety of Cretaceous and Tertiary fossils as well as cultural artifacts of Native Americans also exist within its borders.'
	},
	{
		name: 'Biscayne',
		location: {lat: 25.65, lng: -80.08},
		state: 'Florida',
		description: 'Located in Biscayne Bay, this park at the north end of the Florida Keys has four interrelated marine ecosystems: mangrove forest, the Bay, the Keys, and coral reefs. Threatened animals include the West Indian manatee, American crocodile, various sea turtles, and peregrine falcon.'
	},
	{
		name: 'Black Canyon of the Gunnison',
		location: {lat: 38.57, lng: -107.72},
		state: 'Colorado',
		description: 'The park protects a quarter of the Gunnison River, which slices sheer canyon walls from dark Precambrian-era rock. The canyon features some of the steepest cliffs and oldest rock in North America, and is a popular site for river rafting and rock climbing. The deep, narrow canyon is composed of gneiss and schist which appears black when in shadow.'
	},
	{
		name: 'Bryce Canyon',
		location: {lat: 37.57, lng: -112.18},
		state: 'American Samoa',
		description: 'Bryce Canyon is a geological amphitheater on the Paunsaugunt Plateau with hundreds of tall, multicolored sandstone hoodoos formed by erosion. The region was originally settled by Native Americans and later by Mormon pioneers.'
	},
	{
		name: 'Canyonlands',
		location: {lat: 38.2, lng: -109.93},
		state: 'Utah',
		description: 'This landscape was eroded into a maze of canyons, buttes, and mesas by the combined efforts of the Colorado River, Green River, and their tributaries, which divide the park into three districts. The park also contains rock pinnacles and arches, as well as artifacts from Ancient Pueblo peoples.'
	},
	{
		name: 'Capitol Reef',
		location: {lat: 38.20, lng: -111.17},
		state: 'Utah',
		description: 'The park\'s Waterpocket Fold is a 100-mile (160 km) monocline that exhibits the earth\'s diverse geologic layers. Other natural features include monoliths, cliffs, and sandstone domes shaped like the United States Capitol.'
	},
	{
		name: 'Carlsbad Caverns',
		location: {lat: 32.17, lng: -104.44},
		state: 'New Mexico',
		description: 'Carlsbad Caverns has 117 caves, the longest of which is over 120 miles (190 km) long. The Big Room is almost 4,000 feet (1,200 m) long, and the caves are home to over 400,000 Mexican free-tailed bats and sixteen other species. Above ground are the Chihuahuan Desert and Rattlesnake Springs.'
	},
	{
		name: 'Channel Islands',
		location: {lat: 34.01, lng: -119.42},
		state: 'California',
		description: 'Five of the eight Channel Islands are protected, and half of the park\'s area is underwater. The islands have a unique Mediterranean ecosystem originally settled by the Chumash people. They are home to over 2,000 species of land plants and animals, and 145 are unique to them, including the island fox. Ferry services offer transportation to the islands from the mainland.'
	},
	{
		name: 'Congaree',
		location: {lat: 33.78, lng: -80.78},
		state: 'South Carolina',
		description: 'On the Congaree River, this park is the largest portion of old-growth floodplain forest left in North America. Some of the trees are the tallest in the eastern United States. An elevated walkway called the Boardwalk Loop guides visitors through the swamp.'
	},
	{
		name: 'Crater Lake',
		location: {lat: -42.94, lng: -122.1},
		state: 'Oregon',
		description: 'Crater Lake lies in the caldera of an ancient volcano called Mount Mazama that collapsed 7,700 years ago. It is the deepest lake in the United States and is noted for its vivid blue color and water clarity. There are two more recent volcanic islands in the lake, and, with no inlets or outlets, all water comes through precipitation.'
	},
	{
		name: 'Cuyahoga Valley',
		location: {lat: 41.24, lng: -81.55},
		state: 'Ohio',
		description: 'This park along the Cuyahoga River has waterfalls, hills, trails, and exhibits on early rural living. The Ohio and Erie Canal Towpath Trail follows the Ohio and Erie Canal, where mules towed canal boats. The park has numerous historic homes, bridges, and structures,[32] and also offers a scenic train ride.'
	},
	{
		name: 'Death Valley',
		location: {lat: 36.24, lng: -116.82},
		state: 'California, Nevada',
		description: 'Death Valley is the hottest, lowest, and driest place in the United States. Daytime temperatures have topped 130 °F (54 °C) and it is home to Badwater Basin, the lowest elevation in North America. The park contains canyons, badlands, sand dunes, and mountain ranges, while more than 1000 species of plants grow in this geologic graben. Additional points of interest include salt flats, historic mines, and springs.'
	},
	{
		name: 'Denali',
		location: {lat: 63.33, lng: -150.50},
		state: 'Alaska',
		description: 'Centered on Denali, the tallest mountain in North America, Denali is serviced by a single road leading to Wonder Lake. Denali and other peaks of the Alaska Range are covered with long glaciers and boreal forest. Wildlife includes grizzly bears, Dall sheep, caribou, and gray wolves.'
	},
	{
		name: 'Dry Tortugas',
		location: {lat: 24.63, lng: -82.87},
		state: 'Florida',
		description: 'The islands of the Dry Tortugas, at the westernmost end of the Florida Keys, are the site of Fort Jefferson, a Civil War-era fort that is the largest masonry structure in the Western Hemisphere. With most of the park being remote ocean, it is home to undisturbed coral reefs and shipwrecks and is only accessible by plane or boat.'
	},
	{
		name: 'Everglades',
		location: {lat: 25.32, lng: -80.93},
		state: 'Florida',
		description: 'The Everglades are the largest tropical wilderness in the United States. This mangrove and tropical rainforest ecosystem and marine estuary is home to 36 protected species, including the Florida panther, American crocodile, and West Indian manatee. Some areas have been drained and developed; restoration projects aim to restore the ecology.'
	},
	{
		name: 'Gates of the Arctic',
		location: {lat: 67.78, lng: -153.30},
		state: 'Alaska',
		description: 'The country\'s northernmost park protects an expanse of pure wilderness in Alaska\'s Brooks Range and has no park facilities. The land is home to Alaska Natives who have relied on the land and caribou for 11,000 years.'
	},
	{
		name: 'Glacier',
		location: {lat: 48.80, lng: -114.00},
		state: 'Montana',
		description: 'The U.S. half of Waterton-Glacier International Peace Park, this park includes 26 glaciers and 130 named lakes surrounded by Rocky Mountain peaks. There are historic hotels and a landmark road called the Going-to-the-Sun Road in this region of rapidly receding glaciers.[43] The local mountains, formed by an overthrust, expose Paleozoic fossils including trilobites, mollusks, giant ferns and dinosaurs.'
	},
	{
		name: 'Glacier Bay',
		location: {lat: 58.50, lng: -137.00},
		state: 'Alaska',
		description: 'Glacier Bay contains tidewater glaciers, mountains, fjords, and a temperate rainforest, and is home to large populations of grizzly bears, mountain goats, whales, seals, and eagles. When discovered in 1794 by George Vancouver, the entire bay was covered by ice, but the glaciers have since receded more than 65 miles (105 km).'
	},
	{
		name: 'Grand Canyon',
		location: {lat: 36.06, lng: -112.14},
		state: 'Arizona',
		description: 'The Grand Canyon, carved by the mighty Colorado River, is 277 miles (446 km) long, up to 1 mile (1.6 km) deep, and up to 15 miles (24 km) wide. Millions of years of erosion have exposed the multicolored layers of the Colorado Plateau in mesas and canyon walls, visible from both the north and south rims, or from a number of trails that descend into the canyon itself.'
	},
	{
		name: 'Grand Teton',
		location: {lat: 43.73, lng: -110.80},
		state: 'Wyoming',
		description: 'Grand Teton is the tallest mountain in the Teton Range. The park\'s historic Jackson Hole and reflective piedmont lakes teem with endemic wildlife, with a backdrop of craggy mountains that rise abruptly from the sage-covered valley.'
	},
	{
		name: 'Great Basin',
		location: {lat: 38.98, lng: -114.30},
		state: 'Nevada',
		description: 'Based around Nevada\'s second tallest mountain, Wheeler Peak, Great Basin National Park contains 5,000-year-old bristlecone pines, a rock glacier, and the limestone Lehman Caves. Due to its remote location, the park has some of the country\'s darkest night skies. Wildlife includes the Townsend\'s big-eared bat, pronghorn, and Bonneville cutthroat trout.'
	},
	{
		name: 'Great Sand Dunes',
		location: {lat: -37.73, lng: -105.51},
		state: 'Colorado',
		description: 'The tallest sand dunes in North America, up to 750 feet (230 m) tall, were formed by deposits of the ancient Rio Grande in the San Luis Valley. Abutting a variety of grasslands, shrublands, and wetlands, the park also has alpine lakes, six 13,000-foot mountains, and old-growth forests.'
	},
	{
		name: 'Great Smoky Mountains',
		location: {lat: 35.68, lng: -83.53},
		state: 'Tennessee, North Carolina',
		description: 'The Great Smoky Mountains, part of the Appalachian Mountains, span a wide range of elevations, making them home to over 400 vertebrate species, 100 tree species, and 5000 plant species. Hiking is the park\'s main attraction, with over 800 miles (1,300 km) of trails, including 70 miles (110 km) of the Appalachian Trail. Other activities include fishing, horseback riding, and touring nearly 80 historic structures.'
	},
	{
		name: 'Guadalupe Mountains',
		location: {lat: 31.92, lng: -104.87},
		state: 'Texas',
		description: 'The Badlands are a collection of buttes, pinnacles, spires, and mixed-grass prairies. The White River Badlands contain the largest assemblage of known late Eocene and Oligocene mammal fossils.[15] The wildlife includes bison, bighorn sheep, black-footed ferrets, and prairie dogs.'
	},
	{
		name: 'Haleakalā',
		location: {lat: 20.72, lng: -156.17},
		state: 'Hawaii',
		description: 'The Haleakalā volcano on Maui features a very large crater with numerous cinder cones, Hosmer\'s Grove of alien trees, the Kipahulu section\'s scenic pools of freshwater fish, and the native Hawaiian goose. It is home to the greatest number of endangered species within a U.S. National Park.'
	},
	{
		name: 'Hawaiʻi Volcanoes',
		location: {lat: 19.38, lng: -155.20},
		state: 'Hawaii',
		description: 'This park on the Big Island protects the Kīlauea and Mauna Loa volcanoes, two of the world\'s most active geological features. Diverse ecosystems range from tropical forests at sea level to barren lava beds at more than 13,000 feet (4,000 m).'
	},
	{
		name: 'Hot Springs',
		location: {lat: 34.51, lng: -93.05},
		state: 'Arkansas',
		description: 'Hot Springs was established by act of Congress as a federal reserve on April 20, 1832, as such it is the oldest park managed by the National Park Service. Congress changed the reserve\'s designation to National Park on March 4, 1921 after the National Park Service was established in 1916. Hot Springs is the smallest and only National Park in an urban area and is based around natural hot springs that flow out of the low lying Ouachita Mountains.'
	},
	{
		name: 'Isle Royale',
		location: {lat: 48.10, lng: -88.55},
		state: 'Michigan',
		description: 'The largest island in Lake Superior is a place of isolation and wilderness. Along with its many shipwrecks, waterways, and hiking trails, the park also includes over 400 smaller islands within 4.5 miles (7.2 km) of its shores. There are only 20 mammal species on the entire island, though the relationship between its wolf and moose populations is especially unique.'
	},
	{
		name: 'Joshua Tree',
		location: {lat: 33.79, lng: -115.90},
		state: 'California',
		description: 'Covering large areas of the Colorado and Mojave Deserts and the Little San Bernardino Mountains, this desert landscape is populated by vast stands of Joshua trees. Large changes in elevation reveal various contrasting environments including bleached sand dunes, dry lakes, rugged mountains, and maze-like clusters of monzogranite monoliths.'
	},
	{
		name: 'Katmai',
		location: {lat: 58.50, lng: -155.00},
		state: 'Alaska',
		description: 'This park on the Alaska Peninsula protects the Valley of Ten Thousand Smokes, an ash flow formed by the 1912 eruption of Novarupta, as well as Mount Katmai. Over 2,000 grizzly bears come here each year to catch spawning salmon. Other wildlife includes caribou, wolves, moose, and wolverines.'
	},
	{
		name: 'Kenai Fjords',
		location: {lat: 59.92, lng: -149.65},
		state: 'Alaska',
		description: 'Near Seward on the Kenai Peninsula, this park protects the Harding Icefield and at least 38 glaciers and fjords stemming from it. The only area accessible to the public by road is Exit Glacier; the rest must be viewed or reached from boat tours.'
	},
	{
		name: 'Kings Canyon',
		location: {lat: 36.80, lng: -118.55},
		state: 'California',
		description: 'Home to several giant sequoia groves and the General Grant Tree, the world\'s second largest measured tree, this park also features part of the Kings River, sculptor of the dramatic granite canyon that is its namesake, and the San Joaquin River, as well as Boyden Cave.'
	},
	{
		name: 'Kobuk Valley',
		location: {lat: 67.55, lng: -159.28},
		state: 'Alaska',
		description: 'Kobuk Valley protects 61 miles (98 km) of the Kobuk River and three regions of sand dunes. Created by glaciers, the Great Kobuk, Little Kobuk, and Hunt River Sand Dunes can reach 100 feet (30 m) high and 100 °F (38 °C), and they are the largest dunes in the Arctic. Twice a year, half a million caribou migrate through the dunes and across river bluffs that expose well-preserved ice age fossils.'
	},
	{
		name: 'Lake Clark',
		location: {lat: -60.97, lng: -153.42},
		state: 'Alaska',
		description: 'The region around Lake Clark features four active volcanoes, including Mount Redoubt, as well as an abundance of rivers, glaciers, and waterfalls. Temperate rainforests, a tundra plateau, and three mountain ranges complete the landscape.'
	},
	{
		name: 'Lassen Volcanic',
		location: {lat: 40.49, lng: -121.51},
		state: 'California',
		description: 'Lassen Peak, the largest plug dome volcano in the world, is joined by all three other types of volcanoes in this park: shield, cinder dome, and composite. Though Lassen itself last erupted in 1915, most of the rest of the park is continuously active. Numerous hydrothermal features, including fumaroles, boiling pools, and bubbling mud pots, are heated by molten rock from beneath the peak.'
	},
	{
		name: 'Mammoth Cave',
		location: {lat: 37.18, lng: -86.10},
		state: 'Kentucky',
		description: 'With more than 400 miles (640 km) of passageways explored, Mammoth Cave is the world\'s longest known cave system. Subterranean wildlife includes eight bat species, Kentucky cave shrimp, Northern cavefish, and cave salamanders. Above ground, the park provides recreation on the Green River, 70 miles of hiking trails, and plenty of sinkholes and springs.'
	},
	{
		name: 'Mesa Verde',
		location: {lat: 37.18, lng: -108.49},
		state: 'Colorado',
		description: 'This area constitutes over 4,000 archaeological sites of the Ancestral Puebloan people, who lived here and elsewhere in the Four Corners region for at least 700 years. Cliff dwellings built in the 12th and 13th centuries include Cliff Palace, which has 150 rooms and 23 kivas, and the Balcony House, with its many passages and tunnels.'
	},
	{
		name: 'Mount Rainier',
		location: {lat: 46.85, lng: -121.75},
		state: 'Washington',
		description: 'Mount Rainier, an active stratovolcano, is the most prominent peak in the Cascades, and is covered by 26 named glaciers including Carbon Glacier and Emmons Glacier, the largest in the contiguous United States. The mountain is popular for climbing, and more than half of the park is covered by subalpine and alpine forests and meadows seasonally in bloom with wildflowers. Paradise on the south slope is the snowiest place on Earth where snowfall is measured regularly.[79] The Longmire visitor center is the start of the Wonderland Trail, which encircles the mountain.'
	},
	{
		name: 'North Cascades',
		location: {lat: 48.70, lng: -121.20},
		state: 'Washington',
		description: 'This complex encompasses two units of the National Park itself as well as the Ross Lake and Lake Chelan National Recreation Areas. The highly glaciated mountains are spectacular examples of Cascade geology. Popular hiking and climbing areas include Cascade Pass, Mount Shuksan, Mount Triumph, and Eldorado Peak.'
	},
	{
		name: 'Olympic',
		location: {lat: 47.97, lng: -123.50},
		state: 'Washington',
		description: 'Situated on the Olympic Peninsula, this park includes a wide range of ecosystems from Pacific shoreline to temperate rainforests to the alpine slopes of Mount Olympus. The scenic Olympic Mountains overlook the Hoh Rain Forest and Quinault Rain Forest, the wettest area in the contiguous United States, with the Hoh receiving an average of almost 12 ft (3.7 m) of rain every year.'
	},
	{
		name: 'Petrified Forest',
		location: {lat: 35.07, lng: -109.78},
		state: 'Arizona',
		description: 'This portion of the Chinle Formation has a large concentration of 225-million-year-old petrified wood. The surrounding Painted Desert features eroded cliffs of red-hued volcanic rock called bentonite. Dinosaur fossils and over 350 Native American sites are also protected in this park.'
	},
	{
		name: 'Pinnacles',
		location: {lat: 36.48, lng: -121.16},
		state: 'California',
		description: 'Named for the eroded leftovers of a portion of an extinct volcano, the park\'s massive black and gold monoliths of andesite and rhyolite are a popular destination for rock climbers. Hikers have access to trails crossing the Coast Range wilderness. The park is home to the endangered California condor (Gymnogyps californianus) and one of the few locations in the world where these extremely rare birds can be seen in the wild. Pinnacles also supports a dense population of prairie falcons, and more than 13 species of bat which populate its talus caves.'
	},
	{
		name: 'Redwood',
		location: {lat: 41.30, lng: -124.00},
		state: 'California',
		description: 'This park and the co-managed state parks protect almost half of all remaining coastal redwoods, the tallest trees on earth. There are three large river systems in this very seismically active area, and 37 miles (60 km) of protected coastline reveal tide pools and seastacks. The prairie, estuary, coast, river, and forest ecosystems contain a wide variety of animal and plant species.'
	},
	{
		name: 'Rocky Mountain',
		location: {lat: 40.40, lng: -105.58},
		state: 'Colorado',
		description: 'Bisected north to south by the Continental Divide, this portion of the Rockies has ecosystems varying from over 150 riparian lakes to montane and subalpine forests to treeless alpine tundra. Wildlife including mule deer, bighorn sheep, black bears, and cougars inhabit its igneous mountains and glacial valleys. Longs Peak, a classic Colorado fourteener, and the scenic Bear Lake are popular destinations, as well as the historic Trail Ridge Road, which reaches an elevation of more than 12,000 feet (3,700 m).'
	},
	{
		name: 'Saguaro',
		location: {lat: 32.25, lng: -110.50},
		state: 'Arizona',
		description: 'Split into the separate Rincon Mountain and Tucson Mountain districts, this park is evidence that the dry Sonoran Desert is still home to a great variety of life spanning six biotic communities. Beyond the namesake giant saguaro cacti, there are barrel cacti, chollas, and prickly pears, as well as lesser long-nosed bats, spotted owls, and javelinas.'
	},
	{
		name: 'Sequoia',
		location: {lat: 36.43, lng: -118.68},
		state: 'California',
		description: 'This park protects the Giant Forest, which boasts some of the world\'s largest trees, the General Sherman being the largest measured tree in the park. Other features include over 240 caves, a long segment of the Sierra Nevada including the tallest mountain in the contiguous United States, and Moro Rock, a large granite dome.'
	},
	{
		name: 'Shenandoah',
		location: {lat: 38.53, lng: -78.35},
		state: 'Virginia',
		description: 'Shenandoah\'s Blue Ridge Mountains are covered by hardwood forests that teem with a wide variety of wildlife. The Skyline Drive and Appalachian Trail run the entire length of this narrow park, along with more than 500 miles (800 km) of hiking trails passing scenic overlooks and cataracts of the Shenandoah River.'
	},
	{
		name: 'Theodore Roosevelt',
		location: {lat: 46.97, lng: -103.45},
		state: 'North Dakota',
		description: 'This region that enticed and influenced President Theodore Roosevelt consists of a park of three units in the northern badlands. Besides Roosevelt\'s historic cabin, there are numerous scenic drives and backcountry hiking opportunities. Wildlife includes American bison, pronghorn, bighorn sheep, and wild horses.'
	},
	{
		name: 'Virgin Islands',
		location: {lat: 18.33, lng: -64.73},
		state: 'United States Virgin Islands',
		description: 'This island park on Saint John preserves Taíno archaeological sites and the ruins of sugar plantations from Columbus\' time, as well as all the natural environs. Surrounding the pristine beaches are mangrove forests, seagrass beds, and coral reefs.'
	},
	{
		name: 'Voyageurs',
		location: {lat: 48.50, lng: -92.88},
		state: 'Minnesota',
		description: 'This park protecting four lakes near the Canada–US border is a site for canoeing, kayaking, and fishing. The park also preserves a history populated by Ojibwe Native Americans, French fur traders called voyageurs, and gold miners. Formed by glaciers, the region features tall bluffs, rock gardens, islands, bays, and several historic buildings.'
	},
	{
		name: 'Wind Cave',
		location: {lat: 43.57, lng: -103.48},
		state: 'South Dakota',
		description: 'Wind Cave is distinctive for its calcite fin formations called boxwork, a unique formation rarely found elsewhere, and needle-like growths called frostwork. The cave is one of the longest and most complex caves in the world. Above ground is a mixed-grass prairie with animals such as bison, black-footed ferrets, and prairie dogs, and ponderosa pine forests that are home to cougars and elk.[99] The cave is culturally significant to the Lakota people as the site "from which Wakan Tanka, the Great Mystery, sent the buffalo out into their hunting grounds."'
	},
	{
		name: 'Wrangell–​St. Elias',
		location: {lat: 61.00, lng: -142.00},
		state: 'Alaska',
		description: 'An over 8 million acres (32,375 km2) plot of mountainous country—the largest National Park in the system—protects the convergence of the Alaska, Chugach, and Wrangell-Saint Elias Ranges, which include many of the continent\'s tallest mountains and volcanoes, including the 18,008-foot Mount Saint Elias. More than a quarter of the park is covered with glaciers, including the tidewater Hubbard Glacier, piedmont Malaspina Glacier, and valley Nabesna Glacier.'
	},
	{
		name: 'Yellowstone',
		location: {lat: 44.60, lng: -110.50},
		state: 'Wyoming, Montana, Idaho',
		description: 'Situated on the Yellowstone Caldera, the park has an expansive network of geothermal areas including boiling mud pots, vividly colored hot springs such as Grand Prismatic Spring, and regularly erupting geysers, the best-known being Old Faithful. The yellow-hued Grand Canyon of the Yellowstone River contains several high waterfalls, while four mountain ranges traverse the park. More than 60 mammal species including gray wolves, grizzly bears, black bears, lynxes, bison, and elk, make this park one of the best wildlife viewing spots in the country.'
	},
	{
		name: 'Yosemite',
		location: {lat: 37.83, lng: -119.50},
		state: 'California',
		description: 'Yosemite features sheer granite cliffs, exceptionally tall waterfalls, and old-growth forests at a unique intersection of geology and hydrology. Half Dome and El Capitan rise from the park\'s centerpiece, the glacier-carved Yosemite Valley, and from its vertical walls drop Yosemite Falls, one of North America\'s tallest waterfalls at 2,425 feet (739 m) high. Three giant sequoia groves, along with a pristine wilderness in the heart of the Sierra Nevada, are home to a wide variety of rare plant and animal species.'
	},
	{
		name: 'Zion',
		location: {lat: 37.30, lng: -113.05},
		state: 'Utah',
		description: 'Located at the junction of the Colorado Plateau, Great Basin, and Mojave Desert, this park contains sandstone features such as mesas, rock towers, and canyons, including the Virgin River Narrows. The various sandstone formations and the forks of the Virgin River create a wilderness divided into four ecosystems: desert, riparian, woodland, and coniferous forest.'
	}

];

var ViewModel = function() {
	var self = this;
	self.nationalParkList = ko.observableArray([]);
	nationalParks.forEach(function(park){
		self.nationalParkList.push(park);
	});
	self.filter = function() {
		var inputText = document.getElementById("filter-text").value.toLowerCase();
		self.nationalParkList.removeAll();
		nationalParks.forEach(function(park) {
			var parkName = park.name.toLowerCase();
			var state = park.state.toLowerCase();
			if(parkName.indexOf(inputText) != -1 || state.indexOf(inputText) != -1){
				self.nationalParkList.push(park);
			}
		});
		//console.log("in filter function, has " + self.nationalParkList().length + " results");
	}
	self.showPark = function(clickedPark) {
		console.log(clickedPark.name);
		var idx = nationalParks.indexOf(clickedPark);
		console.log(clickedPark.name + " is the " + idx + "th park of nationalParkList");
		populateInfoWindow(markers[idx], largeInfowindow);
	}
}
ko.applyBindings(new ViewModel());

$('.menu-button').on('click', function(){
    console.log("click button");
   $(".menubar").toggle("slide", {direction: "left"}, 50);
    $(".menu-container").toggleClass("fullscreen", 50);
    $("#map").toggleClass("fullscreen", 50);
    resizeMap();
})
