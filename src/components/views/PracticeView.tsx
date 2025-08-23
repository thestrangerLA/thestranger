'use client';
import PracticeCard from '@/components/shared/PracticeCard';
import ViewHeader from '@/components/shared/ViewHeader';
import { practiceCardData } from '@/data/islamic-data';
import type { View } from '@/app/page';

interface PracticeViewProps {
  goBack: () => void;
  navigateTo: (view: View) => void;
}

export default function PracticeView({ goBack, navigateTo }: PracticeViewProps) {
  const handleClick = (id?: string) => {
    if (id === 'shahada' || id === 'salat' || id === 'zakat') {
      navigateTo(id as View);
    }
  };

  return (
    <div className="flex flex-col">
      <ViewHeader title="ຫຼັກປະຕິບັດ" onBack={goBack} />
      <main className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {practiceCardData.map((card, index) => (
          <PracticeCard
            key={index}
            emoji={card.emoji}
            title={card.title}
            onClick={() => handleClick(card.id)}
          />
        ))}
      </main>
    </div>
  );
}
