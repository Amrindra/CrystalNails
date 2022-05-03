import Image from 'next/image';
import styles from '../styles/Banner.module.css';

const Banner = () => {
  return (
    <div className="styles banner_container">
      <div className={styles.banner_image}>
        {/* <Image
          src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v546batch3-mynt-34-badgewatercolor_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=89288ef4b47127f7f34a5998b50e4470"
          layout="fill"
          objectFit="cover"
        /> */}

        <img
          className={styles.banner_image}
          src="https://user-images.githubusercontent.com/70451928/166390465-fc137271-f827-4681-a6b4-85394b6936b5.jpg"
          alt=""
        />

        <div className={styles.banner_intro}>
          <h1 className={styles.banner_title}>Welcome</h1>
          <h3 className={styles.banner_sub_title}>
            To a Full Beauty & CO Experience
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Banner;
