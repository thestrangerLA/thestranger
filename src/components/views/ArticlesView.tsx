'use client';
import ListCard from '@/components/shared/ListCard';
import ViewHeader from '@/components/shared/ViewHeader';
import { articlesCardData } from '@/data/islamic-data';
import type { View } from '@/app/page';

interface ArticlesViewProps {
  navigateTo: (view: View) => void;
  goBack: () => void;
}

export default function ArticlesView({ navigateTo, goBack }: ArticlesViewProps) {
  const handleClick = (id: string) => {
    if (id === 'halal-food') {
      navigateTo(id as View);
    }
  };
  
  return (
    <div className="flex flex-col">
      <ViewHeader title="ບົດຄວາມ" onBack={goBack} />
      <main className="p-4 space-y-4">
        {articlesCardData.map((card) => (
          <ListCard
            key={card.id}
            icon={card.icon}
            title={card.title}
            subtitle={card.subtitle}
            onClick={() => handleClick(card.id)}
          />
        ))}
      </main>
    </div>
  );
}
