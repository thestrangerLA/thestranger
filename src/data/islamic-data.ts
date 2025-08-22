import { Bot, BookOpen, HandHeart, HeartHandshake, History, ListChecks, LucideIcon, ScrollText, Sparkles, TrendingUp, Users } from 'lucide-react';
import React from 'react';

export const homeCardData = [
    { title: "ພື້ນຖານ", emoji: "📖", id: "fundamentals" },
    { title: "ຫຼັກຄວາມເຊື່ອ", emoji: "✨", id: "faith" },
    { title: "ຫຼັກປະຕິບັດ", emoji: "🤲", id: "practice" },
    { title: "AI ແນະນຳ", emoji: "🤖", id: "ai-guide" },
];

interface FundamentalCard {
    id: "islam-what-is-it" | "allah-who-is-he" | "prophet-who-is-he" | "who-is-a-muslim";
    title: string;
    subtitle: string;
    icon: React.ReactElement;
}

export const fundamentalsCardData: FundamentalCard[] = [
    { id: "islam-what-is-it", title: "ອິສລາມແມ່ນຫຍັງ?", subtitle: "ອ່ານເພີມຕື່ມ", icon: React.createElement(HandHeart) },
    { id: "allah-who-is-he", title: "ອັລລໍຮ໌ແມ່ນໃຜ?", subtitle: "ອ່ານເພີມຕື່ມ", icon: React.createElement(Sparkles) },
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
    { title: "1. ການເປັນພະຍານ", emoji: "☝️" },
    { title: "2. ການລະໝາດ", emoji: "🤲" },
    { title: "3. ການຈ່າຍຊະກາດ", emoji: "💰" },
    { title: "4. ການຖືອົດ", emoji: "🌙" },
    { title: "5. ການສະແຫວງບຸນຮັຈ", emoji: "🕋" },
];

export const quranCardData = [
    { number: "1", title: "Al-Fatihah", verses: "7 Verse", arabicTitle: "الفَاتِحَة", id: "al-fatihah" },
    { number: "2", title: "Al-Baqarah", verses: "286 Verse", arabicTitle: "البَقَرَة", id: "al-baqarah" },
    { number: "3", title: "Aali Imran", verses: "200 Verse", arabicTitle: "آل عِمْرَان" },
    { number: "4", title: "An-Nisa", verses: "176 Verse", arabicTitle: "النِّسَاء" },
    { number: "5", title: "Al-Ma'idah", verses: "120 Verse", arabicTitle: "المَائِدَة" },
    { number: "6", title: "Al-An'am", verses: "165 Verse", arabicTitle: "الْأَنْعَام" },
    { number: "7", title: "Al-A'raf", verses: "206 Verse", arabicTitle: "الْأَعْرَاف" },
];

export const hadithCardData = [
    { title: "40 Hadith Qudsi" },
    { title: "Hadith of Jibril" },
    { title: "Hadith on Intentions" },
];
