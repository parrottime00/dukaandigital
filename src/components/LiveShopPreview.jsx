import React, { useState } from 'react';
import { ShoppingBag, MessageSquare, MapPin, Calendar, Clock, Star, Search, CheckCircle2, Zap, Smartphone, ArrowRight, ShieldCheck, TrendingUp } from 'lucide-react';

const shopPresets = {
  grocery: {
    name: "Surat Super Grocery",
    tagline: "Fresh Vegetables, Provisions & Dairy Delivered in 30 Mins",
    category: "Grocery & Provisions",
    badge: "Open Now • Home Delivery",
    items: [
      { name: "Organic Basmati Rice (5kg)", price: "₹480", tag: "In Stock" },
      { name: "Fresh Farm Milk (1L)", price: "₹64", tag: "Fresh Daily" },
      { name: "Fortune Sunflower Oil (1L)", price: "₹145", tag: "Hot Seller" }
    ],
    ctaText: "Order via WhatsApp",
    actionMsg: "Opening WhatsApp with items pre-filled...",
    highlights: [
      "Instant WhatsApp Order pre-filled text",
      "Daily fresh rate & stock availability tag",
      "1-Click Google Maps Store Directions",
      "Sub-1 second load speed on 4G/5G"
    ],
    stats: {
      orders: "35+ Daily Orders",
      views: "1,800 Local Searches/mo",
      speed: "0.7s Mobile Load"
    },
    sampleWhatsappText: "Hi Surat Super Grocery! I want to order 5kg Basmati Rice and 1L Milk for home delivery."
  },
  restaurant: {
    name: "Urban Spice Rasoi",
    tagline: "Authentic North & South Indian Specialities",
    category: "Restaurant & Takeaway",
    badge: "Rating 4.9 ★ (340+ reviews)",
    items: [
      { name: "Special Paneer Butter Masala", price: "₹280", tag: "Bestseller" },
      { name: "Garlic Butter Naan (2 Pcs)", price: "₹90", tag: "Fresh Tandoor" },
      { name: "Dal Makhani Special Handi", price: "₹240", tag: "Chef Choice" }
    ],
    ctaText: "Reserve Table / Order Online",
    actionMsg: "Opening Instant Table Reservation form...",
    highlights: [
      "QR Code scan & digital photo menu",
      "Instant table booking form directly to owner",
      "Special discounts & combo deal banner",
      "Direct phone call button for takeaway"
    ],
    stats: {
      orders: "50+ Table Bookings/mo",
      views: "2,400 Menu Views",
      speed: "0.8s Fast Load"
    },
    sampleWhatsappText: "Hi Urban Spice Rasoi! Can I reserve a table for 4 people tonight at 8 PM?"
  },
  salon: {
    name: "Velvet Glow Salon",
    tagline: "Boutique Hair Styling, Facials & Spa Treatments",
    category: "Salon & Wellness",
    badge: "AC Salon • Ladies & Unisex",
    items: [
      { name: "Hydra-Glow Facial Therapy", price: "₹1,499", tag: "60 Mins" },
      { name: "Hair Spa & Scalp Massage", price: "₹899", tag: "Popular" },
      { name: "Keratin Smooth Hair Treatment", price: "₹2,999", tag: "Offer" }
    ],
    ctaText: "Book Appointment Slot",
    actionMsg: "Opening Online Calendar Booking...",
    highlights: [
      "Online appointment slot picker",
      "Transparent service pricing catalog",
      "Before/After client transformation gallery",
      "Automated appointment WhatsApp reminders"
    ],
    stats: {
      orders: "60+ Appointments/mo",
      views: "1,500 Local Views",
      speed: "0.6s Ultra Fast"
    },
    sampleWhatsappText: "Hi Velvet Glow Salon! I'd like to book a Hydra-Glow Facial appointment for Saturday at 3 PM."
  },
  electronics: {
    name: "TechCare Mobile & Laptop Repair",
    tagline: "Express 1-Hour Screen Repair & Original Accessories",
    category: "Electronics & Repair",
    badge: "90-Day Warranty On Repairs",
    items: [
      { name: "iPhone & Android Screen Replacement", price: "From ₹1,200", tag: "1 Hr Service" },
      { name: "Battery Health Check & Replacement", price: "From ₹800", tag: "Genuine Parts" },
      { name: "Fast Type-C Original Chargers", price: "₹450", tag: "In Stock" }
    ],
    ctaText: "Check Repair Status / Request Quote",
    actionMsg: "Opening Repair Tracker tool...",
    highlights: [
      "Live repair job status checker tool",
      "Searchable product & accessories stock list",
      "90-day warranty card digital verification",
      "Direct price estimate request modal"
    ],
    stats: {
      orders: "40+ Repair Queries/wk",
      views: "1,100 Local Searches",
      speed: "0.7s Fast Load"
    },
    sampleWhatsappText: "Hi TechCare! What is the estimated cost and time to replace an iPhone 13 screen?"
  }
};

