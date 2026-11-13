import type { Tour, TourPackage, Review, FaqItem } from '../types';

export const TOURS_DATA: Tour[] = [
  {
    id: 'prison-island',
    title: 'Prison Island & Giant Aldabra Tortoises',
    subtitle: 'Changuu Island Historic Sanctuary & Marine Explorer',
    category: 'heritage',
    categoryLabel: 'Heritage & Marine',
    duration: '3.5 - 4 Hours',
    priceUSD: 45,
    badge: 'Popular Classic',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    rating: 4.9,
    reviewsCount: 128,
    description: 'A scenic 30-minute wooden boat voyage to historic Prison Island to meet 190-year-old Aldabra giant tortoises and explore 19th-century colonial history.',
    longDescription: 'Board a traditional motorized dhow from the Stone Town waterfront and cruise across turquoise waters to Changuu Island (Prison Island). Originally constructed in 1893 as a detention complex for rebellious enslaved individuals and later used as a yellow fever quarantine station, the island is now world-renowned for its sanctuary of gentle giant Aldabra tortoises—some over 190 years old. Feed and stroke these majestic ancient creatures, stroll through historic ruins draped in wild peacocks, and snorkel along the surrounding pristine coral reef fringe.',
    highlights: [
      'Scenic private boat transfer from Stone Town harbor',
      'Encounter, feed, and photograph 190-year-old Aldabra giant tortoises',
      'Guided walk through 19th-century British quarantine buildings',
      'Free time for coral reef snorkeling and white sand beach relaxing',
      'Professional photography opportunities with wild peacocks & turquoise waters'
    ],
    included: [
      'Return boat transport with licensed captain',
      'Island conservation & sanctuary entrance fees',
      'Professional certified English/Swahili tour guide',
      'Fresh tropical fruit tasting (Watermelon, pineapple, bananas)',
      'Snorkeling mask & sanitized gear',
      'Bottled mineral water'
    ],
    notIncluded: [
      'Gratuities for captain & guide',
      'Alcoholic beverages'
    ],
    itinerary: [
      { time: '09:00 AM', title: 'Stone Town Waterfront Meetup', description: 'Board our shaded motorized dhow at the historic Stone Town harbor.' },
      { time: '09:30 AM', title: 'Arrival at Prison Island', description: 'Step onto the wooden pier with breathtaking panoramic views of Stone Town.' },
      { time: '10:00 AM', title: 'Tortoise Sanctuary Interaction', description: 'Hand-feed leafy cabbage to the giant Aldabra tortoises and learn about conservation efforts.' },
      { time: '11:15 AM', title: 'Quarantine Station Ruins & Peacocks', description: 'Historical storytelling through the colonial ruins and lush gardens.' },
      { time: '12:00 PM', title: 'Beach Snorkeling & Scenic Return', description: 'Crystal-clear dip in the ocean before cruising back to Stone Town.' }
    ],
    whatToBring: ['Sunscreen & sunglasses', 'Swimwear & light towel', 'Camera or smartphone', 'Comfortable walking sandals', 'Waterproof pouch']
  },
  {
    id: 'nakupenda-sandbank',
    title: 'Nakupenda Sandbank Paradise & Seafood Feast',
    subtitle: 'Vanishing White Sand Island & Fresh Swahili Feast',
    category: 'marine',
    categoryLabel: 'Ocean Adventure',
    duration: '6 - 7 Hours',
    priceUSD: 75,
    badge: 'Signature Experience',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    rating: 5.0,
    reviewsCount: 214,
    description: 'Sail to the blindingly white Nakupenda Sandbank in the middle of the Indian Ocean for sunbathing, reef snorkeling, and a sumptuous fresh seafood barbecue.',
    longDescription: 'Nakupenda means "I Love You" in Swahili—and it is impossible not to fall in love with this pristine sandbank that disappears and reappears with the tides. Located about 20 minutes off Stone Town, Nakupenda offers pure blinding white sand surrounded by iridescent 50-shades-of-blue water. Relax under shaded safari awnings, swim in the calm warm shallows, snorkel colorful coral bommies, and indulge in a legendary seafood feast prepared live on the sand: lobster, jumbo tiger prawns, calamari, grilled tuna, accompanied by Swahili spiced rice and an endless platter of tropical seasonal fruits.',
    highlights: [
      'Cruise to an ephemeral pristine white sandbank in the open ocean',
      'Live grilled seafood banquet: lobster, prawns, calamari, octopus & kingfish',
      'Sumptuous tropical fruit platter (mangoes, passionfruit, watermelon, papaya)',
      'Clear water snorkeling with vibrant starfish, angel fish, and living corals',
      'Relaxation beneath shaded canvas tents with ice-cold beverages'
    ],
    included: [
      'Private boat cruise with shade & safety lifejackets',
      'Lavish grilled seafood lunch on the sandbank (vegetarian/chicken options available)',
      'Tropical fruit buffet & chilled soft drinks/water',
      'High-grade snorkeling gear & sanitized flippers',
      'Shaded canvas tent setup with beach mats',
      'Licensed expert marine guide'
    ],
    notIncluded: [
      'Personal towel',
      'Beer & wine (available upon request)'
    ],
    itinerary: [
      { time: '09:00 AM', title: 'Departure from Stone Town', description: 'Embark on our handcrafted boat across the sparkling Zanzibar channel.' },
      { time: '09:45 AM', title: 'Welcome to Nakupenda Paradise', description: 'Step into knee-deep turquoise water onto virgin white sand; camp setup is ready.' },
      { time: '10:30 AM', title: 'Guided Reef Snorkeling & Swimming', description: 'Discover rich underwater sea life guided by our local marine specialist.' },
      { time: '12:30 PM', title: 'Grand Seafood BBQ Feast', description: 'Savor freshly grilled lobster, prawns, calamari, spiced coconut rice, and sauces.' },
      { time: '02:00 PM', title: 'Tropical Fruit Tasting & Siesta', description: 'Taste fresh sweet Zanzibar fruits while relaxing under the coastal breeze.' },
      { time: '03:30 PM', title: 'Scenic Ocean Cruise Back', description: 'Sail back to Stone Town with memorable photos and videos.' }
    ],
    whatToBring: ['Beach towel', 'Reef-safe sunscreen & hat', 'Sunglasses', 'Extra change of clothes', 'Underwater phone case / GoPro']
  },
  {
    id: 'mnemba-dolphin',
    title: 'Mnemba Atoll Dolphin Safari & Reef Snorkeling',
    subtitle: 'Ethical Marine Wildlife & Coral Conservation Reserve',
    category: 'marine',
    categoryLabel: 'Marine Wildlife',
    duration: '4 - 5 Hours',
    priceUSD: 65,
    badge: 'Top Rated',
    image: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=1200&q=80',
    rating: 4.9,
    reviewsCount: 189,
    description: 'Cruise to the world-renowned Mnemba Atoll conservation area for ethical wild dolphin watching and aquarium-grade coral reef snorkeling.',
    longDescription: 'Mnemba Atoll is recognized worldwide as the crown jewel of Zanzibar marine biodiversity. Departing from the north-eastern coast (Muyuni/Kigomani), our specialized boat brings you into the protected waters where pods of wild bottlenose and spinner dolphins reside. Siribrand adheres strictly to responsible wildlife tourism: our experienced captains observe dolphins at a respectful distance, never chasing or boxing animals, allowing natural encounters where dolphins willingly swim alongside the boat. Afterwards, drop anchor at the Mnemba Marine Reserve for out-of-this-world snorkeling in crystal-clear visibility filled with blue tangs, clownfish, giant clams, and sea turtles.',
    highlights: [
      'Ethical, eco-conscious dolphin encounters adhering to marine safety guidelines',
      'World-class snorkeling at Mnemba Marine Reserve barrier reef',
      'Crystal-clear visibility often exceeding 20 meters',
      'Encounter colorful tropical marine species, moray eels, and starfish',
      'Fresh fruit snacks served on the boat amidst azure blue horizons'
    ],
    included: [
      'Speedboat / traditional motorized craft with licensed marine crew',
      'Mnemba conservation marine park permits',
      'Complete snorkeling gear (mask, snorkel, life vest)',
      'Fresh fruit snacks (Pineapple, watermelon, sweet bananas)',
      'Bottled mineral water'
    ],
    notIncluded: [
      'Entry to Mnemba private luxury island (private lodge island is restricted)',
      'Hotel pickup transfer (can be added as an optional transfer)'
    ],
    itinerary: [
      { time: '07:30 AM', title: 'Morning Boat Launch', description: 'Early departure from the northeast shore for the calmest waters and highest dolphin activity.' },
      { time: '08:15 AM', title: 'Dolphin Watching in the Open Bay', description: 'Look for dolphin pods gliding through the ocean waves with respectful captain maneuvering.' },
      { time: '09:30 AM', title: 'Mnemba House Reef Snorkeling', description: 'Submerge into warm turquoise waters surrounded by thousands of colorful tropical fish.' },
      { time: '11:00 AM', title: 'Fruit Feast & Sandbank Stop', description: 'Enjoy sweet tropical fruits anchored near the turquoise sandbank shallows.' },
      { time: '12:00 PM', title: 'Return to Shore', description: 'Dock back on the beach with wonderful footage and lifelong memories.' }
    ],
    whatToBring: ['Swimwear & beach towel', 'Eco-friendly sunscreen', 'GoPro or waterproof camera', 'Warm light windbreaker for morning breeze']
  },
  {
    id: 'stone-town-walking',
    title: 'Stone Town Cultural & Historical Heritage Walk',
    subtitle: 'Labyrinthine Alleys, Swahili Architecture & Untold Stories',
    category: 'heritage',
    categoryLabel: 'Culture & History',
    duration: '3 Hours',
    priceUSD: 35,
    badge: 'UNESCO Heritage',
    image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80',
    rating: 4.8,
    reviewsCount: 96,
    description: 'Immerse yourself in centuries of Swahili, Arab, Persian, and Indian history as you navigate the narrow alleys, carved doors, and bustling spice bazaars.',
    longDescription: 'Stone Town is the cultural beating heart of Zanzibar—a UNESCO World Heritage site that whispers tales of sultans, explorers, spice merchants, and tragic human history. Led by a knowledgeable local historian born and raised in Stone Town, this intimate walking tour winds through narrow cobblestone alleys that cars cannot enter. Discover the legendary carved Zanzibari brass-studded doors, the poignant Former Slave Market and Christ Church Anglican Cathedral, the Old Arab Fort, the House of Wonders (Beit al-Ajaib), Freddie Mercury’s birthplace, and the electric buzz of Darajani Food & Spice Market.',
    highlights: [
      'Deep historical exploration of UNESCO World Heritage Stone Town',
      'Visit the Anglican Cathedral built over the whipping post of the Former Slave Market',
      'Admire the historic Arab Old Fort and Sultan’s Palace seafront',
      'Decode the symbols on ornate Zanzibari carved wooden doors',
      'Walk through the vibrant sensory corridors of Darajani Spice Market'
    ],
    included: [
      'Certified local historian and Stone Town native guide',
      'Slave Market Memorial & Anglican Cathedral entrance tickets',
      'Local Swahili street spice coffee/tea tasting and dates',
      'Curated recommendations for authentic local dining and hidden rooftop bars'
    ],
    notIncluded: [
      'Personal souvenir shopping',
      'Guide gratuity'
    ],
    itinerary: [
      { time: '09:00 AM / 02:00 PM', title: 'Old Fort / Forodhani Rendezvous', description: 'Meet your guide at the iconic Old Fort and commence the cultural journey.' },
      { time: '09:30 AM', title: 'Former Slave Market & Memorial', description: 'Reflect upon the solemn history in the underground slave chambers and cathedral.' },
      { time: '10:30 AM', title: 'Darajani Market & Spice Scents', description: 'Smell, touch, and taste fresh cloves, cinnamon, vanilla, and island produce.' },
      { time: '11:15 AM', title: 'Alleys, Carved Doors & Freddie Mercury', description: 'Wander past coral stone palaces, antique shops, and the childhood home of Freddie Mercury.' },
      { time: '12:00 PM', title: 'Swahili Kahawa Tasting', description: 'Conclude with freshly brewed Zanzibari ginger coffee and traditional sesame sweets.' }
    ],
    whatToBring: ['Modest attire covering shoulders and knees (respectful of local Swahili culture)', 'Comfortable walking sneakers or flat sandals', 'Hat and sunglasses', 'Cash for spices & handcrafted souvenirs']
  },
  {
    id: 'kiwengwa-sunset-jetski',
    title: 'Kiwengwa Beach, Jet Ski & Sunset Experience',
    subtitle: 'East Coast Powder Sand, Adrenaline Waves & Sunset Cocktails',
    category: 'adventure',
    categoryLabel: 'Adventure & Sunset',
    duration: '4 - 5 Hours',
    priceUSD: 85,
    badge: 'Romantic & Thrilling',
    image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1200&q=80',
    rating: 4.9,
    reviewsCount: 77,
    description: 'Bask on the glorious white palms of Kiwengwa beach, ride modern high-speed jet skis across sparkling waves, and toast the sunset with romantic beach dining.',
    longDescription: 'Kiwengwa Beach on Zanzibar’s eastern coast is celebrated for its powder-fine white sand and expansive low-tide turquoise shallows. This curated experience balances thrilling water sports with peaceful coastal romance. Kick off your afternoon with an exhilarating session riding high-powered Yamaha jet skis alongside our licensed sea instructors, feeling the spray and speed across the open bay. As the golden hour approaches, relax on plush beach loungers with fresh chilled coconuts, watch the dhows sail in silhouette, and enjoy romantic seaside dining arrangements as the sun dips below the horizon.',
    highlights: [
      'Relaxation at premier Kiwengwa beach club with lounger access',
      'Thrilling jet ski riding session with licensed marine safety instructor',
      'Stunning golden hour photography and cinematic drone opportunities',
      'Romantic beach setup with fresh madafu (young coconuts) or sundowner drinks',
      'Access to top beachside seafood restaurants and lounges'
    ],
    included: [
      'Beach club admission and sunbed reservations',
      '30-minute high-performance Jet Ski ride per person (solo or tandem)',
      'Lifejacket, safety briefing & licensed instructor supervision',
      'Welcome fresh coconut water (Madafu)',
      'Beach towels & shower facilities'
    ],
    notIncluded: [
      'Additional jet ski ride extensions',
      'Full dinner and alcoholic beverages'
    ],
    itinerary: [
      { time: '02:30 PM', title: 'Arrival at Kiwengwa Beach Club', description: 'Settle into your beachfront daybed with a cool tropical drink.' },
      { time: '03:30 PM', title: 'Jet Ski Safety Briefing & High Seas Action', description: 'Suit up in life vests and throttle across the shimmering coastal waves.' },
      { time: '04:30 PM', title: 'Beach Stroll & Low Tide Lagoon Dip', description: 'Swim in the warm turquoise shallows and photograph the vibrant sand patterns.' },
      { time: '05:45 PM', title: 'Sunset Golden Hour & Sundowners', description: 'Relax as the sky turns fiery crimson and amber over the palms.' },
      { time: '07:00 PM', title: 'Optional Romantic Seaside Dinner', description: 'Indulge in fresh lobster or Swahili curries right by the water.' }
    ],
    whatToBring: ['Swimwear & change of dry clothes', 'Sunglasses with strap', 'Sunscreen', 'Waterproof phone case', 'Evening casual resort-wear']
  },
  {
    id: 'sea-turtles-discovery',
    title: 'Baraka Sea Turtle Sanctuary & Natural Lagoon',
    subtitle: 'Nungwi Natural Tidal Aquarium & Ethical Marine Conservation',
    category: 'marine',
    categoryLabel: 'Conservation & Eco',
    duration: '2.5 - 3 Hours',
    priceUSD: 40,
    badge: 'Family Favorite',
    image: 'https://images.unsplash.com/photo-1544551763-8dd44758c2dd?auto=format&fit=crop&w=1200&q=80',
    rating: 4.8,
    reviewsCount: 142,
    description: 'Swim in a natural tidal limestone lagoon alongside rescued green and hawksbill sea turtles, feeding them fresh seaweed while supporting conservation.',
    longDescription: 'Located in Nungwi at the northern tip of Zanzibar, the Baraka Natural Sea Turtle Aquarium is a limestone grotto carved naturally by millions of years of ocean tides. Local fishermen established this non-profit sanctuary to rehabilitate sea turtles accidentally caught in fishing nets before safely releasing them back into the deep ocean. Visitors can step down stone steps directly into the clear saltwater pool to feed fresh green sea lettuce to friendly turtles and swim alongside them in a calm, supervised environment, capturing once-in-a-lifetime photos.',
    highlights: [
      'Step into a natural limestone seawater grotto filled by the ocean tide',
      'Hand-feed bundles of fresh sea weed to friendly sea turtles',
      'Swim gently alongside majestic green and hawksbill turtles',
      'Learn about turtle hatching seasons, nesting, and conservation biology',
      'Every visit directly finances local fishermen rescue programs'
    ],
    included: [
      'Baraka Turtle Aquarium conservation entry fees',
      'Seaweed for feeding the turtles',
      'Guided environmental briefing by sanctuary caretakers',
      'Changing rooms & fresh water rinse'
    ],
    notIncluded: [
      'Underwater camera rental (you may bring your own phone/GoPro)',
      'Return ground transportation (can be bundled)'
    ],
    itinerary: [
      { time: '10:00 AM', title: 'Sanctuary Arrival & Welcome', description: 'Arrive at the lush coastal grotto in Nungwi and receive conservation background.' },
      { time: '10:20 AM', title: 'Turtle Feeding Demonstration', description: 'Collect fresh marine greens and feed turtles from the stone platform.' },
      { time: '10:50 AM', title: 'Lagoon Swimming Session', description: 'Enter the cool, refreshing saltwater pool for gentle swimming and photos.' },
      { time: '11:45 AM', title: 'Conservation Discussion & Photos', description: 'Q&A on Zanzibar marine protection and review your amazing shots.' }
    ],
    whatToBring: ['Swimwear & towel', 'Eco-friendly biodegradable sunscreen', 'Water shoes or sandals', 'GoPro or waterproof camera']
  },
  {
    id: 'the-rock-zanzibar',
    title: 'The Rock Restaurant & Michamvi Sunset Experience',
    subtitle: 'Where the Ocean Meets the Soul • World-Famous Coral Dining',
    category: 'adventure',
    categoryLabel: 'Iconic Wonder',
    duration: '4 - 5 Hours',
    priceUSD: 70,
    badge: 'World Famous',
    image: '/images/the-rock-zanzibar.jpg',
    rating: 5.0,
    reviewsCount: 164,
    description: 'Visit the world-renowned The Rock restaurant perched atop a coral islet in the crystal turquoise Indian Ocean at Michamvi, followed by breathtaking sunset sundowners.',
    longDescription: 'Where the ocean meets the soul. Perched dramatically on an ancient coral rock in the calm turquoise shallows of Michamvi Pingwe beach, The Rock Restaurant is one of the most photographed icons on Earth. At low tide, you can walk across shimmering white sand to its wooden staircase; at high tide, a wooden dhow boat ferries you across the crystal blue water. Enjoy fresh tropical drinks, ocean breezes, and a private tour of Michamvi peninsula and Kae Funk sunset lagoon.',
    highlights: [
      'Iconic photoshoot at The Rock Restaurant with crystal turquoise backdrop',
      'Table reservation assistance & ocean-view terrace access',
      'Wooden boat shuttle across the tidal lagoon during high tide',
      'Sunset relaxation at Michamvi Kae Funk with chilled coconut drinks',
      'Comfortable private air-conditioned return transfer'
    ],
    included: [
      'Private air-conditioned roundtrip vehicle transfer',
      'Table reservation coordination at The Rock',
      'Scenic wooden boat shuttle to the rock platform',
      'Licensed local guide & photo assistance',
      'Complimentary fresh bottled mineral water'
    ],
    notIncluded: [
      'Food and drinks ordered at The Rock Restaurant (paid directly)',
      'Personal shopping'
    ],
    itinerary: [
      { time: '01:30 PM', title: 'Pickup from Stone Town / Hotel', description: 'Scenic drive across Zanzibar spice groves towards the southeast peninsula.' },
      { time: '02:45 PM', title: 'Arrival at Michamvi Pingwe Beach', description: 'Gaze out at The Rock standing proudly surrounded by 50 shades of turquoise blue.' },
      { time: '03:15 PM', title: 'The Rock Experience & Photoshoot', description: 'Ascend the wooden stairs, capture unforgettable photos, and sip chilled beverages.' },
      { time: '05:00 PM', title: 'Kae Funk Sunset Beach Lounge', description: 'Head to the western bay of Michamvi for one of the most spectacular sunsets in Zanzibar.' },
      { time: '06:45 PM', title: 'Comfortable Return Transfer', description: 'Relax on the drive back with timeless memories and photos.' }
    ],
    whatToBring: ['Camera or smartphone', 'Smart-casual beach attire', 'Sunglasses & sunhat', 'Cash or card for dining at The Rock']
  }
];

