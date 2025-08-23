'use client';
import ViewHeader from '@/components/shared/ViewHeader';
import ContentSection from '@/components/shared/ContentSection';
import { Target, ClipboardCheck, HelpCircle, ShieldCheck } from 'lucide-react';

interface BeliefInDestinyViewProps {
  goBack: () => void;
}

const BulletPoint = ({ children, number }: { children: React.ReactNode, number?: string }) => (
    <li className="flex items-start gap-3">
        <span className="text-primary font-bold mt-1">{number ? `${number}.` : '•'}</span>
        <span>{children}</span>
    </li>
);

export default function BeliefInDestinyView({ goBack }: BeliefInDestinyViewProps) {
  return (
    <div className="flex flex-col">
      <ViewHeader title="ຄວາມເຊື່ອໃນກໍດັຣ" onBack={goBack} />
      <main className="p-4 space-y-4">
        <ContentSection title="ຄວາມເຊື່ອໃນກໍດັຣ (Qadar)" icon={<Target />}>
          <p>ໃນສາສະໜາອິດສະລາມ, ກໍດັຣ (Qadar) ໝາຍເຖິງ ການກຳນົດຂອງພະເຈົ້າ ຫຼື ພະເຈົ້າລິຂິດ. ເປັນຫຼັກການພື້ນຖານອັນດັບສຸດທ້າຍຂອງຄວາມເຊື່ອ, ເຊິ່ງສອນໃຫ້ຊາວມຸດສະລິມເຊື່ອໝັ້ນວ່າທຸກສິ່ງທີ່ເກີດຂຶ້ນໃນຈັກກະວານ, ບໍ່ວ່າຈະເປັນຄວາມດີຫຼືຄວາມຊົ່ວ, ລ້ວນແລ້ວແຕ່ຢູ່ພາຍໃຕ້ຄວາມຮູ້, ອຳນາດ, ແລະ ການກຳນົດຂອງອັນລໍ (Allah).</p>
        </ContentSection>

        <ContentSection title="ສີ່ຂັ້ນຕອນຂອງກໍດັຣ (Qadar)" icon={<ClipboardCheck />}>
            <p>ເພື່ອເຂົ້າໃຈແນວຄິດຂອງກະດັນຢ່າງຖືກຕ້ອງ, ຕ້ອງເຂົ້າໃຈຂັ້ນຕອນຂອງມັນ:</p>
            <ul className="space-y-2 mt-2">
                <BulletPoint number="1"><strong>ຄວາມຮູ້ຂອງພະເຈົ້າ (Al-Ilm):</strong> ອັນລໍຫ໌ (Allah) ຊົງຮູ້ທຸກສິ່ງຢ່າງຕັ້ງແຕ່ຕົ້ນຈົນຈົບ. ພະອົງຮູ້ວ່າສິ່ງໃດຈະເກີດຂຶ້ນກ່ອນທີ່ມັນຈະເກີດຂຶ້ນ. ຄວາມຮູ້ຂອງພະອົງບໍ່ມີຂອບເຂດຈຳກັດ.</BulletPoint>
                <BulletPoint number="2"><strong>ການບັນທຶກ (Al-Kitabah):</strong> ອັນລໍຫ໌ (Allah) ໄດ້ບັນທຶກທຸກຢ່າງທີ່ຈະເກີດຂຶ້ນໃນ ລໍຫ໌ ມັຟຟູຊ (Lauh Mahfuz), ເຊິ່ງເປັນປຶ້ມບັນທຶກອັນນິລັນດອນ. ສິ່ງນີ້ໝາຍຄວາມວ່າທຸກເຫດການ, ຕັ້ງແຕ່ການສ້າງຈັກກະວານຈົນເຖິງວັນສິ້ນໂລກ, ລ້ວນແລ້ວແຕ່ຖືກບັນທຶກໄວ້ແລ້ວ.</BulletPoint>
                <BulletPoint number="3"><strong>ຄວາມປະສົງຂອງພະເຈົ້າ (Al-Mashi'ah):</strong> ທຸກສິ່ງທີ່ເກີດຂຶ້ນໃນຈັກກະວານແມ່ນເປັນໄປຕາມຄວາມປະສົງຂອງອັນລໍຫ໌ (Allah). ບໍ່ມີສິ່ງໃດສາມາດເກີດຂຶ້ນໄດ້ໂດຍທີ່ພະອົງບໍ່ປະສົງ. ຄວາມປະສົງຂອງພະອົງຢູ່ເໜືອທຸກສິ່ງທຸກຢ່າງ.</BulletPoint>
                <BulletPoint number="4"><strong>ການສ້າງ (Al-Khalq):</strong> ອັນລໍຫ໌ (Allah) ເປັນຜູ້ສ້າງທຸກສິ່ງທຸກຢ່າງ, ລວມທັງການກະທຳຂອງມະນຸດ. ພະອົງສ້າງສາເຫດ ແລະ ຜົນຂອງການກະທຳ.</BulletPoint>
            </ul>
        </ContentSection>
        
        <ContentSection title="ກໍດັຣ (Qadar) ແລະ ເຈດຈຳນົງຂອງມະນຸດ" icon={<HelpCircle />}>
            <p className="font-semibold">ແນວຄິດຂອງກໍດັສມັກຖືກຖາມວ່າ "ຖ້າທຸກຢ່າງຖືກກຳນົດໄວ້ແລ້ວ, ມະນຸດມີສິດເສລີພາບໃນການເລືອກບໍ?"</p>
            <p>ໃນອິດສະລາມ, ເຈດຈຳນົງຂອງມະນຸດ (Al-Iradah al-Juz’iyyah) ແລະ ກໍດັສ (Qadar) ບໍ່ແມ່ນສິ່ງທີ່ຂັດແຍ່ງກັນ. ອັນລໍຫ໌ (Allah) ໄດ້ມອບອຳນາດໃນການເລືອກໃຫ້ມະນຸດ, ເຊິ່ງເປັນເຫດຜົນທີ່ມະນຸດມີຄວາມຮັບຜິດຊອບຕໍ່ການກະທຳຂອງຕົນເອງ. ພະອົງໄດ້ສ້າງຄວາມສາມາດໃນການເລືອກ, ແລະ ມະນຸດເປັນຜູ້ທີ່ເລືອກການກະທຳນັ້ນ.</p>
            <ul className="space-y-2 mt-2">
                <BulletPoint><strong>ການຮັບຜິດຊອບ:</strong> ມະນຸດຈະຖືກຕັດສິນຕາມການເລືອກ ແລະ ການກະທຳຂອງເຂົາເຈົ້າເອງ. ຖ້າບໍ່ມີການເລືອກ, ກໍ່ຈະບໍ່ມີການຮັບຜິດຊອບ ແລະ ການລົງໂທດ.</BulletPoint>
                <BulletPoint><strong>ຄວາມສະຫງົບ:</strong> ຄວາມເຊື່ອໃນກະດັນເຮັດໃຫ້ຊາວມຸດສະລິມມີຄວາມສະຫງົບໃນຍາມປະສົບກັບຄວາມລຳບາກ, ເພາະພວກເຂົາຮູ້ວ່າທຸກຢ່າງເປັນແຜນການຂອງອັນລໍ (Allah). ຢ່າງໃດກໍຕາມ, ມັນບໍ່ແມ່ນເຫດຜົນທີ່ຈະນັ່ງຢູ່ລ້າໆ ຫຼືບໍ່ພະຍາຍາມ, ເພາະຄວາມພະຍາຍາມຂອງມະນຸດກໍ່ເປັນສ່ວນໜຶ່ງຂອງການກຳນົດນັ້ນ.</BulletPoint>
            </ul>
        </ContentSection>

        <ContentSection title="ສະຫຼຸບ" icon={<ShieldCheck />}>
            <p>ສະນັ້ນ, ການເຊື່ອໃນກໍດັສ (Qadar) ເປັນການຍອມຮັບວ່າທຸກສິ່ງເກີດຂຶ້ນຕາມການກຳນົດຂອງອັນລໍຫ໌ (Allah), ແຕ່ມະນຸດຍັງຄົງມີຄວາມຮັບຜິດຊອບຕໍ່ການກະທຳຂອງຕົນເອງ.</p>
        </ContentSection>
      </main>
    </div>
  );
}
