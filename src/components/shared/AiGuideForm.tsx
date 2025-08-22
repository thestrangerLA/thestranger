'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { askAi } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useRef, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const initialState = {
  answer: null,
  error: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Asking...</> : 'Ask'}
    </Button>
  );
}

export default function AiGuideForm() {
  const [state, formAction] = useFormState(askAi, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [displayedAnswer, setDisplayedAnswer] = useState('');

  useEffect(() => {
    if (state.error) {
      const errorMessage = typeof state.error === 'object' ? state.error.query?.join(', ') : state.error;
      toast({
        variant: 'destructive',
        title: 'Error',
        description: errorMessage || 'An unexpected error occurred.',
      });
    }
  }, [state.error, toast]);

  useEffect(() => {
    if (state.answer) {
      setDisplayedAnswer(state.answer);
      formRef.current?.reset();
    }
  }, [state.answer]);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Ask about Islam</CardTitle>
          <CardDescription>Get answers based on the Quran and Hadith.</CardDescription>
        </CardHeader>
        <CardContent>
          <form ref={formRef} action={formAction} className="flex gap-2">
            <Input name="query" placeholder="e.g., What are the pillars of Islam?" required />
            <SubmitButton />
          </form>
        </CardContent>
      </Card>

      {displayedAnswer && (
        <Card>
          <CardHeader>
            <CardTitle>Answer</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-wrap leading-relaxed">{displayedAnswer}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