export const PACKAGES_DATA: TourPackage[] = [
  {
    id: 'stone-town-explorer',
    title: 'Stone Town Explorer',
    tagline: 'Walking Tour + Cultural Attractions + Spice Bazaar',
    duration: '1 Full Day',
    priceUSD: 50,
    badge: 'Cultural Immersion',
    image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80',
    description: 'A deep cultural journey through the ancient stone corridors, Sultanate palaces, spice markets, and Swahili coffee traditions.',
    toursIncluded: ['Stone Town Heritage Walking Tour', 'Darajani Spice Market Experience', 'Anglican Slave Memorial', 'Local Swahili Coffee & Delicacies Tasting'],
    idealFor: 'Culture lovers, history enthusiasts, and solo/couple travelers.',
    features: ['Licensed historian guide', 'All museum & memorial admissions', 'Spice tasting session', 'Curated photo stops at iconic Zanzibari doors']
  },
  {
    id: 'island-escape',
    title: 'Island Escape',
    tagline: 'Prison Island (Tortoises) + Nakupenda Sandbank Paradise',
    duration: '1 Full Day',
    priceUSD: 95,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    description: 'Zanzibar’s most famous combination: spend your morning with 190-year-old giant tortoises and your afternoon dining on grilled lobster on an open-ocean sandbank.',
    toursIncluded: ['Prison Island Historical Tour', 'Aldabra Giant Tortoises Interaction', 'Nakupenda Sandbank Expedition', 'Grand Seafood BBQ Banquet on the Sand'],
    idealFor: 'Couples, families, and first-time Zanzibar visitors.',
    features: ['Full day private boat with captain', 'Huge seafood banquet + tropical fruits', 'Snorkeling gear included', 'Shaded beach tent on sandbank']
  },
  {
    id: 'ocean-adventure',
    title: 'Ocean Adventure',
    tagline: 'Coral Reef Snorkeling + Marine Reserve Expedition',
    duration: 'Half Day (5 Hours)',
    priceUSD: 65,
    badge: 'Marine Life',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    description: 'Dive into Zanzibar’s clearest turquoise shallows. Explore vibrant coral reefs teeming with exotic marine life, sea stars, and tropical schools of fish.',
    toursIncluded: ['Multi-Stop Coral Reef Snorkeling', 'Marine Reserve Sanctuary Access', 'Sandbank Swimming Stop', 'Boat Fruit & Refreshment Service'],
    idealFor: 'Snorkelers, ocean enthusiasts, and marine photographers.',
    features: ['High-end sanitized snorkeling gear', 'Certified PADI marine guide', 'Fresh tropical fruit buffet on boat', 'High visibility reef locations']
  },
  {
    id: 'dolphin-experience',
    title: 'Dolphin Experience',
    tagline: 'Mnemba Atoll Dolphin Tour + Pristine Lagoon Snorkeling',
    duration: 'Half Day (5 Hours)',
    priceUSD: 70,
    badge: 'Wild Wonders',
    image: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=800&q=80',
    description: 'Witness wild spinner and bottlenose dolphins in their natural habitat with our ethical wildlife protocol, followed by snorkeling in Mnemba’s legendary aquarium waters.',
    toursIncluded: ['Ethical Dolphin Watching Cruise', 'Mnemba House Reef Snorkeling', 'Muyuni Bay Scenic Coastal Navigation', 'Tropical Refreshments on Boat'],
    idealFor: 'Wildlife photographers, honeymooners, and families.',
    features: ['Eco-friendly boat handling (no harassment)', 'Mnemba conservation marine permits', 'Underwater photography support', 'Fresh pineapple & watermelon']
  },
  {
    id: 'turtle-discovery',
    title: 'Turtle Discovery',
    tagline: 'Sea Turtle Conservation Experience + Lagoon Swimming',
    duration: 'Half Day (4 Hours)',
    priceUSD: 55,
    badge: 'Eco-Tourism',
    image: 'https://images.unsplash.com/photo-1544551763-8dd44758c2dd?auto=format&fit=crop&w=800&q=80',
    description: 'Connect with nature at Baraka natural tidal sanctuary. Learn about turtle rehabilitation, feed them fresh seaweed, and swim in the crystal blue pool.',
    toursIncluded: ['Baraka Turtle Sanctuary Guided Tour', 'Natural Lagoon Swim with Rescued Turtles', 'Conservation Lecture & Seaweed Feeding', 'Nungwi Traditional Dhow Boatbuilders Walk'],
    idealFor: 'Eco-travelers, animal lovers, and children of all ages.',
    features: ['Sanctuary conservation admissions included', 'Safe supervised natural pool swimming', 'Hand-feeding experience', 'Local dhow construction stop']
  },
  {
    id: 'kiwengwa-escape',
    title: 'Kiwengwa Escape',
    tagline: 'Pristine Beach Experience + Sunset Ocean Viewing',
    duration: 'Afternoon to Sunset',
    priceUSD: 75,
    badge: 'Serenity & Sunset',
    image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=800&q=80',
    description: 'Escape to the tranquil eastern shores. Unwind on powder-soft beaches, swim in clear warm lagoons, and enjoy golden hour cocktails as the sun sets over the dhows.',
    toursIncluded: ['East Coast Beach Club Lounger Access', 'Sunset Ocean Viewing & Photo Session', 'Welcome Chilled Coconut (Madafu)', 'Beachfront Lounge Atmosphere'],
    idealFor: 'Honeymooners, couples seeking romantic serenity, and small groups.',
    features: ['Reserved beachfront sunbeds', 'Fresh tropical coconuts & bites', 'Sunset photoshoot assistance', 'Clean shower & locker facilities']
  },
  {
    id: 'adrenaline-experience',
    title: 'Adrenaline Experience',
    tagline: 'Kiwengwa Beach Waves + High-Speed Jet Ski Session',
    duration: 'Half Day (4 Hours)',
    priceUSD: 120,
    badge: 'High Octane',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    description: 'Feel the rush of adrenaline carving through open ocean waves on a high-performance Jet Ski along Zanzibar’s most scenic coastline, backed by beach relaxation.',
    toursIncluded: ['High-Performance Jet Ski Session', 'Professional Marine Safety Instructor', 'Kiwengwa Beach Club Day Pass', 'Action GoPro / Drone Photoshoot Option'],
    idealFor: 'Adventure seekers, young couples, and active friend groups.',
    features: ['Licensed top-spec Yamaha Jet Skis', 'Comprehensive safety gear & briefing', 'Open ocean throttle freedom', 'Beach club amenities included']
  },
  {
    id: 'zanzibar-complete',
    title: 'Zanzibar Complete Experience',
    tagline: 'Boutique Stone Town Apartment Stay + All Signature Tours',
    duration: '4 Days / 3 Nights',
    priceUSD: 480,
    badge: 'Signature Luxury',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    description: 'The ultimate turnkey Zanzibar holiday. Includes 3 nights in our curated Stone Town apartment, airport VIP transfers, Prison Island, Nakupenda Sandbank, Mnemba dolphins, and 24/7 concierge.',
    toursIncluded: [
      '3 Nights in Stone Town Luxury Apartment',
      'VIP Airport / Ferry Return Transfers',
      'Prison Island & Aldabra Tortoises Tour',
      'Nakupenda Sandbank Seafood BBQ Day',
      'Mnemba Atoll Dolphin & Reef Snorkeling',
      'Stone Town Historical Guided Walk',
      '24/7 Dedicated Siribrand Island Concierge'
    ],
    idealFor: 'Discerning travelers, honeymoon couples, and VIP guests.',
    features: [
      'Full private modern apartment with balcony & AC',
      'Seamless transport logistics with private air-conditioned van',
      'All tour admissions, boat fees & gourmet lunches included',
      'Complimentary professional photo & reel package by Siribrand Media'
    ]
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: '1',
    name: 'Peter Joseph',
    country: 'Tanzania',
    flag: '🇹🇿',
    date: 'November 2026',
    rating: 5,
    tour: 'Zanzibar Complete Luxury Experience',
    comment: 'Siribrand delivers the absolute pinnacle of Zanzibar luxury and hospitality. From seamless private airport escort and the breathtaking Stone Town suite to the private Nakupenda Sandbank seafood banquet—every single detail was world-class. Truly an unforgettable bespoke experience!',
    avatar: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: '2',
    name: 'Charlotte & James Dupont',
    country: 'United Kingdom',
    flag: '🇬🇧',
    date: 'October 2026',
    rating: 5,
    tour: 'Island Escape (Prison Island + Nakupenda)',
    comment: 'Siribrand curated the most effortless and magical holiday we have ever experienced! The Stone Town apartment was immaculate with authentic charm and high-speed WiFi. The Nakupenda seafood banquet was culinary perfection, and meeting the ancient tortoises on Prison Island was unforgettable. Truly 5-star service!',
    avatar: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: '3',
    name: 'Henrik Van Der Meer',
    country: 'Netherlands',
    flag: '🇳🇱',
    date: 'July 2026',
    rating: 5,
    tour: 'Mnemba Dolphin & Snorkeling',
    comment: 'What impressed me most was their strict adherence to ethical dolphin tourism. Unlike other boats that chased the pods, our captain respected their space and the dolphins ended up swimming right alongside us. The reef at Mnemba felt like swimming inside a tropical aquarium.',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: '4',
    name: 'Elena Rostova',
    country: 'Germany',
    flag: '🇩🇪',
    date: 'March 2026',
    rating: 5,
    tour: 'Stone Town Cultural Walk & Suite Stay',
    comment: 'If you do only one tour in Zanzibar, do the Island Escape with Siribrand! The fruit platter was so sweet, the grilled lobster was fresh out of the sea, and having Siribrand take professional photos and drone reels of our honeymoon made all the difference.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: '5',
    name: 'Osmunda Joseph',
    country: 'Tanzania',
    flag: '🇹🇿',
    date: 'September 2026',
    rating: 5,
    tour: 'Nakupenda Sandbank & Private Seafood Feast',
    comment: 'Traveling with Siribrand was the highlight of our entire year! The Nakupenda Sandbank excursion was organized with sheer elegance—fresh succulent lobster, flawless private boat transfers, and crystal-clear turquoise waters. The warm hospitality made us feel truly cherished.',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: '6',
    name: 'Irene Jim & Stewart Lincoln',
    country: 'United States',
    flag: '🇺🇸',
    date: 'May 2026',
    rating: 5,
    tour: 'Mnemba Atoll & Sunset Dhow Cruise',
    comment: 'From our very first inquiry to our sunset dhow farewell, Siribrand’s concierge exceeded every single expectation. Snorkeling alongside vibrant marine life at Mnemba Atoll followed by golden hour sailing with local Swahili delicacies was pure magic. Unbeatable boutique service!',
    avatar: 'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&w=400&q=80'
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    category: 'Booking & Payments',
    question: 'How do I confirm a tour or apartment booking?',
    answer: 'You can book directly via our online inquiry form or click our direct WhatsApp Concierge (+255 692 590 012). We confirm your dates, itinerary, and send a transparent digital confirmation with flexible payment options (cash on arrival, bank transfer, or card/mobile money).'
  },
  {
    category: 'Activities & Safety',
    question: 'Is the Nakupenda Sandbank and boat trip safe for non-swimmers and kids?',
    answer: 'Yes, absolutely! All our boats are equipped with certified life vests for both adults and children. Nakupenda Sandbank slopes very gently into crystal clear, calm water with zero rough currents. We also provide floating aids and our certified guides stay with guests at all times.'
  },
  {
    category: 'Wildlife Ethics',
    question: 'What is Siribrand’s policy on dolphin and turtle interactions?',
    answer: 'We strictly follow responsible wildlife tourism standards outlined in our company charter. We never chase, surround, touch, or harass wild dolphins in Mnemba. At the Baraka turtle sanctuary, interactions are respectful and support feeding and local marine rescue operations.'
  },
  {
    category: 'Accommodation',
    question: 'Where is the Siribrand Stone Town Apartment located and what is included?',
    answer: 'Our luxury apartment is located in the safe, vibrant historic heart of Stone Town, within walking distance of the seafront, Forodhani Gardens, and top restaurants. It features a private balcony, air-conditioned bedroom, modern living lounge, hot rainfall shower, fast fiber WiFi, and daily housekeeping.'
  },
  {
    category: 'Media & Storytelling',
    question: 'Do you offer professional photography and drone services for guests?',
    answer: 'Yes! As a branch of Siribrand Agency TZ (a leading digital media and branding firm), we offer dedicated professional photography and 4K aerial drone vacation reels for couples, honeymoons, and content creators. Packages can be customized to include edited photos and ready-to-post Instagram/TikTok reels.'
  },
  {
    category: 'Transfers & Logistics',
    question: 'Do you provide airport and ferry transfers?',
    answer: 'Yes, we provide comfortable, private air-conditioned VIP van and car transfers from Abeid Amani Karume International Airport (ZNZ) and the Stone Town ferry terminal to all hotels and resorts across Zanzibar (Nungwi, Kendwa, Paje, Jambiani, Kiwengwa).'
  }
];

export const GALLERY_IMAGES = [
  { url: '/images/the-rock-zanzibar.jpg', title: 'The Rock Restaurant Zanzibar', category: 'Beaches' },
  { url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80', title: 'Aldabra Giant Tortoises', category: 'Wildlife' },
  { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80', title: 'Nakupenda Sandbank Shallows', category: 'Beaches' },
  { url: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80', title: 'Historic Stone Town Alleys', category: 'Culture' },
  { url: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=800&q=80', title: 'Mnemba Atoll Dolphins', category: 'Marine' },
  { url: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=800&q=80', title: 'Kiwengwa Beach Golden Hour', category: 'Beaches' },
  { url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80', title: 'Stone Town Luxury Apartment Suite', category: 'Stays' },
  { url: 'https://images.unsplash.com/photo-1544551763-8dd44758c2dd?auto=format&fit=crop&w=800&q=80', title: 'Rescued Green Sea Turtles', category: 'Wildlife' },
  { url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80', title: 'Private Dhow Sunset Cruise', category: 'Marine' }
];
