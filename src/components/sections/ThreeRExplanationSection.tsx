import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import ReduceIcon from "@/components/icons/ReduceIcon";
import ReuseIcon from "@/components/icons/ReuseIcon";
import RecycleIcon from "@/components/icons/RecycleIcon";

const RData = [
  {
    value: "reduce",
    title: "Reduce",
    icon: <ReduceIcon className="w-6 h-6 text-primary" />,
    explanation: "Minimizing the amount of waste we create is the first and most effective step in waste management. By consuming less, we lessen the strain on natural resources and reduce pollution.",
    examples: [
      "Opt for products with minimal packaging.",
      "Say no to single-use plastics like straws and bags.",
      "Print double-sided or go digital to save paper.",
      "Be mindful of water and energy consumption.",
      "Buy only what you need to avoid food waste.",
    ]
  },
  {
    value: "reuse",
    title: "Reuse",
    icon: <ReuseIcon className="w-6 h-6 text-primary" />,
    explanation: "Before throwing something away, consider if it can be used again. Reusing items extends their life, saves money, and reduces the need for new products.",
    examples: [
      "Use reusable shopping bags, water bottles, and coffee cups.",
      "Repurpose old jars and containers for storage.",
      "Donate or sell items you no longer need.",
      "Repair broken items instead of replacing them.",
      "Use rechargeable batteries.",
    ]
  },
  {
    value: "recycle",
    title: "Recycle",
    icon: <RecycleIcon className="w-6 h-6 text-primary" />,
    explanation: "Recycling turns waste materials into new products, reducing the need to extract raw materials from the earth. Proper recycling conserves resources and reduces landfill waste.",
    examples: [
      "Learn your local recycling guidelines for paper, plastic, glass, and metal.",
      "Clean and sort recyclables before placing them in the bin.",
      "Look for products made from recycled materials.",
      "Recycle electronics and batteries responsibly through designated programs.",
      "Compost organic waste like food scraps and yard trimmings.",
    ]
  }
];

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
          {RData.map((item) => (
            <AccordionItem value={item.value} key={item.value} className="bg-card/70 border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <AccordionTrigger className="p-6 text-xl font-semibold hover:no-underline">
                <div className="flex items-center gap-3">
                  {item.icon}
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
