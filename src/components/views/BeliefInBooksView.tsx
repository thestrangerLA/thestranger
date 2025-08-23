'use client';
import ViewHeader from '@/components/shared/ViewHeader';
import ContentSection from '@/components/shared/ContentSection';
import { BookOpenCheck, BookCopy, BookMarked, ShieldCheck } from 'lucide-react';

interface BeliefInBooksViewProps {
  goBack: () => void;
}

const BulletPoint = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start gap-3">
        <span className="text-primary font-bold mt-1">▶</span>
        <span>{children}</span>
    </li>
);

export default function BeliefInBooksView({ goBack }: BeliefInBooksViewProps) {
  return (
    <div className="flex flex-col">
      <ViewHeader title="ຄວາມເຊື່ອໃນຄຳພີ" onBack={goBack} />
      <main className="p-4 space-y-4">
        <ContentSection title="ຄວາມເຊື່ອໃນຄຳພີ (Kitab)" icon={<BookOpenCheck />}>
          <p>ໃນອິດສະລາມ, ຄວາມເຊື່ອໃນ ຄຳພີ (Kitab) ທີ່ຖືກປະທານຈາກສະຫວັນ ເປັນໜຶ່ງໃນຫົກຫຼັກການຂອງຄວາມເຊື່ອທີ່ສຳຄັນທີ່ສຸດ. ຊາວມຸດສະລິມເຊື່ອວ່າອັນລໍຫ໌ (Allah) ໄດ້ສົ່ງຄຳພີເຫຼົ່ານີ້ມາເພື່ອເປັນຄູ່ມືແນະນຳມະນຸດ, ໂດຍບັນຈຸຄຳສອນ, ກົດໝາຍ, ແລະ ຄວາມຈິງທີ່ມາຈາກພະເຈົ້າ.</p>
        </ContentSection>

        <ContentSection title="ຄຳພີທີ່ຖືກກ່າວເຖິງໃນຄຳພີອັນກູຣອານ" icon={<BookCopy />}>
            <p>ຄຳພີອັນກູຣອານກ່າວເຖິງຊື່ຂອງຄຳພີທີ່ສຳຄັນຫຼາຍຫົວທີ່ຖືກປະທານໃຫ້ແກ່ສາດສະດາກ່ອນໜ້າ:</p>
            <ul className="space-y-2 mt-2">
                <BulletPoint><strong>ຕະເວາຣາຕ໌ (Tawrah):</strong> ຖືກປະທານໃຫ້ແກ່ສາດສະດາ ມູຊາ (Musa - ໂມເຊສ), ເຊິ່ງເປັນຄຳພີທີ່ບັນຈຸກົດໝາຍສຳລັບຊາວອິດສະຣາເອວໃນຍຸກນັ້ນ.</BulletPoint>
                <BulletPoint><strong>ຊາບູຣ໌ (Zabur):</strong> ຖືກປະທານໃຫ້ແກ່ສາດສະດາ ດາວູດ (Dawud - ດາວິດ).</BulletPoint>
                <BulletPoint><strong>ອິນຈີລ (Injil):</strong> ຖືກປະທານໃຫ້ແກ່ສາດສະດາ ອີຊາ (Isa - ເຢຊູ), ເຊິ່ງປະກອບດ້ວຍຄຳສອນ ແລະ ຄຳແນະນຳຕ່າງໆ.</BulletPoint>
                <BulletPoint><strong>ອັນກູຣອານ (Quran):</strong> ເປັນຄຳພີສຸດທ້າຍທີ່ຖືກປະທານໃຫ້ແກ່ສາດສະດາ ມູຮຳມັດ (Muhammad). ຄຳພີນີ້ເປັນການລວບລວມຄຳສອນທັງໝົດທີ່ຖືກສົ່ງມາກ່ອນໜ້ານີ້, ແລະ ເປັນຄຳພີດຽວທີ່ຍັງຄົງຮັກສາໄວ້ໄດ້ຢ່າງຄົບຖ້ວນໂດຍບໍ່ມີການບິດເບືອນ.</BulletPoint>
            </ul>
        </ContentSection>
        
        <ContentSection title="ຄວາມສຳຄັນຂອງຄຳພີອັນກູຣອານ" icon={<BookMarked />}>
            <p>ອັນກູຣອານ (Quran) ມີຖານະພິເສດ ເພາະຊາວມຸດສະລິມເຊື່ອວ່າ:</p>
            <ul className="space-y-2 mt-2">
                <BulletPoint><strong>ຄຳພີສຸດທ້າຍ:</strong> ເປັນຄຳພີສຸດທ້າຍທີ່ອັນລໍຫ໌ (Allah) ໄດ້ສົ່ງມາ. ຫຼັງຈາກຄຳພີອັນກູຣອານ, ຈະບໍ່ມີຄຳພີອື່ນອີກ.</BulletPoint>
                <BulletPoint><strong>ການປົກປ້ອງ:</strong> ອັນລໍຫ໌ (Allah) ໄດ້ສັນຍາວ່າຈະປົກປ້ອງອັນກູຣອານຈາກການບິດເບືອນ ແລະ ການປ່ຽນແປງໂດຍມະນຸດ. ເພາະສະນັ້ນ, ຄຳສອນຈຶ່ງຖືກຮັກສາໄວ້ຄືກັບຕອນທີ່ຖືກປະທານມາ.</BulletPoint>
                <BulletPoint><strong>ຄູ່ມືສຳລັບມະນຸດ:</strong> ອັນກູຣອານບໍ່ພຽງແຕ່ໃຫ້ຄຳແນະນຳດ້ານສາດສະໜາເທົ່ານັ້ນ, ແຕ່ຍັງເປັນຄູ່ມືຄົບວົງຈອນສຳລັບທຸກດ້ານຂອງຊີວິດ, ບໍ່ວ່າຈະເປັນການເມືອງ, ສັງຄົມ, ເສດຖະກິດ, ຫຼືສິນລະທຳ.</BulletPoint>
            </ul>
        </ContentSection>

        <ContentSection title="ການປະຕິບັດຕາມຄຳພີ" icon={<ShieldCheck />}>
            <p>ການເຊື່ອໃນຄຳພີທີ່ຖືກປະທານຈາກສະຫວັນທັງໝົດເປັນໜ້າທີ່ຂອງຊາວມຸດສະລິມ, ແຕ່ການປະຕິບັດຕາມຫຼັກການທີ່ແທ້ຈິງແມ່ນການປະຕິບັດຕາມອັນກູຣອານ. ນີ້ກໍເພາະວ່າອັນກູຣອານແມ່ນຄຳສອນສຸດທ້າຍທີ່ປົກປ້ອງຈາກການບິດເບືອນ, ແລະເປັນຄຳສອນທີ່ຖືກສົ່ງມາເພື່ອຄົນທົ່ວໂລກທຸກຍຸກສະໄໝ.</p>
        </ContentSection>
      </main>
    </div>
  );
}
