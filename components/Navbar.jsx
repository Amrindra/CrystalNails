import styles from '../styles/Navbar.module.css';
import { FaFacebook, FaPhoneSquare } from 'react-icons/fa';
import { SiInstagram } from 'react-icons/si';

const Navbar = () => {
  return (
    <header className={styles.navbar_container}>
      <div className={styles.navbar_logo}>
        <h1>Crystal Nails</h1>
      </div>

      <ul className={styles.navbar_link_items}>
        <li className={styles.nav_list_item}>Home</li>
        <li className={styles.nav_list_item}>Service</li>
        <li className={styles.nav_list_item}>Contact</li>
        <li className={styles.nav_list_item}>Appointment</li>
        <li className={styles.nav_list_item}>ABout us</li>
      </ul>

      <div className={styles.navbar_icons}>
        <SiInstagram className={styles.nav_icon} />
        <FaFacebook className={styles.nav_icon} />
        <FaPhoneSquare className={styles.nav_icon} />
      </div>
    </header>
  );
};
export default Navbar;
