// lib/constants.ts
export const SITE = {
  name: 'Well Kneaded Massage Therapies & Skincare',
  phone: '(404) 565-1079',
  email: 'info@wellkneadedcare.com',
  altEmail: 'wellkneadedcare@gmail.com',
  founded: 2014,
};

export const LOCATIONS = [
  {
    name: 'Main — McConnell Drive',
    address: '1270 McConnell Drive Suite B',
    city: 'Decatur, GA 30033',
    bookingUrl: 'https://www.massagebook.com/biz/WellKneadedMassage',
  },
  {
    name: 'Satellite — Church Street',
    address: '603 Church St (Lotus of Life)',
    city: 'Decatur, GA 30030',
    bookingUrl: 'https://www.massagebook.com/biz/WellKneadedMassageChurch',
  },
];

export const HOURS = [
  { day: 'Monday', hours: '8:30am – 7:00pm' },
  { day: 'Tuesday', hours: '9:30am – 9:00pm' },
  { day: 'Wednesday', hours: '9:30am – 6:00pm' },
  { day: 'Thursday', hours: '9:00am – 7:00pm' },
  { day: 'Friday', hours: '8:00am – 6:00pm' },
  { day: 'Saturday', hours: '10:00am – 6:00pm' },
  { day: 'Sunday', hours: '9:00am – 7:00pm (limited staff — by appt. only)' },
];

export const SOCIAL = {
  facebook: 'https://www.facebook.com/WellKneadedInc',
  instagram: 'https://www.instagram.com/wellkneadeddecatur',
};

export const NAV = [
  { label: 'Home', href: '/' },
  {
    label: 'Meet the WK Crew',
    href: '/meet-the-team',
    children: [
      { label: 'Meet Our Founder/CEO', href: '/meet-the-team/founder' },
      { label: 'Meet Our Staff', href: '/meet-the-team/staff' },
      { label: 'Career Opportunities', href: '/meet-the-team/careers' },
    ],
  },
  {
    label: 'Rates & Services',
    href: '/services',
    children: [
      { label: 'Therapeutic Massage', href: '/services/therapeutic-massage' },
      { label: 'Stretch-n-Flex Therapy', href: '/services/stretch-therapy' },
      { label: 'Wellness & Detox', href: '/services/wellness-detox' },
      { label: 'Corporate Chair Massage', href: '/services/corporate' },
    ],
  },
  { label: 'Nutrition Response Testing™', href: '/nutrition-response-testing' },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'FAQs', href: '/resources/faq' },
      { label: 'Forms & Policies', href: '/resources/forms-policies' },
      { label: 'Community Services', href: '/resources/community-services' },
      { label: 'Classes', href: '/resources/classes' },
      { label: 'Referral Network', href: '/resources/referral-network' },
    ],
  },
  { label: 'Contact', href: '/contact' },
  { label: 'Event Calendar', href: '/events' },
];

export const TESTIMONIALS = [
  { quote: 'Great deal and therapist listened and took note of problem areas and addressed them.', name: 'Aimee M.' },
  { quote: 'I had an excellent experience with Well Kneaded and recommend it highly.', name: 'Sherri J.' },
  { quote: 'I have been going to Well Kneaded regularly for massage for a long time.', name: 'Mary A.' },
  { quote: 'I had a fabulous experience doing a stretch session at well-kneaded.', name: 'Laurie D.' },
  { quote: 'This place is so amazing. When I tell you amazing service, super calm atmosphere.', name: 'Amanda J.' },
  { quote: 'Wonderful massage, with added benefit of an ion foot detoxification and infrared sauna experience.', name: 'Francie O.' },
];
