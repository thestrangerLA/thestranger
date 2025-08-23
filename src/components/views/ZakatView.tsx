'use client';
import ViewHeader from '@/components/shared/ViewHeader';
import ContentSection from '@/components/shared/ContentSection';
import { HandHelping, PiggyBank, Users, Goal } from 'lucide-react';

interface ZakatViewProps {
  goBack: () => void;
}

const BulletPoint = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start gap-3">
        <span className="text-primary font-bold mt-1">•</span>
        <span>{children}</span>
    </li>
);

const NumberedPoint = ({ number, title, children }: { number: string, title: React.ReactNode, children: React.ReactNode }) => (
    <div className="mt-2">
        <p className="flex items-start gap-2">
            <span className="font-bold text-primary">{number}.</span>
            <span className="font-semibold text-card-foreground">{title}</span>
            <span className="text-sm text-muted-foreground">{children}</span>
        </p>
    </div>
);


export default function ZakatView({ goBack }: ZakatViewProps) {
  return (
    <div className="flex flex-col">
      <ViewHeader title="ການໃຫ້ຊາກາດ (Zakat)" onBack={goBack} />
      <main className="p-4 space-y-4">

        <ContentSection title="ຄວາມໝາຍ" icon={<HandHelping />}>
            <p>ການໃຫ້ຊາກາດ (Zakat) ແມ່ນຫຼັກການທີສາມຂອງອິດສະລາມ. ຄຳວ່າ “ຊາກາດ” ມາຈາກພາສາອາຣັບຊຶ່ງມີຄວາມໝາຍວ່າ “ການຊຳລະ” ຫຼື “ການເຕີບໂຕ”. ຄືການບໍລິຈາກເງິນສ່ວນໜຶ່ງຂອງຊັບສິນໃຫ້ແກ່ຜູ້ທີ່ຕ້ອງການ. ຊາກາດບໍ່ແມ່ນພຽງແຕ່ການກຸສົນທຳມະດາ, ແຕ່ມັນຄືພັນທະບັງຄັບທີ່ອັນລໍຫ໌ (Allah) ໄດ້ກຳນົດໄວ້ສຳລັບທຸກຄົນທີ່ມີຄວາມສາມາດ.</p>
        </ContentSection>

        <ContentSection title="ຈຸດປະສົງຂອງການໃຫ້ຊາກາດ" icon={<Goal />}>
            <ul className="space-y-2 mt-2">
                <BulletPoint><strong>ການຊຳລະຊັບສິນ:</strong> ການໃຫ້ຊາກາດຊ່ວຍຊຳລະຊັບສິນຈາກຄວາມໂລບ ແລະ ຄວາມເຫັນແກ່ຕົວ.</BulletPoint>
                <BulletPoint><strong>ການຊ່ວຍເຫຼືອສັງຄົມ:</strong> ຊ່ວຍສ້າງຄວາມສະເໝີພາບ ແລະ ຄວາມຍຸດຕິທຳໃນສັງຄົມ, ໂດຍການແຈກຢາຍຄວາມຮັ່ງມີໃຫ້ກັບຜູ້ທີ່ຂາດເຂີນ.</BulletPoint>
                <BulletPoint><strong>ການຫຼຸດຜ່ອນຄວາມທຸກຍາກ:</strong> ຊາກາດເປັນເຄື່ອງມືໃນການຕໍ່ສູ້ກັບຄວາມທຸກຍາກ ແລະ ຄວາມອຶດຢາກ, ໂດຍການໃຫ້ການຊ່ວຍເຫຼືອໂດຍກົງແກ່ຜູ້ທີ່ຕ້ອງການ.</BulletPoint>
                <BulletPoint><strong>ການເຕີບໂຕທາງຈິດວິນຍານ:</strong> ການໃຫ້ຊາກາດສ້າງຄວາມເມດຕາ ແລະ ຄວາມເຫັນອົກເຫັນໃຈໃນໃຈຂອງຜູ້ໃຫ້.</BulletPoint>
            </ul>
        </ContentSection>

        <ContentSection title="ເງື່ອນໄຂ" icon={<PiggyBank />}>
             <p>ການຈ່າຍຊາກາດເປັນພັນທະສຳລັບມຸດສະລິມທີ່ມີຊັບສິນເກີນກວ່າຈຳນວນທີ່ກຳນົດໄວ້, ເຊິ່ງເອີ້ນວ່າ ນີຊາບ (Nisab). ນີ້ລວມເຖິງເງິນສົດ, ຄຳ, ເງິນ, ຊັບສິນການຄ້າ, ແລະ ການປູກຝັງ.</p>
        </ContentSection>

        <ContentSection title="ຜູ້ມີສິດໄດ້ຮັບຊາກາດ" icon={<Users />}>
            <p>ຄຳພີ ອັນກູຣອານ (Quran) ໄດ້ລະບຸແປດກຸ່ມຄົນທີ່ມີສິດໄດ້ຮັບຊາກາດ:</p>
            <NumberedPoint number="1" title="ຄົນທຸກຍາກ (Al-Fuqara):">ຜູ້ທີ່ບໍ່ມີລາຍໄດ້ພຽງພໍ.</NumberedPoint>
            <NumberedPoint number="2" title="ຄົນຂັດສົນ (Al-Masakin):">ຜູ້ທີ່ບໍ່ມີຫຍັງເລີຍ.</NumberedPoint>
            <NumberedPoint number="3" title="ເຈົ້າໜ້າທີ່ເກັບຊາກາດ (Al-Amilunalayha):">ຜູ້ທີ່ເຮັດວຽກໃນການເກັບ ແລະ ແຈກຢາຍຊາກາດ.</NumberedPoint>
            <NumberedPoint number="4" title="ຜູ້ທີ່ຕ້ອງການຄວາມຊ່ວຍເຫຼືອ (Al-MuallafatuQulubuhum):">ຜູ້ທີ່ຫາກໍ່ເຂົ້າຮັບອິດສະລາມ.</NumberedPoint>
            <NumberedPoint number="5" title="ການປົດປ່ອຍທາດ (Fir-riqab):">ການຊ່ວຍເຫຼືອເພື່ອປົດປ່ອຍທາດ.</NumberedPoint>
            <NumberedPoint number="6" title="ຜູ້ເປັນໜີ້ (Al-Gharimun):">ຜູ້ທີ່ມີໜີ້ສິນຢ່າງໜັກ.</NumberedPoint>
            <NumberedPoint number="7" title="ການຕໍ່ສູ້ເພື່ອພະເຈົ້າ (FiSabilillah):">ການຊ່ວຍເຫຼືອໃນໜ້າທີ່ທາງສາສະໜາ.</NumberedPoint>
            <NumberedPoint number="8" title="ນັກເດີນທາງທີ່ຂັດສົນ (Ibnas-Sabil):">ນັກເດີນທາງທີ່ເງິນບໍ່ພໍໃຊ້.</NumberedPoint>
            <p className='mt-4'>ການໃຫ້ຊາກາດເປັນຫຼັກຖານຂອງຄວາມເຊື່ອທີ່ແທ້ຈິງ, ມັນສະແດງໃຫ້ເຫັນເຖິງຄວາມສຳພັນລະຫວ່າງມະນຸດກັບພະເຈົ້າ ແລະ ລະຫວ່າງມະນຸດກັບສັງຄົມ.</p>
        </ContentSection>

      </main>
    </div>
  );
}
