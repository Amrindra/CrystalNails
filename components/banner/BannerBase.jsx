import styles from "../../styles/BannerBase.module.css";

const BannerBase = ({ bannerImage }) => {
  return (
    <div className={styles.banner_container}>
      <div>
        <img className={styles.banner_image} src={bannerImage} alt="" />
      </div>

      <div className={styles.banner_intro}>
        <h1 className={styles.banner_title}>Welcome</h1>
        <h3 className={styles.banner_sub_title}>
          To a Full Beauty & CO Experience
        </h3>
      </div>
    </div>
  );
};

export default BannerBase;
