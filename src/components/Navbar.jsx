import React, { useState } from 'react';
import { Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';

export default function Navbar({ onOpenMockupModal, theme = 'light', onToggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav>
        <div className="nav-inner">
          <a href="#" className="logo">
            <span className="logo-mark">DD</span>
            <span>Dukaan Digital</span>
          </a>

          <div className="nav-links">
            <button onClick={() => scrollTo('work')}>Work</button>
            <button onClick={() => scrollTo('services')}>Services</button>
            <button onClick={() => scrollTo('founders')}>Founders</button>
            <button onClick={() => scrollTo('process')}>Process</button>
            <button onClick={() => scrollTo('calculator')}>Quote Calc</button>
            <button onClick={() => scrollTo('pricing')}>Pricing</button>
            <button onClick={() => scrollTo('faq')}>FAQ</button>
            
            {/* Theme Toggle Button */}
            <button 
              onClick={onToggleTheme} 
              className="theme-toggle-btn"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <Sun size={18} className="theme-icon sun" />
              ) : (
                <Moon size={18} className="theme-icon moon" />
              )}
            </button>

            <button onClick={onOpenMockupModal} className="nav-cta">
              Book a free demo
            </button>
          </div>

          <div className="mobile-nav-actions">
            <button 
              onClick={onToggleTheme} 
              className="theme-toggle-btn mobile-theme-btn"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
            </button>

            <button 
              className="mobile-menu-btn" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <button onClick={() => scrollTo('work')}>Work Showcase</button>
          <button onClick={() => scrollTo('services')}>Services & Features</button>
          <button onClick={() => scrollTo('founders')}>Founders & Team</button>
          <button onClick={() => scrollTo('process')}>How It Works</button>
          <button onClick={() => scrollTo('calculator')}>Custom Quote</button>
          <button onClick={() => scrollTo('pricing')}>Pricing Plans</button>
          <button onClick={() => scrollTo('faq')}>Common FAQs</button>
          
          <div className="mobile-theme-row">
            <span>Appearance</span>
            <button onClick={onToggleTheme} className="theme-toggle-pill">
              {theme === 'dark' ? (
                <><Sun size={15} /> Light Mode</>
              ) : (
                <><Moon size={15} /> Dark Mode</>
              )}
            </button>
          </div>

          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenMockupModal(); }} 
            className="btn btn-primary"
            style={{ marginTop: '12px' }}
          >
            Get a free mockup <ArrowRight size={16} />
          </button>
        </div>
      )}
    </>
  );
}
