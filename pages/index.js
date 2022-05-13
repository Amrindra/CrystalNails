import Head from "next/head";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Highlight from "../components/Highlight";
import styles from "../styles/Home.module.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import highlightData from "../data/highlightData";
import highlightTrending from "../data/highlightTrending";
import bannerImageData from "../data/bannerImageData";
import Footer from "../components/Footer";
import GiftCard from "../components/GiftCard";

export const len = bannerImageData.length - 1;

export default function Home() {
  const highlightRefOne = useRef(null);
  const highlightRefTwo = useRef(null);

  const [isSlideOne, setIsSlideOne] = useState(false);
  const [isSlideTwo, setIsSlideTwo] = useState(false);

  const [activeIndex, setActiveIndex] = useState(0);

  // This inverval useEffect hook is used for banner to show images ever 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleSliderOne = (direction) => {
    setIsSlideOne(true);

    if (highlightRefOne.current) {
      const { scrollLeft, clientWidth } = highlightRefOne.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      highlightRefOne.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const handleSliderTwo = (direction) => {
    setIsSlideTwo(true);

    if (highlightRefTwo.current) {
      const { scrollLeft, clientWidth } = highlightRefTwo.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      highlightRefTwo.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className={styles.homepage_container}>
      <Head>
        <title>Crystal Nails | Homepage</title>
      </Head>

      <Navbar />

      <main>
        <section>
          {bannerImageData.map((data, index) => (
            <div
              key={index}
              className={`${
                index === activeIndex ? styles.slides : styles.inactive
              } ${styles.banner_section}`}
            >
              <Banner key={index} index={index} bannerImage={data.urls} />
            </div>
          ))}
        </section>

        <h3 className={styles.highlight_title}>Check our beautiful design</h3>

        <section className={styles.highlight_section_wrapper}>
          <FaAngleLeft
            style={{ display: !isSlideOne && "none" }}
            size={40}
            className={`${styles.highlight_arrow} ${styles.left}`}
            onClick={() => handleSliderOne("left")}
          />

          <div className={styles.highlight_section} ref={highlightRefOne}>
            {highlightData.map((data, index) => (
              <Highlight key={index} imageScr={data.imageScr} />
            ))}
          </div>

          <FaAngleRight
            size={40}
            className={`${styles.highlight_arrow} ${styles.right}`}
            onClick={() => handleSliderOne("right")}
          />
        </section>

        <h3 className={styles.highlight_title}>Trending at our salon</h3>

        <section className={styles.highlight_section_wrapper}>
          <FaAngleLeft
            style={{ display: !isSlideTwo && "none" }}
            size={40}
            className={`${styles.highlight_arrow} ${styles.left}`}
            onClick={() => handleSliderTwo("left")}
          />

          <div className={styles.highlight_section} ref={highlightRefTwo}>
            {highlightTrending.map((data, index) => (
              <Highlight key={index} imageScr={data.imageScr} />
            ))}
          </div>

          <FaAngleRight
            size={40}
            className={`${styles.highlight_arrow} ${styles.right}`}
            onClick={() => handleSliderTwo("right")}
          />
        </section>

        <section>
          <GiftCard />
        </section>
      </main>

      <Footer />
    </div>
  );
}
