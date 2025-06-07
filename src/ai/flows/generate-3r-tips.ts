// src/ai/flows/generate-3r-tips.ts
'use server';

/**
 * @fileOverview An AI agent that provides personalized tips for implementing the 3Rs (Reduce, Reuse, Recycle).
 *
 * - generate3RTips - A function that generates personalized 3R tips.
 * - Generate3RTipsInput - The input type for the generate3RTips function.
 * - Generate3RTipsOutput - The return type for the generate3RTips function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const Generate3RTipsInputSchema = z.object({
  lifestyle: z
    .string()
    .describe(
      'Description of the user lifestyle, daily habits and routines, and personal interests.'
    ),
  location: z
    .string()
    .describe(
      'The user location including country, city, and immediate environment such as apartment, house, office, etc.'
    ),
  goals: z
    .string()
    .describe(
      'Specific environmental conservation goals the user has (e.g., reduce waste, conserve water, save energy).'
    ),
});
export type Generate3RTipsInput = z.infer<typeof Generate3RTipsInputSchema>;

const Generate3RTipsOutputSchema = z.object({
  tips: z
    .array(z.string())
    .describe('A list of personalized and actionable tips for implementing the 3Rs in daily life.'),
});
export type Generate3RTipsOutput = z.infer<typeof Generate3RTipsOutputSchema>;

export async function generate3RTips(input: Generate3RTipsInput): Promise<Generate3RTipsOutput> {
  return generate3RTipsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generate3RTipsPrompt',
  input: {schema: Generate3RTipsInputSchema},
  output: {schema: Generate3RTipsOutputSchema},
  prompt: `You are an expert in sustainable living and environmental conservation. Generate personalized and actionable tips for implementing the 3Rs (Reduce, Reuse, Recycle) in the user\'s daily life, based on their specific context and needs.

Consider the following information about the user:

Lifestyle: {{{lifestyle}}}
Location: {{{location}}}
Goals: {{{goals}}}

Provide a list of tips that are practical, easy to implement, and relevant to the user\'s situation. Focus on specific actions the user can take to reduce their environmental impact.

Format the output as a JSON array of strings.

`,
});

const generate3RTipsFlow = ai.defineFlow(
  {
    name: 'generate3RTipsFlow',
    inputSchema: Generate3RTipsInputSchema,
    outputSchema: Generate3RTipsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
