import { Bot, BookOpen, HandHeart, HeartHandshake, HelpCircle, History, ListChecks, LucideIcon, ScrollText, Sparkles, TrendingUp, Users, Utensils, Hourglass } from 'lucide-react';
import React from 'react';

export const homeCardData = [
    { title: "ພື້ນຖານ", emoji: "📖", id: "fundamentals" },
    { title: "ຫຼັກຄວາມເຊື່ອ", emoji: "✨", id: "faith" },
    { title: "ຫຼັກປະຕິບັດ", emoji: "🤲", id: "practice" },
    { title: "ບົດຄວາມ", emoji: "📝", id: "articles" },
    
];

interface FundamentalCard {
    id: "islam-what-is-it" | "belief-in-allah" | "prophet-who-is-he" | "who-is-a-muslim";
    title: string;
    subtitle: string;
    icon: React.ReactElement;
}

export const fundamentalsCardData: FundamentalCard[] = [
    { id: "islam-what-is-it", title: "ອິສລາມແມ່ນຫຍັງ?", subtitle: "ອ່ານເພີມຕື່ມ", icon: React.createElement(HandHeart) },
    { id: "belief-in-allah", title: "ອັລລໍຮ໌ແມ່ນໃຜ?", subtitle: "ອ່ານເພີມຕື່ມ", icon: React.createElement(Sparkles) },
    { id: "prophet-who-is-he", title: "ນະບີແມ່ນໃຜ?", subtitle: "ອ່ານເພີມຕື່ມ", icon: React.createElement(TrendingUp) },
    { id: "who-is-a-muslim", title: "ໃຜແມ່ນມຸດສະລິມ?", subtitle: "ອ່ານເພີມຕື່ມ", icon: React.createElement(Users) },
];

export const faithCardData = [
    { number: "1.", title: "ເຊື່ອໃນອັລລໍຮ໌", emoji: "✨", id: "belief-in-allah" },
    { number: "2.", title: "ເຊື່ອໃນທູດສະຫວັນ", emoji: "👼", id: "belief-in-angels" },
    { number: "3.", title: "ເຊື່ອໃນຄໍາພີ", emoji: "📖", id: "belief-in-books" },
    { number: "4.", title: "ເຊື່ອໃນນະບີ", emoji: "👥", id: "belief-in-prophets" },
    { number: "5.", title: "ເຊື່ອໃນວັນກິຍາມະ", emoji: "⚖️", id: "belief-in-last-day" },
    { number: "6.", title: "ເຊື່ອໃນກະດັນ", emoji: "🎯", id: "belief-in-destiny" },
];

export const practiceCardData = [
    { title: "1. ການເປັນພະຍານ", emoji: "☝️", id: "shahada" },
    { title: "2. ການລະໝາດ", emoji: "🤲", id: "salat" },
    { title: "3. ການຈ່າຍຊະກາດ", emoji: "💰", id: "zakat" },
    { title: "4. ການຖືອົດ", emoji: "🌙", id: "sawm" },
    { title: "5. ການສະແຫວງບຸນຮັຈ", emoji: "🕋", id: "hajj" },
];

export const quranCardData = [
    { number: "1", title: "Al-Fatihah", verses: "7 Verse", arabicTitle: "الفَاتِحَة", id: "al-fatihah" },
    { number: "2", title: "Al-Baqarah", verses: "286 Verse", arabicTitle: "البَقَرَة", id: "al-baqarah" },
    { number: "3", title: "Aali Imran", verses: "200 Verse", arabicTitle: "آل عِمْرَان", id: "aal-imran" },
    { number: "41", title: "Fussilat", verses: "54 Verse", arabicTitle: "فُصِّلَتْ", id: "fussilat" },
    { number: "78", title: "An-Naba", verses: "40 Verse", arabicTitle: "النَّبَأ", id: "an-naba" },
    { number: "4", title: "An-Nisa", verses: "176 Verse", arabicTitle: "النِّسَاء" },
    { number: "5", title: "Al-Ma'idah", verses: "120 Verse", arabicTitle: "المَائِدَة" },
    { number: "6", title: "Al-An'am", verses: "165 Verse", arabicTitle: "الْأَنْعَام" },
    { number: "7", title: "Al-A'raf", verses: "206 Verse", arabicTitle: "الْأَعْرَاف" },
];

export const hadithCardData = [
    { title: "40 ຫະດີຊ ນະວະວີ", id: "forty-hadith" },
    { title: "Hadith of Jibril", id: "hadith-jibril" },
    { title: "Hadith on Intentions", id: "hadith-intentions" },
];

