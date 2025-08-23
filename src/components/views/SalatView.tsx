'use client';
import ViewHeader from '@/components/shared/ViewHeader';
import ContentSection from '@/components/shared/ContentSection';
import { Target, Users, Clock, Heart } from 'lucide-react';

interface SalatViewProps {
  goBack: () => void;
}

const BulletPoint = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start gap-3">
        <span className="text-primary font-bold mt-1">•</span>
        <span>{children}</span>
    </li>
);

export default function SalatView({ goBack }: SalatViewProps) {
  return (
    <div className="flex flex-col">
      <ViewHeader title="ການລະໝາດ (Salat)" onBack={goBack} />
      <main className="p-4 space-y-4">

        <ContentSection title="ຈຸດປະສົງຂອງການລະໝາດ" icon={<Target />}>
            <p>ການລະໝາດ (Salat) ແມ່ນຫຼັກການທີສອງຂອງອິດສະລາມ. ຄືການລະໝາດ ຫຼືການອະທິຖານທີ່ບັງຄັບ, ເຊິ່ງມຸດສະລິມທຸກຄົນຕ້ອງປະຕິບັດ ຫ້າຄັ້ງຕໍ່ມື້. ການລະໝາດບໍ່ແມ່ນພຽງແຕ່ການຂໍພອນ, ແຕ່ມັນຄືການສະແດງຄວາມເຊື່ອ ແລະ ການຍອມຈຳນົນຢ່າງສົມບູນຕໍ່ ອັນລໍຫ໌ (Allah) ຜູ້ສ້າງ.</p>
            <p className="mt-4">ການລະໝາດມີຈຸດປະສົງທາງດ້ານຈິດໃຈ ແລະ ການປະຕິບັດຫຼາຍຢ່າງ:</p>
            <ul className="space-y-2 mt-2">
                <BulletPoint><strong>ການເຊື່ອມຕໍ່ກັບພະເຈົ້າ:</strong> ການລະໝາດເຮັດໃຫ້ມຸດສະລິມສາມາດສ້າງສາຍສຳພັນໂດຍກົງກັບອັນລໍຫ໌ (Allah) ໂດຍບໍ່ຕ້ອງຜ່ານສື່ກາງ.</BulletPoint>
                <BulletPoint><strong>ການລະນຶກເຖິງພະເຈົ້າ:</strong> ການລະໝາດຫ້າຄັ້ງຕໍ່ມື້ຊ່ວຍໃຫ້ມຸດສະລິມລະນຶກເຖິງພະເຈົ້າຢ່າງຕໍ່ເນື່ອງ, ເຊິ່ງປ້ອງກັນເຂົາເຈົ້າຈາກການກະທຳບາບ ແລະ ການລືມພະເຈົ້າ.</BulletPoint>
                <BulletPoint><strong>ການຊຳລະຈິດໃຈ:</strong> ການລະໝາດຊ່ວຍຊຳລະຈິດໃຈໃຫ້ບໍລິສຸດ, ຍົກລະດັບສິນທຳ, ແລະ ສ້າງຄວາມຢຳເກງໃນໃຈ.</BulletPoint>
                <BulletPoint><strong>ຄວາມເປັນເອກະພາບ:</strong> ການລະໝາດເປັນກຸ່ມໃນມັດສະຍິດສົ່ງເສີມຄວາມສາມັກຄີ ແລະ ຄວາມເທົ່າທຽມກັນໃນໝູ່ຊາວມຸດສະລິມ, ບໍ່ມີຄວາມແຕກຕ່າງດ້ານຊົນຊັ້ນຫຼືຖານະ.</BulletPoint>
            </ul>
        </ContentSection>

        <ContentSection title="ເວລາ ແລະ ວິທີການປະຕິບັດ" icon={<Clock />}>
             <p>ການລະໝາດຖືກປະຕິບັດໃນຫ້າຊ່ວງເວລາທີ່ກຳນົດໄວ້ໃນແຕ່ລະວັນ:</p>
             <ul className="space-y-2 mt-2">
                <BulletPoint><strong>ຟັຈຣ໌ (Fajr):</strong> ກ່ອນຕາເວັນຂຶ້ນ.</BulletPoint>
                <BulletPoint><strong>ຊຸຮຣ໌ (Zuhr):</strong> ຕອນທ່ຽງຫຼັງຈາກຕາເວັນເລີ່ມຄ້ອຍ.</BulletPoint>
                <BulletPoint><strong>ອັສຣີ້ (′Asr):</strong> ຕອນບ່າຍ.</BulletPoint>
                <BulletPoint><strong>ມັຄຣິບ (Maghrib):</strong> ຕອນຕາເວັນຕົກດິນ.</BulletPoint>
                <BulletPoint><strong>ອີຊາ (′Isha):</strong> ຕອນກາງຄືນ.</BulletPoint>
             </ul>
            <p className="mt-4">ການລະໝາດແຕ່ລະຄັ້ງປະກອບດ້ວຍທ່າທາງ ແລະ ການກ່າວຄຳທີ່ເປັນມາດຕະຖານ. ກ່ອນທີ່ຈະລະໝາດ, ມຸດສະລິມຕ້ອງເຮັດ ການຊຳລະ (Wudu) ເພື່ອໃຫ້ຮ່າງກາຍ ແລະ ຈິດໃຈສະອາດ. ຫຼັງຈາກນັ້ນ, ພວກເຂົາຈະຫັນໜ້າໄປທາງ ກິບລັດ (Qibla) ຊຶ່ງແມ່ນບ່ອນຕັ້ງຂອງ ກາບະ (Ka′bah) ໃນນະຄອນເມັກກະ.</p>
        </ContentSection>

        <ContentSection title="ຄວາມສຳຄັນໃນຊີວິດຂອງມຸດສະລິມ" icon={<Heart />}>
            <p>ການລະໝາດບໍ່ພຽງແຕ່ເປັນພິທີກຳ, ແຕ່ມັນຄືວິຖີຊີວິດຂອງມຸດສະລິມ. ເປັນການຢືນຢັນເຖິງການຍອມຈຳນົນຕໍ່ພະເຈົ້າ ແລະ ເປັນແຫຼ່ງພະລັງທາງຈິດວິນຍານທີ່ຊ່ວຍໃຫ້ມຸດສະລິມດຳເນີນຊີວິດຢ່າງຖືກຕ້ອງ ແລະ ມີຈຸດໝາຍ.</p>
        </ContentSection>

      </main>
    </div>
  );
}
