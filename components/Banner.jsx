import Image from 'next/image';
import styles from '../styles/Banner.module.css';

const Banner = () => {
  return (
    <div className={styles.banner_container}>
      <div>
        {/* <Image
          src="https://user-images.githubusercontent.com/70451928/166390465-fc137271-f827-4681-a6b4-85394b6936b5.jpg"
          layout="fill"
          objectFit="cover"
        /> */}
        <img
          className={styles.banner_image}
          src="https://user-images.githubusercontent.com/70451928/166622913-b12668b6-c853-49ab-a376-e2ee62c6dd8e.png"
          alt=""
        />
      </div>

      <div className={styles.banner_intro}>
        <h1 className={styles.banner_title}>
          Welcome <br />
          <span className={styles.banner_sub_title}>
            To a Full Beauty & CO Experience
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Banner;
