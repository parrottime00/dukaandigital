import React from 'react';
import { Layout, Server, Search, Sparkles, Check } from 'lucide-react';
import { servicesData } from '../data/servicesData';

const iconMap = {
  Layout: Layout,
  Server: Server,
  Search: Search,
  Sparkles: Sparkles
};

export default function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <div className="sec-head">
          <span className="tag">What We Do</span>
          <h2>Everything a local shop needs to sell & get found online</h2>
          <p>One team, one bill, no chasing three different freelancers or agencies.</p>
        </div>

        <div className="services-grid">
          {servicesData.map((s) => {
            const IconComp = iconMap[s.iconName] || Layout;
            return (
              <div key={s.id} className="service-card">
                <div className="service-icon">
                  <IconComp size={22} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>

                <ul className="service-points">
                  {s.points.map((pt, idx) => (
                    <li key={idx}>
                      <Check size={14} color="var(--rust)" /> {pt}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
