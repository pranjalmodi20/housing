// Mock data database for HomeVerse Application

export const cities = [
  { id: 'mumbai', name: 'Mumbai', propertiesCount: '12,450+', image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=600&q=80' },
  { id: 'delhi', name: 'Delhi NCR', propertiesCount: '18,200+', image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80' },
  { id: 'bangalore', name: 'Bangalore', propertiesCount: '15,800+', image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=600&q=80' },
  { id: 'pune', name: 'Pune', propertiesCount: '9,150+', image: 'https://images.unsplash.com/photo-1601999109332-542b18dbec57?auto=format&fit=crop&w=600&q=80' },
  { id: 'hyderabad', name: 'Hyderabad', propertiesCount: '11,300+', image: 'https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?auto=format&fit=crop&w=600&q=80' },
  { id: 'chennai', name: 'Chennai', propertiesCount: '8,400+', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80' },
];

export const categories = [
  { id: 'buy', name: 'Buy Home', count: '45k+ Listings', icon: 'Home', link: '/buy' },
  { id: 'rent', name: 'Rent Home', count: '32k+ Listings', icon: 'Key', link: '/rent' },
  { id: 'commercial', name: 'Commercial', count: '12k+ Listings', icon: 'Building2', link: '/commercial' },
  { id: 'plots', name: 'Plots / Land', count: '8k+ Listings', icon: 'Compass', link: '/plots' },
  { id: 'pg', name: 'PG / Co-Living', count: '15k+ Listings', icon: 'Users', link: '/pg' },
];

export const properties = [
  {
    id: 1,
    title: 'Prestige Lakeside Habitat',
    price: 48500000, // 4.85 Cr
    priceLabel: '₹4.85 Cr',
    bhk: 4,
    type: 'Villa',
    locality: 'Whitefield',
    city: 'Bangalore',
    area: 4200, // sq.ft.
    badge: 'Exclusive',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1613977257592-4871e5fbe7c5?auto=format&fit=crop&w=800&q=80'
    ],
    verified: true,
    reraApproved: true,
    bathrooms: 4,
    furnishing: 'Semi-Furnished',
    facing: 'East',
    description: 'Beautiful 4 BHK luxury villa overlooking a serene lake. Located in the heart of Whitefield, this property boasts world-class amenities including a private pool, modern modular kitchen, private garden, and 24/7 security.',
    developer: 'Prestige Group',
    postedOn: '2 days ago'
  },
  {
    id: 2,
    title: 'Lodha World Tower',
    price: 72000000, // 7.2 Cr
    priceLabel: '₹7.20 Cr',
    bhk: 3,
    type: 'Apartment',
    locality: 'Bandra West',
    city: 'Mumbai',
    area: 1850,
    badge: 'Verified',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80'
    ],
    verified: true,
    reraApproved: true,
    bathrooms: 3,
    furnishing: 'Fully Furnished',
    facing: 'West',
    description: 'An elite 3 BHK luxury apartment offering high-end features and stunning views of the Arabian Sea. Furnished with imported Italian marble, custom automated lightings, central VRF air-conditioning, and 2 assigned parking slots.',
    developer: 'Lodha Group',
    postedOn: '1 week ago'
  },
  {
    id: 3,
    title: 'Koregaon Park Heights',
    price: 16500000, // 1.65 Cr
    priceLabel: '₹1.65 Cr',
    bhk: 2,
    type: 'Penthouse',
    locality: 'Koregaon Park',
    city: 'Pune',
    area: 1450,
    badge: 'Exclusive',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80'
    ],
    verified: true,
    reraApproved: true,
    bathrooms: 2,
    furnishing: 'Semi-Furnished',
    facing: 'North-East',
    description: 'A charming 2 BHK penthouse located in Pune\'s most premium residential green patch. Features a spacious private terrace garden, dedicated walk-in wardrobe space, and modular fixtures.',
    developer: 'Marvel Realtors',
    postedOn: '3 days ago'
  },
  {
    id: 4,
    title: 'DLF The Crest',
    price: 31000000, // 3.10 Cr
    priceLabel: '₹3.10 Cr',
    bhk: 3,
    type: 'Apartment',
    locality: 'Sector 54',
    city: 'Delhi NCR',
    area: 2400,
    badge: 'New Launch',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80'
    ],
    verified: true,
    reraApproved: true,
    bathrooms: 3,
    furnishing: 'Unfurnished',
    facing: 'South',
    description: 'State-of-the-art 3 BHK high-rise residential apartment in DLF Phase 5. The property is equipped with fire protection systems, luxury community center access, continuous water backup, and excellent road connectivity.',
    developer: 'DLF Group',
    postedOn: '4 days ago'
  },
  {
    id: 5,
    title: 'Green Meadows Residency',
    price: 7500000, // 75 Lakhs
    priceLabel: '₹75 Lakhs',
    bhk: 1,
    type: 'Apartment',
    locality: 'Koramangala',
    city: 'Bangalore',
    area: 720,
    badge: 'Verified',
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80'
    ],
    verified: true,
    reraApproved: false,
    bathrooms: 1,
    furnishing: 'Fully Furnished',
    facing: 'East',
    description: 'Cozy 1 BHK modern loft situated near Koramangala block 4. Excellent choice for young professionals, fully equipped with high-speed internet capability, smart lockers, modular kitchen, and power backup.',
    developer: 'Puravankara Limited',
    postedOn: 'Just now'
  },
  {
    id: 6,
    title: 'Aurobindo Kohinoor',
    price: 125000000, // 12.5 Cr
    priceLabel: '₹12.50 Cr',
    bhk: 5,
    type: 'Villa',
    locality: 'Jubilee Hills',
    city: 'Hyderabad',
    area: 6800,
    badge: 'Exclusive',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80'
    ],
    verified: true,
    reraApproved: true,
    bathrooms: 6,
    furnishing: 'Fully Furnished',
    facing: 'North',
    description: 'Palatial 5 BHK independent luxury bungalow in Hyderabad\'s most prestigious location. Multi-level architecture featuring home theatre lounge, private elevator, automated lawn sprinklers, security panic room, and servant quarters.',
    developer: 'Aurobindo Realty',
    postedOn: '5 days ago'
  },
  {
    id: 7,
    title: 'Casagrand ECR Signature',
    price: 29000000, // 2.90 Cr
    priceLabel: '₹2.90 Cr',
    bhk: 3,
    type: 'Villa',
    locality: 'ECR',
    city: 'Chennai',
    area: 2800,
    badge: 'New Launch',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
    ],
    verified: true,
    reraApproved: true,
    bathrooms: 3,
    furnishing: 'Semi-Furnished',
    facing: 'East',
    description: 'Signature 3 BHK independent beachside villa along East Coast Road. Experience tranquility with high ceilings, glass facade windows, smart home automated panels, and premium health resort club amenities.',
    developer: 'Casagrand Builders',
    postedOn: 'Yesterday'
  },
  {
    id: 8,
    title: 'Noida Cyber Hub Space',
    price: 45000000, // 4.50 Cr
    priceLabel: '₹4.50 Cr',
    bhk: 0,
    type: 'Office',
    locality: 'Sector 62',
    city: 'Delhi NCR',
    area: 3500,
    badge: 'Exclusive',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80'
    ],
    verified: true,
    reraApproved: true,
    bathrooms: 2,
    furnishing: 'Fully Furnished',
    facing: 'North-East',
    description: 'Move-in ready premium 3,500 sqft commercial office space in Sector 62. Outfitted with 45 work desks, 2 private director cabins, a 12-seater executive conference room, pantry, server rack, and double-height reception lobby.',
    developer: 'Cyber Group',
    postedOn: '3 weeks ago'
  }
];

