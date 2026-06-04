'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import styles from './page.module.css';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in-view');
        });
      },
      { threshold: 0.1 }
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

        {/* ── EVERY WEBSITE INCLUDES ─────────────────── */}
        <section className={`${styles.section} ${styles.includesSection}`}>
          <div className={styles.container}>
            <div className={styles.sectionHeader} data-animate>
              <p className={styles.eyebrow}>Standard Across Every Project</p>
              <h2 className={styles.sectionTitle}>Every Website Includes</h2>
              <p className={styles.sectionSub}>Every project is built with performance, professionalism, and growth in mind.</p>
            </div>
            <div className={styles.includesGrid}>
              {includes.map((item, i) => (
                <div key={i} className={styles.includeCard} data-animate style={{ transitionDelay: `${i * 0.07}s` }}>
                  <div className={styles.includeCheck}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14">
                      <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className={styles.includeTitle}>{item.title}</h3>
                    <p className={styles.includeDesc}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW WE WORK ────────────────────────────── */}
        <section className={`${styles.section} ${styles.processSection}`}>
          <div className={styles.container}>
            <div className={styles.sectionHeader} data-animate>
              <p className={styles.eyebrow}>Our Process</p>
              <h2 className={styles.sectionTitle}>How We Work</h2>
            </div>
            <div className={styles.processSteps}>
              {steps.map((step, i) => (
                <div key={i} className={styles.processStepWrap}>
                  <div className={styles.processStep} data-animate style={{ transitionDelay: `${i * 0.15}s` }}>
                    <div className={styles.processNum}>{i + 1}</div>
                    <h3 className={styles.processTitle}>{step.title}</h3>
                    <p className={styles.processDesc}>{step.desc}</p>
                  </div>
                  {i < steps.length - 1 && <div className={styles.processConnector} />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY BUSINESSES CHOOSE TOUSETECH ───────── */}
        <section className={`${styles.section} ${styles.whySection}`}>
          <div className={styles.container}>
            <div className={styles.sectionHeader} data-animate>
              <p className={styles.eyebrow}>The Difference</p>
              <h2 className={styles.sectionTitle}>Why Businesses Choose TouseTech</h2>
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

        {/* ── RECENT PROJECTS ────────────────────────── */}
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
                      <span className={styles.wDot} /><span className={styles.wDot} /><span className={styles.wDot} />
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

        {/* ── PRICING ────────────────────────────────── */}
        <section className={`${styles.section} ${styles.pricingSection}`}>
          <div className={styles.container}>
            <div className={styles.sectionHeader} data-animate>
              <p className={styles.eyebrow}>Simple & Transparent</p>
              <h2 className={styles.sectionTitle}>Website Packages</h2>
              <p className={styles.sectionSub}>Choose the package that fits your business. Every package includes a professional, custom-built website.</p>
            </div>
            <div className={styles.pricingGrid}>
              {pricing.map((plan, i) => (
                <div
                  key={i}
                  className={`${styles.pricingCard} ${plan.popular ? styles.popularCard : ''}`}
                  data-animate
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  {plan.popular && <div className={styles.popularBadge}>Most Popular</div>}
                  <div className={styles.pricingTop}>
                    <h3 className={styles.pricingName}>{plan.name}</h3>
                    <p className={styles.pricingTagline}>{plan.tagline}</p>
                  </div>
                  <ul className={styles.pricingList}>
                    {plan.features.map((f, j) => (
                      <li key={j} className={styles.pricingItem}>
                        <span className={styles.pricingCheck}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className={plan.popular ? styles.btnPrimary : styles.btnSecondary}>
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ────────────────────────────────────── */}
        <section className={`${styles.section} ${styles.faqSection}`}>
          <div className={styles.container}>
            <div className={styles.sectionHeader} data-animate>
              <p className={styles.eyebrow}>Got Questions?</p>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            </div>
            <div className={styles.faqList} data-animate>
              {faqs.map((faq, i) => (
                <div key={i} className={`${styles.faqItem} ${openFaq === i ? styles.faqItemOpen : ''}`}>
                  <button className={styles.faqQuestion} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span>{faq.q}</span>
                    <span className={`${styles.faqChevron} ${openFaq === i ? styles.faqChevronOpen : ''}`}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                        <polyline points="6 9 12 15 18 9" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                  <div className={`${styles.faqAnswer} ${openFaq === i ? styles.faqAnswerOpen : ''}`}>
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT TOUSETECH ────────────────────────── */}
        <section className={`${styles.section} ${styles.aboutSection}`}>
          <div className={styles.container}>
            <div className={styles.aboutInner} data-animate>
              <div className={styles.aboutLeft}>
                <p className={styles.eyebrow}>Who We Are</p>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'left', margin: '0 0 1.5rem' }}>About TouseTech</h2>
                <p className={styles.aboutText}>
                  TouseTech helps businesses establish a stronger online presence through modern websites, clean design, and digital growth solutions.
                </p>
                <p className={styles.aboutText}>
                  Our goal is simple: create websites that look professional, build trust, and help businesses grow.
                </p>
              </div>
              <div className={styles.aboutRight}>
                {aboutStats.map((stat, i) => (
                  <div key={i} className={styles.aboutStat}>
                    <div className={styles.aboutStatIcon}>{stat.icon}</div>
                    <div>
                      <div className={styles.aboutStatValue}>{stat.value}</div>
                      <div className={styles.aboutStatLabel}>{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
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
            <div className={styles.ctaBtns}>
              <Link href="/contact" className={styles.btnPrimary}>Contact Us</Link>
              <Link href="/contact" className={styles.btnSecondary}>Get Started</Link>
            </div>
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
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="14" rx="2"/><path strokeLinecap="round" d="M8 21h8M12 17v4"/></svg>, title: 'Website Design', desc: 'Modern, responsive websites tailored to your business and optimized for all devices.' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><polyline points="16 18 22 12 16 6" strokeLinecap="round" strokeLinejoin="round"/><polyline points="8 6 2 12 8 18" strokeLinecap="round" strokeLinejoin="round"/></svg>, title: 'Website Development', desc: 'Fast, secure, and professionally built websites designed for performance.' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>, title: 'Website Optimization', desc: 'Improve speed, user experience, and functionality to keep customers engaged.' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>, title: 'Branding & Design', desc: 'Clean visuals and branding that help your business stand out online.' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><polygon points="23 7 16 12 23 17 23 7" strokeLinecap="round" strokeLinejoin="round"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>, title: 'Content Creation', desc: 'Short-form content and digital media designed to increase engagement and visibility.' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path strokeLinecap="round" strokeLinejoin="round" d="M3 18v-6a9 9 0 0118 0v6"/><path strokeLinecap="round" strokeLinejoin="round" d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/></svg>, title: 'Ongoing Support', desc: 'Website updates, maintenance, and support to keep everything running smoothly.' },
];

const includes = [
  { title: 'Mobile Responsive', desc: 'Looks perfect on desktop, tablet, and mobile devices.' },
  { title: 'Fast Load Speeds', desc: 'Optimized for speed and user experience.' },
  { title: 'Modern Design', desc: 'Clean, professional layouts that build trust.' },
  { title: 'Contact Forms', desc: 'Turn visitors into leads and customers.' },
  { title: 'SEO Foundations', desc: 'Built with search engine best practices.' },
  { title: 'Secure & Reliable', desc: 'Safe, stable, and built for long-term performance.' },
];

const steps = [
  { title: 'Discovery', desc: 'We learn about your business, goals, audience, and vision.' },
  { title: 'Design & Build', desc: 'We create a custom website optimized for performance and user experience.' },
  { title: 'Launch & Grow', desc: 'Your website goes live and helps establish a stronger online presence.' },
];

const features = [
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/></svg>, title: 'Modern Design', desc: 'Professional websites built to impress and convert.' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14" strokeLinecap="round" strokeLinejoin="round"/></svg>, title: 'Fast Turnaround', desc: 'Efficient project delivery without sacrificing quality.' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>, title: 'Personalized Service', desc: 'Every project is tailored specifically to your business.' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>, title: 'Growth Focused', desc: 'Built to help businesses attract more customers online.' },
];

const projects = [
  { title: 'Bella Vista Restaurant', tag: 'Restaurant', desc: 'Modern restaurant website with online menu, reservations, and photo gallery.', bg: '#0c0a08', accent: '#f97316' },
  { title: 'Iron Edge Gym', tag: 'Fitness', desc: 'High-energy gym landing page with membership plans and class schedules.', bg: '#080c08', accent: '#22c55e' },
  { title: 'Sharp Cuts Barber', tag: 'Booking', desc: 'Clean booking site with service menu, gallery, and online appointments.', bg: '#0a080f', accent: '#a855f7' },
];

const pricing = [
  {
    name: 'Starter',
    tagline: 'Perfect for small businesses.',
    popular: false,
    features: ['Custom Website', 'Mobile Responsive Design', 'Contact Form', 'Basic SEO Setup'],
  },
  {
    name: 'Growth',
    tagline: 'For businesses ready to grow.',
    popular: true,
    features: ['Everything in Starter', 'Additional Pages', 'Google Business Profile Setup', 'Performance Optimization'],
  },
  {
    name: 'Premium',
    tagline: 'The complete business solution.',
    popular: false,
    features: ['Everything in Growth', 'Content Creation Setup', 'Advanced Optimization', 'Priority Support'],
  },
];

const faqs = [
  { q: 'How long does a website take?', a: 'Most websites are turned around quickly — often within a few hours to a couple of days depending on the scope. We move fast without cutting corners.' },
  { q: 'Do you provide hosting?', a: 'Yes, we can help with hosting and domain setup to get your website live and running.' },
  { q: 'Can you redesign my current website?', a: 'Absolutely. We can redesign and modernize your existing website to match your current brand and goals.' },
  { q: 'Do you offer ongoing support?', a: 'Yes. We offer maintenance and support plans to keep your website updated and running smoothly.' },
  { q: 'Will my website work on mobile devices?', a: 'Yes. Every website we build is fully optimized for all screen sizes including phones and tablets.' },
];

const aboutStats = [
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="22" height="22"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>, value: '100% Custom', label: 'Every website built from scratch' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="22" height="22"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18" strokeLinecap="round" strokeWidth="2.5"/></svg>, value: 'Mobile First', label: 'Optimized for every device' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="22" height="22"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>, value: 'Results Driven', label: 'Focused on business growth' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="22" height="22"><path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636a9 9 0 010 12.728M15.536 8.464a5 5 0 010 7.072M12 11a1 1 0 100 2 1 1 0 000-2z"/></svg>, value: 'Ongoing Support', label: 'We stay with you after launch' },
];
