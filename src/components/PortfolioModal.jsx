import React from 'react';
import { X, ExternalLink, CheckCircle, Star, Quote } from 'lucide-react';

export default function PortfolioModal({ project, onClose, onOpenMockupModal }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span className="cat" style={{ fontFamily: 'IBM Plex Mono', fontSize: '11px', color: 'var(--rust)', textTransform: 'uppercase' }}>
              {project.category}
            </span>
            <h3 style={{ fontSize: '22px', margin: '2px 0 0' }}>{project.title}</h3>
          </div>
          <button className="modal-close" onClick={onClose}>
            <X size={22} />
          </button>
        </div>

        <div className="modal-body">
          <div 
            style={{ 
              height: '140px', 
              borderRadius: '12px', 
              background: project.colorGradient, 
              padding: '20px', 
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              marginBottom: '20px'
            }}
          >
            <span style={{ fontSize: '12px', background: 'rgba(0,0,0,0.3)', width: 'fit-content', padding: '3px 10px', borderRadius: '999px' }}>
              {project.liveSince}
            </span>
          </div>

          <p style={{ fontSize: '15.5px', color: 'var(--ink-soft)', marginBottom: '20px' }}>
            {project.description}
          </p>

          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '14px', color: 'var(--navy)', marginBottom: '10px' }}>Key Delivered Features:</h4>
            <div className="port-features-grid">
              {project.highlights.map((h, i) => (
                <div key={i} className="port-feature-pill">
                  <CheckCircle size={15} color="var(--rust)" /> {h}
                </div>
              ))}
            </div>
          </div>

          {project.clientReview && (
            <div className="port-review-card">
              <div style={{ display: 'flex', gap: '4px', marginBottom: '6px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="var(--gold)" color="var(--gold)" />
                ))}
              </div>
              <p className="port-review-text">
                "{project.clientReview}"
              </p>
            </div>
          )}

          <div style={{ display: 'flex', gap: '12px' }}>
            <button 
              onClick={() => { onClose(); onOpenMockupModal(); }} 
              className="btn btn-primary"
              style={{ flex: 1, justifyContent: 'center' }}
            >
              Get a Similar Site For Your Shop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
