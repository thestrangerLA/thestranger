'use client';
import QuranCard from '@/components/shared/QuranCard';
import ViewHeader from '@/components/shared/ViewHeader';
import { quranCardData } from '@/data/islamic-data';
import type { View } from '@/app/page';

interface QuranViewProps {
  navigateTo: (view: View) => void;
  goBack: () => void;
}

export default function QuranView({ navigateTo, goBack }: QuranViewProps) {
  const handleClick = (id?: string) => {
    if (id === 'al-fatihah' || id === 'al-baqarah') {
      navigateTo(id);
    }
  };
  
  return (
    <div className="flex flex-col">
      <ViewHeader title="ກຸຣອານ" onBack={goBack} />
      <main className="p-4 space-y-3">
        {quranCardData.map((card) => (
          <QuranCard
            key={card.number}
            {...card}
            onClick={() => handleClick(card.id)}
          />
        ))}
      </main>
    </div>
  );
}
