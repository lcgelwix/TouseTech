'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import styles from './page.module.css';

const MAX_WORDS = 500;

function countWords(text: string) {
  return text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', comments: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const wordCount = countWords(form.comments);
  const overLimit = wordCount > MAX_WORDS;

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (overLimit) return;
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      <Navbar />
      <main className={styles.page} style={{ background: '#08080f' }}>
        <div className={styles.container}>

          <div className={styles.header}>
            <h1 className={styles.heading}>Contact Us</h1>
            <p className={styles.subheading}>
              Reach out directly or leave a question below and we&apos;ll get back to you.
            </p>
          </div>

          {/* Contact info cards */}
          <div className={styles.infoGrid}>
            <a href="mailto:lcgelwix@gmail.com" className={styles.infoCard}>
              <div className={styles.infoIcon} style={{ background: '#2563eb', color: '#fff' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className={styles.infoLabel}>Email</p>
                <p className={styles.infoValue}>lcgelwix@gmail.com</p>
              </div>
            </a>

            <a href="tel:7346357055" className={styles.infoCard}>
              <div className={styles.infoIcon} style={{ background: '#2563eb', color: '#fff' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className={styles.infoLabel}>Phone</p>
                <p className={styles.infoValue}>(734) 635-7055</p>
              </div>
            </a>
          </div>

          {/* Questions / Comments form */}
          <div className={styles.formCard}>
            <h2 className={styles.formHeading}>Questions / Comments</h2>

            {status === 'success' ? (
              <div className={styles.successBox}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>Message sent! We&apos;ll be in touch soon.</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="name">Your Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Name"
                      required
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="email">Your Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <div className={styles.labelRow}>
                    <label htmlFor="comments">Questions / Comments</label>
                    <span className={`${styles.wordCount} ${overLimit ? styles.overLimit : ''}`}>
                      {wordCount} / {MAX_WORDS} words
                    </span>
                  </div>
                  <textarea
                    id="comments"
                    name="comments"
                    rows={5}
                    placeholder="Type your question or comment here..."
                    required
                    value={form.comments}
                    onChange={handleChange}
                  />
                  {overLimit && (
                    <p className={styles.errorMsg}>Please keep your message under 500 words.</p>
                  )}
                </div>

                {status === 'error' && (
                  <p className={styles.errorMsg}>Something went wrong. Please try again.</p>
                )}

                <button
                  type="submit"
                  className={styles.submit}
                  disabled={status === 'sending' || overLimit}
                  style={{ background: '#2563eb', color: '#ffffff' }}
                >
                  {status === 'sending' ? 'Sending...' : 'Submit'}
                </button>
              </form>
            )}
          </div>

          {/* Back to homepage */}
          <Link href="/" className={styles.backButton} style={{ color: '#ffffff' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>

        </div>
      </main>
    </>
  );
}
