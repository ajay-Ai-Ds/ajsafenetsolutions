export interface CityData {
  slug: string;
  name: string;
  tagline: string;
  areas: string[];
  climate: string;
  pigeonProblem: string;
  localLandmarks: string[];
}

export const cities: CityData[] = [
  {
    slug: "bangalore",
    name: "Bangalore",
    tagline: "India's Silicon Valley's Leading Safety Net & Invisible Grill Provider",
    areas: ["Whitefield", "Koramangala", "HSR Layout", "Indiranagar", "Marathahalli", "Electronic City", "Jayanagar", "JP Nagar", "Hebbal", "Bellandur", "Sarjapur", "Domlur", "Yelahanka", "BTM Layout", "Banashankari"],
    climate: "pleasant climate with intense UV radiation during summer months that degrades cheap nets",
    pigeonProblem: "highly populated high-rise IT corridor apartments and villas that attract pigeons to balcony nesting spots",
    localLandmarks: ["Cubbon Park", "Lalbagh Botanical Garden", "Manyata Tech Park", "Nandi Hills", "Vidhana Soudha"]
  },
  {
    slug: "hyderabad",
    name: "Hyderabad",
    tagline: "Trusted Protection for High-Rises & Villas in the City of Pearls",
    areas: ["Gachibowli", "Madhapur", "Jubilee Hills", "Banjara Hills", "Kondapur", "Miyapur", "Kukatpally", "Secunderabad", "Begumpet", "Ameerpet", "Hitech City", "Nanakramguda", "Manikonda", "LB Nagar", "Uppal"],
    climate: "hot and dry summer environment requiring high thermal stability and UV degradation resistance",
    pigeonProblem: "expanding IT corridors and multi-story corporate towers providing ideal ledge nesting for pigeons",
    localLandmarks: ["Charminar", "Golconda Fort", "Hussain Sagar Lake", "Cyber Towers", "Birla Mandir"]
  },
  {
    slug: "chennai",
    name: "Chennai",
    tagline: "Corrosion-Free Invisible Grills & Premium Safety Nets in Gateway to the South",
    areas: ["Adyar", "Anna Nagar", "Velachery", "OMR (Old Mahabalipuram Road)", "Tambaram", "T Nagar", "Mylapore", "Nungambakkam", "Ecr (East Coast Road)", "Chromepet", "Guindy", "Besant Nagar", "Perambur", "Medavakkam", "Porur"],
    climate: "highly humid coastal climate with salty air that rapidly rusts metal and degrades non-marine grade safety nets",
    pigeonProblem: "dense coastal residential structures and high-rises where nesting birds cause severe sanitation and health hazards",
    localLandmarks: ["Marina Beach", "Kapaleeshwarar Temple", "Santhome Cathedral", "VGP Universal Kingdom", "Chennai Central"]
  },
  {
    slug: "pune",
    name: "Pune",
    tagline: "Premium Safety Net Solutions for Pune's Modern Residential Apartments",
    areas: ["Kothrud", "Baner", "Hinjewadi", "Wakad", "Viman Nagar", "Kharadi", "Hadapsar", "Aundh", "Pimple Saudagar", "Kalyani Nagar", "Koregaon Park", "Katraj", "Sinhagad Road", "Chinchwad", "Nigdi"],
    climate: "moderate climate with heavy monsoon rainfall requiring water-resistant and anti-fungal netting",
    pigeonProblem: "high-elevation residential balconies and industrial zones that suffer from nesting pigeons on duct areas and balconies",
    localLandmarks: ["Shaniwar Wada", "Aga Khan Palace", "Sinhagad Fort", "Dagadusheth Halwai Ganapati", "Chaturshringi Temple"]
  },
  {
    slug: "mumbai",
    name: "Mumbai",
    tagline: "High-Tensile Balcony Safety Nets & Invisible Grills for the City of Dreams",
    areas: ["Andheri", "Bandra", "Borivali", "Colaba", "Dadar", "Goregaon", "Juhu", "Kandivali", "Malad", "Mulund", "Powai", "Thane", "Navi Mumbai", "Worli", "Chembur"],
    climate: "extreme tropical monsoon climate with high salinity levels requiring premium 316-grade stainless steel invisible grills and rustproof nets",
    pigeonProblem: "congested high-rises and skyscrapers where birds find nesting space on duct lines and window AC ledges",
    localLandmarks: ["Gateway of India", "Marine Drive", "Siddhivinayak Temple", "Chhatrapati Shivaji Terminus", "Bandra-Worli Sea Link"]
  },
  {
    slug: "delhi",
    name: "Delhi",
    tagline: "Certified Anti-Bird & Balcony Safety Net Installation in the Capital Region",
    areas: ["Dwarka", "Saket", "Vasant Kunj", "Rohini", "Connaught Place", "Lajpat Nagar", "Karol Bagh", "Rajouri Garden", "South Extension", "Mayur Vihar", "Janakpuri", "Pitampura", "Greater Kailash", "Noida", "Gurugram"],
    climate: "extreme temperature variations between scorching summers and chilly winters requiring high-elasticity polymers",
    pigeonProblem: "sprawling residential flats and historic buildings plagued by massive pigeon droppings on open balconies",
    localLandmarks: ["India Gate", "Qutub Minar", "Red Fort", "Lotus Temple", "Humayun's Tomb"]
  },
  {
    slug: "kolkata",
    name: "Kolkata",
    tagline: "Durable Safety Solutions for Heritage & Modern Architecture in the City of Joy",
    areas: ["Salt Lake", "New Town", "Rajarhat", "Tollygunge", "Garia", "Behala", "Howrah", "Jadavpur", "Dum Dum", "Lake Town", "Alipore", "Ballygunge", "Park Street", "Shyambazar", "Barasat"],
    climate: "hot, wet, and humid climate subject to frequent tropical storms requiring heavy-duty anchor installations",
    pigeonProblem: "traditional ventilation shafts and window boxes that serve as unchecked breeding grounds for local pigeons",
    localLandmarks: ["Victoria Memorial", "Howrah Bridge", "Dakshineswar Kali Temple", "Science City", "Indian Museum"]
  },
  {
    slug: "ahmedabad",
    name: "Ahmedabad",
    tagline: "India's First Heritage City's Trusted Safety Net & Invisible Grill Dealers",
    areas: ["Satellite", "C G Road", "S G Highway", "Bodakdev", "Bopal", "Ghatlodia", "Maninagar", "Paldi", "Ranip", "Naranpura", "Vastrapur", "Prahlad Nagar", "Motera", "Sabarmati", "Chandkheda"],
    climate: "arid and dry climate with soaring summer heat requiring advanced UV-stabilized heavy HDPE nets",
    pigeonProblem: "widespread commercial complexes and residential apartments where birds roost on windows and open terraces",
    localLandmarks: ["Sabarmati Ashram", "Adalaj Stepwell", "Kankaria Lake", "Sidi Saiyyed Mosque", "Science City"]
  },
  {
    slug: "vijayawada",
    name: "Vijayawada",
    tagline: "Local Safety Net & Invisible Grill Experts for Residential Apartments",
    areas: ["Benz Circle", "Patamata", "Moghalrajpuram", "Poranki", "Gannavaram", "One Town", "Gunadala", "Bhavanipuram", "Guru Nanak Nagar", "Kanuru", "Payakapuram", "Vidyadharapuram", "Governorpet", "Labbipet", "Ashok Nagar"],
    climate: "tropical wet and dry climate with intense summer temperatures requiring premium UV protection",
    pigeonProblem: "rapidly rising high-rise apartment construction around the city centre where pigeons seek shelter",
    localLandmarks: ["Kanakadurga Temple", "Prakasam Barrage", "Undavalli Caves", "Bhavani Island", "Gandhi Hill"]
  },
  {
    slug: "visakhapatnam",
    name: "Visakhapatnam",
    tagline: "Premium Coastal-Grade Safety Nets & Invisible Grills in the Jewel of the East Coast",
    areas: ["Gajuwaka", "Madhurawada", "MVP Colony", "Seethammadhara", "Siripuram", "Jagadamba Junction", "Akkayyapalem", "Pendurthi", "Gopalapatnam", "Kancharapalem", "Maharanipeta", "Rishikonda", "Yendada", "Rushikonda", "Bheemili"],
    climate: "salty marine atmosphere with high wind loads requiring exceptionally strong anchor fasteners and marine-grade nets",
    pigeonProblem: "beachfront apartments and high-rises where pigeons nest in duct areas and open vents, spreading allergens",
    localLandmarks: ["Kailasagiri", "Submarine Museum", "RK Beach", "Rushikonda Beach", "Simhachalam Temple"]
  }
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find(c => c.slug.toLowerCase() === slug.toLowerCase());
}
