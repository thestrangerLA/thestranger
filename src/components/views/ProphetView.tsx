'use client';

import ViewHeader from '@/components/shared/ViewHeader';
import ContentSection from '@/components/shared/ContentSection';
import QuoteCard from '@/components/shared/QuoteCard';
import { UserCheck, BookText, Link, Crown, ShieldCheck } from 'lucide-react';

interface ProphetViewProps {
  goBack: () => void;
}

const BulletPoint = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start gap-3">
        <span className="text-primary font-bold mt-1">▶</span>
        <span>{children}</span>
    </li>
);

export default function ProphetView({ goBack }: ProphetViewProps) {
  return (
    <div className="flex flex-col">
      <ViewHeader title="ນະບີແມ່ນໃຜ?" onBack={goBack} />
      <main className="p-4 space-y-4">
        <ContentSection title="ຄວາມໝາຍ ແລະ ພາລະກິດຂອງສາດສະດາ" icon={<UserCheck />}>
          <p>ໃນອິດສະລາມ, ສາດສະດາ (Nabi) ແມ່ນຜູ້ທີ່ໄດ້ຮັບການຄັດເລືອກໂດຍ ອັນລໍຫ໌ (Allah) ເພື່ອນຳສານຈາກພະອົງມາສູ່ມະນຸດ. ພາລະກິດຫຼັກຂອງສາດສະດາຄື:</p>
          <ul className="space-y-2 mt-2">
              <BulletPoint><strong>ການແນະນຳມະນຸດ:</strong> ສາດສະດາມີໜ້າທີ່ນຳທາງມະນຸດໄປສູ່ເສັ້ນທາງທີ່ຖືກຕ້ອງ ແລະ ຊ່ວຍໃຫ້ພວກເຂົາເຂົ້າໃຈເປົ້າໝາຍຂອງການມີຊີວິດຢູ່.</BulletPoint>
              <BulletPoint><strong>ການເປັນແບບຢ່າງ:</strong> ພວກເຂົາບໍ່ພຽງແຕ່ນຳສານມາສອນ, ແຕ່ຍັງເປັນແບບຢ່າງທີ່ດີເລີດໃນການໃຊ້ຊີວິດ, ການກະທຳ, ແລະຄຸນນະທຳ.</BulletPoint>
              <BulletPoint><strong>ການເຕືອນໄພ:</strong> ພວກເຂົາເຕືອນມະນຸດກ່ຽວກັບຜົນກຳຂອງການບໍ່ເຊື່ອຟັງອັນລໍຫ໌ ແລະ ການກະທຳຜິດ.</BulletPoint>
          </ul>
        </ContentSection>

        <ContentSection title="ຄວາມແຕກຕ່າງລະຫວ່າງ Nabi ແລະ Rasul" icon={<BookText />}>
            <p>ໃນບາງກໍລະນີ, ອິດສະລາມໄດ້ແຍກຄວາມໝາຍຂອງສາດສະດາອອກເປັນສອງປະເພດຄື:</p>
            <ul className="space-y-2 mt-2">
                <BulletPoint><strong>Nabi (ນບີ):</strong> ສາດສະດາທີ່ໄດ້ຮັບການດົນໃຈຈາກອັນລໍ ເພື່ອສືບຕໍ່ເຜີຍແຜ່ຄຳສອນຂອງສາດສະດາກ່ອນໜ້າ.</BulletPoint>
                <BulletPoint><strong>Rasul (ຣໍຊູລ):</strong> ສາດສະດາທີ່ໄດ້ຮັບ ຄຳພີ (Kitab) ຫຼື ກົດໝາຍໃໝ່ (Shari'ah) ຈາກອັນລໍຫ໌ ເພື່ອເປັນແນວທາງສຳລັບຜູ້ຄົນໃນຍຸກສະໄໝນັ້ນ.</BulletPoint>
            </ul>
            <p className="mt-2">ຍົກຕົວຢ່າງ: ສາດສະດາ ມູຊາ ໄດ້ຮັບຄຳພີ ເຕົາຣອດ (Tawrah), ສາດສະດາ ອີຊາ ໄດ້ຮັບຄຳພີ ອິນຈີລ (Injil), ແລະ ສາດສະດາ ມູຮຳມັດ ໄດ້ຮັບຄຳພີ ອັນກຸຣອານ (Quran).</p>
            <QuoteCard source="ອັນກຸຣອານ 40:78">"ແລະແນ່ນອນເຮົາໄດ້ສົ່ງຣໍ່ຊູລທັງຫຼາຍມາ ກ່ອນໜ້າເຈົ້າ, (ຈຳນວນໜຶ່ງ) ໃນໝູ່ພວກເຂົາ ເຮົາໄດ້ເລົ່າເລື່ອງຂອງພວກເຂົາໃຫ້ເຈົ້າຟັງ ແລະ (ຈຳນວນໜຶ່ງ) ໃນໝູ່ພວກເຂົາ ເຮົາບໍ່ໄດ້ເລົ່າເລື່ອງຂອງພວກເຂົາໃຫ້ເຈົ້າຟັງ."</QuoteCard>
        </ContentSection>
        
        <ContentSection title="ລະບົບສາຍພົວພັນຂອງສາດສະດາ (Prophetic Chain)" icon={<Link />}>
            <p>ຊາວມຸດສະລິມເຊື່ອວ່າອັນລໍຫ໌ ໄດ້ສົ່ງສາດສະດາມາຢ່າງຕໍ່ເນື່ອງໃນທຸກຍຸກສະໄໝ ແລະ ໃນທົ່ວໂລກ ເພື່ອສືບຕໍ່ພາລະກິດດຽວກັນຄືການເຊື້ອເຊີນມະນຸດໃຫ້ມາສູ່ການເຊື່ອຖືພະເຈົ້າອົງດຽວ. ລະບົບສາຍພົວພັນນີ້ເລີ່ມຕົ້ນດ້ວຍ ສາດສະດາ ອາດຳ, ສາດສະດາອົງທຳອິດ, ແລະ ສິ້ນສຸດລົງດ້ວຍ ສາດສະດາ ມູຮຳມັດ, ທີ່ຖືກເອີ້ນວ່າ “ຄົນສຸດທ້າຍຂອງສາດສະດາ” (Khatam an-Nabiyyin).</p>
        </ContentSection>
        
        <ContentSection title="ບົດບາດຂອງສາດສະດາ ມູຮຳມັດ" icon={<Crown />}>
             <p>ສາດສະດາ ມູຮຳມັດ ມີບົດບາດພິເສດໃນອິດສະລາມ ເພາະເປັນສາດສະດາອົງສຸດທ້າຍ. ຄຳສອນຂອງທ່ານເປັນການສຳເລັດສົມບູນຂອງທຸກຄຳສອນທີ່ຜ່ານມາ ແລະ ຄຳພີອັນກຸຣອານທີ່ທ່ານໄດ້ຮັບກໍເປັນຄຳພີສຸດທ້າຍຂອງອັນລໍຫ໌. ດັ່ງນັ້ນ, ຫຼັງຈາກທ່ານແລ້ວຈະບໍ່ມີສາດສະດາໃໝ່ອີກ.</p>
        </ContentSection>

        <ContentSection title="ຫຼັກການຄວາມເຊື່ອຕໍ່ສາດສະດາ" icon={<ShieldCheck />}>
            <p>ການເຊື່ອໃນສາດສະດາທຸກອົງແມ່ນ ສ່ວນໜຶ່ງທີ່ສຳຄັນທີ່ສຸດຂອງຄວາມເຊື່ອໃນອິດສະລາມ. ຊາວມຸດສະລິມຕ້ອງເຊື່ອໃນສາດສະດາທຸກອົງທີ່ໄດ້ກ່າວເຖິງໃນຄຳພີອັນກຸຣອານ, ໂດຍບໍ່ມີການແບ່ງແຍກ. ການປະຕິເສດສາດສະດາອົງໃດອົງໜຶ່ງ ຖືວ່າເປັນການປະຕິເສດຄວາມເຊື່ອທັງໝົດ.</p>
            <p className="mt-2">ການເຊື່ອໃນສາດສະດາບໍ່ໄດ້ໝາຍເຖິງການນະມັດສະການພວກເຂົາ. ສາດສະດາທຸກອົງເປັນພຽງມະນຸດທີ່ອັນລໍຫ໌ໄດ້ຄັດເລືອກ, ພວກເຂົາບໍ່ໄດ້ມີລັກສະນະຂອງຄວາມເປັນພະເຈົ້າ. ພາລະກິດຂອງພວກເຂົາຄືການນຳພາຜູ້ຄົນໃຫ້ໄປສູ່ນະມັດສະການພະເຈົ້າອົງດຽວເທົ່ານັ້ນ.</p>
        </ContentSection>
      </main>
    </div>
  );
}
