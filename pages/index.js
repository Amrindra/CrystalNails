import Head from 'next/head';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Highlight from '../components/Highlight';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <Navbar />
        <Banner />

        <section>
          <h3 className={styles.highlight_title}>Check our beautiful design</h3>
          <div className={styles.highlight_section}>
            <Highlight />
            <Highlight />
            <Highlight />
            <Highlight />
            <Highlight />
            <Highlight />
            <Highlight />
            <Highlight />
          </div>
        </section>
      </main>
    </div>
  );
}
