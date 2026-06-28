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
    slug: "vijayawada",
    name: "Vijayawada",
    tagline: "Local Safety Net & Invisible Grill Experts for Residential Apartments in Vijayawada",
    areas: ["Benz Circle", "Governorpet", "MG Road", "Krishnalanka", "Patamata", "Moghalrajpuram", "Gunadala"],
    climate: "tropical wet and dry climate with intense summer temperatures requiring premium UV protection",
    pigeonProblem: "rapidly rising high-rise apartment construction around the city centre where pigeons seek shelter",
    localLandmarks: ["Kanakadurga Temple", "Prakasam Barrage", "Undavalli Caves", "Bhavani Island", "Gandhi Hill"]
  },
  {
    slug: "chennai",
    name: "Chennai",
    tagline: "Corrosion-Free Invisible Grills & Premium Safety Nets in Gateway to the South",
    areas: ["Anna Nagar", "Velachery", "OMR", "Porur", "Adyar", "Tambaram", "Chromepet", "T Nagar"],
    climate: "highly humid coastal climate with salty air that rapidly rusts metal and degrades non-marine grade safety nets",
    pigeonProblem: "dense coastal residential structures and high-rises where nesting birds cause severe sanitation and health hazards",
    localLandmarks: ["Marina Beach", "Kapaleeshwarar Temple", "Santhome Cathedral", "VGP Universal Kingdom", "Chennai Central"]
  },
  {
    slug: "bangalore",
    name: "Bangalore",
    tagline: "India's Silicon Valley's Leading Safety Net & Invisible Grill Provider",
    areas: ["Whitefield", "Koramangala", "Indiranagar", "HSR Layout", "JP Nagar", "Electronic City", "Marathahalli"],
    climate: "pleasant climate with intense UV radiation during summer months that degrades cheap nets",
    pigeonProblem: "highly populated high-rise IT corridor apartments and villas that attract pigeons to balcony nesting spots",
    localLandmarks: ["Cubbon Park", "Lalbagh Botanical Garden", "Manyata Tech Park", "Nandi Hills", "Vidhana Soudha"]
  },
  {
    slug: "pune",
    name: "Pune",
    tagline: "Premium Safety Net Solutions for Pune's Modern Residential Apartments",
    areas: ["Kothrud", "Baner", "Hinjewadi", "Wakad", "Viman Nagar", "Hadapsar", "Aundh"],
    climate: "moderate climate with heavy monsoon rainfall requiring water-resistant and anti-fungal netting",
    pigeonProblem: "high-elevation residential balconies and industrial zones that suffer from nesting pigeons on duct areas and balconies",
    localLandmarks: ["Shaniwar Wada", "Aga Khan Palace", "Sinhagad Fort", "Dagadusheth Halwai Ganapati", "Chaturshringi Temple"]
  }
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find(c => c.slug.toLowerCase() === slug.toLowerCase());
}