export const localities = [
  { id: 1, name: 'Whitefield', city: 'Bangalore', priceRange: '₹7,500/sq.ft', trend: 'up', percentage: '+8.4% YoY', rating: 4.8 },
  { id: 2, name: 'Bandra West', city: 'Mumbai', priceRange: '₹45,200/sq.ft', trend: 'up', percentage: '+12.1% YoY', rating: 4.9 },
  { id: 3, name: 'Gurgaon Sec 54', city: 'Delhi NCR', priceRange: '₹14,500/sq.ft', trend: 'up', percentage: '+6.2% YoY', rating: 4.7 },
  { id: 4, name: 'Koregaon Park', city: 'Pune', priceRange: '₹12,200/sq.ft', trend: 'up', percentage: '+7.8% YoY', rating: 4.8 },
  { id: 5, name: 'Gachibowli', city: 'Hyderabad', priceRange: '₹6,800/sq.ft', trend: 'up', percentage: '+10.5% YoY', rating: 4.6 },
  { id: 6, name: 'OMR Road', city: 'Chennai', priceRange: '₹5,400/sq.ft', trend: 'down', percentage: '-1.5% YoY', rating: 4.3 },
  { id: 7, name: 'Koramangala', city: 'Bangalore', priceRange: '₹11,800/sq.ft', trend: 'up', percentage: '+9.3% YoY', rating: 4.9 },
  { id: 8, name: 'Salt Lake Sec V', city: 'Kolkata', priceRange: '₹6,100/sq.ft', trend: 'up', percentage: '+3.1% YoY', rating: 4.5 },
];

