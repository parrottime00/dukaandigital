import React, { useState } from 'react';
import { X, Send, CheckCircle2, Store } from 'lucide-react';

export default function MockupModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    shopName: '',
    shopCategory: 'Grocery & Provisions',
    phone: '',
    city: '',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      shopName: '',
      shopCategory: 'Grocery & Provisions',
      phone: '',
      city: '',
      notes: ''
    });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Store color="var(--rust)" size={24} />
            <div>
              <h3 style={{ fontSize: '20px', margin: 0 }}>Request Free Shop Mockup</h3>
              <p style={{ fontSize: '13px', color: 'var(--ink-soft)' }}>Zero obligation • Ready in 24 hours</p>
            </div>
          </div>
          <button className="modal-close" onClick={onClose}>
            <X size={22} />
          </button>
        </div>

        <div className="modal-body">
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '24px 12px' }}>
              <div style={{ width: '64px', height: '64px', background: '#ECFDF5', color: '#059669', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <CheckCircle2 size={38} />
              </div>
              <h3 style={{ fontSize: '22px', marginBottom: '8px' }}>Request Received!</h3>
              <p style={{ color: 'var(--ink-soft)', fontSize: '15px', marginBottom: '24px' }}>
                Thank you <strong>{formData.shopName || 'Shop Owner'}</strong>! Our developer team is working on your free website mockup preview. We will reach out on WhatsApp (<strong>{formData.phone || 'your number'}</strong>) shortly.
              </p>
              <button onClick={handleReset} className="btn btn-primary">
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Shop / Business Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Laxmi Super Store"
                  className="form-input"
                  value={formData.shopName}
                  onChange={(e) => setFormData({ ...formData, shopName: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Business Type *</label>
                <select
                  className="form-select"
                  value={formData.shopCategory}
                  onChange={(e) => setFormData({ ...formData, shopCategory: e.target.value })}
                >
                  <option value="Grocery & Provisions">Grocery & Provisions</option>
                  <option value="Restaurant & Food">Restaurant & Cafe</option>
                  <option value="Salon & Beauty Spa">Salon & Spa</option>
                  <option value="Electronics & Mobile Repair">Electronics & Repair</option>
                  <option value="Bakery & Confectionery">Bakery & Sweets</option>
                  <option value="Clothing & Boutique">Boutique & Tailoring</option>
                  <option value="Dental & Clinic">Clinic & Pharmacy</option>
                  <option value="Other Business">Other Local Business</option>
                </select>
              </div>

              <div className="form-row-2col">
                <div className="form-group">
                  <label>WhatsApp Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    className="form-input"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>City / Location</label>
                  <input
                    type="text"
                    placeholder="e.g. Ahmedabad, Surat, Mumbai"
                    className="form-input"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Any specific requirements or products?</label>
                <textarea
                  rows="3"
                  placeholder="e.g. We need WhatsApp catalog link and Google Maps location setup..."
                  className="form-textarea"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Generate My Free Mockup Preview <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
