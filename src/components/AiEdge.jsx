import React from 'react';
import { ArrowRight, Bot, Zap, Search, Repeat } from 'lucide-react';

export default function AiEdge({ onOpenMockupModal }) {
  return (
    <section>
      <div className="wrap">
        <div className="edge">
          <div>
            <span className="tag" style={{ color: 'var(--gold)', fontFamily: 'IBM Plex Mono', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Why Choose Us
            </span>
            <h2>Built by AI & ML developers, not just graphic designers</h2>
            <p>
              Five years building AI and ML products means your site doesn't stop at "looks pretty" — we bring intelligent production tools into every build so your store sells automated 24/7.
            </p>
            <button 
              onClick={onOpenMockupModal} 
              className="btn btn-gold" 
              style={{ marginTop: '28px' }}
            >
              Get Started Now <ArrowRight size={18} />
            </button>
          </div>

          <ul className="edge-list">
            <li>
              <Bot size={22} />
              <div>
                <strong>AI Chat Assistants:</strong> Answer product availability, store timing, and pricing questions instantly on WhatsApp/Web.
              </div>
            </li>
            <li>
              <Search size={22} />
              <div>
                <strong>Smart Catalog Search:</strong> Understands typos and local names (e.g. "atta" to "Wheat Flour") automatically.
              </div>
            </li>
            <li>
              <Zap size={22} />
              <div>
                <strong>Data-Driven Local SEO:</strong> Search intent keyword ranking backed by competitor location analysis.
              </div>
            </li>
            <li>
              <Repeat size={22} />
              <div>
                <strong>Automated Re-Ordering:</strong> Reminder triggers for regular customers to reorder groceries, salon slots, or prescriptions.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
