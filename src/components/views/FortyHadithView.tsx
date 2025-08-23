'use client';
import { fortyHadithData } from '@/data/islamic-data';
import ViewHeader from '@/components/shared/ViewHeader';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import type { View, HadithDetail } from '@/app/page';

interface FortyHadithViewProps {
  goBack: () => void;
  navigateTo: (view: View, hadith?: HadithDetail) => void;
}

export default function FortyHadithView({ goBack, navigateTo }: FortyHadithViewProps) {
  
  const handleClick = (hadith: Partial<HadithDetail>) => {
    if (hadith.id === 'hadith-1') {
      const fullHadith = fortyHadithData.find(h => h.id === hadith.id);
      if (fullHadith) {
        navigateTo('hadith-detail', fullHadith as HadithDetail);
      }
    }
  };

  return (
    <div className="flex flex-col">
      <ViewHeader title="40 ຫະດີຊ ນະວະວີ" onBack={goBack} />
      <main className="p-4 space-y-4">
        {fortyHadithData.map((hadith, index) => (
          <Card key={index} className="shadow-sm cursor-pointer hover:bg-secondary" onClick={() => handleClick(hadith)}>
            <CardContent className="flex items-center justify-between p-4">
              <span className="font-medium text-card-foreground">{hadith.title}</span>
              <ChevronRight className="text-muted-foreground" />
            </CardContent>
          </Card>
        ))}
      </main>
    </div>
  );
}
