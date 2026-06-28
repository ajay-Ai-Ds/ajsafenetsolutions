export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  service: string;
  comment: string;
}

export const reviews: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Rajesh Kumar",
    location: "Whitefield, Bangalore",
    rating: 5,
    date: "2026-05-15",
    service: "Pigeon Safety Nets",
    comment: "Extremely professional service. The team visited on the same day I called, took measurements, and installed the pigeon nets on my 12th-floor balcony the next day. The net is barely visible and our pigeon problem is 100% resolved. Highly recommended!"
  },
  {
    id: "rev-2",
    name: "Priyanka Reddy",
    location: "Gachibowli, Hyderabad",
    rating: 5,
    date: "2026-05-28",
    service: "Invisible Grills",
    comment: "I was worried about my kids' safety on our balcony but didn't want to block the view with heavy iron rods. AJ Safety Net Solutions installed their 316 stainless steel invisible grills. The installation is clean, strong, and looks very premium. Worth every rupee."
  },
  {
    id: "rev-3",
    name: "Anand Viswanathan",
    location: "Adyar, Chennai",
    rating: 5,
    date: "2026-06-02",
    service: "Balcony Safety Nets",
    comment: "Excellent work done by Ajay's team. They used high-quality Garware safety nets with stainless steel hooks. Chennai's humid coastal air usually rusts iron hooks, but these SS 304 anchors are perfect. Very neat installation."
  },
  {
    id: "rev-4",
    name: "Meera Deshpande",
    location: "Kothrud, Pune",
    rating: 4,
    date: "2026-06-10",
    service: "Pigeon Safety Nets",
    comment: "Happy with the installation. The team was prompt and completed the pigeon netting on two balconies in under 3 hours. Prices are very reasonable compared to other quotes I received in Pune."
  },
  {
    id: "rev-5",
    name: "Vikram Malhotra",
    location: "Andheri West, Mumbai",
    rating: 5,
    date: "2026-06-12",
    service: "Invisible Grills",
    comment: "Installed invisible grills for our high-rise apartment windows. Very neat workmanship and top-grade SS 316 cables. Now I can leave windows open without worrying about my toddler's safety. Excellent safety solution."
  },
  {
    id: "rev-6",
    name: "Sunita Sharma",
    location: "Dwarka, Delhi",
    rating: 5,
    date: "2026-06-14",
    service: "Children Safety Nets",
    comment: "Very sturdy safety nets. The installers double-knotted the border ropes and anchored it tightly. It feels very secure when my kids play near the balcony. Highly recommend AJ Safety Net Solutions."
  },
  {
    id: "rev-7",
    name: "Debashis Banerjee",
    location: "Salt Lake, Kolkata",
    rating: 5,
    date: "2026-06-18",
    service: "Bird Safety Nets",
    comment: "We had a severe crow and pigeon problem in our apartment building's plumbing shaft. AJ Safety Nets installed a huge duct area safety net. The birds are completely blocked. Great team and professional execution."
  },
  {
    id: "rev-8",
    name: "Harish Patel",
    location: "Satellite, Ahmedabad",
    rating: 4,
    date: "2026-06-20",
    service: "Monkey Safety Nets",
    comment: "Monkeys were entering our balcony and damaging our plants daily. AJ's team suggested wire-reinforced monkey safety nets. It's been two weeks and not a single monkey has been able to tear or bypass the net. Lifesaver!"
  },
  {
    id: "rev-9",
    name: "Koteswara Rao",
    location: "Benz Circle, Vijayawada",
    rating: 5,
    date: "2026-06-22",
    service: "Cloth Hangers",
    comment: "Super space-saving ceiling clothes dryer installed by AJ team. The pipes slide up and down very smoothly. Excellent quality pulleys and stainless steel rods. Saves a lot of floor space in my balcony."
  },
  {
    id: "rev-10",
    name: "Srinivas Naidu",
    location: "MVP Colony, Visakhapatnam",
    rating: 5,
    date: "2026-06-24",
    service: "Balcony Safety Nets",
    comment: "Highly durable materials used for our beachfront balcony. The team was highly experienced, used safety harness during installation, and finished the work in a clean manner. Very professional."
  },
  {
    id: "rev-11",
    name: "Amit Singhal",
    location: "Noida Sector 62, Delhi NCR",
    rating: 5,
    date: "2026-06-25",
    service: "Pigeon Safety Nets",
    comment: "Quick response time. I WhatsApped them my balcony photos and they sent a reasonable quote. The technicians came on time and fixed the pigeon net with high precision. Satisfied customer."
  },
  {
    id: "rev-12",
    name: "Rohan Phadke",
    location: "Hinjewadi, Pune",
    rating: 5,
    date: "2026-06-26",
    service: "Cricket Safety Nets",
    comment: "We hired them to build a cricket practice net on our apartment rooftop. They built a heavy-duty cage frame and installed top-class HDPE nets. The ball doesn't escape and the net handles hard-hit shots easily."
  },
  {
    id: "rev-13",
    name: "Kavitha Krishnan",
    location: "Velachery, Chennai",
    rating: 4,
    date: "2026-06-27",
    service: "Cloth Hangers",
    comment: "Ceiling hanger system works very well. Easy to raise and lower the individual pipes. The installation team explained the operation clearly. Neat job."
  },
  {
    id: "rev-14",
    name: "Sanjay Rao",
    location: "Jubilee Hills, Hyderabad",
    rating: 5,
    date: "2026-06-28",
    service: "Pigeon Safety Nets",
    comment: "The pigeons were making our balcony unusable. AJ Safety Net Solutions fixed a transparent net that is literally invisible from our living room, yet keeps the birds out. Outstanding job by Ajay and team."
  },
  {
    id: "rev-15",
    name: "Madhavan Swamy",
    location: "Indiranagar, Bangalore",
    rating: 5,
    date: "2026-06-28",
    service: "Balcony Safety Nets",
    comment: "Highly recommend AJ Safety Nets for their clean workmanship. The hooks are spaced closely, net tension is extremely tight, and they cleaned up the drilling dust before leaving. Truly professional."
  }
];

export function getLatestReviews(limit = 6): ReviewItem[] {
  return [...reviews].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, limit);
}

export function getAverageRating(): { rating: number; count: number } {
  const total = reviews.reduce((sum, r) => sum + r.rating, 0);
  return {
    rating: Number((total / reviews.length).toFixed(1)),
    count: reviews.length
  };
}
