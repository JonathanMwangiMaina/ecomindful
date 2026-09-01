import HeroSection from '@/components/sections/HeroSection';
import ThreeRExplanationSection from '@/components/sections/ThreeRExplanationSection';
import PersonalizedTipsSection from '@/components/sections/PersonalizedTipsSection';
import KnowledgeQuizSection from '@/components/sections/KnowledgeQuizSection';
import SuccessStoriesSection from '@/components/sections/SuccessStoriesSection';
import Script from 'next/script';

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'EcoMindful - Embrace the 3Rs',
    description: 'Learn and practice Reduce, Reuse, Recycle for a sustainable future.',
    url: 'https://ecomindful.app/',
    mainEntity: [
      {
        '@type': 'LearningResource',
        name: 'The 3Rs Explained',
        description: 'Comprehensive guide to Reduce, Reuse, and Recycle principles with examples.',
        educationalLevel: 'Beginner to Advanced',
        teaches: ['Waste Reduction', 'Sustainable Living', 'Environmental Conservation'],
      },
      {
        '@type': 'Quiz',
        name: 'Eco-Knowledge Quiz',
        description: 'Interactive quiz to test knowledge about the 3Rs of sustainability.',
        educationalLevel: 'Beginner',
        about: ['Reduce', 'Reuse', 'Recycle', 'Sustainability'],
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Personalized 3R Tips Generator',
        description: 'AI-powered tool that generates personalized sustainability tips based on lifestyle, location, and goals.',
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'Web',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
      },
    ],
    hasPart: [
      { '@type': 'WebPageElement', '@id': '#3rs', name: 'The 3Rs Explanation' },
      { '@type': 'WebPageElement', '@id': '#tips', name: 'Personalized Tips Generator' },
      { '@type': 'WebPageElement', '@id': '#quiz', name: 'Knowledge Quiz' },
      { '@type': 'WebPageElement', '@id': '#stories', name: 'Success Stories' },
    ],
  };

  return (
    <>
      <Script
        id="page-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HeroSection />
      <ThreeRExplanationSection />
      <PersonalizedTipsSection />
      <KnowledgeQuizSection />
      <SuccessStoriesSection />
    </>
  );
}