"use client";

import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SUCCESS_STORIES } from "@/lib/constants";

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
          {SUCCESS_STORIES.map((story) => (
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;