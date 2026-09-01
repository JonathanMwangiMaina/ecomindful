"use client";

import { useFormStatus } from "react-dom";
import { useActionState, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getPersonalizedTipsAction, type FormState } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Sparkles, Loader2, CheckCircle } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const initialState: FormState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground shadow-md">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
      {pending ? "Generating..." : "Generate My Tips"}
    </Button>
  );
}

function TipsSkeleton() {
  return (
    <Card className="bg-background shadow-lg">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-4 w-40" />
        </div>
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </CardContent>
    </Card>
  );
}

const PersonalizedTipsSection = () => {
  const [state, formAction] = useActionState(getPersonalizedTipsAction, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [showTips, setShowTips] = useState(false);

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.isError ? "Error" : "Success",
        description: state.message,
        variant: state.isError ? "destructive" : "default",
      });
      if (!state.isError && state.tips) {
        setShowTips(true);
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
                  disabled={Boolean(state.message) && !state.isError}
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
                  disabled={Boolean(state.message) && !state.isError}
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
                  disabled={Boolean(state.message) && !state.isError}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <SubmitButton />
            </CardFooter>
          </form>
        </Card>

        {state.message && state.isError && (
          <div className="mt-6 max-w-2xl mx-auto text-center">
            <p className="text-destructive" role="alert">{state.message}</p>
          </div>
        )}

        {(state.message && !state.isError && state.tips && state.tips.length > 0) || showTips ? (
          <div className="mt-12 max-w-2xl mx-auto animate-fade-in">
            <div className="flex items-center justify-center gap-2 mb-6 text-primary">
              <CheckCircle className="h-6 w-6" />
              <h3 className="text-2xl font-semibold">Here are your personalized tips:</h3>
            </div>
            <Card className="bg-background shadow-lg">
              <CardContent className="p-6">
                <ul className="space-y-4 list-disc list-inside text-foreground/90">
                  {state.tips?.map((tip, index) => (
                    <li key={index} className="leading-relaxed animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                      {tip}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        ) : state.message && !state.isError && state.tips && state.tips.length === 0 ? (
          <div className="mt-12 max-w-2xl mx-auto text-center">
            <p className="text-foreground/70">No tips generated. Please try again with different inputs.</p>
          </div>
        ) : null}

        {/* Loading skeleton shown while generating */}
        {state.message === "" && !state.tips && (
          <div className="mt-12 max-w-2xl mx-auto" aria-live="polite">
            <TipsSkeleton />
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        .animate-slide-up {
          animation: slide-up 0.4s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default PersonalizedTipsSection;