'use client';
import ViewHeader from '@/components/shared/ViewHeader';
import ContentSection from '@/components/shared/ContentSection';
import { Utensils, CheckCircle, XCircle, CookingPot } from 'lucide-react';

interface HalalFoodViewProps {
  goBack: () => void;
}

const BulletPoint = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start gap-3">
        <span className="text-primary font-bold mt-1">•</span>
        <span>{children}</span>
    </li>
);

export default function HalalFoodView({ goBack }: HalalFoodViewProps) {
  return (
    <div className="flex flex-col">
      <ViewHeader title="ອາຫານຮາລານ (Halal)" onBack={goBack} />
      <main className="p-4 space-y-4">
        <ContentSection title="ຫຼັກການແລະຄວາມໝາຍ" icon={<Utensils />}>
            <p>ອາຫານຮາລານ (Halal) ແມ່ນຄຳສັບພາສາອາຣັບທີ່ແປວ່າ "ຖືກອະນຸຍາດ" ຫຼື "ຖືກກົດໝາຍ". ໃນບໍລິບົດຂອງອາຫານ, ມັນໝາຍເຖິງອາຫານທີ່ຖືກອະນຸຍາດໃຫ້ຊາວມຸດສະລິມບໍລິໂພກຕາມຫຼັກການຂອງສາສະໜາອິດສະລາມ. ນອກຈາກປະເພດອາຫານແລ້ວ, ອາຫານຮາລານຍັງລວມເຖິງຂະບວນການກະກຽມແລະການປຸງແຕ່ງອີກດ້ວຍ.</p>
            <p className="font-semibold mt-4">ຫຼັກການສຳຄັນຂອງອາຫານຮາລານ:</p>
            <p>ຫຼັກການຂອງອາຫານຮາລານບໍ່ພຽງແຕ່ເປັນເລື່ອງຂອງສິນຄ້າເທົ່ານັ້ນ, ແຕ່ຍັງເປັນເລື່ອງຂອງການດຳເນີນຊີວິດທີ່ມີສິນລະທຳ.</p>
            <ul className="space-y-2 mt-2">
                <BulletPoint><strong>ແຫຼ່ງທີ່ມາ:</strong> ອາຫານທຸກຢ່າງຕ້ອງມາຈາກແຫຼ່ງທີ່ສະອາດແລະປອດໄພ.</BulletPoint>
                <BulletPoint><strong>ຄວາມບໍລິສຸດ:</strong> ຕ້ອງບໍ່ມີສ່ວນປະສົມຂອງສິ່ງທີ່ເປັນ ຮໍຣາມ (Haram) (ສິ່ງທີ່ຖືກຫ້າມ), ເຊັ່ນ: ເຫຼົ້າ, ຊີ້ນໝູ, ແລະຊີ້ນທີ່ບໍ່ໄດ້ຖືກຂ້າຕາມວິທີການຂອງອິດສະລາມ.</BulletPoint>
                <BulletPoint><strong>ການກະກຽມ:</strong> ຂະບວນການປຸງແຕ່ງຕ້ອງບໍ່ປົນເປື້ອນກັບສິ່ງທີ່ຮໍຣາມ.</BulletPoint>
            </ul>
        </ContentSection>

        <ContentSection title="ອາຫານທີ່ຮາລານ (Halal) (ຖືກອະນຸຍາດ)" icon={<CheckCircle />}>
            <ul className="space-y-2 mt-2">
                <BulletPoint><strong>ຊີ້ນ:</strong> ຊີ້ນງົວ, ຊີ້ນແບ້, ຊີ້ນແກະ, ຊີ້ນໄກ່, ແລະສັດປີກອື່ນໆ ທີ່ຖືກຂ້າຕາມຫຼັກການຂອງອິດສະລາມ.</BulletPoint>
                <BulletPoint><strong>ປາແລະອາຫານທະເລ:</strong> ອາຫານທະເລທຸກຊະນິດຖືວ່າເປັນຮາລານ.</BulletPoint>
                <BulletPoint><strong>ພືດຜັກ:</strong> ພືດຜັກ, ໝາກໄມ້, ແລະທັນຍາພືດທຸກຊະນິດແມ່ນຮາລານ.</BulletPoint>
                <BulletPoint><strong>ເຄື່ອງດື່ມ:</strong> ນ້ຳ, ນ້ຳຜົນລະໄມ້, ນົມ, ແລະເຄື່ອງດື່ມທີ່ບໍ່ມີສ່ວນປະສົມຂອງເຫຼົ້າ.</BulletPoint>
            </ul>
        </ContentSection>
        
        <ContentSection title="ອາຫານທີ່ຮໍຣາມ (Haram) (ຖືກຫ້າມ)" icon={<XCircle />}>
             <ul className="space-y-2 mt-2">
                <BulletPoint><strong>ຊີ້ນໝູ:</strong> ຊີ້ນໝູແລະຜະລິດຕະພັນຈາກໝູທັງໝົດຖືກຫ້າມຢ່າງເດັດຂາດ.</BulletPoint>
                <BulletPoint><strong>ສັດທີ່ບໍ່ໄດ້ຖືກຂ້າຕາມວິທີການຂອງອິດສະລາມ:</strong> ສັດທີ່ຕາຍດ້ວຍໂຕເອງ, ສັດທີ່ຖືກຂ້າໂດຍບໍ່ໄດ້ກ່າວພະນາມຂອງອັນລໍ (Allah), ຫຼືສັດທີ່ຖືກຂ້າໂດຍວິທີທີ່ບໍ່ຖືກຕ້ອງ.</BulletPoint>
                <BulletPoint><strong>ເຫຼົ້າແລະສິ່ງມຶນເມົາ:</strong> ເຫຼົ້າ, ເບຍ, ແລະເຄື່ອງດື່ມທີ່ມີແອນກໍຮໍທັງໝົດຖືກຫ້າມ.</BulletPoint>
                <BulletPoint><strong>ເລືອດແລະຜະລິດຕະພັນຈາກເລືອດ:</strong> ການບໍລິໂພກເລືອດຖືກຫ້າມ.</BulletPoint>
            </ul>
        </ContentSection>

        <ContentSection title="ຂະບວນການຂ້າສັດຕາມວິທີຮາລານ (Halal)" icon={<CookingPot />}>
            <p>ການຂ້າສັດຕາມວິທີຮາລານເປັນສິ່ງສຳຄັນທີ່ສຸດ. ຂະບວນການນີ້ຕ້ອງປະຕິບັດໂດຍມຸດສະລິມ, ໂດຍມີຂໍ້ກຳນົດດັ່ງນີ້:</p>
            <ul className="space-y-2 mt-2">
                <BulletPoint><strong>ການກ່າວພະນາມອັນລໍ (Allah):</strong> ກ່ອນຂ້າສັດ, ຕ້ອງກ່າວຄຳວ່າ "ບິສມິລລາຫ໌, ອັນລໍຫ໌ ອັກບັຣ (Bismillah,AllahuAkbar)" ເຊິ່ງແປວ່າ "ໃນນາມຂອງອັນລໍ, ອັນລໍຍິ່ງໃຫຍ່ທີ່ສຸດ".</BulletPoint>
                <BulletPoint><strong>ການຂ້າດ້ວຍຄວາມເມດຕາ:</strong> ຕ້ອງໃຊ້ມີດທີ່ແຫຼມຄົມເພື່ອຕັດເສັ້ນເລືອດໃຫຍ່, ເສັ້ນລົມ, ແລະເສັ້ນອາຫາຣຂອງສັດ. ການກະທຳນີ້ຊ່ວຍໃຫ້ສັດຕາຍໄວທີ່ສຸດເພື່ອຫຼຸດຜ່ອນຄວາມເຈັບປວດ.</BulletPoint>
                <BulletPoint><strong>ການລະບາຍເລືອດ:</strong> ຕ້ອງປ່ອຍໃຫ້ເລືອດໄຫຼອອກຈາກຮ່າງກາຍຂອງສັດຢ່າງສົມບູນ.</BulletPoint>
            </ul>
            <p className="mt-4">ການບໍລິໂພກອາຫານຮາລານບໍ່ພຽງແຕ່ເປັນເລື່ອງຂອງສາດສະໜາ, ແຕ່ຍັງເປັນການປະຕິບັດຕາມຫຼັກການທາງສິນທຳ, ຄວາມສະອາດ, ແລະສຸຂະພາບທີ່ດີ.</p>
        </ContentSection>
      </main>
    </div>
  );
}
