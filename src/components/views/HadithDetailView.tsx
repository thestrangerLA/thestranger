'use client';
import ViewHeader from '@/components/shared/ViewHeader';
import { type HadithDetail } from '@/app/page';
import ContentSection from '../shared/ContentSection';
import { BookOpen, HelpCircle } from 'lucide-react';
import VerseCard from '../shared/VerseCard';

interface HadithDetailViewProps {
  goBack: () => void;
  hadith: HadithDetail | null;
}

const BulletPoint = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start gap-3">
        <span className="text-primary font-bold mt-1">▶</span>
        <p>{children}</p>
    </li>
);

export default function HadithDetailView({ goBack, hadith }: HadithDetailViewProps) {
  if (!hadith) {
    return (
      <div className="flex flex-col">
        <ViewHeader title="ບໍ່ພົບຫະດີຊ" onBack={goBack} />
        <main className="p-4">
          <p>ບໍ່ສາມາດໂຫຼດຂໍ້ມູນຫະດີຊໄດ້. ກະລຸນາກັບຄືນແລະລອງໃໝ່.</p>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <ViewHeader title={hadith.title} onBack={goBack} />
      <main className="p-4 space-y-4">
        <ContentSection title="ຂໍ້ຄວາມຫະດີຊ" icon={<BookOpen />}>
            <VerseCard number="" arabic={hadith.arabic} lao={hadith.lao} />
        </ContentSection>

        <ContentSection title="ຄໍາອະທິບາຍ" icon={<HelpCircle />}>
            <ul className="space-y-3">
                {hadith.explanation.map((point, index) => (
                    <BulletPoint key={index}>{point}</BulletPoint>
                ))}
            </ul>
        </ContentSection>
      </main>
    </div>
  );
}
