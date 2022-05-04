import Head from 'next/head';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Highlight from '../components/Highlight';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <Navbar />
        <Banner />

        <h3 className={styles.highlight_title}>Check our beautiful design</h3>
        <section className={styles.highlight_section_wrapper}>
          <FaAngleLeft
            size={40}
            className={`${styles.highlight_arrow} ${styles.left}`}
          />
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
          <FaAngleRight
            size={40}
            className={`${styles.highlight_arrow} ${styles.right}`}
          />
        </section>
      </main>
    </div>
  );
}
