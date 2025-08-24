'use client';
import ViewHeader from '@/components/shared/ViewHeader';
import VerseCard from '@/components/shared/VerseCard';
import SummaryCard from '@/components/shared/SummaryCard';

interface SurahAlBaqarahViewProps {
  goBack: () => void;
}

const verses = [
  { number: "2:1", arabic: "الم", lao: "ອາລີຟ, ລາມ, ມີມ.", english: "Alif, Lam, Meem." },
  { number: "2:2", arabic: "ذَٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ هُدًى لِّلْمُتَّقِينَ", lao: "ຄໍາພີນີ້ (ກຸຣອານ), ບໍ່ມີຄວາມສົງໄສໃດໆໃນມັນ, ເປັນການຊີ້ແນະແກ່ບັນດາຜູ້ທີ່ມີຄວາມຍຳເກງ.", english: "This is the Book about which there is no doubt, a guidance for those conscious of Allah -" },
  { number: "2:3", arabic: "الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ", lao: "ບັນດາຜູ້ທີ່ເຊື່ອໃນສິ່ງທີ່ລັບເລິກ, ແລະດຳລົງການລະໝາດ, ແລະຈາກສິ່ງທີ່ເຮົາໄດ້ປະທານໃຫ້ພວກເຂົາ ພວກເຂົາກໍບໍລິຈາກ.", english: "Who believe in the unseen, establish prayer, and spend out of what We have provided for them," },
  { number: "2:4", arabic: "وَالَّذِينَ يُؤْمِنُونَ بِمَا أُنزِلَ إِلَيْكَ وَمَا أُنزِلَ مِن قَبْلِكَ وَبِالْآخِرَةِ هُمْ يُوقِنُونَ", lao: "ແລະບັນດາຜູ້ທີ່ເຊື່ອໃນສິ່ງທີ່ຖືກເປີດເຜີຍລົງມາຫາເຈົ້າ, ແລະສິ່ງທີ່ຖືກເປີດເຜີຍລົງມາກ່ອນເຈົ້າ, ແລະພວກເຂົາກໍມີຄວາມເຊື່ອໝັ້ນຢ່າງເຕັມທີ່ໃນໂລກຫນ້າ.", english: "And who believe in what has been revealed to you, [O Muhammad], and what was revealed before you, and of the Hereafter they are certain [in faith]." },
  { number: "2:5", arabic: "أُولَٰئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ وَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ", lao: "ພວກເຂົານັ້ນຢູ່ເທິງເສັ້ນທາງທີ່ຖືກຕ້ອງຈາກພຣະຜູ້ເປັນເຈົ້າຂອງພວກເຂົາ, ແລະພວກເຂົານັ້ນຄືບັນດາຜູ້ທີ່ໄດ້ຮັບຄວາມສຳເລັດ.", english: "Those are upon [right] guidance from their Lord, and it is those who are the successful." },
  { number: "2:6", arabic: "إِنَّ الَّذِينَ كَفَرُوا سَوَاءٌ عَلَيْهِمْ أَأَنذَرْتَهُمْ أَمْ لَمْ تُنذِرْهُمْ لَا يُؤْمِنُونَ", lao: "ແທ້ຈິງບັນດາຜູ້ທີ່ປະຕິເສດຄວາມເຊື່ອ, ບໍ່ວ່າເຈົ້າຈະຕັກເຕືອນພວກເຂົາຫຼືບໍ່ຕັກເຕືອນພວກເຂົາກໍຕາມ, ພວກເຂົາຈະບໍ່ເຊື່ອ.", english: "Indeed, those who disbelieve - it is all the same for them whether you warn them or do not warn them - they will not believe." },
  { number: "2:7", arabic: "خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ", lao: "ອັລລໍຮ໌ໄດ້ຊົງປະທັບຕາໄວ້ເທິງຫົວໃຈຂອງພວກເຂົາ ແລະເທິງການໄດ້ຍິນຂອງພວກເຂົາ, ແລະເທິງສາຍຕາຂອງພວກເຂົາມີຜ້າປິດໄວ້; ແລະສຳລັບພວກເຂົາຈະໄດ້ຮັບການທໍລະມານຢ່າງໃຫຍ່ຫຼວງ.", english: "Allah has set a seal upon their hearts and upon their hearing, and over their vision is a veil. And for them is a great punishment." },
  { number: "2:8", arabic: "وَمِنَ النَّاسِ مَن يَقُولُ آمَنَّا بِاللَّهِ وَبِالْيَوْمِ الْآخِرِ وَمَا هُم بِمُؤْمِنِينَ", lao: "ແລະໃນບັນດາມະນຸດ ມີຜູ້ທີ່ກ່າວວ່າ “ພວກເຮົາເຊື່ອໃນອັລລໍຮ໌ ແລະໃນວັນສຸດທ້າຍ” ແຕ່ພວກເຂົາບໍ່ແມ່ນຜູ້ທີ່ເຊື່ອ.", english: "And of the people are some who say, 'We believe in Allah and the Last Day,' but they are not believers." },
  { number: "2:9", arabic: "يُخَادِعُونَ اللَّهَ وَالَّذِينَ آمَنُوا وَمَا يَخْدَعُونَ إِلَّا أَنفُسَهُمْ وَمَا يَشْعُرُونَ", lao: "ພວກເຂົາຫຼອກລວງອັລລໍຮ໌ ແລະບັນດາຜູ້ທີ່ເຊື່ອ, ແຕ່ພວກເຂົາບໍ່ໄດ້ຫຼອກລວງໃຜນອກຈາກຕົວເອງເທົ່ານັ້ນ, ແລະພວກເຂົາກໍບໍ່ຮູ້ສຶກຕົວ.", english: "They [think to] deceive Allah and those who believe, but they deceive not except themselves and perceive [it] not." },
  { number: "2:10", arabic: "فِي قُلُوبِهِم مَّرَضٌ فَزَادَهُمُ اللَّهُ مَرَضًا وَلَهُمْ عَذَابٌ أَلِيمٌ بِمَا كَانُوا يَكْذِبُونَ", lao: "ໃນຫົວໃຈຂອງພວກເຂົາມີພະຍາດ, ແລ້ວອັລລໍຮ໌ກໍຊົງເພີ່ມພະຍາດໃຫ້ພວກເຂົາ, ແລະພວກເຂົາຈະໄດ້ຮັບການທໍລະມານຢ່າງເຈັບປວດເນື່ອງຈາກສິ່ງທີ່ພວກເຂົາເຄີຍຕົວະ.", english: "In their hearts is disease, so Allah has increased their disease; and for them is a painful punishment because they [habitually] used to lie." },
]

export default function SurahAlBaqarahView({ goBack }: SurahAlBaqarahViewProps) {
  return (
    <div className="flex flex-col">
      <ViewHeader title="ສູຣໍ ອັລບາກໍຣໍ" onBack={goBack} />
      <main className="p-4">
        {verses.map(v => <VerseCard key={v.number} {...v} />)}
        <SummaryCard title="ສະຫຼຸບ">
          ສິບອາຍັດທຳອິດຂອງສູຣໍ ອັລບາກໍຣໍ ໄດ້ກ່າວເຖິງລັກສະນະຂອງຄຳພີກຸຣອານ, ຄຸນລັກສະນະຂອງຜູ້ທີ່ມີຄວາມຍຳເກງ (ຜູ້ທີ່ປະຕິບັດຕາມ), ແລະ ຄຸນລັກສະນະຂອງຜູ້ປະຕິເສດຄວາມເຊື່ອ ແລະ ຜູ້ສໍ້ໂກງ.
        </SummaryCard>
      </main>
    </div>
  );
}
