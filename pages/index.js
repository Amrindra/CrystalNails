import Head from 'next/head';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Highlight from '../components/Highlight';
import styles from '../styles/Home.module.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useRef, useState } from 'react';
import highlightData from '../data/highlightData';
import highlightTrending from '../data/highlightTrending';

export default function Home() {
  const highlightRefOne = useRef(null);
  const highlightRefTwo = useRef(null);

  const [isSlideOne, setIsSlideOne] = useState(false);
  const [isSlideTwo, setIsSlideTwo] = useState(false);

  const handleSliderOne = (direction) => {
    setIsSlideOne(true);

    if (highlightRefOne.current) {
      const { scrollLeft, clientWidth } = highlightRefOne.current;

      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      highlightRefOne.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const handleSliderTwo = (direction) => {
    setIsSlideTwo(true);

    if (highlightRefTwo.current) {
      const { scrollLeft, clientWidth } = highlightRefTwo.current;

      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      highlightRefTwo.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Head>
        <title>Crystal Nails | Homepage</title>
      </Head>

      <main>
        <Navbar />
        <Banner />

        <h3 className={styles.highlight_title}>Check our beautiful design</h3>

        <section className={styles.highlight_section_wrapper}>
          <FaAngleLeft
            style={{ display: !isSlideOne && 'none' }}
            size={40}
            className={`${styles.highlight_arrow} ${styles.left}`}
            onClick={() => handleSliderOne('left')}
          />

          <div className={styles.highlight_section} ref={highlightRefOne}>
            {highlightData.map((data, index) => (
              <Highlight key={index} imageScr={data.imageScr} />
            ))}
          </div>

          <FaAngleRight
            size={40}
            className={`${styles.highlight_arrow} ${styles.right}`}
            onClick={() => handleSliderOne('right')}
          />
        </section>

        <h3 className={styles.highlight_title}>Trending at our salon</h3>

        <section className={styles.highlight_section_wrapper}>
          <FaAngleLeft
            style={{ display: !isSlideTwo && 'none' }}
            size={40}
            className={`${styles.highlight_arrow} ${styles.left}`}
            onClick={() => handleSliderTwo('left')}
          />

          <div className={styles.highlight_section} ref={highlightRefTwo}>
            {highlightTrending.map((data, index) => (
              <Highlight key={index} imageScr={data.imageScr} />
            ))}
          </div>

          <FaAngleRight
            size={40}
            className={`${styles.highlight_arrow} ${styles.right}`}
            onClick={() => handleSliderTwo('right')}
          />
        </section>
      </main>
    </div>
  );
}
