import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.hero}>
        <div className={styles.logoContainer}>
          <Logo />
        </div>
      </main>
    </>
  );
}
