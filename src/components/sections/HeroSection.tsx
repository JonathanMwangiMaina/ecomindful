
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section id="home" className="py-16 md:py-24 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
            EcoMindful: Your Guide to a Greener Lifestyle
          </h1>
          <p className="text-lg sm:text-xl text-foreground/80">
            Discover the power of Reduce, Reuse, and Recycle. Small actions, big impact. Join us in making a difference for our planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform hover:scale-105">
              <Link href="#3rs">Learn the 3Rs</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 shadow-md transition-transform hover:scale-105">
              <Link href="#tips">Get Personalized Tips</Link>
            </Button>
          </div>
        </div>
        <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl group">
          <Image
            src="https://unsplash.com/photos/a-forest-with-trees-MpfGGMk9ssc"
            alt="Lush green forest"
            layout="fill"
            objectFit="cover"
            className="transform transition-transform duration-500 group-hover:scale-110"
            data-ai-hint="nature environment"
            priority
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
