import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, RefreshCw } from 'lucide-react';

const featureOptions = [
  { id: 'multipage', label: 'Multi-page Layout (Home, Products, About, Contact)', price: 3000, default: true },
  { id: 'whatsapp', label: 'Instant WhatsApp Order / Inquiry Button', price: 1500, default: true },
  { id: 'seo', label: 'Google Business Profile & Local Maps SEO', price: 3500, default: true },
  { id: 'booking', label: 'Appointment / Slot Booking System', price: 4000, default: false },
  { id: 'aichat', label: 'AI Chat Assistant for Product Inquiries', price: 5000, default: false },
  { id: 'hosting', label: '1-Year High Speed Managed Hosting & SSL', price: 2000, default: true }
];

export default function QuoteCalculator({ onOpenMockupModal }) {
  const [selected, setSelected] = useState(() => {
    const init = {};
    featureOptions.forEach(opt => {
      init[opt.id] = opt.default;
    });
    return init;
  });

  const toggleOption = (id) => {
    setSelected(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const basePrice = 4000;
  const calculatedTotal = Object.keys(selected).reduce((acc, id) => {
    if (selected[id]) {
      const opt = featureOptions.find(o => o.id === id);
      return acc + (opt ? opt.price : 0);
    }
    return acc;
  }, basePrice);

  return (
    <section id="calculator" style={{ background: 'var(--paper-2)', borderTop: '1px solid var(--line)' }}>
      <div className="wrap">
        <div className="sec-head">
          <span className="tag">Interactive Tool</span>
          <h2>Instant Package Price Calculator</h2>
          <p>Customize features for your shop and get an immediate transparent cost estimation.</p>
        </div>

        <div className="calc-box">
          <div className="calc-grid">
            <div>
              <h3 style={{ fontSize: '20px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Calculator size={20} color="var(--rust)" /> Select Desired Features:
              </h3>

              {featureOptions.map(opt => (
                <div
                  key={opt.id}
                  className={`calc-option ${selected[opt.id] ? 'selected' : ''}`}
                  onClick={() => toggleOption(opt.id)}
                >
                  <div className="calc-opt-left">
                    <div className={`calc-checkbox ${selected[opt.id] ? 'checked' : ''}`}>
                      {selected[opt.id] && <Check size={14} />}
                    </div>
                    <span className="calc-opt-label">
                      {opt.label}
                    </span>
                  </div>
                  <span className="mono calc-opt-price">
                    +₹{opt.price.toLocaleString('en-IN')}
                  </span>
                </div>
              ))}
            </div>

            <div className="calc-summary">
              <div>
                <span className="calc-sum-eyebrow">
                  ESTIMATED INVESTMENT
                </span>
                <div className="mono calc-sum-total">
                  ₹{calculatedTotal.toLocaleString('en-IN')}
                </div>
                <p className="calc-sum-desc">
                  Includes design, mobile responsive setup, domain connection guidance & first launch configuration.
                </p>

                <div className="calc-sum-details">
                  <strong>Selected Summary:</strong>
                  <ul className="calc-sum-list">
                    {Object.keys(selected).filter(id => selected[id]).map(id => {
                      const opt = featureOptions.find(o => o.id === id);
                      return <li key={id}>{opt.label.split('(')[0]}</li>;
                    })}
                  </ul>
                </div>
              </div>

              <button 
                onClick={onOpenMockupModal} 
                className="btn btn-gold" 
                style={{ width: '100%', justifyContent: 'center', marginTop: '24px' }}
              >
                Lock In This Quote <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
