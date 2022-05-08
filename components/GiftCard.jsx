import styles from "../styles/GiftCard.module.css";

const GiftCard = () => {
  return (
    <div className={styles.giftcard_container}>
      <div className={styles.giftcard_left}>
        <img
          className={styles.giftcard_left_img}
          src="https://user-images.githubusercontent.com/70451928/166390465-fc137271-f827-4681-a6b4-85394b6936b5.jpg"
          alt=""
        />
        <div className={styles.giftcard_left_bg}></div>
        {/* <div className={styles.giftcard_left_img_wrapper}> */}
        {/* </div> */}
      </div>

      <div className={styles.giftcard_right}>
        <h3>Shop Our Gift Cards</h3>
        <p>Buying our gift card for your love ones.</p>
      </div>
    </div>
  );
};

export default GiftCard;
