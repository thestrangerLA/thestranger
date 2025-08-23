'use client';
import HomeCard from '@/components/shared/HomeCard';
import ViewHeader from '@/components/shared/ViewHeader';
import { faithCardData } from '@/data/islamic-data';
import type { View } from '@/app/page';

interface FaithViewProps {
  navigateTo: (view: View) => void;
  goBack: () => void;
}

export default function FaithView({ navigateTo, goBack }: FaithViewProps) {
  const handleClick = (id: string) => {
    if (id === 'belief-in-allah' || id === 'belief-in-angels' || id === 'belief-in-books' || id === 'belief-in-prophets' || id === 'belief-in-last-day' || id === 'belief-in-destiny') {
      navigateTo(id as View);
    }
    // Handle other clicks if necessary
  };
  
  return (
    <div className="flex flex-col">
      <ViewHeader title="ຫຼັກຄວາມເຊື່ອ" onBack={goBack} />
      <main className="p-4 grid grid-cols-2 gap-4">
        {faithCardData.map((card) => (
          <HomeCard
            key={card.id}
            emoji={card.emoji}
            title={card.title}
            onClick={() => handleClick(card.id)}
          />
        ))}
      </main>
    </div>
  );
}
