'use client';
import ViewHeader from '@/components/shared/ViewHeader';
import ContentSection from '@/components/shared/ContentSection';
import { BookText, ShieldCheck, Heart } from 'lucide-react';

interface ShahadaViewProps {
  goBack: () => void;
}

const BulletPoint = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start gap-3">
        <span className="text-primary font-bold mt-1">•</span>
        <span>{children}</span>
    </li>
);

const NumberedPoint = ({ number, title, children }: { number: string, title: React.ReactNode, children: React.ReactNode }) => (
    <div className="mt-4">
        <h3 className="font-bold text-md text-primary flex items-center gap-2">
            <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm">{number}</span>
            {title}
        </h3>
        <div className="pl-8 mt-2 space-y-2 text-card-foreground">
            {children}
        </div>
    </div>
);

export default function ShahadaView({ goBack }: ShahadaViewProps) {
  return (
    <div className="flex flex-col">
      <ViewHeader title="ການເປັນພະຍານ (ຊະຮາດະ)" onBack={goBack} />
      <main className="p-4 space-y-4">

        <ContentSection title="ຄວາມໝາຍ" icon={<BookText />}>
            <p>ການເປັນພະຍານ (Shahada) ແມ່ນຫຼັກການທີໜຶ່ງຂອງອິດສະລາມ. ມັນຄືການກ່າວຄຳປະຕິຍານຄວາມເຊື່ອໃນພະເຈົ້າອົງດຽວ ແລະ ການເປັນສາດສະດາຂອງສາດສະດາ ມູຮຳມັດ (Muhammad). ການກ່າວຄຳປະຕິຍານນີ້ເປັນປະຕູສູ່ການເຂົ້າຮັບອິດສະລາມ, ແລະ ຕ້ອງກ່າວດ້ວຍຄວາມຈິງໃຈ.</p>
        </ContentSection>

        <ContentSection title="ຄຳປະຕິຍານສອງພາກສ່ວນ" icon={<ShieldCheck />}>
            <NumberedPoint number="1" title='"ບໍ່ມີພະເຈົ້າອື່ນໃດນອກຈາກ ອັນລໍຫ໌"'>
                <p>ພາກສ່ວນນີ້ເປັນການຢືນຢັນເຖິງຫຼັກການ ເຕົ໋າຮິດ (Tawhid) ຫຼື ເອກະເທວະນິຍົມ. ໝາຍເຖິງ:</p>
                <ul className="space-y-2 mt-2">
                    <BulletPoint><strong>ການປະຕິເສດ:</strong> ປະຕິເສດການນະມັດສະການບູຊາສິ່ງອື່ນນອກຈາກອັນລໍຫ໌ (Allah).</BulletPoint>
                    <BulletPoint><strong>ການຢືນຢັນ:</strong> ຢືນຢັນວ່າອັນລໍຫ໌ (Allah) ເປັນຜູ້ສ້າງ, ຜູ້ຄຸ້ມຄອງ, ແລະ ເປັນຜູ້ດຽວທີ່ສົມຄວນໄດ້ຮັບການນະມັດສະການບູຊາ.</BulletPoint>
                </ul>
                 <p className="mt-2">ການກ່າວຄຳນີ້ໝາຍເຖິງການອຸທິດຕົນເອງຕໍ່ອັນລໍຫ໌ (Allah) ພຽງຜູ້ດຽວ, ໂດຍບໍ່ມີສິ່ງໃດມາທຽບເທົ່າ.</p>
            </NumberedPoint>
            
            <NumberedPoint number="2" title='"ແລະ ແທ້ຈິງແລ້ວ ມູຮຳມັດ ເປັນສາດສະດາຂອງ ອັນລໍຫ໌"'>
                <p>ພາກສ່ວນນີ້ເປັນການຍອມຮັບວ່າສາດສະດາ ມູຮຳມັດ (Muhammad) ເປັນສາດສະດາອົງສຸດທ້າຍຂອງອັນລໍຫ໌ (Allah). ໝາຍເຖິງ:</p>
                 <ul className="space-y-2 mt-2">
                    <BulletPoint><strong>ການເຊື່ອຟັງ:</strong> ຍອມຮັບການນຳພາ, ຄຳສອນ, ແລະ ແບບຢ່າງຊີວິດຂອງສາດສະດາ.</BulletPoint>
                    <BulletPoint><strong>ການປະຕິບັດ:</strong> ປະຕິບັດຕາມຫຼັກການທີ່ທ່ານໄດ້ນຳມາສອນ, ເພາະວ່າຄຳສອນຂອງທ່ານແມ່ນການຕີຄວາມໝາຍຂອງຄຳພີ ອັນກູຣອານ (Quran) ທີ່ຖືກຕ້ອງທີ່ສຸດ.</BulletPoint>
                </ul>
            </NumberedPoint>
        </ContentSection>

        <ContentSection title="ຄວາມສຳຄັນຂອງ ຊະຮາດະ" icon={<Heart />}>
            <p>ຊະຮາດະ (Shahada) ເປັນພື້ນຖານຂອງການເປັນມຸດສະລິມ. ສຳລັບຜູ້ທີ່ຕ້ອງການເຂົ້າຮັບອິດສະລາມ, ການກ່າວຄຳປະຕິຍານນີ້ເປັນສິ່ງທີ່ຈຳເປັນ. ມັນບໍ່ພຽງແຕ່ເປັນຄຳເວົ້າ, ແຕ່ເປັນສັນຍານຂອງການຍອມຈຳນົນຕໍ່ອັນລໍຫ໌ (Allah) ດ້ວຍໃຈຈິງ. ການກ່າວຄຳນີ້ໃນທຸກໆວັນເປັນການເຕືອນໃຫ້ມຸດສະລິມລະນຶກເຖິງຄວາມເຊື່ອຫຼັກຂອງພວກເຂົາ.</p>
        </ContentSection>

      </main>
    </div>
  );
}
