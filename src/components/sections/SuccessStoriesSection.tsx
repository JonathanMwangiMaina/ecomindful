import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface SuccessStory {
  id: number;
  title: string;
  protagonist: string;
  imageUrl: string;
  imageHint: string;
  summary: string;
  category: "Individual" | "Community" | "Organization";
  link?: string;
}

const stories: SuccessStory[] = [
  {
    id: 1,
    title: "Zero Waste Family Transformation",
    protagonist: "The Johnson Family",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "family smiling",
    summary: "The Johnson family embarked on a zero-waste journey, reducing their household waste by over 90% in just one year through careful consumption, composting, and DIY solutions.",
    category: "Individual",
    link: "#"
  },
  {
    id: 2,
    title: "Community Recycling Drive Success",
    protagonist: "Greenwood Neighborhood Association",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "community event",
    summary: "The Greenwood Neighborhood Association organized a massive electronics recycling drive, diverting tons of e-waste from landfills and raising awareness about responsible disposal.",
    category: "Community",
  },
  {
    id: 3,
    title: "Sustainable Packaging Initiative",
    protagonist: "EcoPack Solutions Inc.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "eco packaging",
    summary: "EcoPack Solutions Inc. redesigned their product packaging using 100% recycled and biodegradable materials, significantly reducing their environmental footprint and inspiring industry change.",
    category: "Organization",
    link: "#"
  },
];

const SuccessStoriesSection = () => {
  return (
    <section id="stories" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">Inspiring Eco-Actions</h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Read about individuals, communities, and organizations making a real difference by embracing the 3Rs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <Card key={story.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
              <CardHeader className="p-0">
                <div className="relative aspect-video w-full">
                  <Image
                    src={story.imageUrl}
                    alt={story.title}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={story.imageHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <span className="inline-block bg-accent/20 text-accent-foreground px-2 py-1 text-xs font-semibold rounded-full mb-2">
                  {story.category}
                </span>
                <CardTitle className="text-xl mb-1">{story.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground mb-3">By {story.protagonist}</CardDescription>
                <p className="text-foreground/90 text-sm leading-relaxed">
                  {story.summary}
                </p>
              </CardContent>
              {story.link && (
                <CardFooter className="p-6 pt-0">
                  <Button variant="outline" size="sm" asChild className="w-full border-primary text-primary hover:bg-primary/10">
                    <a href={story.link} target="_blank" rel="noopener noreferrer">
                      Read More <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
