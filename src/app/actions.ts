'use server';

import { aiIslamicGuide, AiIslamicGuideInput } from '@/ai/flows/ai-islamic-guide';
import { z } from 'zod';

const AskAiSchema = z.object({
  query: z.string().min(2, { message: 'Query must be at least 2 characters.' }),
});

export async function askAi(prevState: any, formData: FormData) {
  const validatedFields = AskAiSchema.safeParse({
    query: formData.get('query'),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const input: AiIslamicGuideInput = { query: validatedFields.data.query };
    const result = await aiIslamicGuide(input);
    return { answer: result.answer, error: null };
  } catch (error) {
    console.error(error);
    return { answer: null, error: 'An unexpected error occurred. Please try again.' };
  }
}
