'use client';
import ViewHeader from '@/components/shared/ViewHeader';
import ContentSection from '@/components/shared/ContentSection';
import { Sun, Moon, Heart, Users } from 'lucide-react';

interface SawmViewProps {
  goBack: () => void;
}

const BulletPoint = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start gap-3">
        <span className="text-primary font-bold mt-1">•</span>
        <span>{children}</span>
    </li>
);

export default function SawmView({ goBack }: SawmViewProps) {
  return (
    <div className="flex flex-col">
      <ViewHeader title="ການຖືສິນອົດ (Sawm)" onBack={goBack} />
      <main className="p-4 space-y-4">

        <ContentSection title="ຄວາມໝາຍ" icon={<Moon />}>
            <p>ການຖືສິນອົດ (Sawm) ແມ່ນຫຼັກການທີສີ່ຂອງອິດສະລາມ. ຄືການລະເວັ້ນຈາກການກິນ, ການດື່ມ, ແລະ ການມີເພດສຳພັນຕັ້ງແຕ່ຕາເວັນຂຶ້ນຈົນເຖິງຕາເວັນຕົກດິນໃນເດືອນສັກສິດ ຣໍມະດອນ (Ramadan). ການຖືສິນອົດບໍ່ພຽງແຕ່ເປັນການລະເວັ້ນຈາກອາຫານ, ແຕ່ຍັງເປັນການຄວບຄຸມອາລົມ, ຄວາມຄິດ, ແລະ ການກະທຳ.</p>
        </ContentSection>

        <ContentSection title="ຈຸດປະສົງຂອງການຖືສິນອົດ" icon={<Heart />}>
            <ul className="space-y-2 mt-2">
                <BulletPoint><strong>ຄວາມຢຳເກງຕໍ່ພະເຈົ້າ (Taqwa):</strong> ເປົ້າໝາຍສູງສຸດຂອງການຖືສິນອົດແມ່ນເພື່ອສ້າງ ຄວາມຢຳເກງ (Taqwa) ໃນໃຈ, ຊຶ່ງໝາຍເຖິງຄວາມຮູ້ສຶກລະນຶກເຖິງພະເຈົ້າຢ່າງຕໍ່ເນື່ອງ ແລະ ການລະມັດລະວັງໃນການປະພຶດ.</BulletPoint>
                <BulletPoint><strong>ຄວາມເຫັນອົກເຫັນໃຈ:</strong> ສອນໃຫ້ມຸດສະລິມຮູ້ສຶກເຖິງຄວາມຫິວໂຫຍ ແລະ ຄວາມທຸກຍາກຂອງຄົນທີ່ດ້ອຍໂອກາດ, ຊຶ່ງຊ່ວຍສ້າງຄວາມເຫັນອົກເຫັນໃຈ ແລະ ກະຕຸ້ນໃຫ້ມີການຊ່ວຍເຫຼືອ.</BulletPoint>
                <BulletPoint><strong>ການຝຶກຝົນຕົນເອງ:</strong> ການຖືສິນອົດເປັນການຝຶກຝົນຄວາມອົດທົນ, ຄວາມມີລະບຽບວິໄນ, ແລະ ການຄວບຄຸມຕົນເອງ.</BulletPoint>
                <BulletPoint><strong>ການຊຳລະບາບ:</strong> ເປັນໂອກາດໃນການກັບໃຈ, ຂໍອະໄພໂທດຈາກພະເຈົ້າ, ແລະ ເລີ່ມຕົ້ນຊີວິດໃໝ່.</BulletPoint>
            </ul>
        </ContentSection>

        <ContentSection title="ການປະຕິບັດ ແລະ ຂໍ້ຍົກເວັ້ນ" icon={<Sun />}>
             <p>ການຖືສິນອົດຈະເລີ່ມຕົ້ນເມື່ອເດືອນຣໍມະດອນມາເຖິງ. ຜູ້ທີ່ຕ້ອງປະຕິບັດການຖືສິນອົດແມ່ນມຸດສະລິມທຸກຄົນທີ່ເປັນຜູ້ໃຫຍ່, ມີສະຕິ, ແລະ ມີສຸຂະພາບແຂງແຮງ.</p>
             <p className='font-semibold mt-2'>ຂໍ້ຍົກເວັ້ນ: ບາງກຸ່ມຄົນສາມາດຍົກເວັ້ນການຖືສິນອົດໄດ້, ເຊັ່ນ:</p>
             <ul className="space-y-2 mt-2">
                <BulletPoint>ຜູ້ປ່ວຍ: ຜູ້ທີ່ເຈັບປ່ວຍຈົນບໍ່ສາມາດຖືສິນອົດໄດ້.</BulletPoint>
                <BulletPoint>ນັກເດີນທາງ: ຜູ້ທີ່ກຳລັງເດີນທາງໄກ.</BulletPoint>
                <BulletPoint>ແມ່ຍິງຖືພາຫຼືໃຫ້ນົມລູກ: ຜູ້ທີ່ຢ້ານວ່າການຖືສິນອົດຈະເປັນອັນຕະລາຍຕໍ່ຕົນເອງຫຼືລູກ.</BulletPoint>
                <BulletPoint>ແມ່ຍິງທີ່ມີປະຈຳເດືອນ.</BulletPoint>
             </ul>
             <p className='mt-2'>ຜູ້ທີ່ບໍ່ສາມາດຖືສິນອົດໄດ້ຊົ່ວຄາວຕ້ອງຊົດເຊີຍໃນພາຍຫຼັງ, ສ່ວນຜູ້ທີ່ບໍ່ສາມາດຖືສິນອົດໄດ້ຕະຫຼອດໄປເນື່ອງຈາກພະຍາດຫຼືອາຍຸສູງກໍ່ສາມາດຊົດເຊີຍໄດ້ໂດຍການໃຫ້ອາຫານແກ່ຄົນຍາກຈົນແທນ.</p>
        </ContentSection>

        <ContentSection title="ຄວາມສຳຄັນທາງສັງຄົມ" icon={<Users />}>
            <p>ໃນເດືອນຣໍມະດອນ, ຊາວມຸດສະລິມຈະສາມັກຄີກັນໃນການລະໝາດ, ການກິນອາຫານລວມກັນເມື່ອເວລາອະນຸຍາດ, ແລະ ການຊ່ວຍເຫຼືອຄົນອື່ນ. ເດືອນນີ້ຈຶ່ງເປັນເດືອນແຫ່ງຄວາມສາມັກຄີ ແລະ ການແບ່ງປັນ.</p>
        </ContentSection>

      </main>
    </div>
  );
}
