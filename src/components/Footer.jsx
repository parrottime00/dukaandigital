import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer({ onOpenMockupModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <section id="contact" style={{ background: 'var(--paper-2)', padding: '64px 0' }}>
        <div className="wrap">
          <div className="cta-section">
            <h2>Ready to put your local shop online?</h2>
            <p>Tell us about your shop and we'll put together a free custom mockup preview — no upfront commitment needed.</p>
            <div className="cta-buttons">
              <button onClick={onOpenMockupModal} className="btn btn-primary">
                Get Your Free Mockup
              </button>
              <a href="mailto:hello@dukaandigital.example" className="btn btn-ghost">
                Email Our Dev Team
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap footer-inner">
          <div className="logo">
            <span className="logo-mark">DD</span>
            <span>Dukaan Digital</span>
          </div>

          <span className="footer-fine">
            © 2026 Dukaan Digital — Websites, Managed Hosting & Local SEO for Local Shops & Vendors.
          </span>

          <button 
            onClick={scrollToTop} 
            className="btn btn-ghost btn-sm"
            style={{ borderRadius: '50%', width: '40px', height: '40px', padding: 0, justifyContent: 'center' }}
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </footer>
    </>
  );
}
