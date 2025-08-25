'use client';
import ViewHeader from '@/components/shared/ViewHeader';
import ContentSection from '@/components/shared/ContentSection';
import QuoteCard from '@/components/shared/QuoteCard';
import SummaryCard from '@/components/shared/SummaryCard';
import { Crosshair, EyeOff, Infinity, Bookmark, Sparkles, CheckCircle, BookHeart, Heart, Layers } from 'lucide-react';

interface BeliefInAllahViewProps {
  goBack: () => void;
}

const BulletPoint = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start gap-3">
        <span className="text-primary font-bold mt-1">▶</span>
        <span>{children}</span>
    </li>
);

const NumberedPoint = ({ number, title, children }: { number: string, title: React.ReactNode, children: React.ReactNode }) => (
    <div className="mt-2">
        <h4 className="font-bold text-md text-primary flex items-start gap-2">
            <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs shrink-0">{number}</span>
            {title}
        </h4>
        <div className="pl-7 mt-1 text-card-foreground">
            {children}
        </div>
    </div>
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

        <ContentSection title="ຄວາມໝາຍຂອງການເຊື່ອຕໍ່ອັລລໍຫ໌" icon={<BookHeart />}>
            <p>ການສັດທາຕໍ່ອັລລໍຫ໌ແມ່ນພື້ນຖານທີ່ສຳຄັນທີ່ສຸດຂອງສາສະໜາອິດສະລາມ, ເຊິ່ງເອີ້ນວ່າ ເຕົ່າຮິດ (ເອກະພາບຂອງພະເຈົ້າ). ໝາຍເຖິງການເຊື່ອໝັ້ນຢ່າງໜັກແໜ້ນວ່າ “ບໍ່ມີພະເຈົ້າອື່ນໃດນອກຈາກອັລລໍຫ໌”. ການສັດທານີ້ແມ່ນຫົວໃຈຂອງຫຼັກສັດທາທັງໝົດ ເພາະເປັນທີ່ມາຂອງຄວາມເຊື່ອໃນຫຼັກການອື່ນໆຂອງສາສະໜາອິດສະລາມ ເຊັ່ນ: ສັດທາໃນຄຳພີ, ສາດສະດາ, ເທວະທູດ ແລະ ວັນສິ້ນໂລກ. ນອກຈາກນີ້, ຍັງຊ່ວຍໃຫ້ຫົວໃຈຂອງຜູ້ສັດທາມີຄວາມໝັ້ນຄົງ ແລະ ເຂັ້ມແຂງໃນການປະເຊີນກັບອຸປະສັກຕ່າງໆ.</p>
            <h3 className="font-bold text-md text-primary mt-4">ຄວາມໝາຍຂອງເຕົ່າຮິດ</h3>
            <p>ນັກວິຊາການໄດ້ແບ່ງເຕົ່າຮິດອອກເປັນ 3 ດ້ານຫຼັກ ເພື່ອໃຫ້ເຂົ້າໃຈໄດ້ຢ່າງເລິກເຊິ່ງ:</p>
            <NumberedPoint number="1" title="ເຕົ່າຮິດ ອັລຣູບູບີຢະຮ໌ (ເອກະພາບໃນຄວາມເປັນພະຜູ້ສ້າງ):">ຄືການເຊື່ອໝັ້ນວ່າອັລລໍຫ໌ເປັນຜູ້ສ້າງ, ຜູ້ໃຫ້ຊີວິດ ແລະ ຄວາມຕາຍ, ແລະ ຜູ້ທີ່ດູແລຄວບຄຸມທຸກສິ່ງໃນຈັກກະວານ.</NumberedPoint>
            <NumberedPoint number="2" title="ເຕົ່າຮິດ ອັລອຸລູຮີຢະຮ໌ (ເອກະພາບໃນການເຄົາລົບພັກດີ):">ຄືການມອບການເຄົາລົບພັກດີ (ອິບາດະຮ໌) ທັງໝົດແດ່ອັລລໍອ໌ພຽງອົງດຽວເທົ່ານັ້ນ, ບໍ່ກົ້ມກາບໄຫວ້ ຫຼື ຂໍຄວາມຊ່ວຍເຫຼືອຈາກສິ່ງສັກສິດອື່ນໃດ.</NumberedPoint>
            <NumberedPoint number="3" title="ເຕົ່າຮິດ ອັລອັສມາອ໌ ວັດສຊິຟາຕ (ເອກະພາບໃນພະນາມ ແລະ ຄຸນລັກສະນະ):">ຄືການຍອມຮັບພະນາມ ແລະ ຄຸນລັກສະນະຂອງອັລລໍອ໌ຕາມທີ່ລະບຸໄວ້ໃນຄຳພີອັລກຸຣອານ ແລະ ແບບຢ່າງຂອງສາດສະດາມູຮຳມັດ, ໂດຍບໍ່ບິດເບືອນ, ບໍ່ປະຕິເສດ ແລະ ບໍ່ນຳໄປປຽບທຽບກັບສິ່ງໃດໆ.</NumberedPoint>
        </ContentSection>

        <ContentSection title="ຄຸນລັກສະນະຂອງອັລລໍອ໌ (ເຊາະຟາຕຸລລໍອ໌)" icon={<Sparkles />}>
            <p>ອັລລໍອ໌ຊົງມີຄຸນລັກສະນະທີ່ສົມບູນ ແລະ ຜິດແປກຈາກສັບພະສິ່ງທັງປວງ. ຄຸນລັກສະນະທີ່ສຳຄັນຂອງພະອົງໄດ້ແກ່:</p>
            <ul className="space-y-2 mt-2">
                <BulletPoint><strong>ຊົງມີຢູ່ຈິງ ແລະ ເປັນນິລັນດອນ:</strong> ຊົງມີຢູ່ກ່ອນສິ່ງທັງປວງ ແລະ ບໍ່ມີຈຸດສິ້ນສຸດ.</BulletPoint>
                <BulletPoint><strong>ຊົງເປັນຜູ້ສ້າງ ແລະ ຜູ້ດຳລົງຢູ່ເອງ:</strong> ທຸກສິ່ງຂຶ້ນຢູ່ກັບພະອົງ ແລະ ພະອົງບໍ່ໄດ້ຂຶ້ນຢູ່ກັບສິ່ງໃດ.</BulletPoint>
                <BulletPoint><strong>ຊົງໄດ້ຍິນ ແລະ ຊົງເຫັນທຸກສິ່ງ:</strong> ຊົງຮອບຮູ້ໃນທຸກສິ່ງທີ່ເກີດຂຶ້ນ.</BulletPoint>
                <BulletPoint><strong>ຊົງເຕັມໄປດ້ວຍຄວາມເມດຕາ ແລະ ຍຸຕິທຳ:</strong> ພະອົງຈະຊົງບໍ່ເຮັດອະທຳຕໍ່ຜູ້ໃດ.</BulletPoint>
            </ul>
        </ContentSection>

        <ContentSection title="ຜົນຂອງການສັດທາຕໍ່ອັລລໍອ໌" icon={<Heart />}>
            <p>ການສັດທາຕໍ່ອັລລໍອ໌ຢ່າງແທ້ຈິງຈະສົ່ງຜົນກະທົບໃນທາງບວກຕໍ່ຊີວິດຂອງຜູ້ສັດທາ:</p>
            <ul className="space-y-2 mt-2">
              <BulletPoint><strong>ມີເປົ້າໝາຍຊີວິດທີ່ຊັດເຈນ:</strong> ຜູ້ສັດທາຈະເຂົ້າໃຈວ່າຊີວິດຢູ່ເພື່ອການເຄົາລົບພັກດີຕໍ່ພະອົງ.</BulletPoint>
              <BulletPoint><strong>ນຳມາເຊິ່ງຄວາມສະຫງົບສຸກໃນຫົວໃຈ:</strong> ຄວາມໝັ້ນໃຈວ່າອັລລໍອ໌ຊົງຄວບຄຸມທຸກສິ່ງ, ເຮັດໃຫ້ຜູ້ສັດທາຮູ້ສຶກສະຫງົບ ແລະ ບໍ່ຫວັ່ນໄຫວ.</BulletPoint>
              <BulletPoint><strong>ຫຼີກເວັ້ນຈາກບາບທີ່ໃຫຍ່ທີ່ສຸດ:</strong> ການສັດທາທີ່ໝັ້ນຄົງຈະຊ່ວຍໃຫ້ຫຼີກເວັ້ນ ຊິຣິກ (ການຕັ້ງພາກີກັບພະເຈົ້າ) ເຊິ່ງເປັນບາບທີ່ອັລລໍອ໌ຈະຊົງບໍ່ອະໄພໃຫ້.</BulletPoint>
              <BulletPoint><strong>ນຳໄປສູ່ການກະທຳທີ່ດີງາມ:</strong> ເຊັ່ນ: ຄວາມສັດຊື່, ຄວາມອົດທົນ ແລະ ການຊ່ວຍເຫຼືອຜູ້ອື່ນ.</BulletPoint>
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
