// src/ai/flows/generate-3r-tips.ts
'use server';

/**
 * @fileOverview An AI agent that provides personalized tips for implementing the 3Rs (Reduce, Reuse, Recycle).
 *
 * - generate3RTips - A function that generates personalized 3R tips.
 * - Generate3RTipsInput - The input type for the generate3RTips function.
 * - Generate3RTipsOutput - The return type for the generate3RTips function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const Generate3RTipsInputSchema = z.object({
  lifestyle: z
    .string()
    .min(10, 'Please provide more details about your lifestyle')
    .describe(
      'Description of the user lifestyle, daily habits and routines, and personal interests.'
    ),
  location: z
    .string()
    .min(3, 'Please provide a valid location')
    .describe(
      'The user location including country, city, and immediate environment such as apartment, house, office, etc.'
    ),
  goals: z
    .string()
    .min(10, 'Please provide more details about your goals')
    .describe(
      'Specific environmental conservation goals the user has (e.g., reduce waste, conserve water, save energy).'
    ),
});
export type Generate3RTipsInput = z.infer<typeof Generate3RTipsInputSchema>;

const Generate3RTipsOutputSchema = z.object({
  tips: z
    .array(z.string().min(20).max(500))
    .min(3, 'At least 3 tips required')
    .max(8, 'Maximum 8 tips allowed')
    .describe('A list of personalized and actionable tips for implementing the 3Rs in daily life.'),
});
export type Generate3RTipsOutput = z.infer<typeof Generate3RTipsOutputSchema>;

export async function generate3RTips(input: Generate3RTipsInput): Promise<Generate3RTipsOutput> {
  return generate3RTipsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generate3RTipsPrompt',
  input: { schema: Generate3RTipsInputSchema },
  output: { schema: Generate3RTipsOutputSchema },
  config: {
    temperature: 0.7,
    maxOutputTokens: 2048,
  },
  prompt: `You are an expert sustainability coach specializing in the 3Rs: Reduce, Reuse, Recycle. 
Generate personalized, practical, and actionable tips for implementing the 3Rs in the user's daily life.

User Context:
- Lifestyle: {{{lifestyle}}}
- Location: {{{location}}}
- Conservation Goals: {{{goals}}}

Requirements:
1. Provide 5-7 tips total
2. Each tip must be specific, actionable, and relevant to the user's context
3. Cover at least 2 of the 3 Rs (Reduce, Reuse, Recycle) across all tips
4. Include local/regional considerations when relevant
5. Tips should be implementable within 1-2 weeks
6. Format as a JSON array of strings only

Example good tip: "Set up a composting bin for food scraps in your apartment - many cities like yours offer curbside compost pickup or community drop-off sites."
Example bad tip: "Recycle more."

Output ONLY the JSON array of tips.`,
});

const generate3RTipsFlow = ai.defineFlow(
  {
    name: 'generate3RTipsFlow',
    inputSchema: Generate3RTipsInputSchema,
    outputSchema: Generate3RTipsOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output?.tips || output.tips.length < 3) {
      throw new Error('Failed to generate sufficient tips');
    }
    return output;
  }
);