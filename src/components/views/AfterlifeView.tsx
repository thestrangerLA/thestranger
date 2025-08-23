'use client';
import ViewHeader from '@/components/shared/ViewHeader';
import ContentSection from '@/components/shared/ContentSection';
import { Hourglass, Scale, CheckCircle, XCircle, Goal, BookHeart } from 'lucide-react';

interface AfterlifeViewProps {
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

const BulletPoint = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start gap-3">
        <span className="text-primary font-bold mt-1">•</span>
        <span>{children}</span>
    </li>
);

export default function AfterlifeView({ goBack }: AfterlifeViewProps) {
  return (
    <div className="flex flex-col">
      <ViewHeader title="ຊີວິດຫຼັງຄວາມຕາຍ" onBack={goBack} />
      <main className="p-4 space-y-4">
        <ContentSection title="ຊີວິດຫຼັງຄວາມຕາຍໃນອິດສະລາມ" icon={<BookHeart />}>
            <p>ໃນສາສະໜາອິດສະລາມ, ຊີວິດຫຼັງຄວາມຕາຍ (Akhirah) ແມ່ນຫຼັກການສຳຄັນທີ່ສຸດຂອງຄວາມເຊື່ອ. ຊາວມຸດສະລິມເຊື່ອວ່າຊີວິດໃນໂລກນີ້ເປັນພຽງຊົ່ວຄາວ, ເປັນບ່ອນທົດສອບສຳລັບການກະທຳຂອງມະນຸດ. ຊີວິດທີ່ແທ້ຈິງແລະນິລັນດອນຈະເລີ່ມຕົ້ນຫຼັງຈາກຄວາມຕາຍ, ເຊິ່ງຈະເປັນເວລາທີ່ມະນຸດທຸກຄົນຈະຕ້ອງຮັບຜິດຊອບຕໍ່ການກະທຳຂອງຕົນເອງ.</p>
        </ContentSection>
        
        <ContentSection title="ຂັ້ນຕອນຂອງຊີວິດຫຼັງຄວາມຕາຍ" icon={<Hourglass />}>
            <NumberedPoint number="1" title="ບາຣ໌ຊັກ (Barzakh) (ຊີວິດໃນຂຸມຝັງສົບ)">
                <div>
                    <p>ເມື່ອຄົນເຮົາຕາຍ, ດວງວິນຍານຂອງພວກເຂົາຈະເຂົ້າສູ່ຂັ້ນຕອນທີ່ເອີ້ນວ່າ ບາຣ໌ຊັກ (Barzakh). ມັນຄືຊີວິດໃນຂຸມຝັງສົບ, ເຊິ່ງເປັນໄລຍະເວລາຊົ່ວຄາວລະຫວ່າງຄວາມຕາຍແລະວັນຟື້ນຄືນຊີບ. ໃນໄລຍະນີ້, ດວງວິນຍານຈະໄດ້ຮັບລົດຊາດຂອງສິ່ງທີ່ຈະເກີດຂຶ້ນຕໍ່ໄປ:</p>
                    <ul className="space-y-2 mt-2 list-disc list-inside">
                        <li><strong>ສຳລັບຜູ້ທີ່ດີ:</strong> ພວກເຂົາຈະຮູ້ສຶກສະບາຍແລະມີຄວາມສຸກໃນຂຸມຝັງສົບ.</li>
                        <li><strong>ສຳລັບຜູ້ທີ່ຊົ່ວ:</strong> ພວກເຂົາຈະຮູ້ສຶກຖືກທໍລະມານແລະບໍ່ສະບາຍ.</li>
                    </ul>
                </div>
            </NumberedPoint>
            <NumberedPoint number="2" title="ວັນສິ້ນໂລກແລະວັນຕັດສິນ (Yaumal-Qiyamah)">
                <div>
                    <p>ຫຼັງຈາກການສິ້ນສຸດຂອງໂລກ, ຈະມີການເປົ່າສັງຄັ້ງທີສອງເພື່ອໃຫ້ມະນຸດທຸກຄົນຖືກຟື້ນຄືນຊີບ. ວັນນັ້ນຖືກເອີ້ນວ່າ ວັນກິຍາມະ (Yaumal-Qiyamah). ໃນວັນນັ້ນ:</p>
                     <ul className="space-y-2 mt-2 list-disc list-inside">
                        <li><strong>ການເຕົ້າໂຮມ:</strong> ມະນຸດທຸກຄົນຈະຖືກເຕົ້າໂຮມກັນຢູ່ທີ່ສະໜາມກວ້າງ.</li>
                        <li><strong>ການບັນຊີ:</strong> ທຸກການກະທຳ, ບໍ່ວ່າຈະນ້ອຍຫຼືໃຫຍ່, ຈະຖືກນຳມາບັນຊີ. ມະນຸດຈະບໍ່ສາມາດປິດບັງສິ່ງໃດໄດ້.</li>
                        <li><strong>ການຕັດສິນ:</strong> ອັນລໍ (Allah) ຈະຕັດສິນມະນຸດໂດຍອີງຕາມການກະທຳຂອງພວກເຂົາ. ຄວາມຍຸດຕິທຳຈະຖືກປະຕິບັດຢ່າງຄົບຖ້ວນ.</li>
                    </ul>
                </div>
            </NumberedPoint>
             <NumberedPoint number="3" title="ສະຫວັນ (Jannah) ແລະ ນາລົກ (Jahannam)">
                <div>
                    <p>ຫຼັງຈາກການຕັດສິນ, ມະນຸດຈະຖືກສົ່ງໄປຫາຈຸດໝາຍປາຍທາງສຸດທ້າຍຂອງພວກເຂົາ:</p>
                     <ul className="space-y-2 mt-2 list-disc list-inside">
                        <li><strong>ສະຫວັນ (Jannah):</strong> ເປັນບ່ອນຢູ່ຂອງຄວາມສຸກແລະຄວາມສະບາຍນິລັນດອນ. ມັນເປັນລາງວັນສຳລັບຜູ້ທີ່ເຊື່ອໝັ້ນໃນອັນລໍ (Allah) ແລະເຮັດຄວາມດີໃນໂລກນີ້. ໃນສະຫວັນ, ຈະບໍ່ມີຄວາມທຸກ, ຄວາມເສົ້າ, ຫຼືຄວາມເຈັບປວດ.</li>
                        <li><strong>ນາລົກ (Jahannam):</strong> ເປັນບ່ອນລົງໂທດສຳລັບຜູ້ທີ່ປະຕິເສດສັດທາໃນພະເຈົ້າແລະກະທຳບາບຢ່າງຮ້າຍແຮງ. ຄວາມທຸກທໍລະມານໃນນາລົກແມ່ນມີຄວາມໂຫດຮ້າຍທີ່ສຸດ.</li>
                    </ul>
                </div>
            </NumberedPoint>
        </ContentSection>

        <ContentSection title="ຜົນກະທົບຕໍ່ຊີວິດປະຈຳວັນ" icon={<Goal />}>
            <p>ຄວາມເຊື່ອໃນຊີວິດຫຼັງຄວາມຕາຍເປັນແຮງບັນດານໃຈທີ່ສຳຄັນສຳລັບມຸດສະລິມ. ມັນກະຕຸ້ນໃຫ້ພວກເຂົາ:</p>
            <ul className="space-y-2 mt-2">
                <BulletPoint><strong>ມີຄວາມຮັບຜິດຊອບ:</strong> ມະນຸດຮູ້ວ່າທຸກການກະທຳຂອງພວກເຂົາຈະຖືກຕັດສິນ, ດັ່ງນັ້ນພວກເຂົາຈຶ່ງລະມັດລະວັງໃນການປະພຶດຂອງຕົນເອງ.</BulletPoint>
                <BulletPoint><strong>ເຮັດຄວາມດີ:</strong> ຄວາມຫວັງໃນການໄດ້ຮັບລາງວັນໃນສະຫວັນເຮັດໃຫ້ພວກເຂົາພະຍາຍາມເຮັດຄວາມດີແລະຊ່ວຍເຫຼືອຄົນອື່ນ.</BulletPoint>
                <BulletPoint><strong>ຫຼີກລ້ຽງຄວາມຊົ່ວ:</strong> ຄວາມຢ້ານກົວຕໍ່ການລົງໂທດໃນນາລົກເຮັດໃຫ້ພວກເຂົາຫຼີກເວັ້ນສິ່ງທີ່ບໍ່ດີ.</BulletPoint>
            </ul>
             <p className='mt-4'>ໂດຍລວມແລ້ວ, ຄວາມເຊື່ອໃນຊີວິດຫຼັງຄວາມຕາຍບໍ່ພຽງແຕ່ເປັນເລື່ອງຂອງການສິ້ນສຸດເທົ່ານັ້ນ, ແຕ່ເປັນຫຼັກການທີ່ໃຫ້ຄວາມໝາຍແລະຈຸດປະສົງແກ່ການມີຊີວິດຂອງຊາວມຸດສະລິມ.</p>
        </ContentSection>
      </main>
    </div>
  );
}
