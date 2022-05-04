import Head from 'next/head';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Highlight from '../components/Highlight';
import styles from '../styles/Home.module.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useRef, useState } from 'react';

export default function Home() {
  const highlightRef = useRef(null);

  const [isSlide, setIsSlide] = useState(false);

  const handleSlider = (direction) => {
    setIsSlide(true);

    if (highlightRef.current) {
      const { scrollLeft, clientWidth } = highlightRef.current;

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
            style={{ display: !isSlide && 'none' }}
            size={40}
            className={`${styles.highlight_arrow} ${styles.left}`}
            onClick={() => handleSlider('left')}
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
            onClick={() => handleSlider('right')}
          />
        </section>
      </main>
    </div>
  );
}
