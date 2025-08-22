'use server';

/**
 * @fileOverview An AI agent that answers questions about Islam based on the Quran and Hadith.
 *
 * - aiIslamicGuide - A function that handles the question answering process.
 * - AiIslamicGuideInput - The input type for the aiIslamicGuide function.
 * - AiIslamicGuideOutput - The return type for the aiIslamicGuide function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiIslamicGuideInputSchema = z.object({
  query: z.string().describe('The user query about Islam.'),
});
export type AiIslamicGuideInput = z.infer<typeof AiIslamicGuideInputSchema>;

const AiIslamicGuideOutputSchema = z.object({
  answer: z.string().describe('The answer to the user query based on the Quran and Hadith.'),
});
export type AiIslamicGuideOutput = z.infer<typeof AiIslamicGuideOutputSchema>;

export async function aiIslamicGuide(input: AiIslamicGuideInput): Promise<AiIslamicGuideOutput> {
  return aiIslamicGuideFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiIslamicGuidePrompt',
  input: {schema: AiIslamicGuideInputSchema},
  output: {schema: AiIslamicGuideOutputSchema},
  prompt: `You are an AI Islamic guide that answers questions about Islam based on the Quran and Hadith.

  Answer the following question:
  {{query}}`,
});

const aiIslamicGuideFlow = ai.defineFlow(
  {
    name: 'aiIslamicGuideFlow',
    inputSchema: AiIslamicGuideInputSchema,
    outputSchema: AiIslamicGuideOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
