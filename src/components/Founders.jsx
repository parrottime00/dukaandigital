import React from 'react';
import { Award, Code2, Sparkles, Linkedin, Mail, CheckCircle2 } from 'lucide-react';

const founders = [
  {
    name: "Mr. Ghanshyam Parmar",
    role: "Founder & Lead AI Engineer",
    image: "/ghanshyam-parmar.jpg",
    badge: "Founder",
    bio: "Specializes in AI product architecture, local SEO strategy, and high-performance web applications tailored for local vendors.",
    expertise: ["AI Architecture", "Local SEO Strategy", "Product Engineering"],
    social: {
      email: "ghanshyam@dukaandigital.example"
    }
  },
  {
    name: "Mr. Digvijay Yadav",
    role: "Co-Founder & Systems Lead",
    image: "/digvijay-yadav.jpg",
    badge: "Co-Founder",
    bio: "Expert in machine learning automation, managed hosting infrastructure, and seamless WhatsApp ordering workflows.",
    expertise: ["ML Automation", "Managed Hosting", "WhatsApp Workflows"],
    social: {
      email: "digvijay@dukaandigital.example"
    }
  }
];

export default function Founders({ onOpenMockupModal }) {
  return (
    <section id="founders" style={{ background: 'var(--paper-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div className="wrap">
        <div className="sec-head" style={{ textAlign: 'center', margin: '0 auto 48px' }}>
          <span className="tag">Leadership & Team</span>
          <h2>Meet the Founders Behind Dukaan Digital</h2>
          <p>We bring 5+ years of production AI & ML development expertise to empower local shop vendors with world-class digital storefronts.</p>
        </div>

        <div className="founders-grid">
          {founders.map((f, idx) => (
            <div key={idx} className="founder-card">
              <div className="founder-img-wrapper">
                <img 
                  src={f.image} 
                  alt={f.name} 
                  className="founder-img"
                />
                <span className="founder-role-badge">
                  {f.badge}
                </span>
              </div>

              <div className="founder-info">
                <span className="founder-title-tag">{f.role}</span>
                <h3 className="founder-name">{f.name}</h3>
                <p className="founder-bio">{f.bio}</p>

                <div className="founder-skills">
                  {f.expertise.map((skill, sIdx) => (
                    <span key={sIdx} className="founder-skill-pill">
                      <CheckCircle2 size={13} color="var(--rust)" /> {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* TRUST BANNER */}
        <div className="founders-trust-banner">
          <div className="founders-trust-left">
            <Award size={28} color="var(--gold)" style={{ flexShrink: 0 }} />
            <div>
              <strong className="founders-trust-title">Direct Developer Access for Every Shop Owner</strong>
              <p className="founders-trust-desc">
                When you partner with Dukaan Digital, you work directly with Ghanshyam and Digvijay — no middle agency account managers.
              </p>
            </div>
          </div>
          <button onClick={onOpenMockupModal} className="btn btn-primary btn-sm" style={{ whiteSpace: 'nowrap' }}>
            Talk to the Founders
          </button>
        </div>
      </div>
    </section>
  );
}
