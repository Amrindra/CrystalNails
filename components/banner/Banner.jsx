import { useEffect, useState } from "react";
import bannerImageData from "../../data/bannerImageData";
import styles from "../../styles/Banner.module.css";
import BannerBase from "./BannerBase";

const len = bannerImageData.length - 1;

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // This inverval useEffect hook is used for banner to show images ever 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex]);
  return (
    <>
      {bannerImageData.map((data, index) => (
        <div
          key={index}
          className={`${
            index === activeIndex ? styles.slides : styles.inactive
          } ${styles.banner_section}`}
        >
          <BannerBase key={index} index={index} bannerImage={data.urls} />
        </div>
      ))}
    </>
  );
};

export default Banner;
