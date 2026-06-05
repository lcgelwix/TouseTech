'use client';

import { useState } from 'react';
import styles from '../app/page.module.css';

export default function ConsultForm() {
  const [form, setForm] = useState({ name: '', business: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.consultSuccess}>
        <div className={styles.successIcon}>✓</div>
        <h3>Request Received!</h3>
        <p>We&apos;ll be in touch within 24 hours to discuss your project.</p>
      </div>
    );
  }

  return (
    <form className={styles.consultForm} onSubmit={handleSubmit}>
      <div className={styles.formRow}>
        <div className={styles.formField}>
          <label htmlFor="cname">Your Name *</label>
          <input id="cname" name="name" type="text" placeholder="John Smith" required value={form.name} onChange={handleChange} />
        </div>
        <div className={styles.formField}>
          <label htmlFor="cbusiness">Business Name</label>
          <input id="cbusiness" name="business" type="text" placeholder="Your Business" value={form.business} onChange={handleChange} />
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.formField}>
          <label htmlFor="cemail">Email Address *</label>
          <input id="cemail" name="email" type="email" placeholder="you@email.com" required value={form.email} onChange={handleChange} />
        </div>
        <div className={styles.formField}>
          <label htmlFor="cphone">Phone Number</label>
          <input id="cphone" name="phone" type="tel" placeholder="(000) 000-0000" value={form.phone} onChange={handleChange} />
        </div>
      </div>
      <div className={styles.formField}>
        <label htmlFor="cmessage">Tell Us About Your Business</label>
        <textarea id="cmessage" name="message" rows={4} placeholder="What does your business do? What are your website goals?" value={form.message} onChange={handleChange} />
      </div>
      {status === 'error' && <p className={styles.formError}>Something went wrong. Please try again.</p>}
      <button type="submit" className={styles.consultBtn} disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Request My Free Consultation →'}
      </button>
    </form>
  );
}
