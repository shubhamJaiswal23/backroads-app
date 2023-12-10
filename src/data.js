import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour5 from './images/tour-5.jpeg';
import tour6 from './images/tour-6.jpeg';

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' }
];

export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' }
];

export const sectionData = [
  {
    id: 1,
    subHeading: 'saving money',
    para: 'Explore budget-friendly options for optimal savings and financial well-being.',
    icon: 'fas fa-wallet fa-fw'
  },
  {
    id: 2,
    subHeading: 'endless hiking',
    para: 'Explore trails and scenic landscapes for endless adventure.',
    icon: 'fas fa-tree fa-fw'
  },
  {
    id: 3,
    subHeading: 'amazing comfort',
    para: 'Luxury comfort with amenities and personalized service.',
    icon: 'fas fa-socks fa-fw'
  }
];

export const tourCard = [
  {
    id: 1,
    date: 'october 26th, 2023',
    img: tour1,
    heading: 'Tibet Adventure',
    para: 'Embark on an extraordinary journey through the enchanting landscapes of Tibet, where ancient traditions and majestic beauty converge, creating an immersive adventure and cultural experience.',
    country: 'China',
    days: '6 days',
    amount: 'from $2100'
  },
  {
    id: 2,
    date: 'november 11th, 2023',
    img: tour2,
    heading: 'best of java',
    para: 'Discover the essence of Java, where vibrant culture and breathtaking landscapes merge, promising an unforgettable journey of exploration and rich experiences.',
    country: 'indonesia',
    days: '11 days',
    amount: 'form $1400'
  },
  {
    id: 3,
    date: 'december 20th, 2023',
    img: tour6,
    heading: 'Discover India',
    para: 'Embark on a journey through the diverse tapestry of India, where ancient traditions and modern marvels intertwine, promising an immersive experience and cultural exploration like no other',
    country: 'India',
    days: '8 days',
    amount: 'from $5000'
  },
  {
    id: 4,
    date: 'december 27th, 2023',
    img: tour5,
    heading: 'Africa highlights',
    para: 'Explore the wonders of South Africa, where vast savannas and diverse wildlife create an immersive experience. Uncover the beauty and cultural richness in every step of your journey.',
    country: 'South Africa',
    days: '20 days',
    amount: 'from $3300'
  }
];
