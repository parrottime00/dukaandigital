import React from 'react';
import { processSteps } from '../data/servicesData';

export default function Process() {
  return (
    <section id="process">
      <div className="wrap">
        <div className="sec-head">
          <span className="tag">How It Works</span>
          <h2>From first discovery call to live website on Google</h2>
          <p>Five simple steps, always in this exact order — nothing gets built before we understand your shop.</p>
        </div>

        <div className="process-list">
          {processSteps.map((item) => (
            <div key={item.step} className="process-item">
              <div className="step-num">{item.step}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
