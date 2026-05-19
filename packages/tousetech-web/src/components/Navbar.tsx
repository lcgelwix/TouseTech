'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.brand}>
        <div className={styles.brandLogo}><Logo /></div>
        <span>TouseTech</span>
      </Link>

      <ul className={`${styles.links} ${open ? styles.open : ''}`}>
        <li><a href="/#home" onClick={() => setOpen(false)}>Home</a></li>
        <li><a href="/#services" onClick={() => setOpen(false)}>Services</a></li>
        <li><a href="/#work" onClick={() => setOpen(false)}>Work</a></li>
        <li><a href="/#contact" onClick={() => setOpen(false)}>Contact</a></li>
      </ul>

      <Link href="/contact" className={styles.ctaBtn}>Get Started</Link>

      <button
        className={styles.hamburger}
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span className={`${styles.bar} ${open ? styles.barTop : ''}`} />
        <span className={`${styles.bar} ${open ? styles.barMid : ''}`} />
        <span className={`${styles.bar} ${open ? styles.barBot : ''}`} />
      </button>
    </nav>
  );
}
