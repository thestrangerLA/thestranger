'use client';
import ViewHeader from '@/components/shared/ViewHeader';
import ContentSection from '@/components/shared/ContentSection';
import { Target, Users, Sun, Heart, Wallet, ShieldCheck, Footprints, Calendar } from 'lucide-react';

interface HajjViewProps {
  goBack: () => void;
}

const BulletPoint = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start gap-3">
        <span className="text-primary font-bold mt-1">•</span>
        <span>{children}</span>
    </li>
);

export default function HajjView({ goBack }: HajjViewProps) {
  return (
    <div className="flex flex-col">
      <ViewHeader title="ການສະແຫວງບຸນຮັຈ (Hajj)" onBack={goBack} />
      <main className="p-4 space-y-4">
        <ContentSection title="ຄວາມໝາຍ" icon={<Footprints />}>
            <p>ການສະແຫວງບຸນຮັຈ (Hajj) ແມ່ນຫຼັກການທີຫ້າຂອງອິດສະລາມ. ຄືການເດີນທາງໄປນະຄອນ ເມັກກະ (Makkah) ປະເທດຊາອຸດີອາຣາເບຍ ເພື່ອປະຕິບັດພິທີກຳທາງສາສະໜາທີ່ສັກສິດ. ເປັນພັນທະບັງຄັບສຳລັບມຸດສະລິມທຸກຄົນທີ່ມີຄວາມສາມາດທາງດ້ານຮ່າງກາຍ ແລະ ການເງິນທີ່ຈະເດີນທາງໄປ.</p>
        </ContentSection>

        <ContentSection title="ຈຸດປະສົງຂອງການສະແຫວງບຸນຮັຈ" icon={<Target />}>
            <p>ການສະແຫວງບຸນຮັຈມີຈຸດປະສົງທີ່ເລິກເຊິ່ງ:</p>
            <ul className="space-y-2 mt-2">
                <BulletPoint><strong>ການເຊື່ອມຕໍ່ກັບສາດສະດາ:</strong> ການສະແຫວງບຸນຮັຈເປັນການລະນຶກເຖິງເລື່ອງລາວຂອງສາດສະດາ ອັບຣາຮາມ (Abraham) ແລະ ຄອບຄົວຂອງທ່ານ. ຜູ້ສະແຫວງບຸນຮັຈຈະປະຕິບັດຕາມບາດກ້າວຂອງທ່ານ, ເຊັ່ນ: ການຍ່າງອ້ອມ ກາບະ (Ka′bah) ແລະ ການເດີນທາງລະຫວ່າງສອງພູເຂົາ.</BulletPoint>
                <BulletPoint><strong>ການລົບລ້າງບາບ:</strong> ການສະແຫວງບຸນຮັຈທີ່ປະຕິບັດຢ່າງຖືກຕ້ອງສາມາດລົບລ້າງບາບທີ່ໄດ້ກະທຳກ່ອນໜ້ານີ້.</BulletPoint>
                <BulletPoint><strong>ຄວາມສາມັກຄີ ແລະ ຄວາມເທົ່າທຽມກັນ:</strong> ໃນລະຫວ່າງການສະແຫວງບຸນຮັຈ, ມຸດສະລິມຈາກທົ່ວໂລກ, ບໍ່ວ່າຈະເປັນເຊື້ອຊາດ, ສີຜິວ, ຫຼືຖານະໃດກໍ່ຕາມ, ຈະນຸ່ງເຄື່ອງນຸ່ງງ່າຍໆທີ່ຄ້າຍຄືກັນ. ສິ່ງນີ້ສະແດງເຖິງຄວາມເປັນເອກະພາບຂອງປະຊາຄົມມຸດສະລິມ.</BulletPoint>
            </ul>
        </ContentSection>

        <ContentSection title="ເງື່ອນໄຂຂອງການສະແຫວງບຸນຮັຈ" icon={<ShieldCheck />}>
             <p>ການສະແຫວງບຸນຮັຈບໍ່ໄດ້ບັງຄັບສຳລັບທຸກຄົນ. ຜູ້ທີ່ຕ້ອງປະຕິບັດມັນໄດ້ຕ້ອງມີເງື່ອນໄຂດັ່ງນີ້:</p>
             <ul className="space-y-2 mt-2">
                <BulletPoint><strong>ເປັນມຸດສະລິມ:</strong> ຜູ້ທີ່ປະຕິຍານຕົນເປັນມຸດສະລິມ.</BulletPoint>
                <BulletPoint><strong>ຜູ້ໃຫຍ່:</strong> ຜູ້ທີ່ບັນລຸນິຕິພາວະແລ້ວ.</BulletPoint>
                <BulletPoint><strong>ມີສະຕິ:</strong> ຜູ້ທີ່ມີສະຕິປົກກະຕິ.</BulletPoint>
                <BulletPoint><strong>ມີຄວາມສາມາດ:</strong> ຜູ້ທີ່ມີສຸຂະພາບແຂງແຮງພຽງພໍທີ່ຈະເດີນທາງ ແລະ ປະຕິບັດພິທີກຳ, ແລະ ມີເງິນພຽງພໍທີ່ຈະໃຊ້ຈ່າຍໃນການເດີນທາງໂດຍບໍ່ຕ້ອງກູ້ຢືມ.</BulletPoint>
             </ul>
        </ContentSection>

        <ContentSection title="ເວລາຂອງການສະແຫວງບຸນຮັຈ" icon={<Calendar />}>
            <p>ການສະແຫວງບຸນຮັຈຈະຈັດຂຶ້ນພຽງແຕ່ປີລະຄັ້ງເທົ່ານັ້ນໃນເດືອນ ສຸລຮິຍຍະ (DhulHijjah), ເຊິ່ງເປັນເດືອນທີ 12 ຂອງປະຕິທິນອິດສະລາມ. ຜູ້ທີ່ເດີນທາງໄປ ເມັກກະ ນອກເໜືອຈາກເດືອນນີ້ແມ່ນການໄປປະຕິບັດພິທີກຳທີ່ເອີ້ນວ່າ ອຸມເຣາະ (Umrah) ເຊິ່ງບໍ່ແມ່ນບຸນຮັຈ.</p>
        </ContentSection>
        
        <ContentSection title="ສະຫຼຸບ" icon={<Heart />}>
            <p>ໂດຍລວມແລ້ວ, ການສະແຫວງບຸນຮັຈເປັນການເດີນທາງທາງຈິດວິນຍານທີ່ເລິກເຊິ່ງ. ເປັນການຢືນຢັນເຖິງຄວາມເຊື່ອ, ຄວາມອົດທົນ, ແລະ ການເປັນເອກະພາບຂອງຊາວມຸດສະລິມ.</p>
        </ContentSection>
      </main>
    </div>
  );
}
