'use client';
import React, { useState } from 'react';
import ViewHeader from '@/components/shared/ViewHeader';
import VerseCard from '@/components/shared/VerseCard';
import SummaryCard from '@/components/shared/SummaryCard';
import { Input } from '@/components/ui/input';

interface SurahAlFatihahViewProps {
  goBack: () => void;
}

const verses = [
  { number: "1:1", arabic: "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ", lao: "ດ້ວຍພຣະນາມຂອງອັລລໍຮ໌ ຜູ້ຊົງເມດຕາ ຜູ້ຊົງປານີສະເໝີ.", english: "In the name of Allah, the Entirely Merciful, the Especially Merciful." },
  { number: "1:2", arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", lao: "ບັນດາການສັນລະເສີນທັງໝົດເປັນຂອງອັລລໍຮ໌ ຜູ້ເປັນເຈົ້າແຫ່ງສາກົນໂລກ.", english: "[All] praise is [due] to Allah, Lord of the worlds -" },
  { number: "1:3", arabic: "الرَّحْمَٰنِ الرَّحِيمِ", lao: "ຜູ້ຊົງເມດຕາຢ່າງກວ້າງຂວາງ ຜູ້ຊົງເມດຕາເປັນນິດ.", english: "The Entirely Merciful, the Especially Merciful," },
  { number: "1:4", arabic: "مَالِكِ يَوْمِ الدِّينِ", lao: "ຜູ້ຊົງຄອບຄອງວັນແຫ່ງການຕອບແທນ.", english: "Sovereign of the Day of Recompense." },
  { number: "1:5", arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ", lao: "ສະເພາະພຣະອົງເທົ່ານັ້ນທີ່ພວກເຮົາເຄົາລົບນະມັດສະການ ແລະ ສະເພາະພຣະອົງເທົ່ານັ້ນທີ່ພວກເຮົາຂໍຄວາມຊ່ວຍເຫຼືອ.", english: "It is You we worship and You we ask for help." },
  { number: "1:6", arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ", lao: "ຂໍພຣະອົງຊົງນຳພາພວກເຮົາໄປສູ່ເສັ້ນທາງທີ່ຊື່ກົງ.", english: "Guide us to the straight path -" },
  { number: "1:7", arabic: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ", lao: "ເສັ້ນທາງຂອງບັນດາຜູ້ທີ່ພຣະອົງຊົງປະທານຄວາມໂປດປານໃຫ້ແກ່ພວກເຂົາ, ບໍ່ແມ່ນເສັ້ນທາງຂອງບັນດາຜູ້ທີ່ຖືກກິ້ວ ແລະ ບໍ່ແມ່ນເສັ້ນທາງຂອງບັນດາຜູ້ທີ່ຫຼົງທາງ.", english: "The path of those upon whom You have bestowed favor, not of those who have earned [Your] anger or of those who are astray." },
];

export default function SurahAlFatihahView({ goBack }: SurahAlFatihahViewProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredVerses = verses.filter(verse =>
    verse.number.includes(searchQuery) ||
    verse.lao.toLowerCase().includes(searchQuery.toLowerCase()) ||
    verse.english.toLowerCase().includes(searchQuery.toLowerCase()) ||
    verse.arabic.includes(searchQuery)
  );

  return (
    <div className="flex flex-col">
      <ViewHeader title="ສູຣໍ ອັລຟາຕີຮາ" onBack={goBack} />
      <div className="p-4 sticky top-0 bg-background z-10">
        <Input
          type="text"
          placeholder="ຄົ້ນຫາອາຍັດ..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full"
        />
      </div>
      <main className="p-4 pt-0">
        {filteredVerses.length > 0 ? (
          filteredVerses.map(v => <VerseCard key={v.number} {...v} />)
        ) : (
          <p className="text-center text-muted-foreground">ບໍ່ພົບອາຍັດທີ່ທ່ານຄົ້ນຫາ.</p>
        )}
        <SummaryCard title="ສະຫຼຸບ">
          ອັລຟາຕີຮາ ເປັນຄຳຂໍອັນສຳຄັນທີ່ສຸດຈາກຊາວມຸດສະລິມຕໍ່ອັລລໍຮ໌ເພື່ອຂໍຄວາມຊ່ວຍເຫຼືອ ແລະ ການຊີ້ແຈງໃຫ້ໄປໃນເສັ້ນທາງທີ່ຖືກຕ້ອງໃນທຸກດ້ານຂອງຊີວິດ.
        </SummaryCard>
      </main>
    </div>
  );
}
