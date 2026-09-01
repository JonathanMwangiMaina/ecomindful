"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ReduceIcon from "@/components/icons/ReduceIcon";
import ReuseIcon from "@/components/icons/ReuseIcon";
import RecycleIcon from "@/components/icons/RecycleIcon";
import { R_DATA } from "@/lib/constants";

const ICONS = {
  reduce: <ReduceIcon className="w-6 h-6 text-primary" />,
  reuse: <ReuseIcon className="w-6 h-6 text-primary" />,
  recycle: <RecycleIcon className="w-6 h-6 text-primary" />,
} as const;

const ThreeRExplanationSection = () => {
  return (
    <section id="3rs" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">Understanding the 3Rs</h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            The three R's – Reduce, Reuse, and Recycle – are essential principles for sustainable living and environmental conservation.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto space-y-4">
          {R_DATA.map((item) => (
            <AccordionItem value={item.value} key={item.value} className="bg-card/70 border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <AccordionTrigger className="p-6 text-xl font-semibold hover:no-underline">
                <div className="flex items-center gap-3">
                  {ICONS[item.value]}
                  <span>{item.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0 text-foreground/90">
                <p className="mb-4">{item.explanation}</p>
                <h4 className="font-semibold mb-2 text-primary/90">Examples:</h4>
                <ul className="list-disc list-inside space-y-1">
                  {item.examples.map((example, index) => (
                    <li key={index}>{example}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default ThreeRExplanationSection;