'use client';
import ViewHeader from '@/components/shared/ViewHeader';
import ContentSection from '@/components/shared/ContentSection';
import { User, CheckSquare, Users, Globe, Goal, BookHeart } from 'lucide-react';

interface WhoIsAMuslimViewProps {
  goBack: () => void;
}

const BulletPoint = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start gap-3">
        <span className="text-primary font-bold mt-1">▶</span>
        <span>{children}</span>
    </li>
);

export default function WhoIsAMuslimView({ goBack }: WhoIsAMuslimViewProps) {
  return (
    <div className="flex flex-col">
      <ViewHeader title='ໃຜແມ່ນ "ມຸດສະລິມ"?' onBack={goBack} />
      <main className="p-4 space-y-4">
        <ContentSection title="ມຸດສະລິມແມ່ນໃຜ?" icon={<User />}>
          <p>ມຸດສະລິມ ແມ່ນຜູ້ທີ່ເຊື່ອໝັ້ນຢ່າງສຸດໃຈໃນ ອັນລໍຫ໌ (Allah) ພະເຈົ້າອົງດຽວ ແລະ ໄດ້ຍອມຈຳນົນຕໍ່ພະອົງ. ຄຳວ່າ “ອິດສະລາມ” ມີຄວາມໝາຍວ່າ “ການຍອມຈຳນົນ” ຫຼື “ສັນຕິສຸກ”, ດັ່ງນັ້ນ, ມຸດສະລິມ ຈຶ່ງເປັນຜູ້ທີ່ຍອມຈຳນົນຕົນເອງຕໍ່ພະເຈົ້າ ເພື່ອໃຫ້ໄດ້ມາເຊິ່ງສັນຕິສຸກທັງໃນໂລກນີ້ ແລະ ໂລກໜ້າ. ການເປັນມຸດສະລິມບໍ່ໄດ້ຂຶ້ນຢູ່ກັບຊາດ, ເຜົ່າ, ຫຼືສີຜິວ, ແຕ່ຂຶ້ນຢູ່ກັບການເຊື່ອມໂຍງທາງຈິດວິນຍານກັບພະເຈົ້າ.</p>
        </ContentSection>

        <ContentSection title="ໜ້າທີ່ຂອງມຸດສະລິມ: ຫ້າຫຼັກການຂອງອິດສະລາມ" icon={<CheckSquare />}>
          <p>ໜ້າທີ່ຫຼັກຂອງມຸດສະລິມແມ່ນການປະຕິບັດຕາມຫ້າຫຼັກການພື້ນຖານຂອງອິດສະລາມ, ເຊິ່ງເປັນເສົາຄ້ຳຂອງການດຳເນີນຊີວິດ:</p>
          <ul className="space-y-2 mt-2">
            <BulletPoint><strong>ການປະຕິຍານຕົນ (Shahada):</strong> ການກ່າວຄຳປະຕິຍານວ່າ "ບໍ່ມີພະເຈົ້າອື່ນໃດນອກຈາກອັນລໍ, ແລະ ມູຮຳມັດ ແມ່ນສາດສະດາຂອງອັນລໍຫ໌". ນີ້ເປັນການປະກາດຄວາມເຊື່ອທີ່ເປັນພື້ນຖານທີ່ສຸດ.</BulletPoint>
            <BulletPoint><strong>ການລະໝາດ (Salat):</strong> ການລະໝາດຫຼືການອະທິຖານວັນລະຫ້າຄັ້ງຕາມເວລາທີ່ກຳນົດໄວ້. ການລະໝາດຊ່ວຍໃຫ້ມຸດສະລິມລະນຶກເຖິງພະເຈົ້າຢ່າງຕໍ່ເນື່ອງ, ຊຳລະຈິດໃຈ, ແລະ ເຊື່ອມຕໍ່ກັບພະອົງ.</BulletPoint>
            <BulletPoint><strong>ການຈ່າຍຊາກາຕ (Zakat):</strong> ການບໍລິຈາກເງິນໃຫ້ແກ່ຄົນທຸກຍາກ ຫຼື ຜູ້ທີ່ຂາດເຂີນ. ຊາກາຕເປັນການຊຳລະຊັບສິນ ແລະ ສະແດງເຖິງຄວາມຍຸຕິທຳທາງສັງຄົມ.</BulletPoint>
            <BulletPoint><strong>ການຖືສິນອົດ (Sawm):</strong> ການຖືສິນອົດອາຫານໃນເດືອນຣໍມະດອນ. ການຖືສິນອົດບໍ່ພຽງແຕ່ເປັນການອົດອາຫານ ແລະ ນ້ຳເທົ່ານັ້ນ, ແຕ່ຍັງເປັນການຝຶກຝົນຈິດໃຈໃຫ້ມີຄວາມອົດທົນ, ເມດຕາ, ແລະ ຢຳເກງ.</BulletPoint>
            <BulletPoint><strong>ການເຮັດຮັດ (Hajj):</strong> ການເດີນທາງໄປນະຄອນເມັກກະຢ່າງໜ້ອຍໜຶ່ງຄັ້ງໃນຊີວິດສຳລັບຜູ້ທີ່ມີຄວາມສາມາດ. ຮັຈເປັນການເຕົ້າໂຮມຊາວມຸດສະລິມຈາກທົ່ວໂລກເຂົ້າກັນ, ສະແດງເຖິງຄວາມເປັນເອກະພາບຂອງປະຊາຄົມ.</BulletPoint>
          </ul>
        </ContentSection>

        <ContentSection title="ຄວາມເປັນເອກະພາບ ແລະ ຄວາມເທົ່າທຽມໃນອິດສະລາມ" icon={<Users />}>
          <p>ອິດສະລາມເນັ້ນໜັກເຖິງຄວາມເປັນເອກະພາບຂອງມະນຸດ. ຊາວມຸດສະລິມເຊື່ອວ່າທຸກຄົນມີຄວາມເທົ່າທຽມກັນໃນສາຍພະເນດຂອງອັນລໍຫ໌. ບໍ່ມີຄວາມແຕກຕ່າງລະຫວ່າງຄົນຮັ່ງມີກັບຄົນທຸກຍາກ, ຄົນມີອຳນາດກັບຄົນທຳມະດາ. ສິ່ງທີ່ເຮັດໃຫ້ຄົນໜຶ່ງດີກວ່າອີກຄົນໜຶ່ງຄື ຄວາມຢຳເກງຕໍ່ພະເຈົ້າ (Taqwa) ແລະ ການກະທຳທີ່ດີ.</p>
        </ContentSection>

        <ContentSection title="ໜ້າທີ່ອື່ນໆໃນການດຳເນີນຊີວິດ" icon={<Goal />}>
          <p>ນອກຈາກຫຼັກການຫ້າຂໍ້, ມຸດສະລິມຍັງມີໜ້າທີ່ອື່ນໆອີກໃນການດຳເນີນຊີວິດ, ເຊັ່ນ:</p>
           <ul className="space-y-2 mt-2">
              <BulletPoint><strong>ການສະແຫວງຫາຄວາມຮູ້:</strong> ອິດສະລາມສົ່ງເສີມໃຫ້ມຸດສະລິມທຸກຄົນຮຽນຮູ້ ແລະ ພັດທະນາຕົນເອງ.</BulletPoint>
              <BulletPoint><strong>ການປະຕິບັດທີ່ດີຕໍ່ຜູ້ອື່ນ:</strong> ການສະແດງຄວາມເມດຕາຕໍ່ເພື່ອນມະນຸດ, ຊ່ວຍເຫຼືອຄົນຍາກ, ແລະ ຮັກສາສັນຕິສຸກໃນສັງຄົມ.</BulletPoint>
              <BulletPoint><strong>ການຮັກສາຄວາມບໍລິສຸດ:</strong> ທັງທາງກາຍ ແລະ ທາງໃຈ.</BulletPoint>
          </ul>
        </ContentSection>
        
        <ContentSection title="ຈຸດມຸ່ງໝາຍສູງສຸດ" icon={<BookHeart />}>
          <p>ຈຸດມຸ່ງໝາຍສູງສຸດຂອງມຸດສະລິມແມ່ນເພື່ອບັນລຸຄວາມພໍພະໄທຂອງອັນລໍຫ໌, ເຊິ່ງຈະນຳໄປສູ່ການລອດພົ້ນໃນໂລກໜ້າ. ການດຳເນີນຊີວິດຂອງມຸດສະລິມແມ່ນການດຸ່ນດ່ຽງລະຫວ່າງການປະຕິບັດສາດສະໜາ ແລະ ການເຮັດໜ້າທີ່ຕໍ່ໂລກນີ້ຢ່າງດີທີ່ສຸດ.</p>
        </ContentSection>

      </main>
    </div>
  );
}
