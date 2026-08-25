import React from 'react';
import { ArrowRight, ShieldCheck, Clock, ShoppingBag, Search, CheckCircle2, MessageSquare } from 'lucide-react';

export default function Hero({ onOpenMockupModal }) {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="hero">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">Websites · Hosting · SEO — for local shops</span>
          <h1>
            Every shop deserves a website as good as its <em>storefront.</em>
          </h1>
          <p className="lead">
            We are AI & ML developers with 5+ years building digital products — now we design, build, host, and grow high-converting websites for local vendors, so you can win local customers online without hiring an expensive tech team.
          </p>
          <div className="hero-ctas">
            <button onClick={() => scrollTo('work')} className="btn btn-primary">
              See our work <ArrowRight size={18} />
            </button>
            <button onClick={onOpenMockupModal} className="btn btn-ghost">
              Get a free mockup
            </button>
          </div>

          <div className="hero-trust-badges">
            <span className="hero-trust-item">
              <ShieldCheck size={16} color="var(--rust)" /> No upfront commitment
            </span>
            <span className="hero-trust-item">
              <Clock size={16} color="var(--rust)" /> Live in 7-10 days
            </span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hv-browser">
            <div className="hv-bar">
              <div className="hv-dots">
                <span></span><span></span><span></span>
              </div>
              <div className="hv-address-bar">
                <span>🔒 https://surat-grocery.dukaandigital.site</span>
              </div>
            </div>

            <div className="hv-body">
              {/* STORE NAV HEADER */}
              <div className="hv-store-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ShoppingBag size={18} color="var(--gold)" />
                  <strong className="hv-store-name">Surat Super Market</strong>
                </div>
                <span className="hv-status-badge">🟢 Open • 30m Delivery</span>
              </div>

              {/* STORE BANNER */}
              <div className="hv-store-banner">
                <span className="hv-banner-sub">
                  Fresh Provisions & Grocery
                </span>
                <h4 className="hv-banner-title">
                  Order Fresh Daily Items on WhatsApp
                </h4>
                <div className="hv-search-pill">
                  <Search size={13} color="var(--ink-soft)" /> Search 1,500+ items (Atta, Oil, Milk)...
                </div>
              </div>

              {/* PRODUCT CARDS */}
              <div className="hv-product-grid">
                <div className="hv-product-card">
                  <div className="hv-product-emoji emoji-wheat">🌾</div>
                  <div style={{ flex: 1 }}>
                    <div className="hv-product-title">Chakki Atta (10kg)</div>
                    <div className="mono hv-product-price">
                      ₹420 <s className="hv-product-oldprice">₹460</s>
                    </div>
                  </div>
                </div>

                <div className="hv-product-card">
                  <div className="hv-product-emoji emoji-milk">🥛</div>
                  <div style={{ flex: 1 }}>
                    <div className="hv-product-title">Fresh Milk (1L)</div>
                    <div className="mono hv-product-price">
                      ₹64 <span className="hv-fresh-badge">Fresh</span>
                    </div>
                  </div>
                </div>

                <div className="hv-product-card">
                  <div className="hv-product-emoji emoji-oil">🌻</div>
                  <div style={{ flex: 1 }}>
                    <div className="hv-product-title">Sunflower Oil (1L)</div>
                    <div className="mono hv-product-price">
                      ₹145 <s className="hv-product-oldprice">₹160</s>
                    </div>
                  </div>
                </div>
              </div>

              {/* WHATSAPP ORDER NOTIFICATION */}
              <div className="hv-whatsapp-toast">
                <CheckCircle2 size={15} color="#25D366" />
                <span>New WhatsApp Order from Ring Road (₹629)</span>
              </div>
            </div>
          </div>

          <div className="hv-badge b1">● Local SEO Ready</div>
          <div className="hv-badge b2">Live in 7-10 Days</div>
          <div className="hv-chat">
            <b>Hi 👋</b> do you have fresh items in stock today, and can I pick up on WhatsApp?
          </div>
        </div>
      </div>

      <div className="marquee-wrap">
        <div className="marquee">
          <span>GROCERY MART</span>
          <span>SALON & SPA</span>
          <span>RESTAURANTS</span>
          <span>TAILORING</span>
          <span>ELECTRONICS & REPAIR</span>
          <span>PHARMACY</span>
          <span>BAKERY & CAFE</span>
          <span>HARDWARE</span>
          <span>BOUTIQUE</span>
          <span>DENTAL & CLINIC</span>
          <span>GROCERY MART</span>
          <span>SALON & SPA</span>
          <span>RESTAURANTS</span>
          <span>TAILORING</span>
          <span>ELECTRONICS & REPAIR</span>
          <span>PHARMACY</span>
          <span>BAKERY & CAFE</span>
          <span>HARDWARE</span>
          <span>BOUTIQUE</span>
          <span>DENTAL & CLINIC</span>
        </div>
      </div>
    </header>
  );
}
