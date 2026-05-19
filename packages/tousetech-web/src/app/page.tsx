import Link from 'next/link';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.logoContainer}>
            <Logo />
          </div>
          <Link href="/contact" className={styles.ctaButton}>
            Contact Us
          </Link>
        </div>
      </main>
    </>
  );
}
