
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface SuccessStory {
  id: number;
  title: string;
  protagonist: string;
  imageUrl: string;
  imageHint: string;
  category: "Individual" | "Community" | "Organization";
  summary: string;
  link?: string;
}

const stories: SuccessStory[] = [
  {
    id: 1,
    title: "Zero Waste Family Transformation",
    protagonist: "The Johnson Family",
    imageUrl: "https://unsplash.com/photos/7noZJ_4nhU8/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQ5MzIwMDUzfA&force=true&w=640", // Updated URL
    imageHint: "family silhouette", // Updated hint
    summary: "The Johnson family embarked on a zero-waste journey, reducing their household waste by over 90% in just one year through careful consumption, composting, and DIY solutions.",
    category: "Individual",
  },
  {
    id: 2,
    title: "Community Recycling Drive Success",
    protagonist: "OCG",
    imageUrl: "https://unsplash.com/photos/9SLGGEzrZnQ/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQ5MzE5MjU5fA&force=true&w=640",
    imageHint: "community event",
    summary: "The OCG organized a massive electronics recycling drive, diverting tons of e-waste from landfills and raising awareness about responsible disposal.",
    category: "Community",
  },
  {
    id: 3,
    title: "Sustainable Packaging Initiative",
    protagonist: "EcoMindful Solutions Inc.",
    imageUrl: "https://unsplash.com/photos/xT-OoC3Zg_c/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQ5MzE2NTIxfA&force=true&w=640",
    imageHint: "eco packaging",
    summary: "EcoMindful Solutions Inc. redesigned their product packaging using 100% recycled and biodegradable materials, significantly reducing their environmental footprint and inspiring industry change.",
    category: "Organization",
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
                <>
                  <CardFooter className="p-6 pt-0"></CardFooter>
                  <CardFooter className="p-6 pt-0"></CardFooter>
                </>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
