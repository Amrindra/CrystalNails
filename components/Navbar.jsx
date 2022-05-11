import styles from "../styles/Navbar.module.css";
import { FaFacebook, FaPhoneSquare } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isScrolled ? styles.navbar_scrolled : styles.navbar_container
      } `}
    >
      <div className={styles.navbar_logo}>
        <h1>Crystal Nails</h1>
      </div>

      <ul className={styles.navbar_link_items}>
        <li className={styles.nav_list_item}>Service</li>
        <li className={styles.nav_list_item}>Contact</li>
        <li className={styles.nav_list_item}>Appointment</li>
      </ul>

      <div className={styles.navbar_icons}>
        <a
          href="https://www.instagram.com/crystalnailslynn/"
          target="_blank"
          rel="noreferrer"
        >
          <SiInstagram className={styles.nav_icon} />
        </a>

        <a
          href="https://www.facebook.com/saoborey.ouk"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook className={styles.nav_icon} />
        </a>

        <FaPhoneSquare className={styles.nav_icon} />
      </div>
    </header>
  );
};
export default Navbar;
