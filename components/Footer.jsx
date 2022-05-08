import styles from "../styles/Footer.module.css";
import {
  FaFacebook,
  FaPhoneSquare,
  FaCalendarMinus,
  FaClock,
  FaLocationArrow,
  FaPhoneAlt
} from "react-icons/fa";
import { SiInstagram } from "react-icons/si";

const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.footer_left}>
        <div className={styles.footer_icons}>
          <SiInstagram className={styles.footer_icon} />
          <FaFacebook className={styles.footer_icon} />
          <FaPhoneSquare className={styles.footer_icon} />
        </div>

        <div className={styles.footer_hour_wrapper}>
          <ul className={styles.footer_hour}>
            <h3 className={styles.hour_title}>HOURS</h3>
            <li className={styles.hour_list_item}>
              <span>
                <FaCalendarMinus />
              </span>
              {"  "}
              MONDAY - SATURDAY
            </li>
            <li className={styles.hour_list_item}>
              <span>
                <FaClock />
              </span>{" "}
              10AM - 7PM
            </li>

            <li className={styles.hour_list_item}>
              {" "}
              <span>
                <FaLocationArrow />
              </span>{" "}
              30 Boston St #5, Lynn, MA 01904
            </li>

            <li className={styles.hour_list_item}>
              {" "}
              <span>
                <FaPhoneAlt />
              </span>{" "}
              (781) 592-0992
            </li>
          </ul>

          <ul className={styles.footer_hour}>
            <h3 className={styles.hour_title}>About Us</h3>
            <li className={styles.hour_list_item}>
              <span>
                <FaCalendarMinus />
              </span>
              {"  "}
              MONDAY - SATURDAY
            </li>
            <li className={styles.hour_list_item}>
              <span>
                <FaClock />
              </span>{" "}
              10AM - 7PM
            </li>

            <li className={styles.hour_list_item}>
              {" "}
              <span>
                <FaLocationArrow />
              </span>{" "}
              30 Boston St #5, Lynn, MA 01904
            </li>

            <li className={styles.hour_list_item}>
              {" "}
              <span>
                <FaPhoneAlt />
              </span>{" "}
              (781) 592-0992
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footer_right}>
        <iframe
          className="map"
          title="google-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2942.601813574548!2d-70.95784388538401!3d42.4787567355915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e36d2f3a4feab1%3A0xb62e9630bc875f5b!2sCrystal%20Nails%20%26%20Spa!5e0!3m2!1sen!2sus!4v1651782001418!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </footer>
  );
};

export default Footer;
