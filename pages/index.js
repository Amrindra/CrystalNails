import Head from 'next/head';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Highlight from '../components/Highlight';
import styles from '../styles/Home.module.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useRef } from 'react';

export default function Home() {
  const highlightRef = useRef(null);

  // const []

  const handleSlider = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;

      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      highlightRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

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
          <div className={styles.highlight_section} ref={highlightRef}>
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
