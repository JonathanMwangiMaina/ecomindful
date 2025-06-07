// src/app/actions.ts
"use server";

import { generate3RTips, type Generate3RTipsInput, type Generate3RTipsOutput } from "@/ai/flows/generate-3r-tips";
import { z } from "zod";

const TipsFormSchema = z.object({
  lifestyle: z.string().min(10, "Please describe your lifestyle in more detail."),
  location: z.string().min(3, "Please enter a valid location."),
  goals: z.string().min(10, "Please describe your goals in more detail."),
});

export interface FormState {
  message: string;
  fields?: Record<string, string>;
  tips?: string[];
  isError?: boolean;
}

export async function getPersonalizedTipsAction(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  const formData = Object.fromEntries(data);
  const parsed = TipsFormSchema.safeParse(formData);

  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const key of Object.keys(formData)) {
      fields[key] = formData[key].toString();
    }
    return {
      message: "Invalid form data.",
      fields,
      isError: true,
    };
  }

  try {
    const input: Generate3RTipsInput = {
      lifestyle: parsed.data.lifestyle,
      location: parsed.data.location,
      goals: parsed.data.goals,
    };
    const result: Generate3RTipsOutput = await generate3RTips(input);
    return {
      message: "Tips generated successfully!",
      tips: result.tips,
      isError: false,
    };
  } catch (error) {
    console.error("Error generating tips:", error);
    return {
      message: "Failed to generate tips. Please try again later.",
      isError: true,
    };
  }
}
