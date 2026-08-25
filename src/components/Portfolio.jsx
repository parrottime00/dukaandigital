import React, { useState } from 'react';
import { portfolioItems, portfolioCategories } from '../data/portfolioData';
import PortfolioModal from './PortfolioModal';
import { Eye } from 'lucide-react';

export default function Portfolio({ onOpenMockupModal }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredItems = activeCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.catSlug === activeCategory);

  return (
    <section id="work" style={{ background: 'var(--paper-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div className="wrap">
        <div className="sec-head">
          <span className="tag">Portfolio Showcase</span>
          <h2>A few shops we've taken online</h2>
          <p>Sample builds showing the range we cover — retail, food, salon, repair, and healthcare.</p>
        </div>

        <div className="portfolio-filter-tabs">
          {portfolioCategories.map(cat => (
            <button
              key={cat.slug}
              className={`port-filter-btn ${activeCategory === cat.slug ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.slug)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="work-grid">
          {filteredItems.map(item => (
            <div 
              key={item.id} 
              className="work-card"
              onClick={() => setSelectedProject(item)}
            >
              <div className={`stamp ${item.status === 'progress' ? 'progress' : ''}`}>
                {item.status === 'progress' ? <>In<br />Progress</> : <>Live<br />Since 2025</>}
              </div>

              <div className="mock-frame">
                <div className="mock-browser">
                  <div className="mock-bar">
                    <span></span><span></span><span></span>
                  </div>
                  <div className="mock-body">
                    <div className="mock-hero" style={{ background: item.colorGradient }}></div>
                    <div className="mock-row">
                      <div></div><div></div><div></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="work-info">
                <span className="cat">{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <div className="work-tags">
                  {item.highlights.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="work-tag">✓ {tag}</span>
                  ))}
                </div>

                <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13.5px', fontWeight: 600, color: 'var(--rust)' }}>
                  <Eye size={15} /> Click to view details & features
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <PortfolioModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
        onOpenMockupModal={onOpenMockupModal}
      />
    </section>
  );
}
