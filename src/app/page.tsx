'use client';

import React, { useState, useMemo } from 'react';
import HomeView from '@/components/views/HomeView';
import FundamentalsView from '@/components/views/FundamentalsView';
import FaithView from '@/components/views/FaithView';
import PracticeView from '@/components/views/PracticeView';
import QuranView from '@/components/views/QuranView';
import HadithView from '@/components/views/HadithView';
import WhatIsIslamView from '@/components/views/WhatIsIslamView';
import BeliefInAllahView from '@/components/views/BeliefInAllahView';
import SurahAlFatihahView from '@/components/views/SurahAlFatihahView';
import SurahAlBaqarahView from '@/components/views/SurahAlBaqarahView';
import AiGuideView from '@/components/views/AiGuideView';
import BottomNav from '@/components/shared/BottomNav';
import { Toaster } from '@/components/ui/toaster';

export type View =
  | 'home'
  | 'quran'
  | 'hadith'
  | 'fundamentals'
  | 'faith'
  | 'practice'
  | 'ai-guide'
  | 'islam-what-is-it'
  | 'belief-in-allah'
  | 'al-fatihah'
  | 'al-baqarah';

export default function App() {
  const [history, setHistory] = useState<View[]>(['home']);
  const currentView = history[history.length - 1];

  const navigateTo = (view: View) => {
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
        return <PracticeView goBack={goBack} />;
      case 'quran':
        return <QuranView navigateTo={navigateTo} goBack={goBack} />;
      case 'hadith':
        return <HadithView goBack={goBack} />;
      case 'ai-guide':
        return <AiGuideView goBack={goBack} />;
      case 'islam-what-is-it':
        return <WhatIsIslamView goBack={goBack} />;
      case 'belief-in-allah':
        return <BeliefInAllahView goBack={goBack} />;
      case 'al-fatihah':
        return <SurahAlFatihahView goBack={goBack} />;
      case 'al-baqarah':
        return <SurahAlBaqarahView goBack={goBack} />;
      default:
        return <HomeView navigateTo={navigateTo} />;
    }
  };
  
  const activeTab = useMemo(() => {
    if (['fundamentals', 'faith', 'practice', 'ai-guide', 'islam-what-is-it', 'belief-in-allah'].includes(currentView)) {
      return 'home';
    }
    if (['al-fatihah', 'al-baqarah'].includes(currentView)) {
      return 'quran';
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
