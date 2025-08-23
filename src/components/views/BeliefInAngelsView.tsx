'use client';
import ViewHeader from '@/components/shared/ViewHeader';
import ContentSection from '@/components/shared/ContentSection';
import { Shield, Feather, Book, Users, Star, BrainCircuit, CheckCircle } from 'lucide-react';

interface BeliefInAngelsViewProps {
  goBack: () => void;
}

const BulletPoint = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start gap-3">
        <span className="text-primary font-bold mt-1">▶</span>
        <span>{children}</span>
    </li>
);

export default function BeliefInAngelsView({ goBack }: BeliefInAngelsViewProps) {
  return (
    <div className="flex flex-col">
      <ViewHeader title="ເຊື່ອໃນທູດສະຫວັນ" onBack={goBack} />
      <main className="p-4 space-y-4">

        <ContentSection title="ຄວາມເຊື່ອໃນທູດສະຫວັນ (Malaikah)" icon={<Shield />}>
          <p>ໃນສາສະໜາອິດສະລາມ, ທູດສະຫວັນ (Malaikah) ເປັນສ່ວນສຳຄັນຂອງຫຼັກການຄວາມເຊື່ອ. ຊາວມຸດສະລິມເຊື່ອວ່າພວກເຂົາແມ່ນສິ່ງທີ່ອັນລໍຫ໌ (Allah) ສ້າງຂຶ້ນຈາກແສງສະຫວ່າງ (Noor). ພວກເຂົາບໍ່ມີສິດເສລີພາບໃນການເລືອກຄືກັບມະນຸດ ແລະ ສິ່ງມີຊີວິດອື່ນໆ. ໜ້າທີ່ຂອງພວກເຂົາແມ່ນການເຊື່ອຟັງ ແລະ ປະຕິບັດຕາມຄຳສັ່ງຂອງອັນລໍຫ໌ (Allah) ຢ່າງສິ້ນເຊີງ.</p>
        </ContentSection>

        <ContentSection title="ລັກສະນະຂອງທູດສະຫວັນ" icon={<Feather />}>
            <ul className="space-y-2 mt-2">
                <BulletPoint><strong>ການສ້າງ:</strong> ທູດສະຫວັນຖືກສ້າງມາຈາກແສງສະຫວ່າງ, ມະນຸດບໍ່ສາມາດເຫັນໄດ້ດ້ວຍຕາເປົ່າໃນສະພາບປົກກະຕິ.</BulletPoint>
                <BulletPoint><strong>ບໍ່ມີເພດ:</strong> ພວກເຂົາບໍ່ມີເພດຊາຍ ຫຼື ຍິງ.</BulletPoint>
                <BulletPoint><strong>ບໍ່ມີຄວາມຕ້ອງການທາງດ້ານຮ່າງກາຍ:</strong> ພວກເຂົາບໍ່ຈຳເປັນຕ້ອງກິນ, ດື່ມ, ຫຼືນອນ.</BulletPoint>
                <BulletPoint><strong>ຈຳນວນ:</strong> ຈຳນວນຂອງພວກເຂົາແມ່ນມີຫຼວງຫຼາຍ ແລະ ມີພຽງແຕ່ອັນລໍຫ໌ (Allah) ເທົ່ານັ້ນທີ່ຮູ້ຈຳນວນທີ່ແນ່ນອນ.</BulletPoint>
                <BulletPoint><strong>ຄວາມບໍລິສຸດ:</strong> ພວກເຂົາບໍ່ເຄີຍກະທຳບາບ ຫຼືຝ່າຝືນຄຳສັ່ງຂອງພະເຈົ້າ.</BulletPoint>
            </ul>
        </ContentSection>
        
        <ContentSection title="ໜ້າທີ່ຂອງທູດສະຫວັນ" icon={<Book />}>
            <p>ທູດສະຫວັນແຕ່ລະອົງມີໜ້າທີ່ສະເພາະທີ່ອັນລໍຫ໌ (Allah) ໄດ້ມອບໝາຍໃຫ້. ໜ້າທີ່ບາງຢ່າງທີ່ສຳຄັນລວມມີ:</p>
            <ul className="space-y-2 mt-2">
                <BulletPoint><strong>ການສົ່ງສານ:</strong> ນຳສານຈາກພະເຈົ້າໄປສູ່ສາດສະດາ.</BulletPoint>
                <BulletPoint><strong>ການປົກປ້ອງ:</strong> ປົກປ້ອງມະນຸດຈາກໄພອັນຕະລາຍ.</BulletPoint>
                <BulletPoint><strong>ການບັນທຶກການກະທຳ:</strong> ບັນທຶກຄວາມດີ ແລະ ຄວາມຊົ່ວທີ່ມະນຸດໄດ້ກະທຳ.</BulletPoint>
                <BulletPoint><strong>ການຄຸ້ມຄອງຈັກກະວານ:</strong> ຄຸ້ມຄອງພາກສ່ວນຕ່າງໆຂອງຈັກກະວານ, ເຊັ່ນ: ຝົນຕົກ, ລົມພັດ, ແລະ ອື່ນໆ.</BulletPoint>
            </ul>
        </ContentSection>
        
        <ContentSection title="ທູດສະຫວັນທີ່ສຳຄັນ" icon={<Users />}>
             <p>ໃນອິດສະລາມ, ມີທູດສະຫວັນຫຼາຍອົງທີ່ມີບົດບາດສຳຄັນທີ່ໄດ້ກ່າວເຖິງໃນຄຳພີກຸຣອານ ແລະ ຄຳສອນຂອງສາດສະດາ:</p>
             <ul className="space-y-2 mt-2">
                <BulletPoint><strong>ຍິບຣີລ (Jibril):</strong> ຖືວ່າເປັນທູດສະຫວັນທີ່ຍິ່ງໃຫຍ່ທີ່ສຸດ. ມີໜ້າທີ່ນຳຄຳເວົ້າຂອງອັນລໍຫ໌ (Allah) ມາສູ່ບັນດາສາດສະດາ, ລວມທັງສາດສະດາ ມູຮຳມັດ.</BulletPoint>
                <BulletPoint><strong>ມີກາອີລ (Mika′il):</strong> ຮັບຜິດຊອບໃນການຄວບຄຸມສະພາບອາກາດ ແລະ ການແຈກຢາຍປັດໄຈຕ່າງໆ.</BulletPoint>
                <BulletPoint><strong>ອິສຣາຟີລ (Israfil):</strong> ຮັບຜິດຊອບໃນການເປົ່າສັງເພື່ອປະກາດການມາເຖິງຂອງວັນສິ້ນໂລກ.</BulletPoint>
                <BulletPoint><strong>ມະລັກ ອັນ-ເມົາຕ໌ (Malakal−Mawt):</strong> ເປັນທູດສະຫວັນແຫ່ງຄວາມຕາຍ, ເຊິ່ງມີໜ້າທີ່ຮັບດວງວິນຍານຂອງສິ່ງມີຊີວິດທຸກຊະນິດໃນເວລາທີ່ພວກເຂົາເສຍຊີວິດ.</BulletPoint>
                <BulletPoint><strong>ມູນກັນດ໌ ແລະ ນາກີຣ (MunkarandNakir):</strong> ເປັນທູດສະຫວັນສອງອົງທີ່ສອບສວນດວງວິນຍານໃນຂຸມຝັງສົບກ່ຽວກັບຄວາມເຊື່ອ ແລະ ການກະທຳຂອງພວກເຂົາໃນຊີວິດ.</BulletPoint>
                <BulletPoint><strong>ຣອກີບ ແລະ ອາຕິດ (RaqibandAtid):</strong> ເປັນທູດສະຫວັນສອງອົງທີ່ເຮັດໜ້າທີ່ບັນທຶກການກະທຳຂອງມະນຸດ. ອົງໜຶ່ງບັນທຶກຄວາມດີ ແລະ ອີກອົງໜຶ່ງບັນທຶກຄວາມຊົ່ວ.</BulletPoint>
             </ul>
        </ContentSection>

        <ContentSection title="ຄວາມສຳຄັນຂອງການເຊື່ອໃນທູດສະຫວັນ" icon={<CheckCircle />}>
            <p>ການເຊື່ອໃນທູດສະຫວັນແມ່ນຫຼັກການພື້ນຖານອັນດັບສອງຂອງຄວາມເຊື່ອໃນອິດສະລາມ. ຄວາມເຊື່ອນີ້ຊ່ວຍໃຫ້ມຸດສະລິມເຂົ້າໃຈໂລກທີ່ບໍ່ສາມາດເຫັນໄດ້, ເຊິ່ງເປັນສ່ວນໜຶ່ງທີ່ສຳຄັນຂອງການສ້າງຂອງອັນລໍຫ໌ (Allah). ຍັງກະຕຸ້ນໃຫ້ມະນຸດກະທຳຄວາມດີ ແລະ ຫຼີກລ້ຽງຄວາມຊົ່ວ ເພາະຮູ້ວ່າທຸກການກະທຳຂອງພວກເຂົາໄດ້ຖືກບັນທຶກໄວ້.</p>
        </ContentSection>
      </main>
    </div>
  );
}
