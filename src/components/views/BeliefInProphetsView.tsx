'use client';
import ViewHeader from '@/components/shared/ViewHeader';
import ContentSection from '@/components/shared/ContentSection';
import { Users, BookText, Link, Crown, ShieldCheck } from 'lucide-react';

interface BeliefInProphetsViewProps {
  goBack: () => void;
}

const BulletPoint = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start gap-3">
        <span className="text-primary font-bold mt-1">▶</span>
        <span>{children}</span>
    </li>
);

export default function BeliefInProphetsView({ goBack }: BeliefInProphetsViewProps) {
  return (
    <div className="flex flex-col">
      <ViewHeader title="ຄວາມເຊື່ອໃນນະບີ" onBack={goBack} />
      <main className="p-4 space-y-4">
        <ContentSection title="ຄວາມເຊື່ອໃນນະບີ (Nabi) ແລະ ຣໍ່ຊູລ (Rasul)" icon={<Users />}>
            <p>ໃນສາສະໜາອິດສະລາມ, ຄວາມເຊື່ອໃນ ນະບີ (Nabi) ແລະ ຣໍ່ຊູລ (Rasul) ເປັນສ່ວນສຳຄັນຂອງຫຼັກການຄວາມເຊື່ອ. ຊາວມຸດສະລິມເຊື່ອວ່າອັນລໍຫ໌ (Allah) ໄດ້ສົ່ງສາດສະດາເພື່ອເປັນສື່ກາງໃນການຕິດຕໍ່ສື່ສານກັບມະນຸດ.</p>
        </ContentSection>

        <ContentSection title="ຄວາມໝາຍ ແລະ ພາລະກິດຂອງສາດສະດາ" icon={<BookText />}>
            <ul className="space-y-2 mt-2">
                <BulletPoint><strong>ນະບີ (Nabi):</strong> ໝາຍເຖິງສາດສະດາທີ່ໄດ້ຮັບການດົນໃຈຈາກອັນລໍຫ໌ (Allah) ເພື່ອສືບຕໍ່ເຜີຍແຜ່ຄຳສອນຂອງສາດສະດາກ່ອນໜ້າ.</BulletPoint>
                <BulletPoint><strong>ຣໍ່ຊູລ (Rasul):</strong> ໝາຍເຖິງສາດສະດາທີ່ໄດ້ຮັບ ຄຳພີ (Kitab) ຫຼື ກົດໝາຍໃໝ່ (Shari'ah) ຈາກອັນລໍຫ໌ (Allah) ເພື່ອເປັນແນວທາງສຳລັບຜູ້ຄົນໃນຍຸກສະໄໝນັ້ນ.</BulletPoint>
            </ul>
            <p className="font-semibold mt-4">ພາລະກິດຫຼັກຂອງສາດສະດາທຸກອົງແມ່ນຄືກັນຄື:</p>
            <ul className="space-y-2 mt-2">
                <BulletPoint><strong>ເຊີນຊວນມະນຸດສູ່ນະມັດສະການພະເຈົ້າອົງດຽວ:</strong> ສາດສະດາທຸກຄົນຕັ້ງແຕ່ຄົນທຳອິດຈົນເຖິງຄົນສຸດທ້າຍລ້ວນແລ້ວແຕ່ມີສານຫຼັກດຽວກັນຄືການນຳພາຜູ້ຄົນໃຫ້ເຊື່ອໃນ ເຕົ໋າຮິດ (Tawhid) ຫຼື ເອກະເທວະນິຍົມ.</BulletPoint>
                <BulletPoint><strong>ເປັນແບບຢ່າງທີ່ດີ:</strong> ພວກເຂົາເປັນຕົວຢ່າງຂອງຄວາມບໍລິສຸດ, ຄວາມຊື່ສັດ, ແລະ ຄວາມເມດຕາທີ່ມະນຸດຄວນເອົາແບບຢ່າງ.</BulletPoint>
                <BulletPoint><strong>ໃຫ້ການເຕືອນໄພ:</strong> ພວກເຂົາເຕືອນຜູ້ຄົນກ່ຽວກັບວັນສິ້ນໂລກ ແລະ ຜົນກຳຂອງການກະທຳຜິດ.</BulletPoint>
            </ul>
        </ContentSection>
        
        <ContentSection title="ສາຍພົວພັນຂອງສາດສະດາ" icon={<Link />}>
            <p>ຊາວມຸດສະລິມເຊື່ອວ່າອັນລໍຫ໌ (Allah) ໄດ້ສົ່ງສາດສະດາມາຢ່າງຕໍ່ເນື່ອງໃນທຸກຍຸກສະໄໝ ແລະ ໃນທົ່ວໂລກ, ໂດຍເລີ່ມຕົ້ນດ້ວຍ ສາດສະດາ ອາດຳ ແລະ ສິ້ນສຸດລົງດ້ວຍ ສາດສະດາ ມູຮຳມັດ.</p>
        </ContentSection>
        
        <ContentSection title="ບົດບາດພິເສດຂອງສາດສະດາ ມູຮຳມັດ" icon={<Crown />}>
             <p>ສາດສະດາ ມູຮຳມັດ ມີຖານະພິເສດໃນອິດສະລາມ ເພາະທ່ານເປັນ ສາດສະດາອົງສຸດທ້າຍ. ນັ້ນໝາຍຄວາມວ່າຫຼັງຈາກທ່ານແລ້ວຈະບໍ່ມີສາດສະດາໃໝ່ອີກ. ພາລະກິດຂອງທ່ານແມ່ນການສຳເລັດສົມບູນຂອງທຸກຄຳສອນທີ່ຜ່ານມາ, ແລະ ຄຳພີອັນກູຣອານທີ່ທ່ານໄດ້ຮັບກໍເປັນຄຳພີສຸດທ້າຍຂອງອັນລໍຫ໌ (Allah).</p>
        </ContentSection>

        <ContentSection title="ຄວາມສຳຄັນຂອງການເຊື່ອໃນສາດສະດາທຸກອົງ" icon={<ShieldCheck />}>
            <p>ການເຊື່ອໃນສາດສະດາທຸກອົງທີ່ໄດ້ກ່າວເຖິງໃນຄຳພີອັນກູຣອານແມ່ນ ໜ້າທີ່ຂອງຊາວມຸດສະລິມ. ການປະຕິເສດສາດສະດາອົງໃດອົງໜຶ່ງເທົ່າກັບການປະຕິເສດຄວາມເຊື່ອທັງໝົດ. ນອກຈາກນັ້ນ, ການເຊື່ອໃນສາດສະດາບໍ່ໄດ້ໝາຍເຖິງການນະມັດສະການພວກເຂົາ, ເພາະພວກເຂົາເປັນພຽງມະນຸດທຳມະດາທີ່ອັນລໍຫ໌ (Allah) ໄດ້ຄັດເລືອກເທົ່ານັ້ນ.</p>
        </ContentSection>
      </main>
    </div>
  );
}
