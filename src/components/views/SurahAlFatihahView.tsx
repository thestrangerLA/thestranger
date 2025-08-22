'use client';
import ViewHeader from '@/components/shared/ViewHeader';
import VerseCard from '@/components/shared/VerseCard';
import SummaryCard from '@/components/shared/SummaryCard';

interface SurahAlFatihahViewProps {
  goBack: () => void;
}

const verses = [
  { number: "1", arabic: "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ", lao: "ດ້ວຍພຣະນາມຂອງອັລລໍຮ໌ ຜູ້ຊົງເມດຕາຢ່າງກວ້າງຂວາງ ຜູ້ຊົງເມດຕາເປັນນິດ." },
  { number: "2", arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", lao: "ບັນດາການສັນລະເສີນທັງໝົດເປັນຂອງອັລລໍຮ໌ ຜູ້ເປັນເຈົ້າແຫ່ງສາກົນໂລກ." },
  { number: "3", arabic: "الرَّحْمَٰنِ الرَّحِيمِ", lao: "ຜູ້ຊົງເມດຕາຢ່າງກວ້າງຂວາງ ຜູ້ຊົງເມດຕາເປັນນິດ." },
  { number: "4", arabic: "مَالِكِ يَوْمِ الدِّينِ", lao: "ຜູ້ຊົງຄອບຄອງວັນແຫ່ງການຕອບແທນ." },
  { number: "5", arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ", lao: "ສະເພາະພຣະອົງເທົ່ານັ້ນທີ່ພວກເຮົາເຄົາລົບນະມັດສະການ ແລະ ສະເພາະພຣະອົງເທົ່ານັ້ນທີ່ພວກເຮົາຂໍຄວາມຊ່ວຍເຫຼືອ." },
  { number: "6", arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ", lao: "ຂໍພຣະອົງຊົງນຳພາພວກເຮົາໄປສູ່ເສັ້ນທາງທີ່ຊື່ກົງ." },
  { number: "7", arabic: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ", lao: "ເສັ້ນທາງຂອງບັນດາຜູ້ທີ່ພຣະອົງຊົງປະທານຄວາມໂປດປານໃຫ້ແກ່ພວກເຂົາ, ບໍ່ແມ່ນເສັ້ນທາງຂອງບັນດາຜູ້ທີ່ຖືກກິ້ວ ແລະ ບໍ່ແມ່ນເສັ້ນທາງຂອງບັນດາຜູ້ທີ່ຫຼົງທາງ." },
];

export default function SurahAlFatihahView({ goBack }: SurahAlFatihahViewProps) {
  return (
    <div className="flex flex-col">
      <ViewHeader title="ສູຣໍ ອັລຟາຕີຮາ" onBack={goBack} />
      <main className="p-4">
        {verses.map(v => <VerseCard key={v.number} {...v} />)}
        <SummaryCard title="ສະຫຼຸບ">
          ອັລຟາຕີຮາ ເປັນຄຳຂໍອັນສຳຄັນທີ່ສຸດຈາກຊາວມຸດສະລິມຕໍ່ອັລລໍຮ໌ເພື່ອຂໍຄວາມຊ່ວຍເຫຼືອ ແລະ ການຊີ້ແຈງໃຫ້ໄປໃນເສັ້ນທາງທີ່ຖືກຕ້ອງໃນທຸກດ້ານຂອງຊີວິດ.
        </SummaryCard>
      </main>
    </div>
  );
}
