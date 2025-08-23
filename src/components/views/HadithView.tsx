'use client';
import { hadithCardData } from '@/data/islamic-data';
import ViewHeader from '@/components/shared/ViewHeader';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import type { View } from '@/app/page';

interface HadithViewProps {
  goBack: () => void;
  navigateTo: (view: View) => void;
}

export default function HadithView({ goBack, navigateTo }: HadithViewProps) {
  const handleClick = (id: string) => {
    if (id === 'forty-hadith') {
      navigateTo(id as View);
    }
  };
  
  return (
    <div className="flex flex-col">
      <ViewHeader title="ຫະດີຊ" onBack={goBack} />
      <main className="p-4 space-y-4">
        {hadithCardData.map((card, index) => (
          <Card key={index} className="shadow-sm cursor-pointer hover:bg-secondary" onClick={() => handleClick(card.id)}>
            <CardContent className="flex items-center justify-between p-4">
              <span className="font-medium text-card-foreground">{card.title}</span>
              <ChevronRight className="text-muted-foreground" />
            </CardContent>
          </Card>
        ))}
      </main>
    </div>
  );
}
