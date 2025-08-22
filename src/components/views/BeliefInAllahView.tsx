'use client';
import ViewHeader from '@/components/shared/ViewHeader';
import ContentSection from '@/components/shared/ContentSection';
import QuoteCard from '@/components/shared/QuoteCard';
import SummaryCard from '@/components/shared/SummaryCard';
import { CheckCircle, Crosshair, EyeOff, Infinity, Bookmark, Sparkles } from 'lucide-react';

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
      <ViewHeader title="ເຊື່ອໃນອັລລໍຮ໌" onBack={goBack} />
      <main className="p-4 space-y-4">
        <ContentSection title="ນິຍາມຂອງຄຳວ່າ “ພະເຈົ້າ”" icon={<Crosshair />}>
          <p>ຄຳວ່າ “ພະເຈົ້າ” (God) ໃນຄວາມເຂົ້າໃຈທົ່ວໄປ ໝາຍເຖິງຜູ້ສູງສຸດ, ຜູ້ສ້າງ ແລະ ຜູ້ຄຸ້ມຄອງຈັກກະວານ. ມະນຸດຕ່າງເຊື່ອໃນຮູບແບບທີ່ຕ່າງກັນ:</p>
          <ul className="space-y-2 mt-2">
            <BulletPoint>ບາງສາສະໜາເຊື່ອພະເຈົ້າອົງດຽວ (Monotheism).</BulletPoint>
            <BulletPoint>ບາງສາສະໜາເຊື່ອພະເຈົ້າຫຼາຍອົງ (Polytheism).</BulletPoint>
            <BulletPoint>ບາງປັດຊະຍາມອງວ່າທຸກສິ່ງທຸກຢ່າງຄືສ່ວນໜຶ່ງຂອງພະເຈົ້າ (Pantheism).</BulletPoint>
          </ul>
        </ContentSection>

        <ContentSection title="ແນວຄິດກ່ຽວກັບພະເຈົ້າໃນອິດສະລາມ" icon={<Infinity />}>
            <h3 className="font-bold text-base text-primary">ເຕົ໋າຮິດ (Tawhid)</h3>
            <p>ແມ່ນຫົວໃຈຂອງຄວາມເຊື່ອອິດສະລາມ ໝາຍເຖິງການຍອມຮັບວ່າ:</p>
            <ul className="space-y-2 mt-2">
                <BulletPoint>ອັນລໍຫ໌ເປັນພະເຈົ້າອົງດຽວ.</BulletPoint>
                <BulletPoint>ບໍ່ມີຜູ້ໃດມີສິດທິໃນການຖືກນະມັດສະການນອກຈາກພຣະອົງ.</BulletPoint>
                <BulletPoint>ບໍ່ມີສິ່ງໃດເປັນຄູ່ເທົ່າ ຫຼື ຄູ່ຄວາມຍິ່ງໃຫຍ່ກັບພຣະອົງ.</BulletPoint>
            </ul>
            <h3 className="font-bold text-base text-primary mt-4">ອັນລໍຫ໌ (Allah)</h3>
            <p>ຄຳນີ້ມາຈາກພາສາອາຣັບ “al-ilah” ແປວ່າ ພະເຈົ້າ.</p>
             <ul className="space-y-2 mt-2">
                <BulletPoint>ແມ່ນຄຳເອີ້ນທີ່ມຸດສະລິມທົ່ວໂລກໃຊ້ເພື່ອອ້າງເຖິງພຣະອົງຜູ້ດຽວ.</BulletPoint>
                <BulletPoint>ຊີ້ໃຫ້ເຫັນຄວາມເປັນເອກະລັກ ແລະ ບໍ່ມີໃຜຄືກັບພຣະອົງ.</BulletPoint>
            </ul>
        </ContentSection>
        
        <ContentSection title="ຫຼັກຖານຈາກຄຳພີກຸຣອານ" icon={<Bookmark />}>
            <p>ອັນກຸຣອານ (112:1-4) ກ່າວວ່າ:</p>
            <QuoteCard source=""><strong>ຈົ່ງກ່າວເຖີດ: ພຣະອົງຄືອັນລໍຫ໌ ຜູ້ຊົງເອກະ. ອັນລໍຫ໌ນັ້ນຊົງເປັນທີ່ເພິ່ງ. ພຣະອົງບໍ່ຊົງໃຫ້ກຳເນີດ ແລະ ບໍ່ຊົງຖືກໃຫ້ກຳເນີດ. ແລະບໍ່ມີຜູ້ໃດສະເໝີເໝືອນພຣະອົງ.</strong></QuoteCard>
        </ContentSection>

        <ContentSection title="ຄຸນລັກສະນະທີ່ສົມບູນແບບຂອງອັນລໍຫ໌" icon={<Sparkles />}>
            <p>ພຣະອົງມີ 99 ພະນາມອັນງົດງາມ (Asma ul-Husna) ເຊິ່ງສະທ້ອນຄຸນລັກສະນະອັນສົມບູນແບບ. ຕົວຢ່າງ:</p>
            <ul className="space-y-2 mt-2">
                <BulletPoint><strong>Al-Qawiyy (ອັນ-ຄໍວີ):</strong> ຜູ້ຊົງມີພະລັງອັນຍິ່ງໃຫຍ່.</BulletPoint>
                <BulletPoint><strong>Al-Hakim (ອັນ-ຮາກີມ):</strong> ຜູ້ຊົງມີປັນຍາອັນເລິກເຊິ່ງ.</BulletPoint>
                <BulletPoint><strong>Al-Khabir (ອັນ-ຄາບີດ):</strong> ຜູ້ຊົງຮູ້ເຖິງຄວາມເລັ້ນລັບທັງປວງ.</BulletPoint>
                <BulletPoint><strong>Al-Hayy (ອັນ-ຮັຍ):</strong> ຜູ້ຊົງມີຊີວິດຢູ່ຕະຫຼອດໄປ.</BulletPoint>
                <BulletPoint><strong>Ar-Rahman (ອັຣ-ຣະຮະມານ):</strong> ຜູ້ຊົງເມດຕາຢ່າງຫາຂອບເຂດບໍ່ໄດ້.</BulletPoint>
                <BulletPoint><strong>Ar-Rahim (ອັຣ-ຣະຮິມ):</strong> ຜູ້ຊົງປະທານຄວາມເມດຕາຢ່າງຕໍ່ເນື່ອງ.</BulletPoint>
            </ul>
        </ContentSection>

        <ContentSection title="ອັນລໍຫ໌ບໍ່ຄືກັບສິ່ງທີ່ພະອົງສ້າງ" icon={<EyeOff />}>
            <p>ພຣະອົງບໍ່ມີຮູບຮ່າງ, ບໍ່ມີຮ່າງກາຍ, ບໍ່ຖືກຈຳກັດໂດຍເວລາ ຫຼື ສະຖານທີ່.</p>
            <p>ການຄິດວ່າພຣະອົງຄືສິ່ງໃດສິ່ງໜຶ່ງເປັນການເຂົ້າໃຈຜິດ.</p>
            <QuoteCard source="ອັນກຸຣອານ 42:11">“<strong>ບໍ່ມີສິ່ງໃດເປັນດັ່ງພຣະອົງເລີຍ, ແລະ ພຣະອົງແມ່ນຜູ້ໄດ້ຍິນ ແລະ ຜູ້ເຫັນ.</strong>”</QuoteCard>
        </ContentSection>
        
        <ContentSection title="ຄວາມສຳຄັນຕໍ່ຊີວິດມຸດສະລິມ" icon={<CheckCircle />}>
            <p>ຊີວິດຂອງຊາວມຸດສະລິມສະເພາະເພື່ອ ນະມັດສະການພຣະອົງ (Ibadah).</p>
            <p>ຄວາມເຊື່ອໃນອັນລໍຫ໌ເປັນພື້ນຖານຂອງ <strong>ຊະຫາດາ (Shahadah)</strong>:</p>
            <QuoteCard source="">“<strong>ຂ້າພະເຈົ້າຂໍຮັບຮູ້ວ່າ ບໍ່ມີພະເຈົ້າອົງໃດຄວນໄດ້ຮັບການນະມັດສະການນອກຈາກອັນລໍຫ໌, ແລະ ມູຮັມມັດແມ່ນສາດສະດາຂອງພຣະອົງ.</strong>”</QuoteCard>
        </ContentSection>

        <SummaryCard title="ສະຫຼຸບ">ພຣະເຈົ້າໃນອິດສະລາມຄື ອັນລໍຫ໌, ຜູ້ດຽວຜູ້ສ້າງຈັກກະວານ, ມີຄຸນລັກສະນະອັນສົມບູນແບບ, ບໍ່ຄືກັບສິ່ງໃດໆທີ່ຖືກສ້າງ, ແລະ ເປັນຜູ້ຄວນໄດ້ຮັບການນະມັດສະການພຽງຜູ້ດຽວ.</SummaryCard>
      </main>
    </div>
  );
}
