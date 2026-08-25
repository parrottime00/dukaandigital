import React, { useState } from 'react';
import { faqData } from '../data/faqData';
import { ChevronDown } from 'lucide-react';

export default function Faq() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section id="faq">
      <div className="wrap">
        <div className="sec-head" style={{ textAlign: 'center', margin: '0 auto 48px' }}>
          <span className="tag">Got Questions?</span>
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about getting your local shop online with Dukaan Digital.</p>
        </div>

        <div className="faq-grid">
          {faqData.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <div className="faq-question" onClick={() => toggleFaq(idx)}>
                  <span>{item.question}</span>
                  <ChevronDown
                    size={20}
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                      color: 'var(--rust)'
                    }}
                  />
                </div>
                {isOpen && (
                  <div className="faq-answer">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