interface ArticleCard {
    id: "halal-food" | "afterlife" | "god-exists";
    title: string;
    subtitle: string;
    icon: React.ReactElement;
}

export const articlesCardData: ArticleCard[] = [
    { id: "halal-food", title: "ອາຫານຮາລານ (Halal): ຫຼັກການແລະຄວາມໝາຍ", subtitle: "ອ່ານເພີມຕື່ມ", icon: React.createElement(Utensils) },
    { id: "afterlife", title: "ຊີວິດຫຼັງຄວາມຕາຍໃນອິດສະລາມ", subtitle: "ອ່ານເພີມຕື່ມ", icon: React.createElement(Hourglass) },
    { id: "god-exists", title: "ພະເຈົ້າມີຈິງບໍ?: ທັດສະນະຂອງອິດສະລາມ", subtitle: "ອ່ານເພີມຕື່ມ", icon: React.createElement(HelpCircle) },
];

export const fortyHadithData = [
    {
        id: "hadith-1",
        title: "ຫະດີຊ 1: ການກະທໍາແມ່ນຂຶ້ນກັບເຈດຕະນາ",
        arabic: "عَنْ أَمِيرِ الْمُؤْمِنِينَ أَبِي حَفْصٍ عُمَرَ بْنِ الْخَطَّابِ رَضِيَ اللهُ عَنْهُ قَالَ: سَمِعْتُ رَسُولَ اللَّهِ صلى الله عليه وسلم يَقُولُ: \" إنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إلَى اللَّهِ وَرَسُولِهِ فَهِجْرَتُهُ إلَى اللَّهِ وَرَسُولِهِ، وَمَنْ كَانَتْ هِجْرَتُهُ لِدُنْيَا يُصِيبُهَا أَوْ امْرَأَةٍ يَنْكِحُهَا فَهِجْرَتُهُ إلَى مَا هَاجَرَ إلَيْهِ \"",
        lao: "ຈາກ ອະມີຣ ແຫ່ງຜູ້ສັດທາ, ອະບູ ຮັຟສ໌ ອຸມັຣ ອິບນຸລ ຄັຕຕອບ (ຂໍອັລລໍຮ໌ຊົງພໍໃຈທ່ານ) ກ່າວວ່າ: ຂ້າພະເຈົ້າໄດ້ຍິນສາດສະດາ (ﷺ) ກ່າວວ່າ: \"ແທ້ຈິງການກະທໍາທັງຫຼາຍແມ່ນຂຶ້ນກັບເຈດຕະນາ, ແລະແທ້ຈິງສໍາລັບທຸກຄົນແມ່ນສິ່ງທີ່ລາວຕັ້ງໃຈໄວ້. ດັ່ງນັ້ນ, ຜູ້ໃດທີ່ການອົບພະຍົບຂອງລາວແມ່ນເພື່ອອັລລໍຮ໌ແລະສາດສະດາຂອງພຣະອົງ, ການອົບພະຍົບຂອງລາວກໍຄືເພື່ອອັລລໍຮ໌ແລະສາດສະດາຂອງພຣະອົງ. ແລະຜູ້ໃດທີ່ການອົບພະຍົບຂອງລາວແມ່ນເພື່ອໂລກນີ້ທີ່ລາວຈະໄດ້ຮັບ, ຫຼືເພື່ອແມ່ຍິງທີ່ລາວຈະແຕ່ງງານ, ການອົບພະຍົບຂອງລາວກໍຄືເພື່ອສິ່ງທີ່ລາວໄດ້ອົບພະຍົບໄປຫານັ້ນ.\"",
        explanation: [
            "ຫະດີຊນີ້ແມ່ນໜຶ່ງໃນພື້ນຖານທີ່ສຳຄັນທີ່ສຸດຂອງອິດສະລາມ. ມັນສອນວ່າຄຸນຄ່າຂອງການກະທຳບໍ່ໄດ້ວັດແທກຈາກການກະທຳພາຍນອກເທົ່ານັ້ນ, ແຕ່ຂຶ້ນກັບເຈດຕະນາທີ່ຢູ່ໃນໃຈ.",
            "ເຈດຕະນາທີ່ບໍລິສຸດ (ອິຄລາສ) ເພື່ອອັລລໍຮ໌ (Allah) ເປັນເງື່ອນໄຂສຳຄັນໃນການຮັບຮອງການກະທຳທີ່ດີ.",
            "ການກະທຳທຸກຢ່າງ, ບໍ່ວ່າຈະເປັນການລະໝາດ, ການຖືສິນອົດ, ຫຼືການຊ່ວຍເຫຼືອຄົນອື່ນ, ຕ້ອງມີເຈດຕະນາທີ່ຖືກຕ້ອງເພື່ອໃຫ້ໄດ້ຮັບລາງວັນຈາກອັລລໍຮ໌.",
            "ຫະດີຊນີ້ຍັງຊີ້ໃຫ້ເຫັນເຖິງຄວາມສຳຄັນຂອງການອົບພະຍົບ (ຮິຈຣໍ) ໃນປະຫວັດສາດອິດສະລາມ, โดยแยกแยะระหว่างการอพยพเพื่อศาสนาและการอพยพเพื่อผลประโยชน์ทางโลก."
        ]
    },
    { id: "hadith-2", title: "ຫະດີຊ 2: ອິສລາມ, ອີມານ, ອິஹซານ", arabic: "Placeholder", lao: "Placeholder", explanation: ["Placeholder"] },
    { id: "hadith-3", title: "ຫະດີຊ 3: ອິດສະລາມຕັ້ງຢູ່ເທິງ 5 ປະການ", arabic: "Placeholder", lao: "Placeholder", explanation: ["Placeholder"] },
    { id: "hadith-4", title: "ຫະດີຊ 4: ການສ້າງຂອງມະນຸດ", arabic: "Placeholder", lao: "Placeholder", explanation: ["Placeholder"] },
    { id: "hadith-5", title: "ຫະດີຊ 5: ການປະດິດສ້າງໃນສາສະໜາ", arabic: "Placeholder", lao: "Placeholder", explanation: ["Placeholder"] },
    { id: "hadith-6", title: "ຫະດີຊ 6: ສິ່ງທີ່ອະນຸຍາດ ແລະ ສິ່ງທີ່ຕ້ອງຫ້າມ", arabic: "Placeholder", lao: "Placeholder", explanation: ["Placeholder"] },
    { id: "hadith-7", title: "ຫະດີຊ 7: ສາສະໜາຄືການຕັກເຕືອນ", arabic: "Placeholder", lao: "Placeholder", explanation: ["Placeholder"] },
    { id: "hadith-8", title: "ຫະດີຊ 8: ຄວາມສັກສິດຂອງມຸດສະລິມ", arabic: "Placeholder", lao: "Placeholder", explanation: ["Placeholder"] },
    { id: "hadith-9", title: "ຫະດີຊ 9: ການຫຼີກລ້ຽງສິ່ງທີ່ບໍ່ຈຳເປັນ", arabic: "Placeholder", lao: "Placeholder", explanation: ["Placeholder"] },
    { id: "hadith-10", title: "ຫະດີຊ 10: ສິ່ງທີ່ດີງາມ", arabic: "Placeholder", lao: "Placeholder", explanation: ["Placeholder"] },
    { id: "hadith-11", title: "ຫະດີຊ 11: ການຫຼີກລ້ຽງສິ່ງທີ່ສົງໄສ", arabic: "Placeholder", lao: "Placeholder", explanation: ["Placeholder"] },
    { id: "hadith-12", title: "ຫະດີຊ 12: ການປະຖິ້ມສິ່ງທີ່ບໍ່ກ່ຽວຂ້ອງ", arabic: "Placeholder", lao: "Placeholder", explanation: ["Placeholder"] },
    { id: "hadith-13", title: "ຫະດີຊ 13: ການຮັກຄົນອື່ນເໝືອນຮັກຕົນເອງ", arabic: "Placeholder", lao: "Placeholder", explanation: ["Placeholder"] },
    { id: "hadith-14", title: "ຫະດີຊ 14: ການຫ້າມເລືອດຂອງມຸດສະລິມ", arabic: "Placeholder", lao: "Placeholder", explanation: ["Placeholder"] },
    { id: "hadith-15", title: "ຫະດີຊ 15: ການເວົ້າດີ", arabic: "Placeholder", lao: "Placeholder", explanation: ["Placeholder"] },
    { id: "hadith-16", title: "ຫະດີຊ 16: ການຫ້າມຄວາມໂກດ", arabic: "Placeholder", lao: "Placeholder", explanation: ["Placeholder"] },
    { id: "hadith-17", title: "ຫະດີຊ 17: ຄວາມເມດຕາໃນທຸກສິ່ງ", arabic: "Placeholder", lao: "Placeholder", explanation: ["Placeholder"] },
    { id: "hadith-18", title: "ຫະດີຊ 18: ການຢຳເກງອັລລໍຮ໌", arabic: "Placeholder", lao: "Placeholder", explanation: ["Placeholder"] },
    { id: "hadith-19", title: "ຫະດີຊ 19: ການຊ່ວຍເຫຼືອຂອງອັລລໍຮ໌", arabic: "Placeholder", lao: "Placeholder", explanation: ["Placeholder"] },
    { id: "hadith-20", title: "ຫະດີຊ 20: ຄວາມລະອາຍ", arabic: "Placeholder", lao: "Placeholder", explanation: ["Placeholder"] },
    { id: "hadith-21", title: "ຫະດີຊ 21: ການຢືນຢັດໃນອິດສະລາມ", arabic: "Placeholder", lao: "Placeholder", explanation: ["Placeholder"] },
    { id: "hadith-22", title: "ຫະດີຊ 22: ການເຂົ້າສະຫວັນ", arabic: "Placeholder", lao: "Placeholder", explanation: ["Placeholder"] },
    { id: "hadith-23", title: "ຫະດີຊ 23: ຄວາມສະອາດແມ່ນສ່ວນໜຶ່ງຂອງການສັດທາ", arabic: "Placeholder", lao: "Placeholder", explanation: ["Placeholder"] },
    { id: "hadith-24", title: "ຫະດີຊ 24: ການຫ້າມການອະທຳ", arabic: "Placeholder", lao: "Placeholder", explanation: ["Placeholder"] },
    { id: "hadith-25", title: "ຫະດີຊ 25: ການໃຫ້ທານ", arabic: "Placeholder", lao: "Placeholder", explanation: ["Placeholder"] },
    { id: "hadith-26", title: "ຫະດີຊ 26: ທຸກການກະທຳດີຄືການໃຫ້ທານ", arabic: "Placeholder", lao: "Placeholder", explanation: ["Placeholder"] },
    { id: "hadith-27", title: "ຫະດີຊ 27: ຄວາມດີແລະຄວາມຊົ່ວ", arabic: "Placeholder", lao: "Placeholder", explanation: ["Placeholder"] },
    { id: "hadith-28", title: "ຫະດີຊ 28: ການເຊື່ອຟັງ", arabic: "Placeholder", lao: "Placeholder", explanation: ["Placeholder"] },
    { id: "hadith-29", title: "ຫະດີຊ 29: ປະຕູສູ່ສະຫວັນ", arabic: "Placeholder", lao: "Placeholder", explanation: ["Placeholder"] },
    { id: "hadith-30", title: "ຫະດີຊ 30: ຂອບເຂດຂອງອັລລໍຮ໌", arabic: "Placeholder", lao: "Placeholder", explanation: ["Placeholder"] },
    { id: "hadith-31", title: "ຫະດີຊ 31: ການລະເລີຍໂລກ", arabic: "Placeholder", lao: "Placeholder", explanation: ["Placeholder"] },
    { id: "hadith-32", title: "ຫະດີຊ 32: ຢ່າທຳຮ້າຍກັນ", arabic: "Placeholder", lao: "Placeholder", explanation: ["Placeholder"] },
    { id: "hadith-33", title: "ຫະດີຊ 33: ຫຼັກຖານ", arabic: "Placeholder", lao: "Placeholder", explanation: ["Placeholder"] },
    { id: "hadith-34", title: "ຫະດີຊ 34: ການປ່ຽນແປງສິ່ງທີ່ບໍ່ດີ", arabic: "Placeholder", lao: "Placeholder", explanation: ["Placeholder"] },
    { id: "hadith-35", title: "ຫະດີຊ 35: ຄວາມເປັນອ້າຍນ້ອງໃນອິດສະລາມ", arabic: "Placeholder", lao: "Placeholder", explanation: ["Placeholder"] },
    { id: "hadith-36", title: "ຫະດີຊ 36: ການຊ່ວຍເຫຼືອມຸດສະລິມ", arabic: "Placeholder", lao: "Placeholder", explanation: ["Placeholder"] },
    { id: "hadith-37", title: "ຫະດີຊ 37: ຄວາມດີຂອງອັລລໍຮ໌", arabic: "Placeholder", lao: "Placeholder", explanation: ["Placeholder"] },
    { id: "hadith-38", title: "ຫະດີຊ 38: ການເຂົ້າໃກ້ອັລລໍຮ໌", arabic: "Placeholder", lao: "Placeholder", explanation: ["Placeholder"] },
    { id: "hadith-39", title: "ຫະດີຊ 39: ການອະໄພ", arabic: "Placeholder", lao: "Placeholder", explanation: ["Placeholder"] },
    { id: "hadith-40", title: "ຫະດີຊ 40: ການເປັນຄົນແປກໜ້າ", arabic: "Placeholder", lao: "Placeholder", explanation: ["Placeholder"] }
];
