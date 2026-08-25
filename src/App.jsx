import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LiveShopPreview from './components/LiveShopPreview';
import StatsLedger from './components/StatsLedger';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import AiEdge from './components/AiEdge';
import Founders from './components/Founders';
import Pricing from './components/Pricing';
import QuoteCalculator from './components/QuoteCalculator';
import Faq from './components/Faq';
import MockupModal from './components/MockupModal';
import AiChatWidget from './components/AiChatWidget';
import Footer from './components/Footer';

export default function App() {
  const [isMockupModalOpen, setIsMockupModalOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('dd-theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('dd-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleOpenModal = () => {
    setIsMockupModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsMockupModalOpen(false);
  };

  return (
    <div className="app-container">
      <Navbar 
        onOpenMockupModal={handleOpenModal} 
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      
      <main>
        <Hero onOpenMockupModal={handleOpenModal} />
        <StatsLedger />
        <LiveShopPreview />
        <Services />
        <Portfolio onOpenMockupModal={handleOpenModal} />
        <Process />
        <AiEdge onOpenMockupModal={handleOpenModal} />
        <Founders onOpenMockupModal={handleOpenModal} />
        <QuoteCalculator onOpenMockupModal={handleOpenModal} />
        <Pricing onOpenMockupModal={handleOpenModal} />
        <Faq />
      </main>

      <Footer onOpenMockupModal={handleOpenModal} />

      <MockupModal 
        isOpen={isMockupModalOpen} 
        onClose={handleCloseModal} 
      />

      <AiChatWidget onOpenMockupModal={handleOpenModal} />
    </div>
  );
}
