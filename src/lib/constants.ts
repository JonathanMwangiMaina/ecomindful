export interface RDataItem {
  value: 'reduce' | 'reuse' | 'recycle';
  title: string;
  explanation: string;
  examples: string[];
}

export const R_DATA: RDataItem[] = [
  {
    value: 'reduce',
    title: 'Reduce',
    explanation: 'Minimizing the amount of waste we create is the first and most effective step in waste management. By consuming less, we lessen the strain on natural resources and reduce pollution.',
    examples: [
      'Opt for products with minimal packaging.',
      'Say no to single-use plastics like straws and bags.',
      'Print double-sided or go digital to save paper.',
      'Be mindful of water and energy consumption.',
      'Buy only what you need to avoid food waste.',
    ],
  },
  {
    value: 'reuse',
    title: 'Reuse',
    explanation: 'Before throwing something away, consider if it can be used again. Reusing items extends their life, saves money, and reduces the need for new products.',
    examples: [
      'Use reusable shopping bags, water bottles, and coffee cups.',
      'Repurpose old jars and containers for storage.',
      'Donate or sell items you no longer need.',
      'Repair broken items instead of replacing them.',
      'Use rechargeable batteries.',
    ],
  },
  {
    value: 'recycle',
    title: 'Recycle',
    explanation: 'Recycling turns waste materials into new products, reducing the need to extract raw materials from the earth. Proper recycling conserves resources and reduces landfill waste.',
    examples: [
      'Learn your local recycling guidelines for paper, plastic, glass, and metal.',
      'Clean and sort recyclables before placing them in the bin.',
      'Look for products made from recycled materials.',
      'Recycle electronics and batteries responsibly through designated programs.',
      'Compost organic waste like food scraps and yard trimmings.',
    ],
  },
];

export interface SuccessStory {
  id: number;
  title: string;
  protagonist: string;
  imageUrl: string;
  imageHint: string;
  category: 'Individual' | 'Community' | 'Organization';
  summary: string;
}

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: 1,
    title: 'Zero Waste Family Transformation',
    protagonist: 'The Johnson Family',
    imageUrl: 'https://source.unsplash.com/featured/?family,zero-waste,home/640x480',
    imageHint: 'family home',
    summary: 'The Johnson family embarked on a zero-waste journey, reducing their household waste by over 90% in just one year through careful consumption, composting, and DIY solutions.',
    category: 'Individual',
  },
  {
    id: 2,
    title: 'Community Recycling Drive Success',
    protagonist: 'OCG',
    imageUrl: 'https://source.unsplash.com/featured/?community,recycling,event/640x480',
    imageHint: 'community recycling',
    summary: 'The OCG organized a massive electronics recycling drive, diverting tons of e-waste from landfills and raising awareness about responsible disposal.',
    category: 'Community',
  },
  {
    id: 3,
    title: 'Sustainable Packaging Initiative',
    protagonist: 'EcoMindful Solutions Inc.',
    imageUrl: 'https://source.unsplash.com/featured/?packaging,sustainable,eco/640x480',
    imageHint: 'eco packaging',
    summary: 'EcoMindful Solutions Inc. redesigned their product packaging using 100% recycled and biodegradable materials, significantly reducing their environmental footprint and inspiring industry change.',
    category: 'Organization',
  },
];

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export const QUIZ_DATA: QuizQuestion[] = [
  {
    id: 1,
    question: "What does the 'Reduce' principle in the 3Rs primarily focus on?",
    options: ['Processing waste materials into new products', 'Using items multiple times', 'Minimizing waste generation at the source', 'Sorting waste for collection'],
    correctAnswer: 'Minimizing waste generation at the source',
    explanation: 'Reduce is about lessening the amount of waste we produce in the first place.',
  },
  {
    id: 2,
    question: 'Which of these is an example of "Reusing"?',
    options: ['Buying recycled paper', 'Composting food scraps', 'Using a cloth bag for shopping', 'Putting plastic bottles in a recycling bin'],
    correctAnswer: 'Using a cloth bag for shopping',
    explanation: 'Reusing involves using an item again in its original form or for a new purpose.',
  },
  {
    id: 3,
    question: 'What is the main goal of "Recycling"?',
    options: ['To decrease consumption of new goods', 'To convert waste materials into new usable products', 'To extend the life of existing products', 'To reduce the need for landfills'],
    correctAnswer: 'To convert waste materials into new usable products',
    explanation: 'Recycling processes used materials into new products, reducing the need for virgin raw materials.',
  },
  {
    id: 4,
    question: 'Which of the following is NOT a primary benefit of practicing the 3Rs?',
    options: ['Conserving natural resources', 'Reducing landfill waste', 'Increasing greenhouse gas emissions', 'Saving energy'],
    correctAnswer: 'Increasing greenhouse gas emissions',
    explanation: 'Practicing the 3Rs helps reduce greenhouse gas emissions by conserving resources and energy.',
  },
];

export const NAV_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'The 3Rs', href: '#3rs' },
  { name: 'Personalized Tips', href: '#tips' },
  { name: 'Quiz', href: '#quiz' },
  { name: 'Success Stories', href: '#stories' },
] as const;

export const SITE_CONFIG = {
  name: 'EcoMindful',
  tagline: 'Embrace the 3Rs',
  description: 'Learn and practice Reduce, Reuse, Recycle for a sustainable future.',
  url: 'https://ecomindful.app',
  twitterHandle: '@ecomindful',
  themeColor: '#388E3C',
  backgroundColor: '#F5F5DC',
} as const;