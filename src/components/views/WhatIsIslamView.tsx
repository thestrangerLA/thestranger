'use client';
import ViewHeader from '@/components/shared/ViewHeader';
import ContentSection from '@/components/shared/ContentSection';
import QuoteCard from '@/components/shared/QuoteCard';
import SummaryCard from '@/components/shared/SummaryCard';
import { BookOpen, Crosshair, History, ListChecks } from 'lucide-react';

interface WhatIsIslamViewProps {
  goBack: () => void;
}

const BulletPoint = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start gap-3">
        <span className="text-primary font-bold mt-1">▶</span>
        <span>{children}</span>
    </li>
);

const NumberedBullet = ({ number, children }: { number: string, children: React.ReactNode }) => (
    <li className="flex items-start gap-3">
        <span className="text-primary font-bold mt-1">{number}.</span>
        <span>{children}</span>
    </li>
);

export default function WhatIsIslamView({ goBack }: WhatIsIslamViewProps) {
  return (
    <div className="flex flex-col">
      <ViewHeader title="ອິສລາມແມ່ນຫຍັງ?" onBack={goBack} />
      <main className="p-4 space-y-4">
        <ContentSection title='ຄວາມໝາຍຂອງ “ອິດສະລາມ”' icon={<BookOpen />}>
            <p>ຕາມພາສາອາຣັບ ຄຳນີ້ມີໝາຍເຖິງ <strong>“ການນອບນ້ອມ ແລະ ການຍອມຈຳນົນ”</strong> ຕໍ່ອັນລໍຫ໌ ໂດຍການເຊື່ອຟັງ ແລະ ປະຕິບັດຕາມຄຳສັ່ງຂອງພຣະອົງ.</p>
            <p>ຄຳວ່າ <strong>“ອິດສະລາມ”</strong> ມາຈາກຮາກສັບ <strong>“ສະລາມ”</strong> ເຊິ່ງໝາຍເຖິງ ຄວາມສະຫງົບ ແລະ ຄວາມບໍລິສຸດ.</p>
            <p>ດັ່ງນັ້ນ <strong>“ມຸດສະລິມ”</strong> ແມ່ນຜູ້ທີ່ນອບນ້ອມຕໍ່ອັນລໍຫ໌ ແລະ ດຳລົງຊີວິດຕາມຄຳສອນຂອງອິດສະລາມ.</p>
        </ContentSection>
        
        <QuoteCard source="ອັນກຸຣອານ 3:19">
            <strong>“ແທ້ຈິງ ສາສະຫນາທີ່ອັນລໍຫ໌ຊົງຮັບຮອງ ກໍຄື ອິດສະລາມ”</strong>
        </QuoteCard>

        <ContentSection title='ອິດສະລາມບໍ່ແມ່ນສາສະຫນາໃໝ່' icon={<History />}>
            <p>ອິດສະລາມເປັນສາສະຫນາດຽວກັນທີ່ອັນລໍຫ໌ໄດ້ປະທານໃຫ້ແກ່ບັນດານະບີ ຕັ້ງແຕ່ນະບີອາດາມ, ນະບີໂນອາ, ນະບີອີບຣາຮີມ, ນະບີມູຊາ, ນະບີດາວູດ, ນະບີອີຊາ ແລະ ສືບຕໍ່ຈົນເຖິງນະບີມູຮັມມັດ ﷺ ນະບີຜູ້ສຸດທ້າຍ.</p>
        </ContentSection>
        
        <QuoteCard source="ອັນກຸຣອານ 16:36">
            <strong>“ແລະ ເຮົາໄດ້ສົ່ງນະບີໃນທຸກຊຸມຊົນ ໂດຍມີຄຳສັ່ງວ່າ: ຈົ່ງນະມັດສະການອັນລໍຫ໌ ແລະ ຈົ່ງຫຼີກຫ່າງຈາກພຣະເຈົ້າອື່ນ”</strong>
        </QuoteCard>

        <ContentSection title='ແກ່ນສານຫຼັກຂອງອິດສະລາມ' icon={<Crosshair />}>
            <ul className="space-y-2">
                <BulletPoint><strong>ຄວາມເຊື່ອໃນພຣະເຈົ້າອົງດຽວ (ອັນລໍຫ໌):</strong> ຜູ້ສ້າງຟ້າດິນ ແລະ ສິ່ງທັງປວງ.</BulletPoint>
                <BulletPoint><strong>ການປະຕິບັດຕາມຄຳຊີ້ນຳຂອງພຣະອົງ:</strong> ທີ່ຖືກເປີດເຜີຍຜ່ານບັນດານະບີ ແລະ ສົມບູນແບບໃນອັນກຸຣອານ.</BulletPoint>
                <BulletPoint><strong>ການດຳລົງຊີວິດຢ່າງຊອບທຳ:</strong> ມີຄວາມຍຸດຕິທຳ, ຄວາມເມດຕາ, ແລະ ຫຼີກຫ່າງຄວາມຊົ່ວ.</BulletPoint>
                <BulletPoint><strong>ຄວາມຮັບຜິດຊອບຕໍ່ການກະທຳ:</strong> ທຸກການກະທຳຈະຖືກຕັດສິນ ຄວາມດີນຳໄປສູ່ສະຫວັນ ຄວາມຊົ່ວນຳໄປສູ່ນະລົກ.</BulletPoint>
            </ul>
        </ContentSection>
        
        <ContentSection title='ຫຼັກປະຕິບັດ 5 ປະການຂອງອິສລາມ' icon={<ListChecks />}>
            <p>ຫຼັກປະຕິບັດເຫຼົ່ານີ້ເປັນພື້ນຖານຂອງຊີວິດມຸດສະລິມ ແລະ ເປັນພັນທະສຳລັບທຸກຄົນທີ່ເຊື່ອຖື:</p>
            <ul className="space-y-2 mt-2">
                <NumberedBullet number="1"><strong>ການເປັນພະຍານ (ຊະຮາດະ):</strong> ການປະກາດຄວາມເຊື່ອວ່າ "ບໍ່ມີພຣະເຈົ້າອື່ນນອກຈາກອັນລໍຫ໌ ແລະ ນະບີມູຮັມມັດ ເປັນສາດສະດາຂອງພຣະອົງ."</NumberedBullet>
                <NumberedBullet number="2"><strong>ການລະໝາດ (ການບູຊາ):</strong> ການປະຕິບັດການລະໝາດ 5 ເວລາໃນແຕ່ລະວັນ ເພື່ອສະແດງຄວາມເຊື່ອ ແລະ ຄວາມສຳພັນກັບອັນລໍຫ໌.</NumberedBullet>
                <NumberedBullet number="3"><strong>ການຈ່າຍຊະກາດ (ການບໍລິຈາກ):</strong> ການບໍລິຈາກສ່ວນໜຶ່ງຂອງຊັບສິນທີ່ເປັນມຸດສະລິມທີ່ມີຖານະ ເພື່ອຊ່ວຍເຫລືອຜູ້ທຸກຍາກ ແລະ ຜູ້ຂັດສົນ.</NumberedBullet>
                <NumberedBullet number="4"><strong>ການຖືສິນອົດ (ສ່ອມ):</strong> ການຖືສິນອົດອາຫານໃນຊ່ວງເດືອນຣາມາດອນ ເພື່ອພັດທະນາຄວາມອົດທົນ, ການບັງຄັບຕົນເອງ ແລະ ເຂົ້າໃຈຄວາມທຸກຂອງຄົນອື່ນ.</NumberedBullet>
                <NumberedBullet number="5"><strong>ການສະແຫວງບຸນຮັຈ (ການສະແຫວງບຸນ):</strong> ການເດີນທາງໄປນະຄອນ Mecca ຢ່າງໜ້ອຍໜຶ່ງຄັ້ງໃນຊີວິດສຳລັບມຸດສະລິມທີ່ມີຄວາມສາມາດທາງຮ່າງກາຍ ແລະ ການເງິນ.</NumberedBullet>
            </ul>
        </ContentSection>

        <SummaryCard title="✨ ສະຫຼຸບສັ້ນໆ">
          ອິດສະລາມແມ່ນສາສະຫນາຂອງພຣະເຈົ້າ ທີ່ປະທານແນວທາງໃຫ້ມະນຸດ ເພື່ອດຳລົງຊີວິດຢ່າງມີຄວາມໝາຍ ແລະ ປອດໄພ ທັງໃນໂລກນີ້ ແລະ ໃນຊີວິດຫຼັງ.
        </SummaryCard>
      </main>
    </div>
  );
}
