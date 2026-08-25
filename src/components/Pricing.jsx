import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

export default function Pricing({ onOpenMockupModal }) {
  return (
    <section id="pricing">
      <div className="wrap">
        <div className="sec-head">
          <span className="tag">Clear Pricing</span>
          <h2>Simple packages, zero hidden costs</h2>
          <p>Every plan includes hosting & security. Custom projects are priced transparently based on client requirements.</p>
        </div>

        <div className="price-grid">
          {/* Starter */}
          <div className="price-card">
            <h3>Starter Dukaan</h3>
            <div className="price mono">₹5,000</div>
            <p style={{ fontSize: '13.5px', color: 'var(--ink-soft)', marginBottom: '18px' }}>
              Ideal for single storefronts starting their online presence.
            </p>
            <ul>
              <li>Single-page mobile website</li>
              <li>High-speed hosting included</li>
              <li>Basic Local SEO setup</li>
              <li>Direct WhatsApp order/call link</li>
              <li>Google Maps pin integration</li>
            </ul>
            <button onClick={onOpenMockupModal} className="btn btn-ghost" style={{ width: '100%', justifyContent: 'center' }}>
              Choose Starter
            </button>
          </div>

          {/* Growth */}
          <div className="price-card featured">
            <h3>Growth Dukaan</h3>
            <div className="price mono">₹15,000</div>
            <p style={{ fontSize: '13.5px', color: 'var(--ink-soft)', marginBottom: '18px' }}>
              Most popular for active retail, dining, and service shops.
            </p>
            <ul>
              <li>Multi-page custom website</li>
              <li>Hosting & security care included</li>
              <li>Google Business Profile & SEO</li>
              <li>Online booking or QR menu catalog</li>
              <li>Monthly content check-in & updates</li>
              <li>Sub-1s mobile speed guarantee</li>
            </ul>
            <button onClick={onOpenMockupModal} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Choose Growth Plan <ArrowRight size={16} />
            </button>
          </div>

          {/* Custom */}
          <div className="price-card">
            <h3>Custom AI Dukaan</h3>
            <div className="price mono">Custom Quote</div>
            <p style={{ fontSize: '13.5px', color: 'var(--ink-soft)', marginBottom: '18px' }}>
              For growing businesses needing AI automation & custom systems.
            </p>
            <ul>
              <li>Everything in Growth Plan</li>
              <li>AI Chatbot / WhatsApp order automation</li>
              <li>Custom inventory or booking sync</li>
              <li>Multi-location Google Maps SEO</li>
              <li>Priority 24/7 WhatsApp developer support</li>
            </ul>
            <button onClick={onOpenMockupModal} className="btn btn-ghost" style={{ width: '100%', justifyContent: 'center' }}>
              Talk to Developers
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
