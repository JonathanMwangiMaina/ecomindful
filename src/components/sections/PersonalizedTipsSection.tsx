
"use client";

import { useFormStatus } from "react-dom";
import { useActionState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getPersonalizedTipsAction, type FormState } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Sparkles, Loader2 } from "lucide-react";

const initialState: FormState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground shadow-md">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
      Generate My Tips
    </Button>
  );
}

const PersonalizedTipsSection = () => {
  const [state, formAction] = useActionState(getPersonalizedTipsAction, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.isError ? "Error" : "Success",
        description: state.message,
        variant: state.isError ? "destructive" : "default",
      });
      if (!state.isError && state.tips) {
        // Optionally clear form on success, or keep data
        // formRef.current?.reset();
      }
    }
  }, [state, toast]);

  return (
    <section id="tips" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">Personalized 3R Tips</h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Tell us a bit about yourself, and our AI will generate tailored tips to help you practice the 3Rs effectively in your daily life.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl">Your Eco Profile</CardTitle>
            <CardDescription>Help us understand your context for better recommendations.</CardDescription>
          </CardHeader>
          <form ref={formRef} action={formAction}>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="lifestyle">Your Lifestyle</Label>
                <Textarea
                  id="lifestyle"
                  name="lifestyle"
                  placeholder="e.g., Student living in a dorm, busy professional, stay-at-home parent with young children..."
                  rows={3}
                  defaultValue={state.fields?.lifestyle}
                  required
                  className="bg-background"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Your Location</Label>
                <Input
                  id="location"
                  name="location"
                  placeholder="e.g., Urban apartment in New York, suburban house in Texas, rural farm in California..."
                  defaultValue={state.fields?.location}
                  required
                  className="bg-background"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="goals">Your Conservation Goals</Label>
                <Textarea
                  id="goals"
                  name="goals"
                  placeholder="e.g., Reduce plastic waste, save water, lower energy bills, teach kids about recycling..."
                  rows={3}
                  defaultValue={state.fields?.goals}
                  required
                  className="bg-background"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <SubmitButton />
            </CardFooter>
          </form>
        </Card>

        {state.tips && state.tips.length > 0 && (
          <div className="mt-12 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-primary mb-6 text-center">Here are your personalized tips:</h3>
            <Card className="bg-background shadow-lg">
              <CardContent className="p-6">
                <ul className="space-y-3 list-disc list-inside text-foreground/90">
                  {state.tips.map((tip, index) => (
                    <li key={index} className="leading-relaxed">{tip}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default PersonalizedTipsSection;
