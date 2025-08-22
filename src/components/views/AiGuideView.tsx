'use client';
import React from 'react';
import ViewHeader from '@/components/shared/ViewHeader';
import AiGuideForm from '@/components/shared/AiGuideForm';

interface AiGuideViewProps {
  goBack: () => void;
}

export default function AiGuideView({ goBack }: AiGuideViewProps) {
  return (
    <div className="flex flex-col h-full">
      <ViewHeader title="AI ແນະນຳ" onBack={goBack} />
      <main className="p-4 flex-grow">
        <AiGuideForm />
      </main>
    </div>
  );
}