export default function LiveShopPreview({ onOpenMockupModal }) {
  const [activeTab, setActiveTab] = useState('grocery');
  const [toastMsg, setToastMsg] = useState('');

  const current = shopPresets[activeTab];

  const handleAction = () => {
    setToastMsg(current.actionMsg);
    setTimeout(() => setToastMsg(''), 3500);
  };

  return (
    <div className="wrap">
      <div style={{ textTransform: 'uppercase', fontFamily: 'IBM Plex Mono', fontSize: '13px', color: 'var(--rust)', letterSpacing: '0.06em', marginBottom: '8px' }}>
        Interactive Live Simulator
      </div>
      <h2 style={{ fontSize: 'clamp(26px, 3.2vw, 36px)', marginBottom: '12px' }}>
        See what your shop's website & WhatsApp store will look like
      </h2>
      <p style={{ color: 'var(--ink-soft)', fontSize: '16.5px', maxWidth: '640px', marginBottom: '28px' }}>
        Select your shop category below to test interactive mobile controls, WhatsApp order generation, and merchant benefits in real-time.
      </p>

      <div className="simulator-card">
        {/* TOP TABS */}
        <div className="simulator-tabs">
          <button 
            className={`sim-tab-btn ${activeTab === 'grocery' ? 'active' : ''}`}
            onClick={() => setActiveTab('grocery')}
          >
            🛒 Grocery & Supermarket
          </button>
          <button 
            className={`sim-tab-btn ${activeTab === 'restaurant' ? 'active' : ''}`}
            onClick={() => setActiveTab('restaurant')}
          >
            🍕 Restaurant & Menu
          </button>
          <button 
            className={`sim-tab-btn ${activeTab === 'salon' ? 'active' : ''}`}
            onClick={() => setActiveTab('salon')}
          >
            ✂️ Salon & Booking
          </button>
          <button 
            className={`sim-tab-btn ${activeTab === 'electronics' ? 'active' : ''}`}
            onClick={() => setActiveTab('electronics')}
          >
            🔧 Repair & Electronics
          </button>
        </div>

        {/* 3-COLUMN SHOWCASE CONTAINER */}
        <div className="sim-layout-grid">

          {/* LEFT SIDE: FEATURE SPOTLIGHT & CAPABILITIES */}
          <div className="sim-side-panel left">
            <div className="sim-panel-badge">
              <Zap size={14} color="var(--gold)" /> Built-in Shop Capabilities
            </div>
            
            <h3 style={{ fontSize: '20px', color: 'var(--navy)', margin: '10px 0 6px' }}>
              Why this layout converts 3x more local buyers
            </h3>
            <p style={{ fontSize: '13.5px', color: 'var(--ink-soft)', marginBottom: '18px' }}>
              Designed specifically for local Indian vendors so customers order instantly without friction.
            </p>

            <div className="sim-feature-list">
              {current.highlights.map((item, idx) => (
                <div key={idx} className="sim-feature-item">
                  <CheckCircle2 size={16} color="var(--rust)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="sim-mobile-badge-box">
              <div className="sim-mobile-badge-title">
                <Smartphone size={14} color="var(--rust)" /> Mobile First Design
              </div>
              <p className="sim-mobile-badge-text">
                92% of local shop buyers search on smartphones. Our sites load under 1 second even on 4G networks.
              </p>
            </div>
          </div>

          {/* CENTER: INTERACTIVE PHONE PREVIEW */}
          <div className="sim-phone-frame">
            <div className="sim-phone-screen">
              <div className="sim-phone-bar">
                <span>{current.name}</span>
                <span className="sim-live-badge">LIVE DEMO</span>
              </div>

              <div className="sim-phone-content">
                <div className="sim-store-card">
                  <span className="sim-store-cat">
                    {current.category}
                  </span>
                  <h3 className="sim-store-title">{current.name}</h3>
                  <p className="sim-store-desc">{current.tagline}</p>
                  <div className="sim-store-rating">
                    <Star size={12} fill="var(--gold)" color="var(--gold)" /> {current.badge}
                  </div>
                </div>

                <div className="sim-catalog-heading">
                  Featured Catalog & Rates
                </div>

                <div className="sim-items-list">
                  {current.items.map((item, idx) => (
                    <div key={idx} className="sim-catalog-item">
                      <div>
                        <div className="sim-item-name">{item.name}</div>
                        <span className="sim-item-tag">
                          {item.tag}
                        </span>
                      </div>
                      <div className="sim-item-price mono">
                        {item.price}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="sim-cta-wrap">
                  <button 
                    onClick={handleAction}
                    className="sim-cta-btn"
                  >
                    <MessageSquare size={15} /> {current.ctaText}
                  </button>
                </div>

                {toastMsg && (
                  <div className="sim-toast-msg">
                    ✓ {toastMsg}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: MERCHANT BENEFITS & LIVE WHATSAPP PREVIEW */}
          <div className="sim-side-panel right">
            <div className="sim-panel-badge gold">
              <TrendingUp size={14} color="var(--navy)" /> Expected Shop Performance
            </div>

            <h3 style={{ fontSize: '20px', color: 'var(--navy)', margin: '10px 0 6px' }}>
              What happens when a customer clicks?
            </h3>

            {/* LIVE WHATSAPP MSG SIMULATION */}
            <div className="sim-wa-box">
              <div className="sim-wa-header">
                <MessageSquare size={13} color="#25D366" /> Instant WhatsApp Message Draft:
              </div>
              <div className="sim-wa-bubble">
                {current.sampleWhatsappText}
              </div>
            </div>

            {/* PERFORMANCE STATS */}
            <div className="sim-stats-grid">
              <div className="sim-stat-box">
                <div className="mono sim-stat-num rust">
                  {current.stats.orders}
                </div>
                <div className="sim-stat-lbl">Avg. Direct Leads</div>
              </div>
              <div className="sim-stat-box">
                <div className="mono sim-stat-num navy">
                  {current.stats.speed}
                </div>
                <div className="sim-stat-lbl">Google Speed Rank</div>
              </div>
            </div>

            <button 
              onClick={onOpenMockupModal} 
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', marginTop: '20px', fontSize: '14px' }}
            >
              Get This Setup For Your Shop <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
