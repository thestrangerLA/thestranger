'use client';
import ViewHeader from '@/components/shared/ViewHeader';
import ContentSection from '@/components/shared/ContentSection';
import QuoteCard from '@/components/shared/QuoteCard';
import SummaryCard from '@/components/shared/SummaryCard';
import { Crosshair, EyeOff, Infinity, Bookmark, Sparkles, CheckCircle } from 'lucide-react';

interface BeliefInAllahViewProps {
  goBack: () => void;
}

const BulletPoint = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start gap-3">
        <span className="text-primary font-bold mt-1">▶</span>
        <span>{children}</span>
    </li>
);

export default function BeliefInAllahView({ goBack }: BeliefInAllahViewProps) {
  return (
    <div className="flex flex-col">
      <ViewHeader title="ອັລລໍຮ໌ແມ່ນໃຜ?" onBack={goBack} />
      <main className="p-4 space-y-4">
        <ContentSection title="ນິຍາມຄຳວ່າພະເຈົ້າ" icon={<Crosshair />}>
          <p>ຄຳວ່າ "ພະເຈົ້າ" (God) ໂດຍທົ່ວໄປໝາຍເຖິງສິ່ງສູງສຸດ, ຜູ້ສ້າງ, ແລະ ເປັນຈຸດສູນລວມຂອງສັດທາໃນສາສະໜາທີ່ເຊື່ອໃນພະເຈົ້າອົງດຽວ (monotheism). ພະອົງຖືກຖືວ່າເປັນຜູ້ປົກຄອງຈັກກະວານ, ມີຄຸນລັກສະນະທີ່ສົມບູນແບບເຊັ່ນ: ມີອຳນາດສູງສຸດ, ຮອບຮູ້ທຸກສິ່ງ, ແລະ ຢູ່ຕະຫຼອດໄປ. ນອກຈາກນັ້ນ, ໃນບາງສາສະໜາທີ່ເຊື່ອຫຼາຍພະເຈົ້າ, ຄຳວ່າ "ພະເຈົ້າ" ອາດຈະໝາຍເຖິງສິ່ງສັກສິດທີ່ມີອຳນາດພິເສດ ເຊິ່ງຄຸ້ມຄອງພາກສ່ວນໃດໜຶ່ງຂອງຈັກກະວານ.</p>
        </ContentSection>

        <ContentSection title="ແນວຄິດກ່ຽວກັບພະເຈົ້າໃນອິດສະລາມ" icon={<Infinity />}>
            <p>ໃນສາສະໜາອິດສະລາມ, ແນວຄິດກ່ຽວກັບພະເຈົ້າແມ່ນເປັນຫຼັກການພື້ນຖານຂອງຄວາມເຊື່ອທັງໝົດ. ຫຼັກການນີ້ເອີ້ນວ່າ “ເຕົ໋າຮິດ” (Tawhid), ຊຶ່ງໝາຍເຖິງຄວາມເປັນເອກະລັກ ແລະ ຄວາມເປັນອົງດຽວຂອງພະເຈົ້າ. ນີ້ແມ່ນຈຸດສຳຄັນທີ່ສຸດທີ່ແຕກຕ່າງຈາກສາສະໜາອື່ນໆ.</p>
        </ContentSection>
        
        <ContentSection title="ອັນລໍຫ໌ (Allah) ແມ່ນໃຜ?" icon={<Bookmark />}>
            <p>ຊາວມຸດສະລິມເອີ້ນພະເຈົ້າວ່າ ອັນລໍຫ໌ (Allah). ຄຳນີ້ບໍ່ແມ່ນຊື່ສະເພາະ, ແຕ່ເປັນຄຳທີ່ມາຈາກພາສາອາຣັບ "al-ilah" ຊຶ່ງແປວ່າ "ພະເຈົ້າ". ຄວາມສຳຄັນຂອງຄຳວ່າ "ອັນລໍຫ໌" ແມ່ນເປັນຄຳທີ່ຊີ້ບອກເຖິງຄວາມເປັນເອກະລັກຂອງພະເຈົ້າອົງດຽວ, ບໍ່ມີສິ່ງໃດມາປຽບທຽບ ຫຼື ທຽບເທົ່າໄດ້. ພະອົງຄືຜູ້ສ້າງ ແລະ ຜູ້ຄຸ້ມຄອງຈັກກະວານທັງໝົດ.</p>
             <QuoteCard source="ອັນກຸຣອານ 112:1-4"><strong>ຈົ່ງກ່າວເຖີດ: ພຣະອົງຄືອັນລໍຫ໌ ຜູ້ຊົງເອກະ. ອັນລໍຫ໌ນັ້ນຊົງເປັນທີ່ເພິ່ງ. ພຣະອົງບໍ່ຊົງໃຫ້ກຳເນີດ ແລະ ບໍ່ຊົງຖືກໃຫ້ກຳເນີດ. ແລະບໍ່ມີຜູ້ໃດສະເໝີເໝືອນພຣະອົງ.</strong></QuoteCard>
        </ContentSection>

        <ContentSection title="ຄຸນລັກສະນະທີ່ສົມບູນແບບຂອງອັນລໍຫ໌" icon={<Sparkles />}>
            <p>ພະອົງມີຄຸນລັກສະນະທີ່ສົມບູນແບບທັງໝົດທີ່ເອີ້ນວ່າ "ພະນາມອັນງົດງາມ" (Asma ul-Husna) 99 ພະນາມ. ນອກຈາກທີ່ທ່ານໄດ້ກ່າວມາແລ້ວ, ຍັງມີຄຸນລັກສະນະທີ່ສຳຄັນອື່ນໆອີກ:</p>
            <ul className="space-y-2 mt-2">
                <BulletPoint><strong>ອັນ-ຄໍວີ (Al-Qawiyy):</strong> ຜູ້ຊົງມີພະລັງອັນຍິ່ງໃຫຍ່, ພະອົງມີພະລັງອຳນາດເໜືອທຸກສິ່ງຢ່າງ.</BulletPoint>
                <BulletPoint><strong>ອັນ-ຮາກີມ (Al-Hakim):</strong> ຜູ້ຊົງມີປັນຍາອັນເລິກເຊິ່ງ, ທຸກສິ່ງທີ່ພະອົງເຮັດລ້ວນແລ້ວແຕ່ມີເຫດຜົນ ແລະ ປັນຍາທີ່ສົມບູນແບບ.</BulletPoint>
                <BulletPoint><strong>ອັນ-ຄາບີດ (Al-Khabir):</strong> ຜູ້ຊົງຮູ້ເຖິງຄວາມເລັ້ນລັບ, ພະອົງຮູ້ທຸກສິ່ງທີ່ຖືກເຊື່ອງຊ້ອນ, ແມ້ແຕ່ຄວາມຄິດໃນໃຈຂອງຄົນ.</BulletPoint>
                <BulletPoint><strong>ອັນ-ຮັຍ (Al-Hayy):</strong> ຜູ້ຊົງມີຊີວິດຢູ່ຕະຫຼອດໄປ, ບໍ່ມີວັນຕາຍ.</BulletPoint>
            </ul>
        </ContentSection>

        <ContentSection title="ອັນລໍຫ໌ບໍ່ຄືກັບສິ່ງທີ່ພະອົງສ້າງ" icon={<EyeOff />}>
            <p>ຫຼັກການທີ່ສຳຄັນໃນອິດສະລາມແມ່ນ "ອັນລໍຫ໌ ບໍ່ເໝືອນກັບສິ່ງໃດໆທີ່ພະອົງສ້າງຂຶ້ນ". ພະອົງບໍ່ມີຮູບຮ່າງ, ບໍ່ມີຮ່າງກາຍ, ແລະ ບໍ່ຖືກຈຳກັດດ້ວຍເວລາ, ສະຖານທີ່, ຫຼືສິ່ງໃດໆທີ່ມະນຸດສາມາດເຂົ້າໃຈໄດ້. ການນຶກພາບເຖິງຮູບຮ່າງຂອງພະອົງຖືເປັນສິ່ງທີ່ບໍ່ຖືກຕ້ອງໃນອິດສະລາມ. ຄວາມເຊື່ອນີ້ເຮັດໃຫ້ຊາວມຸດສະລິມມຸ່ງເນັ້ນເຖິງການນະມັດສະການພະອົງໃນທາງທີ່ຖືກຕ້ອງ, ໂດຍອີງໃສ່ຄຳສອນໃນຄຳພີກຸຣອານ ແລະ ການປະຕິບັດຂອງສາດສະດາ.</p>
        </ContentSection>

        <SummaryCard title="ສະຫຼຸບ">
          ໂດຍລວມແລ້ວ, ແນວຄິດກ່ຽວກັບພະເຈົ້າໃນອິດສະລາມເນັ້ນໜັກເຖິງຄວາມເປັນອົງດຽວ, ຄວາມສົມບູນແບບ, ແລະ ຄວາມແຕກຕ່າງຢ່າງສິ້ນເຊີງຈາກສິ່ງທີ່ພະອົງສ້າງ. ພະອົງເປັນພະເຈົ້າອົງດຽວກັນທີ່ສາດສະດາທຸກທ່ານເຄີຍສອນ, ແລະ ເປັນທີ່ເພິ່ງພາສຳລັບທຸກສິ່ງໃນຈັກກະວານ.
        </SummaryCard>
      </main>
    </div>
  );
}
