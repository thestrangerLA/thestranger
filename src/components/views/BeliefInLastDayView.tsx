'use client';
import ViewHeader from '@/components/shared/ViewHeader';
import ContentSection from '@/components/shared/ContentSection';
import { Landmark, AlertTriangle, Scale, Goal } from 'lucide-react';

interface BeliefInLastDayViewProps {
  goBack: () => void;
}

const BulletPoint = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start gap-3">
        <span className="text-primary font-bold mt-1">▶</span>
        <span>{children}</span>
    </li>
);

export default function BeliefInLastDayView({ goBack }: BeliefInLastDayViewProps) {
  return (
    <div className="flex flex-col">
      <ViewHeader title="ຄວາມເຊື່ອໃນວັນກິຍາມະ" onBack={goBack} />
      <main className="p-4 space-y-4">
        <ContentSection title="ຄວາມເຊື່ອໃນວັນກິຍາມະ (Yaumal−Qiyamah)" icon={<Landmark />}>
          <p>ໃນສາສະໜາອິດສະລາມ, ວັນກິຍາມະ (Yaumal−Qiyamah) ຫຼື ວັນສິ້ນໂລກ ເປັນຫຼັກການສຳຄັນທີ່ສຸດຂອງຄວາມເຊື່ອ. ຊາວມຸດສະລິມເຊື່ອວ່າວັນນີ້ຈະມາເຖິງຢ່າງແນ່ນອນ ແລະ ຈະເປັນວັນສຸດທ້າຍຂອງໂລກນີ້. ຄວາມເຊື່ອນີ້ບໍ່ພຽງແຕ່ເປັນເລື່ອງຂອງອະນາຄົດເທົ່ານັ້ນ, ແຕ່ມັນຍັງມີຜົນກະທົບຢ່າງໃຫຍ່ຕໍ່ການດຳເນີນຊີວິດປະຈຳວັນຂອງຊາວມຸດສະລິມ.</p>
        </ContentSection>

        <ContentSection title="ເກີດຫຍັງຂຶ້ນໃນວັນກິຍາມະ?" icon={<AlertTriangle />}>
            <p>ໃນວັນກິຍາມະ, ໂລກທັງໃບຈະສິ້ນສຸດລົງ, ແລະ ຫຼັງຈາກນັ້ນ, ທຸກຄົນທີ່ເຄີຍມີຊີວິດຢູ່ຈະຖືກຟື້ນຄືນຊີບ. ພວກເຂົາຈະຖືກນຳມາລວມກັນຢູ່ຕໍ່ໜ້າອັນລໍຫ໌ (Allah) ເພື່ອຖືກຕັດສິນ. ການຕັດສິນຈະເປັນໄປຕາມການກະທຳຂອງມະນຸດໃນຊ່ວງທີ່ມີຊີວິດຢູ່. ບໍ່ມີໃຜສາມາດຊ່ວຍໃຜໄດ້ໃນວັນນັ້ນ.</p>
            <ul className="space-y-2 mt-2">
                <BulletPoint><strong>ການສອບສວນບັນຊີ:</strong> ທຸກການກະທຳ, ທັງດີ ແລະ ຊົ່ວ, ທີ່ມະນຸດໄດ້ກະທຳຈະຖືກນຳມາສອບສວນຢ່າງລະອຽດ. ການກະທຳເຫຼົ່ານີ້ໄດ້ຖືກບັນທຶກໂດຍທູດສະຫວັນສອງອົງທີ່ຕິດຕາມມະນຸດຕະຫຼອດເວລາ.</BulletPoint>
                <BulletPoint><strong>ຄວາມຍຸດຕິທຳ:</strong> ການຕັດສິນຂອງອັນລໍ (Allah) ຈະມີຄວາມຍຸດຕິທຳຢ່າງສູງສຸດ. ບໍ່ມີການອະໄພຫຼືການເຫັນແກ່ພັກພວກ. ຜູ້ທີ່ເຮັດຄວາມດີກໍ່ຈະໄດ້ຮັບລາງວັນ ແລະ ຜູ້ທີ່ເຮັດຄວາມຊົ່ວກໍ່ຈະຖືກລົງໂທດ.</BulletPoint>
            </ul>
        </ContentSection>
        
        <ContentSection title="ສະຫວັນ (Jannah) ແລະ ນາລົກ (Jahannam)" icon={<Scale />}>
            <p>ຫຼັງຈາກການຕັດສິນແລ້ວ, ມະນຸດຈະຖືກແບ່ງອອກເປັນສອງກຸ່ມ:</p>
            <ul className="space-y-2 mt-2">
                <BulletPoint><strong>ສະຫວັນ (Jannah):</strong> ສະຫວັນເປັນບ່ອນຢູ່ຂອງຄວາມສຸກ ແລະ ຄວາມສະບາຍຕະຫຼອດໄປ. ເປັນລາງວັນສຳລັບຜູ້ທີ່ເຊື່ອໝັ້ນໃນພະເຈົ້າ ແລະ ເຮັດຄວາມດີ. ໃນສະຫວັນ, ຈະບໍ່ມີຄວາມເຈັບປວດ, ຄວາມເສົ້າ, ຫຼືຄວາມລຳບາກ.</BulletPoint>
                <BulletPoint><strong>ນາລົກ (Jahannam):</strong> ນາລົກເປັນບ່ອນລົງໂທດສຳລັບຜູ້ທີ່ປະຕິເສດຄວາມເຊື່ອໃນພະເຈົ້າ ແລະ ກະທຳບາບຢ່າງຕໍ່ເນື່ອງ. ຄວາມທຸກທໍລະມານໃນນາລົກແມ່ນມີຄວາມໂຫດຮ້າຍທີ່ສຸດ.</BulletPoint>
            </ul>
        </ContentSection>

        <ContentSection title="ຄວາມສຳຄັນຂອງການເຊື່ອໃນວັນສິ້ນໂລກ" icon={<Goal />}>
            <p>ຄວາມເຊື່ອໃນວັນສິ້ນໂລກກະຕຸ້ນໃຫ້ຊາວມຸດສະລິມ:</p>
            <ul className="space-y-2 mt-2">
                <BulletPoint><strong>ມີຄວາມຮັບຜິດຊອບ:</strong> ມະນຸດຮູ້ວ່າທຸກການກະທຳຂອງເຂົາເຈົ້າບໍ່ວ່າຈະນ້ອຍຫຼືໃຫຍ່ກໍ່ຕາມຈະຖືກຄິດບັນຊີ, ສະນັ້ນພວກເຂົາຈຶ່ງລະມັດລະວັງໃນການປະພຶດຂອງຕົນ.</BulletPoint>
                <BulletPoint><strong>ໃຊ້ຊີວິດຢ່າງມີຈຸດໝາຍ:</strong> ຄວາມເຊື່ອນີ້ຊ່ວຍໃຫ້ມະນຸດເຂົ້າໃຈວ່າຊີວິດໃນໂລກນີ້ເປັນພຽງຊົ່ວຄາວ, ແລະ ເປົ້າໝາຍທີ່ແທ້ຈິງແມ່ນການບັນລຸຄວາມພໍໃຈຂອງອັນລໍ (Allah) ເພື່ອການລອດພົ້ນໃນໂລກໜ້າ.</BulletPoint>
                <BulletPoint><strong>ຫຼີກເວັ້ນສິ່ງຊົ່ວ:</strong> ຄວາມຢ້ານກົວຕໍ່ການລົງໂທດໃນນາລົກເປັນເຫດຜົນໜຶ່ງທີ່ເຮັດໃຫ້ຊາວມຸດສະລິມພະຍາຍາມຫຼີກເວັ້ນບາບ ແລະ ສິ່ງທີ່ບໍ່ດີ.</BulletPoint>
            </ul>
        </ContentSection>
      </main>
    </div>
  );
}
