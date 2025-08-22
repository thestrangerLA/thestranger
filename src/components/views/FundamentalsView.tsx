'use client';
import ListCard from '@/components/shared/ListCard';
import ViewHeader from '@/components/shared/ViewHeader';
import { fundamentalsCardData } from '@/data/islamic-data';
import type { View } from '@/app/page';

interface FundamentalsViewProps {
  navigateTo: (view: View) => void;
  goBack: () => void;
}

export default function FundamentalsView({ navigateTo, goBack }: FundamentalsViewProps) {
  const handleClick = (id: string) => {
    if (id === 'islam-what-is-it' || id === 'belief-in-allah') {
      navigateTo(id as View);
    }
    // Handle other card clicks if they lead to new views
  };
  
  return (
    <div className="flex flex-col">
      <ViewHeader title="ພື້ນຖານຂອງອິສລາມ" onBack={goBack} />
      <main className="p-4 space-y-4">
        {fundamentalsCardData.map((card) => (
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
