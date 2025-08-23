'use client';

import React, { useState, useMemo } from 'react';
import HomeView from '@/components/views/HomeView';
import FundamentalsView from '@/components/views/FundamentalsView';
import FaithView from '@/components/views/FaithView';
import PracticeView from '@/components/views/PracticeView';
import QuranView from '@/components/views/QuranView';
import HadithView from '@/components/views/HadithView';
import ArticlesView from '@/components/views/ArticlesView';
import HalalFoodView from '@/components/views/HalalFoodView';
import WhatIsIslamView from '@/components/views/WhatIsIslamView';
import WhoIsAMuslimView from '@/components/views/WhoIsAMuslimView';
import BeliefInAllahView from '@/components/views/BeliefInAllahView';
import BeliefInAngelsView from '@/components/views/BeliefInAngelsView';
import BeliefInBooksView from '@/components/views/BeliefInBooksView';
import ProphetView from '@/components/views/ProphetView';
import SurahAlFatihahView from '@/components/views/SurahAlFatihahView';
import SurahAlBaqarahView from '@/components/views/SurahAlBaqarahView';
import BottomNav from '@/components/shared/BottomNav';
import { Toaster } from '@/components/ui/toaster';
import BeliefInProphetsView from '@/components/views/BeliefInProphetsView';
import BeliefInLastDayView from '@/components/views/BeliefInLastDayView';
import BeliefInDestinyView from '@/components/views/BeliefInDestinyView';
import ShahadaView from '@/components/views/ShahadaView';
import SalatView from '@/components/views/SalatView';
import ZakatView from '@/components/views/ZakatView';
import SawmView from '@/components/views/SawmView';
import HajjView from '@/components/views/HajjView';
import FortyHadithView from '@/components/views/FortyHadithView';
import HadithDetailView from '@/components/views/HadithDetailView';

export type View =
  | 'home'
  | 'quran'
  | 'hadith'
  | 'fundamentals'
  | 'faith'
  | 'practice'
  | 'articles'
  | 'halal-food'
  | 'islam-what-is-it'
  | 'belief-in-allah'
  | 'belief-in-angels'
  | 'belief-in-books'
  | 'belief-in-prophets'
  | 'belief-in-last-day'
  | 'belief-in-destiny'
  | 'prophet-who-is-he'
  | 'who-is-a-muslim'
  | 'al-fatihah'
  | 'al-baqarah'
  | 'shahada'
  | 'salat'
  | 'zakat'
  | 'sawm'
  | 'hajj'
  | 'forty-hadith'
  | 'hadith-detail';

export type HadithDetail = {
  id: string;
  title: string;
  arabic: string;
  lao: string;
  explanation: string[];
};

export default function App() {
  const [history, setHistory] = useState<View[]>(['home']);
  const [selectedHadith, setSelectedHadith] = useState<HadithDetail | null>(null);
  const currentView = history[history.length - 1];

  const navigateTo = (view: View, hadith?: HadithDetail) => {
    if (hadith) {
      setSelectedHadith(hadith);
    }
    setHistory(prev => [...prev, view]);
  };

  const goBack = () => {
    if (history.length > 1) {
      setHistory(prev => prev.slice(0, -1));
    }
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomeView navigateTo={navigateTo} />;
      case 'fundamentals':
        return <FundamentalsView navigateTo={navigateTo} goBack={goBack} />;
      case 'faith':
        return <FaithView navigateTo={navigateTo} goBack={goBack} />;
      case 'practice':
        return <PracticeView navigateTo={navigateTo} goBack={goBack} />;
      case 'quran':
        return <QuranView navigateTo={navigateTo} goBack={goBack} />;
      case 'hadith':
        return <HadithView goBack={goBack} navigateTo={navigateTo} />;
      case 'articles':
        return <ArticlesView navigateTo={navigateTo} goBack={goBack} />;
      case 'halal-food':
        return <HalalFoodView goBack={goBack} />;
      case 'islam-what-is-it':
        return <WhatIsIslamView goBack={goBack} />;
      case 'who-is-a-muslim':
        return <WhoIsAMuslimView goBack={goBack} />;
      case 'belief-in-allah':
        return <BeliefInAllahView goBack={goBack} />;
      case 'belief-in-angels':
        return <BeliefInAngelsView goBack={goBack} />;
      case 'belief-in-books':
        return <BeliefInBooksView goBack={goBack} />;
      case 'belief-in-prophets':
        return <BeliefInProphetsView goBack={goBack} />;
      case 'belief-in-last-day':
        return <BeliefInLastDayView goBack={goBack} />;
      case 'belief-in-destiny':
        return <BeliefInDestinyView goBack={goBack} />;
      case 'prophet-who-is-he':
        return <ProphetView goBack={goBack} />;
      case 'al-fatihah':
        return <SurahAlFatihahView goBack={goBack} />;
      case 'al-baqarah':
        return <SurahAlBaqarahView goBack={goBack} />;
      case 'shahada':
        return <ShahadaView goBack={goBack} />;
      case 'salat':
        return <SalatView goBack={goBack} />;
      case 'zakat':
        return <ZakatView goBack={goBack} />;
      case 'sawm':
        return <SawmView goBack={goBack} />;
      case 'hajj':
        return <HajjView goBack={goBack} />;
      case 'forty-hadith':
        return <FortyHadithView goBack={goBack} navigateTo={navigateTo} />;
      case 'hadith-detail':
        return <HadithDetailView goBack={goBack} hadith={selectedHadith} />;
      default:
        return <HomeView navigateTo={navigateTo} />;
    }
  };
  
  const activeTab = useMemo(() => {
    if (['fundamentals', 'faith', 'practice', 'articles', 'halal-food', 'islam-what-is-it', 'belief-in-allah', 'prophet-who-is-he', 'who-is-a-muslim', 'belief-in-angels', 'belief-in-books', 'belief-in-prophets', 'belief-in-last-day', 'belief-in-destiny', 'shahada', 'salat', 'zakat', 'sawm', 'hajj'].includes(currentView)) {
      return 'home';
    }
    if (['al-fatihah', 'al-baqarah'].includes(currentView)) {
      return 'quran';
    }
    if (['forty-hadith', 'hadith-detail'].includes(currentView)) {
      return 'hadith';
    }
    return currentView;
  }, [currentView]);


  return (
    <div className="flex flex-col h-screen bg-background text-foreground font-body">
      <div className="flex-grow overflow-y-auto pb-[70px]">
        {renderView()}
      </div>
      <BottomNav activeTab={activeTab} navigateTo={navigateTo} />
      <Toaster />
    </div>
  );
}
