'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import styles from './page.module.css';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in-view');
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ───────────────────────────────────── */}
        <section id="home" className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={styles.heroInner}>

            <div className={styles.heroLeft} data-animate>
              <span className={styles.heroTag}>✦ Modern Digital Solutions</span>
              <h1 className={styles.heroHeadline}>
                Modern Websites.<br />
                <span className={styles.heroAccent}>Real Results.</span>
              </h1>
              <p className={styles.heroSubtext}>
                We create modern, high-performing websites that help businesses grow online and stand out from competitors.
              </p>
              <div className={styles.heroBtns}>
                <Link href="/contact" className={styles.btnPrimary}>Get Started</Link>
                <a href="#work" className={styles.btnSecondary}>View Our Work</a>
              </div>
            </div>

            <div className={styles.heroRight} data-animate>
              <div className={styles.mockupWrap}>
                <div className={styles.laptop}>
                  <div className={styles.laptopBar}>
                    <span className={styles.dot} style={{ background: '#ff5f57' }} />
                    <span className={styles.dot} style={{ background: '#febc2e' }} />
                    <span className={styles.dot} style={{ background: '#28c840' }} />
                    <div className={styles.addressBar} />
                  </div>
                  <div className={styles.laptopScreen}>
                    <div className={styles.screenNav} />
                    <div className={styles.screenHero}>
                      <div className={styles.screenLine} style={{ width: '65%', height: 9 }} />
                      <div className={styles.screenLine} style={{ width: '45%', height: 6, opacity: 0.5 }} />
                      <div className={styles.screenLineBlue} />
                    </div>
                    <div className={styles.screenCards}>
                      <div className={styles.screenCard} />
                      <div className={styles.screenCard} />
                      <div className={styles.screenCard} />
                    </div>
                  </div>
                </div>

                <div className={styles.phone}>
                  <div className={styles.phoneNotch} />
                  <div className={styles.phoneContent}>
                    <div className={styles.phoneNav} />
                    <div className={styles.phoneHero} />
                    <div className={styles.phoneLine} />
                    <div className={styles.phoneLine} style={{ width: '55%' }} />
                    <div className={styles.phoneBtn} />
                  </div>
                </div>

                <div className={`${styles.floatCard} ${styles.floatCard1}`}>
                  <div className={styles.floatIcon} style={{ background: 'rgba(34,197,94,0.15)', color: '#22c55e' }}>↑</div>
                  <div>
                    <div className={styles.floatLabel}>Conversion Rate</div>
                    <div className={styles.floatValue}>+147%</div>
                  </div>
                </div>
                <div className={`${styles.floatCard} ${styles.floatCard2}`}>
                  <div className={styles.floatIcon} style={{ background: 'rgba(37,99,235,0.2)', color: '#60a5fa' }}>⚡</div>
                  <div>
                    <div className={styles.floatLabel}>Page Speed</div>
                    <div className={styles.floatValue}>98 / 100</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── SERVICES ───────────────────────────────── */}
        <section id="services" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader} data-animate>
              <p className={styles.eyebrow}>What We Do</p>
              <h2 className={styles.sectionTitle}>Services Built for Growth</h2>
              <p className={styles.sectionSub}>Helping businesses modernize and grow online through clean design and digital solutions.</p>
            </div>
            <div className={styles.servicesGrid}>
              {services.map((s, i) => (
                <div key={i} className={styles.serviceCard} data-animate style={{ transitionDelay: `${i * 0.07}s` }}>
                  <div className={styles.serviceIcon}>{s.icon}</div>
                  <h3 className={styles.serviceTitle}>{s.title}</h3>
                  <p className={styles.serviceDesc}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY TOUSETECH ──────────────────────────── */}
        <section className={`${styles.section} ${styles.whySection}`}>
          <div className={styles.container}>
            <div className={styles.sectionHeader} data-animate>
              <p className={styles.eyebrow}>The Difference</p>
              <h2 className={styles.sectionTitle}>Why TouseTech</h2>
            </div>
            <div className={styles.whyGrid}>
              {features.map((f, i) => (
                <div key={i} className={styles.whyCard} data-animate style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className={styles.whyIconWrap}>{f.icon}</div>
                  <h3 className={styles.whyTitle}>{f.title}</h3>
                  <p className={styles.whyDesc}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RECENT WORK ────────────────────────────── */}
        <section id="work" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader} data-animate>
              <p className={styles.eyebrow}>Portfolio</p>
              <h2 className={styles.sectionTitle}>Recent Projects</h2>
            </div>
            <div className={styles.workGrid}>
              {projects.map((p, i) => (
                <div key={i} className={styles.workCard} data-animate style={{ transitionDelay: `${i * 0.12}s` }}>
                  <div className={styles.workPreview} style={{ background: p.bg }}>
                    <div className={styles.workBar}>
                      <span className={styles.wDot} />
                      <span className={styles.wDot} />
                      <span className={styles.wDot} />
                      <div className={styles.workAddr} />
                    </div>
                    <div className={styles.workScreen}>
                      <div className={styles.workScreenNav} />
                      <div className={styles.workScreenHero} style={{ background: `linear-gradient(135deg, ${p.accent}20, ${p.accent}06)`, borderBottom: `1px solid ${p.accent}28` }}>
                        <div className={styles.workLine} style={{ width: '55%', height: 7 }} />
                        <div className={styles.workLine} style={{ width: '38%', height: 5, opacity: 0.45 }} />
                        <div className={styles.workLine} style={{ width: '65%', height: 5, opacity: 0.25 }} />
                        <div className={styles.workCta} style={{ background: p.accent }} />
                      </div>
                      <div className={styles.workScreenGrid}>
                        <div className={styles.workMiniCard} />
                        <div className={styles.workMiniCard} />
                        <div className={styles.workMiniCard} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.workInfo}>
                    <span className={styles.workTag} style={{ color: p.accent, borderColor: `${p.accent}44`, background: `${p.accent}12` }}>{p.tag}</span>
                    <h3 className={styles.workTitle}>{p.title}</h3>
                    <p className={styles.workDesc}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ──────────────────────────────── */}
        <section id="contact" className={styles.ctaSection}>
          <div className={styles.ctaGlow} />
          <div className={styles.ctaInner} data-animate>
            <p className={styles.eyebrow}>Let's Work Together</p>
            <h2 className={styles.ctaTitle}>Ready To Grow Your<br />Business Online?</h2>
            <p className={styles.ctaSub}>Let's build a modern website that works for your business.</p>
            <Link href="/contact" className={styles.btnPrimary} style={{ display: 'inline-flex' }}>Contact Us →</Link>
          </div>
        </section>

        {/* ── FOOTER ─────────────────────────────────── */}
        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            <div className={styles.footerLeft}>
              <span className={styles.footerBrand}>TouseTech</span>
              <p className={styles.footerTagline}>Modern Websites. Real Results.</p>
              <p className={styles.footerCopy}>© {new Date().getFullYear()} TouseTech. All rights reserved.</p>
            </div>
            <div className={styles.footerRight}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
                </svg>
                Instagram
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 105.56 6.29V9.14a8.17 8.17 0 004.77 1.51V7.22a4.85 4.85 0 01-1-.53z" />
                </svg>
                TikTok
              </a>
              <a href="mailto:lcgelwix@gmail.com" className={styles.socialLink}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </a>
            </div>
          </div>
        </footer>

      </main>
    </>
  );
}

/* ── DATA ────────────────────────────────────────── */

const services = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="14" rx="2"/><path strokeLinecap="round" d="M8 21h8M12 17v4"/></svg>,
    title: 'Website Design',
    desc: 'Modern, responsive websites tailored to your business and optimized for all devices.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><polyline points="16 18 22 12 16 6" strokeLinecap="round" strokeLinejoin="round"/><polyline points="8 6 2 12 8 18" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: 'Website Development',
    desc: 'Fast, secure, and professionally built websites designed for performance.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
    title: 'Website Optimization',
    desc: 'Improve speed, user experience, and functionality to keep customers engaged.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
    title: 'Branding & Design',
    desc: 'Clean visuals and branding that help your business stand out online.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><polygon points="23 7 16 12 23 17 23 7" strokeLinecap="round" strokeLinejoin="round"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>,
    title: 'Content Creation',
    desc: 'Short-form content and digital media designed to increase engagement and visibility.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path strokeLinecap="round" strokeLinejoin="round" d="M3 18v-6a9 9 0 0118 0v6"/><path strokeLinecap="round" strokeLinejoin="round" d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/></svg>,
    title: 'Ongoing Support',
    desc: 'Website updates, maintenance, and support to keep everything running smoothly.',
  },
];

const features = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/></svg>,
    title: 'Modern Design',
    desc: 'Professional layouts built to impress customers and keep them on your site.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18" strokeLinecap="round" strokeWidth="2.5"/></svg>,
    title: 'Mobile Optimized',
    desc: 'Your website looks and works great on every screen size and device.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: 'Fast Performance',
    desc: 'Speed-focused websites built for smooth, frustration-free experiences.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>,
    title: 'Built To Convert',
    desc: 'Strategically designed to turn your visitors into paying customers.',
  },
];

const projects = [
  {
    title: 'Bella Vista Restaurant',
    tag: 'Restaurant',
    desc: 'Modern restaurant website with online menu, reservations, and photo gallery.',
    bg: '#0c0a08',
    accent: '#f97316',
  },
  {
    title: 'Iron Edge Gym',
    tag: 'Fitness',
    desc: 'High-energy gym landing page with membership plans and class schedules.',
    bg: '#080c08',
    accent: '#22c55e',
  },
  {
    title: 'Sharp Cuts Barber',
    tag: 'Booking',
    desc: 'Clean booking site with service menu, gallery, and online appointments.',
    bg: '#0a080f',
    accent: '#a855f7',
  },
];
