'use client';
import ViewHeader from '@/components/shared/ViewHeader';
import ContentSection from '@/components/shared/ContentSection';
import SummaryCard from '@/components/shared/SummaryCard';
import { Telescope, BrainCircuit, Heart } from 'lucide-react';

interface GodExistsViewProps {
  goBack: () => void;
}

const NumberedPoint = ({ number, title, children }: { number: string, title: React.ReactNode, children: React.ReactNode }) => (
    <div className="mt-4">
        <h3 className="font-bold text-md text-primary flex items-start gap-2">
            <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm">{number}</span>
            {title}
        </h3>
        <div className="pl-8 mt-2 text-card-foreground">
            {children}
        </div>
    </div>
);

export default function GodExistsView({ goBack }: GodExistsViewProps) {
  return (
    <div className="flex flex-col">
      <ViewHeader title="ພະເຈົ້າມີຈິງບໍ?" onBack={goBack} />
      <main className="p-4 space-y-4">
        <ContentSection title="ທັດສະນະຂອງອິດສະລາມ" icon={<Telescope />}>
            <p>ຄຳຖາມກ່ຽວກັບການມີຢູ່ຂອງພະເຈົ້າ (God) ເປັນຄຳຖາມທີ່ມະນຸດເຮົາໄດ້ຖາມກັນມາຕະຫຼອດ. ໃນສາສະໜາອິດສະລາມ, ຄຳຕອບແມ່ນຈະແຈ້ງ: ອັນລໍ (Allah), ຜູ້ສ້າງຈັກກະວານ, ມີຈິງຢ່າງແນ່ນອນ. ຄວາມເຊື່ອນີ້ບໍ່ໄດ້ອີງໃສ່ພຽງແຕ່ການສັດທາເທົ່ານັ້ນ, ແຕ່ຍັງອີງໃສ່ເຫດຜົນແລະສິ່ງທີ່ເຮົາສາມາດເຫັນໄດ້ໃນທຳມະຊາດ.</p>
        </ContentSection>
        
        <NumberedPoint number="1" title="ຫຼັກຖານຈາກການສ້າງຈັກກະວານ">
            <div>
                <p>ເມື່ອເຮົາເບິ່ງຮອບຕົວເຮົາ, ເຮົາຈະເຫັນການສ້າງທີ່ເປັນລະບຽບຮຽບຮ້ອຍແລະສົມບູນແບບ. ແຕ່ລະສິ່ງຖືກສ້າງຂຶ້ນຢ່າງມີຈຸດປະສົງ: ດວງອາທິດ, ດວງຈັນ, ດວງດາວ, ແລະລະບົບຂອງຈັກກະວານທັງໝົດລ້ວນແລ້ວແຕ່ເຄື່ອນທີ່ຢ່າງຖືກຕ້ອງຊັດເຈນ. ນັກວິທະຍາສາດໄດ້ຄົ້ນພົບຄວາມຍິ່ງໃຫຍ່ຂອງຈັກກະວານຢ່າງຕໍ່ເນື່ອງ, ເຊິ່ງລ້ວນແລ້ວແຕ່ສະແດງໃຫ້ເຫັນເຖິງການອອກແບບທີ່ສະຫຼາດແລະມີພະລັງ.</p>
                <p className="mt-2">ຊາວມຸດສະລິມເຊື່ອວ່າສິ່ງທີ່ສັບສົນແລະສົມບູນແບບເຊັ່ນນີ້ບໍ່ສາມາດເກີດຂຶ້ນເອງໄດ້. ເຫມືອນດັ່ງໂມງທີ່ຕ້ອງມີຜູ້ສ້າງ, ຈັກກະວານກໍ່ຕ້ອງມີຜູ້ສ້າງເຊັ່ນກັນ. ຜູ້ສ້າງທີ່ຍິ່ງໃຫຍ່ທີ່ສຸດນີ້ກໍຄື ອັນລໍ (Allah).</p>
            </div>
        </NumberedPoint>

        <NumberedPoint number="2" title="ຫຼັກຖານຈາກການມີເຫດແລະຜົນ">
            <div>
                <p>ຫຼັກການທີ່ວ່າມີເຫດກໍ່ຕ້ອງມີຜົນນັ້ນເປັນຫຼັກການພື້ນຖານຂອງຄວາມຄິດຂອງເຮົາ. ທຸກສິ່ງທີ່ເກີດຂຶ້ນໃນໂລກນີ້ລ້ວນແລ້ວແຕ່ມີເຫດຜົນ. ຖ້າເຮົາເຫັນບ້ານຫຼັງໜຶ່ງ, ເຮົາຈະຮູ້ໄດ້ທັນທີວ່າມີຊ່າງກໍ່ສ້າງມັນ. ໃນທຳນອງດຽວກັນ, ຖ້າເຮົາເຫັນການສ້າງທີ່ສັບຊ້ອນຢ່າງມະນຸດແລະສິ່ງມີຊີວິດອື່ນໆ, ເຮົາກໍ່ຕ້ອງຍອມຮັບວ່າມີຜູ້ສ້າງທີ່ສ້າງສິ່ງເຫຼົ່ານັ້ນ. ການເຊື່ອວ່າຈັກກະວານແລະຊີວິດເກີດຂຶ້ນເອງໂດຍບໍ່ມີຜູ້ສ້າງແມ່ນການປະຕິເສດຫຼັກການພື້ນຖານຂອງເຫດແລະຜົນ.</p>
            </div>
        </NumberedPoint>
        
        <NumberedPoint number="3" title="ຫຼັກຖານຈາກຈິດໃຈຂອງມະນຸດ">
             <div>
                <p>ມະນຸດທຸກຄົນມີຄວາມຮູ້ສຶກທາງທຳມະຊາດທີ່ເຊື່ອໃນສິ່ງທີ່ມີອຳນາດສູງສຸດ, ເຖິງແມ່ນວ່າພວກເຂົາຈະບໍ່ເຄີຍໄດ້ຍິນກ່ຽວກັບສາສະໜາໃດໆກໍຕາມ. ໃນຊ່ວງເວລາທີ່ທຸກຍາກລຳບາກຫຼືເມື່ອປະສົບກັບອັນຕະລາຍ, ຫຼາຍຄົນຈະຫັນໄປຫາສິ່ງສູງສຸດເພື່ອຂໍຄວາມຊ່ວຍເຫຼືອ. ຄວາມຮູ້ສຶກນີ້ຖືກເອີ້ນວ່າ ຟິຕຣໍ (Fitrah) ໃນອິດສະລາມ, ເຊິ່ງໝາຍເຖິງສັນຊາດຕະຍານຂອງມະນຸດທີ່ຍອມຮັບການມີຢູ່ຂອງພະເຈົ້າ.</p>
             </div>
        </NumberedPoint>

        <SummaryCard title="ບົດສະຫຼຸບ">
            ອິດສະລາມບໍ່ພຽງແຕ່ເຊື້ອເຊີນໃຫ້ເຊື່ອໃນການມີຢູ່ຂອງພະເຈົ້າ, ແຕ່ຍັງໃຫ້ຫຼັກຖານທີ່ໜັກແໜ້ນຈາກທຳມະຊາດແລະເຫດຜົນ. ຫຼັກຖານທັງໝົດຊີ້ໃຫ້ເຫັນເຖິງຜູ້ສ້າງທີ່ຍິ່ງໃຫຍ່, ຮອບຮູ້, ແລະມີອຳນາດສູງສຸດ. ການເຊື່ອໃນການມີຢູ່ຂອງອັນລໍ (Allah) ຈຶ່ງເປັນຄວາມເຊື່ອທີ່ເປັນເຫດເປັນຜົນແລະກົມກຽວກັບຈິດໃຈຂອງມະນຸດ.
        </SummaryCard>
      </main>
    </div>
  );
}
