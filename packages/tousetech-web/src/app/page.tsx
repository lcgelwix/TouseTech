'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import styles from './page.module.css';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openProject, setOpenProject] = useState<number | null>(null);
  const [consultForm, setConsultForm] = useState({ name: '', business: '', email: '', phone: '', message: '' });
  const [consultStatus, setConsultStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in-view'); }); },
      { threshold: 0.1 }
    );
    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = openProject !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [openProject]);

  function handleConsultChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setConsultForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleConsultSubmit(e: React.FormEvent) {
    e.preventDefault();
    setConsultStatus('sending');
    try {
      const res = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(consultForm),
      });
      setConsultStatus(res.ok ? 'success' : 'error');
    } catch {
      setConsultStatus('error');
    }
  }

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
                    {/* TouseTech Nav */}
                    <div className={styles.screenNav} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 14px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                        <svg viewBox="0 0 20 20" width="15" height="15">
                          <circle cx="10" cy="10" r="8.5" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1"/>
                          <rect x="3.5" y="5.5" width="5"   height="1.5" rx="0.3" fill="white"/>
                          <rect x="5.5" y="7"   width="1.5" height="5.5" rx="0.3" fill="white"/>
                          <rect x="9.5" y="5.5" width="5"   height="1.5" rx="0.3" fill="#2563eb"/>
                          <rect x="13" y="7"    width="1.5" height="5.5" rx="0.3" fill="#2563eb"/>
                        </svg>
                        <span style={{ fontSize: 7, fontWeight: 800, letterSpacing: '0.03em' }}>
                          <span style={{ color: '#fff' }}>Touse</span><span style={{ color: '#2563eb' }}>Tech</span>
                        </span>
                      </div>
                      <div style={{ display: 'flex', gap: 10 }}>
                        {['Services', 'Work', 'Contact'].map(l => (
                          <span key={l} style={{ fontSize: 5.5, color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>{l}</span>
                        ))}
                      </div>
                      <div style={{ background: '#2563eb', borderRadius: 3, padding: '2.5px 8px', fontSize: 5.5, fontWeight: 700, color: '#fff' }}>Get Started</div>
                    </div>
                    {/* TouseTech Hero */}
                    <div className={styles.screenHero}>
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 3, background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.3)', borderRadius: 10, padding: '2px 7px', marginBottom: 6, width: 'fit-content' }}>
                        <span style={{ fontSize: 5.5, color: '#60a5fa', fontWeight: 700, letterSpacing: '0.08em' }}>✦ MODERN DIGITAL SOLUTIONS</span>
                      </div>
                      <div style={{ fontSize: 11, fontWeight: 900, color: '#fff', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: 1 }}>Modern Websites.</div>
                      <div style={{ fontSize: 11, fontWeight: 900, color: '#2563eb', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: 6 }}>Real Results.</div>
                      <div style={{ fontSize: 6.5, color: 'rgba(255,255,255,0.42)', lineHeight: 1.6, marginBottom: 8, maxWidth: '78%' }}>We build modern, high-performing websites that help businesses grow online and stand out.</div>
                      <div style={{ display: 'flex', gap: 5 }}>
                        <div style={{ background: '#2563eb', borderRadius: 4, padding: '4px 11px', fontSize: 6, fontWeight: 700, color: '#fff' }}>Get Started</div>
                        <div style={{ border: '1px solid rgba(255,255,255,0.18)', borderRadius: 4, padding: '4px 10px', fontSize: 6, fontWeight: 600, color: 'rgba(255,255,255,0.5)' }}>View Our Work</div>
                      </div>
                    </div>
                    {/* Service cards */}
                    <div className={styles.screenCards}>
                      {[
                        { label: 'Website Design', sub: 'Custom & Modern', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" width="10" height="10"><rect x="2" y="3" width="20" height="14" rx="2"/><path strokeLinecap="round" d="M8 21h8M12 17v4"/></svg> },
                        { label: 'Development',    sub: 'Fast & Secure',   icon: <svg viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" width="10" height="10"><polyline points="16 18 22 12 16 6" strokeLinecap="round" strokeLinejoin="round"/><polyline points="8 6 2 12 8 18" strokeLinecap="round" strokeLinejoin="round"/></svg> },
                        { label: 'Optimization',   sub: '98/100 Score',    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" width="10" height="10"><path strokeLinecap="round" strokeLinejoin="round" d="M13 2L4 14h8l-1 8 9-12h-8l1-8z"/></svg> },
                      ].map((s, i) => (
                        <div key={i} className={styles.screenCard} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 3, padding: '0 4px' }}>
                          <div style={{ width: 18, height: 18, background: 'rgba(37,99,235,0.15)', border: '1px solid rgba(37,99,235,0.2)', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{s.icon}</div>
                          <div style={{ fontSize: 5.5, fontWeight: 700, color: 'rgba(255,255,255,0.7)', textAlign: 'center', lineHeight: 1.3 }}>{s.label}</div>
                          <div style={{ fontSize: 5, color: '#2563eb', fontWeight: 700 }}>{s.sub}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={styles.phone}>
                  <div className={styles.phoneNotch} />
                  <div className={styles.phoneContent}>
                    {/* TouseTech mobile nav */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                        <svg viewBox="0 0 20 20" width="12" height="12">
                          <circle cx="10" cy="10" r="8.5" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1"/>
                          <rect x="3.5" y="5.5" width="5"   height="1.5" rx="0.3" fill="white"/>
                          <rect x="5.5" y="7"   width="1.5" height="5.5" rx="0.3" fill="white"/>
                          <rect x="9.5" y="5.5" width="5"   height="1.5" rx="0.3" fill="#2563eb"/>
                          <rect x="13"  y="7"   width="1.5" height="5.5" rx="0.3" fill="#2563eb"/>
                        </svg>
                        <span style={{ fontSize: 5.5, fontWeight: 800 }}>
                          <span style={{ color: '#fff' }}>Touse</span><span style={{ color: '#2563eb' }}>Tech</span>
                        </span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                        {[1,2,3].map(i => <div key={i} style={{ width: 13, height: 1.5, background: 'rgba(255,255,255,0.4)', borderRadius: 1 }} />)}
                      </div>
                    </div>
                    {/* Mobile hero */}
                    <div style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.16), rgba(37,99,235,0.03))', borderRadius: 4, padding: '6px', marginBottom: 4 }}>
                      <div style={{ fontSize: 5, color: '#60a5fa', fontWeight: 700, letterSpacing: '0.08em', marginBottom: 3 }}>✦ DIGITAL SOLUTIONS</div>
                      <div style={{ fontSize: 8.5, fontWeight: 900, color: '#fff', lineHeight: 1.2, marginBottom: 1 }}>Modern Websites.</div>
                      <div style={{ fontSize: 8.5, fontWeight: 900, color: '#2563eb', lineHeight: 1.2, marginBottom: 4 }}>Real Results.</div>
                      <div style={{ fontSize: 5.5, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5, marginBottom: 5 }}>High-performing websites that help businesses grow.</div>
                      <div style={{ background: '#2563eb', borderRadius: 3, padding: '3.5px 0', fontSize: 5.5, fontWeight: 700, color: '#fff', textAlign: 'center' }}>Get Started →</div>
                    </div>
                    {/* Service pills */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                      {[
                        { label: 'Website Design', color: '#2563eb' },
                        { label: 'Development',    color: '#2563eb' },
                        { label: 'Optimization',   color: '#2563eb' },
                      ].map(({ label, color }) => (
                        <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '3px 5px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 3 }}>
                          <div style={{ width: 5, height: 5, background: color, borderRadius: '50%', flexShrink: 0 }} />
                          <span style={{ fontSize: 5.5, color: 'rgba(255,255,255,0.55)', fontWeight: 600 }}>{label}</span>
                        </div>
                      ))}
                    </div>
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

        {/* ── FREE CONSULTATION ───────────────────────── */}
        <section id="consultation" className={`${styles.section} ${styles.consultSection}`}>
          <div className={styles.container}>
            <div className={styles.consultInner} data-animate>
              <div className={styles.consultLeft}>
                <p className={styles.eyebrow}>Free — No Obligation</p>
                <h2 className={styles.consultTitle}>Get a Free Website Consultation</h2>
                <p className={styles.consultSub}>Tell us about your business and we'll discuss the best solution for your goals.</p>
                <div className={styles.consultPerks}>
                  {['No pressure, no commitment', 'Response within 24 hours', 'Personalized recommendations'].map((p, i) => (
                    <div key={i} className={styles.consultPerk}>
                      <span className={styles.perkCheck}>✓</span>{p}
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.consultRight}>
                {consultStatus === 'success' ? (
                  <div className={styles.consultSuccess}>
                    <div className={styles.successIcon}>✓</div>
                    <h3>Request Received!</h3>
                    <p>We'll be in touch within 24 hours to discuss your project.</p>
                  </div>
                ) : (
                  <form className={styles.consultForm} onSubmit={handleConsultSubmit}>
                    <div className={styles.formRow}>
                      <div className={styles.formField}>
                        <label htmlFor="cname">Your Name *</label>
                        <input id="cname" name="name" type="text" placeholder="John Smith" required value={consultForm.name} onChange={handleConsultChange} />
                      </div>
                      <div className={styles.formField}>
                        <label htmlFor="cbusiness">Business Name</label>
                        <input id="cbusiness" name="business" type="text" placeholder="Your Business" value={consultForm.business} onChange={handleConsultChange} />
                      </div>
                    </div>
                    <div className={styles.formRow}>
                      <div className={styles.formField}>
                        <label htmlFor="cemail">Email Address *</label>
                        <input id="cemail" name="email" type="email" placeholder="you@email.com" required value={consultForm.email} onChange={handleConsultChange} />
                      </div>
                      <div className={styles.formField}>
                        <label htmlFor="cphone">Phone Number</label>
                        <input id="cphone" name="phone" type="tel" placeholder="(000) 000-0000" value={consultForm.phone} onChange={handleConsultChange} />
                      </div>
                    </div>
                    <div className={styles.formField}>
                      <label htmlFor="cmessage">Tell Us About Your Business</label>
                      <textarea id="cmessage" name="message" rows={4} placeholder="What does your business do? What are your website goals?" value={consultForm.message} onChange={handleConsultChange} />
                    </div>
                    {consultStatus === 'error' && <p className={styles.formError}>Something went wrong. Please try again.</p>}
                    <button type="submit" className={styles.consultBtn} disabled={consultStatus === 'sending'}>
                      {consultStatus === 'sending' ? 'Sending...' : 'Request My Free Consultation →'}
                    </button>
                  </form>
                )}
              </div>
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
                <div key={i} className={styles.workCard} data-animate style={{ transitionDelay: `${i * 0.12}s`, ['--card-accent' as string]: p.accent } as React.CSSProperties}>
                  <div className={styles.workPreview} style={{ background: p.bg }}>
                    <div className={styles.workBar}>
                      <span className={styles.wDot} style={{ background: '#ff5f57' }} />
                      <span className={styles.wDot} style={{ background: '#ffbd2e' }} />
                      <span className={styles.wDot} style={{ background: '#28c840' }} />
                      <div className={styles.workAddr}><span className={styles.workAddrText}>{p.url}</span></div>
                    </div>
                    {p.mockup}
                    <div className={styles.workPreviewFade} />
                  </div>
                  <div className={styles.workInfo}>
                    <span className={styles.workTag} style={{ color: 'rgba(255,255,255,0.6)', borderColor: 'rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.05)' }}>{p.tag}</span>
                    <h3 className={styles.workTitle}>{p.title}</h3>
                    <p className={styles.workDesc}>{p.desc}</p>
                    <button onClick={() => setOpenProject(i)} className={styles.viewProjectBtn} style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.18)', fontFamily: 'inherit', cursor: 'pointer' }}>
                      View Project →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHO WE HELP ────────────────────────────── */}
        <section className={`${styles.section} ${styles.industriesSection}`}>
          <div className={styles.container}>
            <div className={styles.sectionHeader} data-animate>
              <p className={styles.eyebrow}>Industries We Serve</p>
              <h2 className={styles.sectionTitle}>Who We Help</h2>
              <p className={styles.sectionSub}>Helping businesses establish a stronger online presence through modern web solutions.</p>
            </div>
            <div className={styles.industriesGrid}>
              {industries.map((ind, i) => (
                <div key={i} className={styles.industryCard} data-animate style={{ transitionDelay: `${i * 0.07}s` }}>
                  <div className={styles.industryIcon}>{ind.icon}</div>
                  <h3 className={styles.industryTitle}>{ind.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING ────────────────────────────────── */}
        <section id="packages" className={`${styles.section} ${styles.pricingSection}`}>
          <div className={styles.container}>
            <div className={styles.sectionHeader} data-animate>
              <p className={styles.eyebrow}>Simple & Transparent</p>
              <h2 className={styles.sectionTitle}>Website Packages</h2>
              <p className={styles.sectionSub}>Choose the package that fits your business. Every package includes a professional, custom-built website.</p>
            </div>
            <div className={styles.pricingGrid}>
              {pricing.map((plan, i) => (
                <div key={i} className={`${styles.pricingCard} ${plan.popular ? styles.popularCard : ''}`} data-animate style={{ transitionDelay: `${i * 0.1}s` }}>
                  {plan.popular && <div className={styles.popularBadge}>Most Popular</div>}
                  <div className={styles.pricingTop}>
                    <h3 className={styles.pricingName}>{plan.name}</h3>
                    <p className={styles.pricingTagline}>{plan.tagline}</p>
                  </div>
                  <ul className={styles.pricingList}>
                    {plan.features.map((f, j) => (
                      <li key={j} className={styles.pricingItem}>
                        <span className={styles.pricingCheck}>✓</span>{f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className={plan.popular ? styles.btnPrimary : styles.btnSecondary}>Get Started</Link>
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
                <p className={styles.aboutText}>TouseTech helps businesses establish a stronger online presence through modern websites, clean design, and digital growth solutions.</p>
                <p className={styles.aboutText}>Our goal is simple: create websites that look professional, build trust, and help businesses grow.</p>
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
              <a href="#packages" className={styles.btnPrimary}>Get Started</a>
              <Link href="/contact" className={styles.btnSecondary}>Contact Us</Link>
            </div>
          </div>
        </section>

        {/* ── FOOTER ─────────────────────────────────── */}
        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            <div className={styles.footerLeft}>
              <span className={styles.footerBrand}>TouseTech</span>
              <p className={styles.footerTagline}>Modern Websites. Real Results.</p>
              <p className={styles.footerCopy}>© 2026 TouseTech. All Rights Reserved.</p>
            </div>
            <div className={styles.footerRight}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none"/></svg>
                Instagram
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 105.56 6.29V9.14a8.17 8.17 0 004.77 1.51V7.22a4.85 4.85 0 01-1-.53z"/></svg>
                TikTok
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                LinkedIn
              </a>
              <a href="mailto:lcgelwix@gmail.com" className={styles.socialLink}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                Email
              </a>
            </div>
          </div>
        </footer>

      </main>

      {/* ── STICKY CTA ─────────────────────────────── */}
      <a href="#consultation" className={styles.stickyBtn}>
        Get a Quote
      </a>

      {/* ── PROJECT MODAL ──────────────────────────── */}
      {openProject !== null && (
        <div className={styles.projectModalOverlay} onClick={() => setOpenProject(null)}>
          <div className={styles.projectModalCard} onClick={(e) => e.stopPropagation()}>
            <button className={styles.projectModalClose} onClick={() => setOpenProject(null)} aria-label="Close">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                <line x1="18" y1="6" x2="6" y2="18" strokeLinecap="round" />
                <line x1="6" y1="6" x2="18" y2="18" strokeLinecap="round" />
              </svg>
            </button>
            <div className={styles.projectModalBrowser}>
              <div className={styles.projectModalBar}>
                <span className={styles.dot} style={{ background: '#ff5f57' }} />
                <span className={styles.dot} style={{ background: '#febc2e' }} />
                <span className={styles.dot} style={{ background: '#28c840' }} />
                <div className={styles.projectModalUrl}>{projects[openProject].url}</div>
              </div>
              <div className={styles.projectModalScreen}>
                {projects[openProject].modal}
              </div>
            </div>
          </div>
        </div>
      )}
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
  {
    title: 'Apex Fitness',
    tag: 'Fitness',
    desc: 'Modern gym website focused on memberships and lead generation.',
    bg: 'linear-gradient(160deg, #070e08, #050c07)',
    accent: '#22c55e',
    url: 'apexfitness.com',
    mockup: (
      <div style={{ fontFamily: 'inherit', color: '#fff' }}>
        {/* Nav */}
        <div style={{ background: 'rgba(0,0,0,0.45)', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '6px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <svg viewBox="0 0 28 28" width="18" height="18" style={{ flexShrink: 0 }}>
              <polygon points="14,1.5 25.5,7.8 25.5,20.2 14,26.5 2.5,20.2 2.5,7.8" fill="#22c55e"/>
              <path d="M9.5 20 L14 8 L18.5 20 M11.5 15.5 L16.5 15.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
            <span style={{ fontSize: 6, fontWeight: 900, color: '#fff', letterSpacing: '0.08em' }}>APEX FITNESS</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            {['Classes', 'Plans'].map(l => <span key={l} style={{ fontSize: 4.5, color: 'rgba(255,255,255,0.35)', fontWeight: 500 }}>{l}</span>)}
            <div style={{ background: '#22c55e', borderRadius: 2, padding: '2px 6px', fontSize: 4.5, fontWeight: 700, color: '#000' }}>JOIN NOW</div>
          </div>
        </div>
        {/* Hero: text + image placeholder */}
        <div style={{ padding: '9px 12px 8px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 3, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 20, padding: '1.5px 7px', marginBottom: 4 }}>
              <span style={{ fontSize: 4, color: '#22c55e' }}>★</span>
              <span style={{ fontSize: 4, color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>Michigan's #1 Gym</span>
            </div>
            <div style={{ fontSize: 9, fontWeight: 900, color: '#fff', lineHeight: 1.18, marginBottom: 3 }}>Transform<br/>Your Body.</div>
            <div style={{ fontSize: 5, color: 'rgba(255,255,255,0.35)', lineHeight: 1.5, marginBottom: 5 }}>Expert trainers &amp; modern equipment.</div>
            <div style={{ display: 'flex', gap: 3 }}>
              <div style={{ background: '#22c55e', borderRadius: 2, padding: '2.5px 7px', fontSize: 5, fontWeight: 700, color: '#000' }}>Get Started</div>
              <div style={{ border: '1px solid rgba(255,255,255,0.14)', borderRadius: 2, padding: '2.5px 6px', fontSize: 5, color: 'rgba(255,255,255,0.38)', fontWeight: 500 }}>Classes</div>
            </div>
            <div style={{ display: 'flex', gap: 9, marginTop: 6 }}>
              {[['500+', 'Members'], ['20+', 'Classes'], ['5.0★', 'Rating']].map(([v, l]) => (
                <div key={l}>
                  <div style={{ fontSize: 7, fontWeight: 800, color: '#fff' }}>{v}</div>
                  <div style={{ fontSize: 3.5, color: 'rgba(255,255,255,0.25)' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Hero image placeholder */}
          <div style={{ width: 58, height: 72, borderRadius: 5, overflow: 'hidden', flexShrink: 0, border: '1px solid rgba(34,197,94,0.18)', position: 'relative' }}>
            <svg viewBox="0 0 58 72" width="58" height="72" style={{ display: 'block', background: 'linear-gradient(160deg, #1c3020, #0d1a10)' }}>
              <defs>
                <pattern id="apexGrid" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                  <path d="M 8 0 L 0 0 0 8" fill="none" stroke="rgba(34,197,94,0.07)" strokeWidth="0.5"/>
                </pattern>
                <linearGradient id="apexFade" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="40%" stopColor="rgba(0,0,0,0)" stopOpacity="0"/>
                  <stop offset="100%" stopColor="#0d1a10" stopOpacity="0.85"/>
                </linearGradient>
              </defs>
              <rect width="58" height="72" fill="url(#apexGrid)"/>
              <g transform="translate(8,18)">
                <rect x="0" y="7" width="5" height="12" rx="2" fill="none" stroke="rgba(34,197,94,0.4)" strokeWidth="1"/>
                <rect x="37" y="7" width="5" height="12" rx="2" fill="none" stroke="rgba(34,197,94,0.4)" strokeWidth="1"/>
                <rect x="5" y="4" width="6" height="18" rx="1.5" fill="rgba(34,197,94,0.25)" stroke="rgba(34,197,94,0.5)" strokeWidth="0.8"/>
                <rect x="31" y="4" width="6" height="18" rx="1.5" fill="rgba(34,197,94,0.25)" stroke="rgba(34,197,94,0.5)" strokeWidth="0.8"/>
                <line x1="11" y1="13" x2="31" y2="13" stroke="rgba(34,197,94,0.6)" strokeWidth="2.5" strokeLinecap="round"/>
              </g>
              <ellipse cx="29" cy="10" rx="5" ry="5.5" fill="rgba(255,255,255,0.06)"/>
              <path d="M21 22 Q29 18 37 22 L37 30 Q29 26 21 30 Z" fill="rgba(255,255,255,0.04)"/>
              <rect width="58" height="72" fill="url(#apexFade)"/>
            </svg>
            <div style={{ position: 'absolute', bottom: 5, left: 5, right: 5, background: 'rgba(0,0,0,0.65)', borderRadius: 3, padding: '2px 4px', textAlign: 'center' }}>
              <span style={{ fontSize: 4.5, fontWeight: 700, color: '#fff' }}>Open Daily 5am–11pm</span>
            </div>
          </div>
        </div>
        {/* Classes */}
        <div style={{ padding: '7px 12px 10px' }}>
          <div style={{ fontSize: 4, fontWeight: 700, color: 'rgba(255,255,255,0.22)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 4 }}>Our Classes</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 3.5 }}>
            {[
              { label: 'Strength', svg: <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" width="10" height="10"><path d="M7 8v8M17 8v8M4 10v4M20 10v4M7 12h10"/></svg> },
              { label: 'Cardio', svg: <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="10" height="10"><path d="M3 12h3l2-6 4 12 3-8 2 2h4"/></svg> },
              { label: 'HIIT', svg: <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="10" height="10"><path d="M13 2L4 14h8l-1 8 9-12h-8l1-8z"/></svg> },
            ].map(({ label, svg }) => (
              <div key={label} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 4, padding: '5px 3px', display: 'flex', flexDirection: 'column', gap: 2.5, alignItems: 'center' }}>
                {svg}
                <span style={{ fontSize: 4.5, color: 'rgba(255,255,255,0.6)', fontWeight: 700 }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    modal: (
      <div style={{ background: '#08100a', fontFamily: 'inherit', color: '#fff' }}>
        {/* Nav */}
        <div style={{ background: '#0a140c', borderBottom: '1px solid rgba(34,197,94,0.15)', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <svg viewBox="0 0 28 28" width="28" height="28"><polygon points="14,1.5 25.5,7.8 25.5,20.2 14,26.5 2.5,20.2 2.5,7.8" fill="#22c55e"/><path d="M9.5 20 L14 8 L18.5 20 M11.5 15.5 L16.5 15.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
            <span style={{ fontSize: 11, fontWeight: 900, color: '#fff', letterSpacing: '0.12em' }}>APEX FITNESS</span>
          </div>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            {['Home', 'Classes', 'Membership', 'Contact'].map(item => (
              <span key={item} style={{ fontSize: 9, color: 'rgba(255,255,255,0.45)', fontWeight: 500 }}>{item}</span>
            ))}
            <div style={{ background: '#22c55e', borderRadius: 4, padding: '4px 11px', fontSize: 9, fontWeight: 700, color: '#000' }}>Join Now</div>
          </div>
        </div>
        {/* Hero */}
        <div style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.11), rgba(34,197,94,0.02))', borderBottom: '1px solid rgba(34,197,94,0.1)', padding: '28px 24px', display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 20, padding: '3px 10px', marginBottom: 12 }}>
              <span style={{ fontSize: 7, color: '#22c55e' }}>★</span>
              <span style={{ fontSize: 8, color: 'rgba(255,255,255,0.65)', fontWeight: 600 }}>Michigan's #1 Gym</span>
            </div>
            <div style={{ fontSize: 22, fontWeight: 900, lineHeight: 1.15, marginBottom: 10, letterSpacing: '-0.02em' }}>Transform Your Body.<br/>Elevate Your Life.</div>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.42)', lineHeight: 1.65, marginBottom: 16 }}>State-of-the-art equipment, expert trainers, and a community built to push you further every single day.</div>
            <div style={{ display: 'flex', gap: 8, marginBottom: 18 }}>
              <div style={{ background: '#22c55e', borderRadius: 5, padding: '7px 16px', fontSize: 9, fontWeight: 700, color: '#000' }}>Get Started →</div>
              <div style={{ border: '1px solid rgba(255,255,255,0.15)', borderRadius: 5, padding: '7px 16px', fontSize: 9, fontWeight: 600, color: 'rgba(255,255,255,0.5)' }}>View Classes</div>
            </div>
            <div style={{ display: 'flex', gap: 24 }}>
              {[['500+', 'Active Members'], ['20+', 'Classes/Week'], ['★ 5.0', 'Google Rating']].map(([val, label]) => (
                <div key={label}>
                  <div style={{ fontSize: 14, fontWeight: 800, color: '#fff' }}>{val}</div>
                  <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.3)' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Decorative dumbbell */}
          <svg viewBox="0 0 80 80" fill="none" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" width="90" height="90" style={{ opacity: 0.18, flexShrink: 0 }}>
            <rect x="8"  y="28" width="10" height="24" rx="3"/>
            <rect x="62" y="28" width="10" height="24" rx="3"/>
            <rect x="18" y="22" width="8"  height="36" rx="2"/>
            <rect x="54" y="22" width="8"  height="36" rx="2"/>
            <line x1="26" y1="40" x2="54" y2="40"/>
          </svg>
        </div>
        {/* Classes */}
        <div style={{ padding: '20px 24px' }}>
          <div style={{ fontSize: 8, fontWeight: 700, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.16em', marginBottom: 6 }}>OUR CLASSES</div>
          <div style={{ fontSize: 14, fontWeight: 800, marginBottom: 14 }}>Train Hard. Get Results.</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 8 }}>
            {[
              { name: 'Strength', sessions: '5x weekly', desc: 'Heavy lifting & compound movements', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" width="20" height="20"><path d="M7 8v8M17 8v8M4 10v4M20 10v4M7 12h10"/></svg> },
              { name: 'Cardio', sessions: 'Daily', desc: 'Endurance and heart-rate training', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M3 12h3l2-6 4 12 3-8 2 2h4"/></svg> },
              { name: 'HIIT', sessions: '4x weekly', desc: 'High-intensity interval training', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M13 2L4 14h8l-1 8 9-12h-8l1-8z"/></svg> },
              { name: 'Yoga', sessions: '3x weekly', desc: 'Flexibility and recovery focused', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" width="20" height="20"><path d="M12 3c0 0-4 4-4 8s4 8 4 8 4-4 4-8-4-8-4-8z"/><path d="M4 12h16"/></svg> },
            ].map(c => (
              <div key={c.name} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 6, padding: '10px' }}>
                <div style={{ marginBottom: 7 }}>{c.icon}</div>
                <div style={{ fontSize: 10, fontWeight: 700, marginBottom: 3 }}>{c.name}</div>
                <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.38)', lineHeight: 1.5, marginBottom: 5 }}>{c.desc}</div>
                <div style={{ fontSize: 7, color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>{c.sessions}</div>
              </div>
            ))}
          </div>
        </div>
        {/* CTA banner */}
        <div style={{ background: 'rgba(34,197,94,0.07)', borderTop: '1px solid rgba(34,197,94,0.12)', borderBottom: '1px solid rgba(34,197,94,0.12)', padding: '14px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 800, marginBottom: 3 }}>Ready to Start Your Journey?</div>
            <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)' }}>First class free. No commitment required.</div>
          </div>
          <div style={{ background: '#22c55e', borderRadius: 5, padding: '8px 18px', fontSize: 9, fontWeight: 700, color: '#000', whiteSpace: 'nowrap' }}>Claim Free Class</div>
        </div>
        {/* Footer */}
        <div style={{ padding: '12px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 8, fontWeight: 800, color: '#fff' }}>APEX FITNESS</span>
          <span style={{ fontSize: 7, color: 'rgba(255,255,255,0.2)' }}>© 2026 Apex Fitness. All rights reserved.</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Harbor Grill',
    tag: 'Restaurant',
    desc: 'Restaurant website featuring menu, reservations, and mobile optimization.',
    bg: 'linear-gradient(160deg, #0e0a07, #0b0806)',
    accent: '#f97316',
    url: 'harborgrill.com',
    mockup: (
      <div style={{ fontFamily: 'inherit', color: '#fff' }}>
        {/* Nav */}
        <div style={{ background: 'rgba(0,0,0,0.45)', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '6px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <svg viewBox="0 0 28 28" width="18" height="18" style={{ flexShrink: 0 }}>
              <path d="M14 2 L23 7 L23 17 Q23 24 14 27 Q5 24 5 17 L5 7 Z" fill="#f97316"/>
              <path d="M9 9 L9 18 M19 9 L19 18 M9 13.5 L19 13.5" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
              <path d="M8.5 22 Q11 20.5 14 22 Q17 23.5 19.5 22" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
            </svg>
            <span style={{ fontSize: 6, fontWeight: 900, color: '#fff', letterSpacing: '0.05em' }}>HARBOR GRILL</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            {['Menu', 'About'].map(l => <span key={l} style={{ fontSize: 4.5, color: 'rgba(255,255,255,0.35)', fontWeight: 500 }}>{l}</span>)}
            <div style={{ background: '#f97316', borderRadius: 2, padding: '2px 6px', fontSize: 4.5, fontWeight: 700, color: '#000' }}>RESERVE</div>
          </div>
        </div>
        {/* Hero: text + image placeholder */}
        <div style={{ padding: '9px 12px 8px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 3, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 20, padding: '1.5px 7px', marginBottom: 4 }}>
              <span style={{ fontSize: 4, color: '#22c55e' }}>●</span>
              <span style={{ fontSize: 4, color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>Open Now · Closes 10pm</span>
            </div>
            <div style={{ fontSize: 9, fontWeight: 900, color: '#fff', lineHeight: 1.18, marginBottom: 3 }}>Fresh From<br/>The Sea.</div>
            <div style={{ fontSize: 5, color: 'rgba(255,255,255,0.35)', lineHeight: 1.5, marginBottom: 5 }}>Locally sourced seafood, waterfront views.</div>
            <div style={{ display: 'flex', gap: 3 }}>
              <div style={{ background: '#f97316', borderRadius: 2, padding: '2.5px 7px', fontSize: 5, fontWeight: 700, color: '#000' }}>View Menu</div>
              <div style={{ border: '1px solid rgba(255,255,255,0.14)', borderRadius: 2, padding: '2.5px 6px', fontSize: 5, color: 'rgba(255,255,255,0.38)', fontWeight: 500 }}>Reserve</div>
            </div>
            <div style={{ display: 'flex', gap: 9, marginTop: 6 }}>
              {[['★ 4.9', 'Rating'], ['200+', 'Reviews'], ["Est. '98", 'Founded']].map(([v, l]) => (
                <div key={l}>
                  <div style={{ fontSize: 7, fontWeight: 800, color: '#fff' }}>{v}</div>
                  <div style={{ fontSize: 3.5, color: 'rgba(255,255,255,0.25)' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Hero image placeholder */}
          <div style={{ width: 58, height: 72, borderRadius: 5, overflow: 'hidden', flexShrink: 0, border: '1px solid rgba(249,115,22,0.18)', position: 'relative' }}>
            <svg viewBox="0 0 58 72" width="58" height="72" style={{ display: 'block', background: 'linear-gradient(160deg, #2a1a0d, #1a1008)' }}>
              <defs>
                <pattern id="grillGrid" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                  <path d="M 8 0 L 0 0 0 8" fill="none" stroke="rgba(249,115,22,0.07)" strokeWidth="0.5"/>
                </pattern>
                <linearGradient id="grillFade" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="40%" stopColor="rgba(0,0,0,0)" stopOpacity="0"/>
                  <stop offset="100%" stopColor="#1a1008" stopOpacity="0.85"/>
                </linearGradient>
              </defs>
              <rect width="58" height="72" fill="url(#grillGrid)"/>
              <circle cx="29" cy="30" r="16" fill="none" stroke="rgba(249,115,22,0.2)" strokeWidth="1"/>
              <circle cx="29" cy="30" r="12" fill="rgba(249,115,22,0.1)" stroke="rgba(249,115,22,0.25)" strokeWidth="0.8"/>
              <ellipse cx="29" cy="30" rx="7" ry="5" fill="rgba(249,115,22,0.3)" stroke="rgba(249,115,22,0.4)" strokeWidth="0.5"/>
              <path d="M22 28 Q26 24 30 28 Q34 32 38 28" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeLinecap="round"/>
              <line x1="18" y1="15" x2="18" y2="48" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeLinecap="round"/>
              <line x1="40" y1="15" x2="40" y2="48" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeLinecap="round"/>
              <rect width="58" height="72" fill="url(#grillFade)"/>
            </svg>
            <div style={{ position: 'absolute', bottom: 5, left: 5, right: 5, background: 'rgba(0,0,0,0.65)', borderRadius: 3, padding: '2px 4px', textAlign: 'center' }}>
              <span style={{ fontSize: 4.5, fontWeight: 700, color: '#fff' }}>Waterfront District</span>
            </div>
          </div>
        </div>
        {/* Menu items */}
        <div style={{ padding: '7px 12px 10px' }}>
          <div style={{ fontSize: 4, fontWeight: 700, color: 'rgba(255,255,255,0.22)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 4 }}>Menu Highlights</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 3.5 }}>
            {[
              { name: 'Grilled Salmon', price: '$24', svg: <svg viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="10" height="10"><path d="M2 12s5-7 10-7 8 4 8 7-3 7-8 7S2 12 2 12z"/><circle cx="16" cy="10" r="1" fill="#f97316" stroke="none"/></svg> },
              { name: 'Fish & Chips', price: '$18', svg: <svg viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" width="10" height="10"><path d="M8 3v3a3 3 0 006 0V3"/><line x1="11" y1="6" x2="11" y2="20"/><line x1="18" y1="4" x2="18" y2="20"/></svg> },
              { name: 'Clam Chowder', price: '$12', svg: <svg viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" width="10" height="10"><path d="M5 9h14l-1 9a2 2 0 01-2 2H8a2 2 0 01-2-2L5 9z"/><path d="M3 9h18"/></svg> },
            ].map(({ name, price, svg }) => (
              <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '3.5px 7px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 4 }}>
                <div style={{ width: 16, height: 16, background: 'rgba(249,115,22,0.12)', border: '1px solid rgba(249,115,22,0.22)', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{svg}</div>
                <span style={{ fontSize: 6, color: 'rgba(255,255,255,0.65)', fontWeight: 600, flex: 1 }}>{name}</span>
                <span style={{ fontSize: 6.5, fontWeight: 800, color: '#fff' }}>{price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    modal: (
      <div style={{ background: '#0d0a07', fontFamily: 'inherit', color: '#fff' }}>
        {/* Nav */}
        <div style={{ background: '#120d08', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <svg viewBox="0 0 28 28" width="28" height="28"><path d="M14 2 L23 7 L23 17 Q23 24 14 27 Q5 24 5 17 L5 7 Z" fill="#f97316"/><path d="M9 9 L9 18 M19 9 L19 18 M9 13.5 L19 13.5" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/><path d="M8.5 22 Q11 20.5 14 22 Q17 23.5 19.5 22" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round"/></svg>
            <span style={{ fontSize: 11, fontWeight: 900, color: '#fff', letterSpacing: '0.08em' }}>HARBOR GRILL</span>
          </div>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            {['Menu', 'About', 'Reservations', 'Contact'].map(item => (
              <span key={item} style={{ fontSize: 9, color: 'rgba(255,255,255,0.45)', fontWeight: 500 }}>{item}</span>
            ))}
            <div style={{ background: '#f97316', borderRadius: 4, padding: '4px 11px', fontSize: 9, fontWeight: 700, color: '#000' }}>Reserve Table</div>
          </div>
        </div>
        {/* Hero */}
        <div style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.08), rgba(0,0,0,0))', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '28px 24px', display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 20, padding: '3px 10px', marginBottom: 12 }}>
              <span style={{ fontSize: 7, color: '#22c55e' }}>●</span>
              <span style={{ fontSize: 8, color: 'rgba(255,255,255,0.65)', fontWeight: 600 }}>Open Now · Closes 10pm</span>
            </div>
            <div style={{ fontSize: 22, fontWeight: 900, lineHeight: 1.15, marginBottom: 10, letterSpacing: '-0.02em' }}>Fresh From The Sea.<br/>Straight To Your Plate.</div>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.42)', lineHeight: 1.65, marginBottom: 16 }}>Locally sourced seafood in a warm waterfront atmosphere. Open daily for lunch and dinner — reservations recommended.</div>
            <div style={{ display: 'flex', gap: 8 }}>
              <div style={{ background: '#f97316', borderRadius: 5, padding: '7px 16px', fontSize: 9, fontWeight: 700, color: '#000' }}>View Menu →</div>
              <div style={{ border: '1px solid rgba(255,255,255,0.15)', borderRadius: 5, padding: '7px 16px', fontSize: 9, fontWeight: 600, color: 'rgba(255,255,255,0.5)' }}>Reserve a Table</div>
            </div>
          </div>
          <svg viewBox="0 0 80 80" fill="none" stroke="#f97316" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" width="90" height="90" style={{ opacity: 0.12, flexShrink: 0 }}>
            <path d="M20 10v20M14 10v10a6 6 0 0012 0V10M20 30v40"/>
            <path d="M50 20c0 0 10-12 22-10-2 12-10 18-22 10z"/>
            <path d="M50 20l16-16"/>
            <circle cx="62" cy="16" r="2" fill="#f97316"/>
          </svg>
        </div>
        {/* Menu */}
        <div style={{ padding: '20px 24px' }}>
          <div style={{ fontSize: 8, fontWeight: 700, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.16em', marginBottom: 6 }}>MENU HIGHLIGHTS</div>
          <div style={{ fontSize: 14, fontWeight: 800, marginBottom: 14 }}>Chef's Selections</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {[
              { name: 'Grilled Atlantic Salmon', desc: 'Lemon butter, roasted vegetables, garlic mash', price: '$24', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M2 12s5-7 10-7 8 4 8 7-3 7-8 7S2 12 2 12z"/><circle cx="16" cy="10" r="1.2" fill="#f97316" stroke="none"/></svg> },
              { name: 'Harbor Fish & Chips', desc: 'Beer-battered cod, hand-cut fries, tartar sauce', price: '$18', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.8" strokeLinecap="round" width="22" height="22"><path d="M8 3v3a3 3 0 006 0V3"/><line x1="11" y1="6" x2="11" y2="20"/><line x1="18" y1="4" x2="18" y2="20"/></svg> },
              { name: 'New England Clam Chowder', desc: 'Thick, creamy, made fresh daily with local clams', price: '$12', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.8" strokeLinecap="round" width="22" height="22"><path d="M5 9h14l-1 9a2 2 0 01-2 2H8a2 2 0 01-2-2L5 9z"/><path d="M3 9h18"/><path d="M10 5a2 2 0 014 0v4"/></svg> },
              { name: 'Lobster Roll', desc: 'Cold Maine lobster, toasted brioche, drawn butter', price: '$32', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M12 3c3 0 6 2 7 5H5c1-3 4-5 7-5z"/><path d="M5 8h14v2a7 7 0 01-14 0V8z"/><path d="M9 16v4M15 16v4M7 20h10"/></svg> },
            ].map(item => (
              <div key={item.name} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 6 }}>
                <div style={{ width: 34, height: 34, background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.2)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{item.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 10, fontWeight: 700, marginBottom: 2 }}>{item.name}</div>
                  <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.35)', lineHeight: 1.4 }}>{item.desc}</div>
                </div>
                <div style={{ fontSize: 14, fontWeight: 800, color: '#fff', flexShrink: 0 }}>{item.price}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Info bar */}
        <div style={{ background: 'rgba(255,255,255,0.03)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '12px 24px', display: 'flex', gap: 28 }}>
          {[['Hours', 'Mon – Sun  11am – 10pm'], ['Location', 'Waterfront District, Harbor Bay'], ['Reservations', '(555) 000-0000']].map(([label, val]) => (
            <div key={label}>
              <div style={{ fontSize: 7, color: 'rgba(255,255,255,0.4)', fontWeight: 700, marginBottom: 2 }}>{label}</div>
              <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.6)' }}>{val}</div>
            </div>
          ))}
        </div>
        {/* Footer */}
        <div style={{ padding: '12px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 8, fontWeight: 800, color: '#fff' }}>HARBOR GRILL</span>
          <span style={{ fontSize: 7, color: 'rgba(255,255,255,0.2)' }}>© 2026 Harbor Grill. All rights reserved.</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Precision Barbers',
    tag: 'Booking',
    desc: 'Modern booking website designed to streamline appointments.',
    bg: 'linear-gradient(160deg, #09070e, #07050c)',
    accent: '#a855f7',
    url: 'precisionbarbers.com',
    mockup: (
      <div style={{ fontFamily: 'inherit', color: '#fff' }}>
        {/* Nav */}
        <div style={{ background: 'rgba(0,0,0,0.45)', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '6px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <svg viewBox="0 0 28 28" width="18" height="18" style={{ flexShrink: 0 }}>
              <path d="M14 2 L26 14 L14 26 L2 14 Z" fill="#a855f7"/>
              <path d="M8 19 L8 13 L11.5 16 L14 11 L16.5 16 L20 13 L20 19" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <line x1="8" y1="19" x2="20" y2="19" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
            <span style={{ fontSize: 6, fontWeight: 900, color: '#fff', letterSpacing: '0.06em' }}>PRECISION BARBERS</span>
          </div>
          <div style={{ background: '#a855f7', borderRadius: 2, padding: '2px 6px', fontSize: 4.5, fontWeight: 700, color: '#000' }}>BOOK NOW</div>
        </div>
        {/* Hero: text + image placeholder */}
        <div style={{ padding: '9px 12px 8px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 3, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 20, padding: '1.5px 7px', marginBottom: 4 }}>
              <span style={{ fontSize: 4, color: '#fbbf24' }}>★★★★★</span>
              <span style={{ fontSize: 4, color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>5.0 · 300+ cuts</span>
            </div>
            <div style={{ fontSize: 9, fontWeight: 900, color: '#fff', lineHeight: 1.18, marginBottom: 3 }}>Your Perfect<br/>Cut.</div>
            <div style={{ fontSize: 5, color: 'rgba(255,255,255,0.35)', lineHeight: 1.5, marginBottom: 5 }}>Modern techniques, classic craft. Book in seconds.</div>
            <div style={{ background: '#a855f7', borderRadius: 2, padding: '2.5px 7px', fontSize: 5, fontWeight: 700, color: '#000', display: 'inline-block' }}>Book Appointment</div>
            <div style={{ display: 'flex', gap: 9, marginTop: 6 }}>
              {[['4', 'Barbers'], ['$20+', 'From'], ['Same', 'Day Avail.']].map(([v, l]) => (
                <div key={l}>
                  <div style={{ fontSize: 7, fontWeight: 800, color: '#fff' }}>{v}</div>
                  <div style={{ fontSize: 3.5, color: 'rgba(255,255,255,0.25)' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Hero image placeholder */}
          <div style={{ width: 58, height: 72, borderRadius: 5, overflow: 'hidden', flexShrink: 0, border: '1px solid rgba(168,85,247,0.18)', position: 'relative' }}>
            <svg viewBox="0 0 58 72" width="58" height="72" style={{ display: 'block', background: 'linear-gradient(160deg, #1e1230, #110d20)' }}>
              <defs>
                <pattern id="barberStripes" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
                  <path d="M 6 0 L 0 6" fill="none" stroke="rgba(168,85,247,0.07)" strokeWidth="1"/>
                </pattern>
                <linearGradient id="barberFade" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="40%" stopColor="rgba(0,0,0,0)" stopOpacity="0"/>
                  <stop offset="100%" stopColor="#110d20" stopOpacity="0.85"/>
                </linearGradient>
              </defs>
              <rect width="58" height="72" fill="url(#barberStripes)"/>
              <circle cx="18" cy="22" r="7" fill="none" stroke="rgba(168,85,247,0.35)" strokeWidth="1.2"/>
              <circle cx="18" cy="44" r="7" fill="none" stroke="rgba(168,85,247,0.35)" strokeWidth="1.2"/>
              <line x1="24" y1="27" x2="48" y2="54" stroke="rgba(168,85,247,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="24" y1="39" x2="48" y2="12" stroke="rgba(168,85,247,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
              <rect x="46" y="8" width="6" height="42" rx="3" fill="rgba(168,85,247,0.1)" stroke="rgba(168,85,247,0.2)" strokeWidth="0.8"/>
              <rect width="58" height="72" fill="url(#barberFade)"/>
            </svg>
            <div style={{ position: 'absolute', bottom: 5, left: 5, right: 5, background: 'rgba(0,0,0,0.65)', borderRadius: 3, padding: '2px 4px', textAlign: 'center' }}>
              <span style={{ fontSize: 4.5, fontWeight: 700, color: '#fff' }}>Walk-ins Welcome</span>
            </div>
          </div>
        </div>
        {/* Services */}
        <div style={{ padding: '7px 12px 5px' }}>
          <div style={{ fontSize: 4, fontWeight: 700, color: 'rgba(255,255,255,0.22)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 4 }}>Services</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3.5 }}>
            {[
              { name: 'Classic Cut', price: '$30', svg: <svg viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" width="10" height="10"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="9" y1="9" x2="20" y2="20"/><line x1="9" y1="15" x2="20" y2="4"/></svg> },
              { name: 'Skin Fade', price: '$35', svg: <svg viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" width="10" height="10"><rect x="4" y="8" width="16" height="8" rx="2"/><line x1="4" y1="12" x2="20" y2="12"/><path d="M8 8V6a2 2 0 014 0v2"/></svg> },
              { name: 'Beard Trim', price: '$20', svg: <svg viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" width="10" height="10"><path d="M12 3a4 4 0 014 4v2c0 2.5-1.5 4-4 4s-4-1.5-4-4V7a4 4 0 014-4z"/><path d="M7 13c-1.5 1-2.5 2.5-2.5 4.5h15c0-2-1-3.5-2.5-4.5"/></svg> },
              { name: 'Hot Shave', price: '$40', svg: <svg viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="10" height="10"><path d="M12 2c0 6-4 8-4 12a4 4 0 008 0c0-4-4-6-4-12z"/></svg> },
            ].map(({ name, price, svg }) => (
              <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '4px 7px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(168,85,247,0.2)', borderRadius: 4 }}>
                <div style={{ width: 16, height: 16, background: 'rgba(168,85,247,0.15)', border: '1px solid rgba(168,85,247,0.25)', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{svg}</div>
                <span style={{ fontSize: 5.5, color: 'rgba(255,255,255,0.65)', fontWeight: 600, flex: 1 }}>{name}</span>
                <span style={{ fontSize: 6, fontWeight: 800, color: '#fff' }}>{price}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Time slots */}
        <div style={{ padding: '6px 12px 10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 3, marginBottom: 4 }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2.5" strokeLinecap="round" width="8" height="8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
            <span style={{ fontSize: 4, fontWeight: 700, color: 'rgba(255,255,255,0.22)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Available Today</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 3 }}>
            {['9 AM', '10 AM', '12 PM', '1 PM', '3 PM', '5 PM'].map((time, i) => (
              <div key={time} style={{ background: i === 2 ? '#a855f7' : 'rgba(255,255,255,0.05)', border: `1px solid ${i === 2 ? '#a855f7' : 'rgba(255,255,255,0.1)'}`, borderRadius: 3, padding: '2.5px 0', textAlign: 'center', fontSize: 4.5, color: i === 2 ? '#fff' : 'rgba(255,255,255,0.45)', fontWeight: 600 }}>{time}</div>
            ))}
          </div>
        </div>
      </div>
    ),
    modal: (
      <div style={{ background: '#0a0810', fontFamily: 'inherit', color: '#fff' }}>
        {/* Nav */}
        <div style={{ background: '#0d0a14', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <svg viewBox="0 0 28 28" width="28" height="28"><path d="M14 2 L26 14 L14 26 L2 14 Z" fill="#a855f7"/><path d="M8 19 L8 13 L11.5 16 L14 11 L16.5 16 L20 13 L20 19" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/><line x1="8" y1="19" x2="20" y2="19" stroke="white" strokeWidth="1.6" strokeLinecap="round"/></svg>
            <span style={{ fontSize: 11, fontWeight: 900, color: '#fff', letterSpacing: '0.1em' }}>PRECISION BARBERS</span>
          </div>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            {['Services', 'Booking', 'Gallery', 'Contact'].map(item => (
              <span key={item} style={{ fontSize: 9, color: 'rgba(255,255,255,0.45)', fontWeight: 500 }}>{item}</span>
            ))}
            <div style={{ background: '#a855f7', borderRadius: 4, padding: '4px 11px', fontSize: 9, fontWeight: 700, color: '#000' }}>Book Now</div>
          </div>
        </div>
        {/* Hero */}
        <div style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.08), rgba(0,0,0,0))', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '28px 24px', display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 20, padding: '3px 10px', marginBottom: 12 }}>
              <span style={{ fontSize: 8, color: '#fbbf24' }}>★★★★★</span>
              <span style={{ fontSize: 8, color: 'rgba(255,255,255,0.65)', fontWeight: 600 }}>5.0 · 300+ Reviews</span>
            </div>
            <div style={{ fontSize: 22, fontWeight: 900, lineHeight: 1.15, marginBottom: 10, letterSpacing: '-0.02em' }}>Your Perfect Cut.<br/>Every Time.</div>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.42)', lineHeight: 1.65, marginBottom: 16 }}>Modern techniques, classic craftsmanship. Walk in feeling good — leave looking great. Book your appointment in seconds.</div>
            <div style={{ background: '#a855f7', borderRadius: 5, padding: '7px 16px', fontSize: 9, fontWeight: 700, color: '#000', display: 'inline-block' }}>Book an Appointment →</div>
          </div>
          <svg viewBox="0 0 80 80" fill="none" stroke="#a855f7" strokeWidth="3.5" strokeLinecap="round" width="90" height="90" style={{ opacity: 0.15, flexShrink: 0 }}>
            <circle cx="18" cy="22" r="10"/>
            <circle cx="18" cy="58" r="10"/>
            <line x1="26" y1="28" x2="70" y2="70"/>
            <line x1="26" y1="52" x2="70" y2="10"/>
          </svg>
        </div>
        {/* Services */}
        <div style={{ padding: '20px 24px' }}>
          <div style={{ fontSize: 8, fontWeight: 700, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.16em', marginBottom: 6 }}>OUR SERVICES</div>
          <div style={{ fontSize: 14, fontWeight: 800, marginBottom: 14 }}>Built for the Modern Gentleman</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 8 }}>
            {[
              { name: 'Classic Haircut', price: '$30', desc: 'Scissor & clipper cut, styled to perfection', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round" width="20" height="20"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="9" y1="9" x2="20" y2="20"/><line x1="9" y1="15" x2="20" y2="4"/></svg> },
              { name: 'Skin Fade', price: '$35', desc: 'Seamless taper, all lengths available', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><rect x="4" y="8" width="16" height="8" rx="2"/><path d="M8 8V6a2 2 0 014 0v2"/><line x1="4" y1="12" x2="20" y2="12"/></svg> },
              { name: 'Beard Trim', price: '$20', desc: 'Shape, lineup, hot towel finish', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M12 2a5 5 0 015 5v3c0 3-2 5-5 5s-5-2-5-5V7a5 5 0 015-5z"/><path d="M7 15c-2 1-3 3-3 5h16c0-2-1-4-3-5"/></svg> },
              { name: 'Hot Shave', price: '$40', desc: 'Straight razor with hot towel treatment', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M6 3l12 18M6 21L18 3"/><rect x="9" y="9" width="6" height="6" rx="1"/></svg> },
            ].map(s => (
              <div key={s.name} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(168,85,247,0.2)', borderRadius: 6, padding: '10px' }}>
                <div style={{ marginBottom: 8 }}>{s.icon}</div>
                <div style={{ fontSize: 13, fontWeight: 800, color: '#fff', marginBottom: 3 }}>{s.price}</div>
                <div style={{ fontSize: 9, fontWeight: 700, marginBottom: 4 }}>{s.name}</div>
                <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.38)', lineHeight: 1.5 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Booking */}
        <div style={{ padding: '0 24px 20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeLinecap="round" width="14" height="14"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
            <span style={{ fontSize: 8, fontWeight: 700, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.16em', textTransform: 'uppercase' }}>Book Online</span>
          </div>
          <div style={{ fontSize: 12, fontWeight: 800, marginBottom: 10 }}>Available This Week</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 4 }}>
            {['9:00 AM', '10:30 AM', '12:00 PM', '1:30 PM', '3:00 PM', '4:30 PM', '5:00 PM', '6:00 PM', '6:30 PM', '7:00 PM'].map((time, i) => (
              <div key={time} style={{ background: i === 2 ? '#a855f7' : 'rgba(255,255,255,0.05)', border: `1px solid ${i === 2 ? '#a855f7' : 'rgba(255,255,255,0.1)'}`, borderRadius: 4, padding: '5px 0', textAlign: 'center', fontSize: 7, color: i === 2 ? '#fff' : 'rgba(255,255,255,0.5)', fontWeight: 600 }}>{time}</div>
            ))}
          </div>
        </div>
        {/* Footer */}
        <div style={{ padding: '12px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <span style={{ fontSize: 8, fontWeight: 800, color: '#fff' }}>PRECISION BARBERS</span>
          <span style={{ fontSize: 7, color: 'rgba(255,255,255,0.2)' }}>© 2026 Precision Barbers. All rights reserved.</span>
        </div>
      </div>
    ),
  },
];

const industries = [
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="26" height="26"><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/><circle cx="12" cy="12" r="9"/></svg>, title: 'Gyms & Fitness' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="26" height="26"><path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>, title: 'Restaurants' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="26" height="26"><path strokeLinecap="round" strokeLinejoin="round" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"/></svg>, title: 'Barbershops' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="26" height="26"><path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"/></svg>, title: 'Contractors' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="26" height="26"><path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22" strokeLinecap="round" strokeLinejoin="round"/></svg>, title: 'Real Estate' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="26" height="26"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>, title: 'Small Businesses' },
];

const pricing = [
  { name: 'Starter', tagline: 'Perfect for small businesses.', popular: false, features: ['Custom Website', 'Mobile Responsive Design', 'Contact Form', 'Basic SEO Setup'] },
  { name: 'Growth', tagline: 'For businesses ready to grow.', popular: true, features: ['Everything in Starter', 'Additional Pages', 'Google Business Profile Setup', 'Performance Optimization'] },
  { name: 'Premium', tagline: 'The complete business solution.', popular: false, features: ['Everything in Growth', 'Content Creation Setup', 'Advanced Optimization', 'Priority Support'] },
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
