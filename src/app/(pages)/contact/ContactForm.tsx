'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/config/site';
import styles from './page.module.css';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp Message
    const text = `*New Contact Form Submission*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Subject:* ${formData.subject}%0A*Message:* ${formData.message}`;
    
    // Redirect to WhatsApp
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Send us a message</h2>
      
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            className={styles.input} 
            value={formData.name}
            onChange={handleChange}
            required 
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email Address</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            className={styles.input} 
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="subject" className={styles.label}>Subject</label>
        <select 
          id="subject" 
          name="subject" 
          className={styles.input} 
          value={formData.subject}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select a topic...</option>
          <option value="Technical Support">Technical Support</option>
          <option value="Billing Inquiry">Billing Inquiry</option>
          <option value="Request Subscription">Request Subscription</option>
          <option value="Other">Other</option>
        </select>
      </div>
      
      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>Message</label>
        <textarea 
          id="message" 
          name="message" 
          rows={5} 
          className={styles.textarea} 
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      
      <button 
        type="submit" 
        className="btn" 
        style={{ width: '100%', backgroundColor: '#25D366', color: '#000', fontWeight: 800, padding: '1rem', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
      >
        Send Message
      </button>
    </form>
  );
}