export const collections = [
  {
    id: 1,
    title: 'Luxury Living',
    subtitle: 'Premium residential villas and penthouses',
    count: '1,240+ Properties',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=600&q=80',
    color: 'from-purple-900/80 to-transparent'
  },
  {
    id: 2,
    title: 'Budget-Friendly Homes',
    subtitle: 'Affordable modern apartments',
    count: '3,480+ Properties',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80',
    color: 'from-blue-900/80 to-transparent'
  },
  {
    id: 3,
    title: 'Ready to Move In',
    subtitle: 'Immediate possession homes',
    count: '5,900+ Properties',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80',
    color: 'from-green-900/80 to-transparent'
  },
  {
    id: 4,
    title: 'New Launches',
    subtitle: 'Brand new projects under development',
    count: '980+ Properties',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    color: 'from-orange-900/80 to-transparent'
  }
];

export const services = [
  { id: 1, title: 'Home Loans', desc: 'Secure home loans from trusted banking partners at lowest interest rates starting from 8.4% p.a.', icon: 'Percent', action: 'Apply Now' },
  { id: 2, title: 'Rent Agreement', desc: 'Create legally binding digital rental agreements online in 5 minutes with zero hassles.', icon: 'FileText', action: 'Create Digital' },
  { id: 3, title: 'Packers & Movers', desc: 'Book verified, premium moving companies with door-to-door insurance and packaging.', icon: 'Truck', action: 'Get Free Quote' },
  { id: 4, title: 'Interior Design', desc: 'Collaborate with top design teams to visualize and build your dream home interiors.', icon: 'Palette', action: 'Book Consultation' },
  { id: 5, title: 'Property Valuation', desc: 'Get accurate market appraisals and detailed pricing trends reports for your property.', icon: 'TrendingUp', action: 'Check Valuation' },
  { id: 6, title: 'Home Services', desc: 'Connect with certified technicians for deep cleaning, sanitation, and electrical works.', icon: 'Wrench', action: 'Book Service' },
];

export const testimonials = [
  {
    id: 1,
    name: 'Siddharth Malhotra',
    role: 'Home Buyer, Bangalore',
    quote: 'HomeVerse made finding our first apartment a wonderful experience. The RERA certifications, premium search filters, and smooth virtual site details saved us weeks of running around. Highly recommended!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 2,
    name: 'Anjali Sharma',
    role: 'Property Owner, Mumbai',
    quote: 'Listed my apartment for rent, and within 48 hours, I was contacted by 3 verified tenants. The digital rental agreement creation service was extremely seamless and stress-free.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 3,
    name: 'Rahul Deshmukh',
    role: 'Tenant, Pune',
    quote: 'I used their co-living search filter to rent a room. The photos matched the property exactly, and the customer assistance was top-notch. Best portal in the country.',
    rating: 4.8,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
  }
];

export const stats = [
  { value: '5 Million+', label: 'Happy Customers' },
  { value: '100,000+', label: 'Verified Listings' },
  { value: '500+', label: 'Cities Covered' },
  { value: '25,000+', label: 'New Listings Daily' },
];
