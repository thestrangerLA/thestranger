'use client';
import React, { useState } from 'react';
import ViewHeader from '@/components/shared/ViewHeader';
import VerseCard from '@/components/shared/VerseCard';
import SummaryCard from '@/components/shared/SummaryCard';
import { Input } from '@/components/ui/input';

interface SurahFussilatViewProps {
  goBack: () => void;
}

const verses = [
  { number: "41:1", arabic: "حم", lao: "ຮາ ມີມ.", english: "Ha, Meem." },
  { number: "41:2", arabic: "تَنزِيلٌ مِّنَ الرَّحْمَٰنِ الرَّحِيمِ", lao: "(ອັລກຸຣອານນີ້)ເປັນການປະທານລົງມາຈາກພຣະຜູ້ຊົງເມດຕາ ຜູ້ຊົງປານີສະເໝີ.", english: "[This is] a revelation from the Entirely Merciful, the Especially Merciful -" },
  { number: "41:3", arabic: "كِتَابٌ فُصِّلَتْ آيَاتُهُ قُرْآنًا عَرَبِيًّا لِّقَوْمٍ يَعْلَمُونَ", lao: "ຄຳພີທີ່ອາຍະຕ່າງໆໄດ້ຖືກອະທິບາຍຢ່າງລະອຽດ, ເປັນກຸຣອານພາສາອາຣັບສຳລັບກຸ່ມຊົນທີ່ຮູ້.", english: "A Book whose verses have been detailed, an Arabic Qur'an for a people who know," },
  { number: "41:4", arabic: "بَشِيرًا وَنَذِيرًا فَأَعْرَضَ أَكْثَرُهُمْ فَهُمْ لَا يَسْمَعُونَ", lao: "ເປັນການແຈ້ງຂ່າວດີ ແລະ ເປັນການຕັກເຕືອນ, ແຕ່ສ່ວນຫຼາຍຂອງພວກເຂົາພາກັນຜິນຫຼັງໃຫ້, ດັ່ງນັ້ນພວກເຂົາຈຶ່ງບໍ່ໄດ້ຍິນ.", english: "As a giver of good tidings and a warner; but most of them turn away, so they do not hear." },
  { number: "41:5", arabic: "وَقَالُوا قُلُوبُنَا فِي أَكِنَّةٍ مِّمَّا تَدْعُونَا إِلَيْهِ وَفِي آذَانِنَا وَقْرٌ وَمِن بَيْنِنَا وَبَيْنِكَ حِجَابٌ فَاعْمَلْ إِنَّنَا عَامِلُونَ", lao: "ແລະ ພວກເຂົາເວົ້າວ່າ: 'ໃຈຂອງພວກເຮົາຖືກປົກປິດຈາກສິ່ງທີ່ທ່ານເຊື້ອເຊີນພວກເຮົາ, ແລະ ໃນຫູຂອງພວກເຮົາມີຄວາມໜວກ, ແລະ ລະຫວ່າງພວກເຮົາກັບທ່ານມີກຳແພງກັ້ນ. ດັ່ງນັ້ນ, ທ່ານຈົ່ງເຮັດວຽກຂອງທ່ານ, ແທ້ຈິງແລ້ວ ພວກເຮົາກໍກຳລັງເຮັດວຽກຂອງພວກເຮົາ.'", english: "And they say, 'Our hearts are within coverings from that to which you invite us, and in our ears is deafness, and between us and you is a partition, so work; indeed, we are working.'"},
  { number: "41:6", arabic: "قُلْ إِنَّمَا أَنَا بَشَرٌ مِّثْلُكُمْ يُوحَىٰ إِلَيَّ أَنَّمَا إِلَٰهُكُمْ إِلَٰهٌ وَاحِدٌ فَاسْتَقِيمُوا إِلَيْهِ وَاسْتَغْفِرُوهُ ۗ وَوَيْلٌ لِّلْمُشْرِكِينَ", lao: "ໂອ້ ມູຮຳມັດ ເຈົ້າຈົ່ງກ່າວວ່າຂ້ອຍເປັນພຽງມະນຸດຄົນໜຶ່ງຄືກັບພວກທ່ານ, ເຊິ່ງໄດ້ຮັບການເປີດເຜີຍວ່າ ພຣະເຈົ້າຂອງພວກທ່ານນັ້ນຄືພຣະເຈົ້າອົງດຽວ. ດັ່ງນັ້ນ, ພວກທ່ານຈົ່ງມຸ່ງໜ້າໄປຫາພຣະອົງຢ່າງຖືກຕ້ອງ ແລະ ຈົ່ງຂໍການໃຫ້ອະໄພໂທດຈາກພຣະອົງ ແລະ ຄວາມວິບັດຈະເກີດຂຶ້ນແກ່ຜູ້ທີ່ຕັ້ງພາກີ (ສິ່ງອື່ນໆ) ຂຶ້ນມາທຽບເທົ່າກັບພຣະເຈົ້າ.", english: "Say, O [Muhammad], 'I am only a man like you to whom it has been revealed that your god is but one God; so take a straight course to Him and ask His forgiveness.' And woe to those who associate others with Allah -" },
  { number: "41:7", arabic: "الَّذِينَ لَا يُؤْتُونَ الزَّكَاةَ وَهُم بِالْآخِرَةِ هُمْ كَافِرُونَ", lao: "ບັນດາຜູ້ທີ່ບໍ່ຈ່າຍຊະກາດ, ແລະ ໃນວັນອາຄີຣັດ (ວັນສິ້ນໂລກ), ພວກເຂົາແມ່ນຜູ້ທີ່ບໍ່ສັດທາ.", english: "Those who do not give zakah, and in the Hereafter they are disbelievers." },
  { number: "41:8", arabic: "إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ لَهُمْ أَجْرٌ غَيْرُ مَمْنُونٍ", lao: "ແທ້ຈິງແລ້ວ, ບັນດາຜູ້ທີ່ສັດທາ ແລະ ໄດ້ກະທຳສິ່ງທີ່ດີງາມນັ້ນ, ພວກເຂົາຈະໄດ້ຮັບຜົນຕອບແທນຢ່າງຕໍ່ເນື່ອງໂດຍບໍ່ມີການຂາດສາຍ.", english: "Indeed, those who believe and do righteous deeds - for them is a reward uninterrupted." },
  { number: "41:9", arabic: "قُلْ أَئِنَّكُمْ لَتَكْفُرُونَ بِالَّذِي خَلَقَ الْأَرْضَ فِي يَوْمَيْنِ وَتَجْعَلُونَ لَهُ أَندَادًا ۚ ذَٰلِكَ رَبُّ الْعَالَمِينَ", lao: "ຈົ່ງກ່າວເຖີດ: 'ແທ້ຈິງພວກທ່ານປະຕິເສດຕໍ່ພຣະຜູ້ທີ່ສ້າງແຜ່ນດິນໃນສອງວັນ ແລະ ຕັ້ງພາກີກັບພຣະອົງບໍ? ນັ້ນຄືພຣະຜູ້ເປັນເຈົ້າແຫ່ງສາກົນໂລກ.'", english: "Say, 'Do you indeed disbelieve in He who created the earth in two days and attribute to Him equals? That is the Lord of the worlds.'" },
  { number: "41:10", arabic: "وَجَعَلَ فِيهَا رَوَاسِيَ مِن فَوْقِهَا وَبَارَكَ فِيهَا وَقَدَّرَ فِيهَا أَقْوَاتَهَا فِي أَرْبَعَةِ أَيَّامٍ سَوَاءً لِّلسَّائِلِينَ", lao: "ພຣະອົງໄດ້ວາງພູຜາທີ່ໝັ້ນຄົງຢູ່ເທິງໜ້າໂລກ, ແລະ ໄດ້ປະທານຄວາມດີໃຫ້ແກ່ໂລກ, ແລະ ກຳນົດປັດໄຈຊີວິດຂອງສິ່ງທີ່ມີຊີວິດຢູ່ໃນນັ້ນໃຫ້ສຳເລັດພາຍໃນສີ່ວັນຢ່າງເທົ່າທຽມກັນ — ເພື່ອເປັນຄຳຕອບໃຫ້ແກ່ບັນດາຜູ້ທີ່ຖາມ.", english: "And He placed on it stabilizers from above it and blessed it and determined therein its [creatures'] sustenance in four days without distinction - for [the information] of those who ask." },
];

export default function SurahFussilatView({ goBack }: SurahFussilatViewProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredVerses = verses.filter(verse =>
    verse.number.includes(searchQuery) ||
    verse.lao.toLowerCase().includes(searchQuery.toLowerCase()) ||
    verse.english.toLowerCase().includes(searchQuery.toLowerCase()) ||
    verse.arabic.includes(searchQuery)
  );

  return (
    <div className="flex flex-col">
      <ViewHeader title="ສູຣໍ ຟຸສຊີລັດ" onBack={goBack} />
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
          ສິບອາຍັດທຳອິດຂອງສູຣໍ ຟຸສຊີລັດ ໄດ້ກ່າວເຖິງການປະທານລົງມາຂອງຄຳພີກຸຣອານ, ການຜິນຫຼັງຂອງຜູ້ປະຕິເສດ, ແລະການຢືນຢັນເຖິງຄວາມເປັນເອກະພາບຂອງອັນລໍຫ໌ ແລະການສ້າງຊັ້ນຟ້າແລະແຜ່ນດິນຂອງພຣະອົງ.
        </SummaryCard>
      </main>
    </div>
  );
}
