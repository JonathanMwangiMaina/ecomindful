import HeroSection from '@/components/sections/HeroSection';
import ThreeRExplanationSection from '@/components/sections/ThreeRExplanationSection';
import PersonalizedTipsSection from '@/components/sections/PersonalizedTipsSection';
import KnowledgeQuizSection from '@/components/sections/KnowledgeQuizSection';
import SuccessStoriesSection from '@/components/sections/SuccessStoriesSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ThreeRExplanationSection />
      <PersonalizedTipsSection />
      <KnowledgeQuizSection />
      <SuccessStoriesSection />
    </>
  );
}
