import styles from "../../styles/HighlightBase.module.css";

const HighlightBase = ({ imageScr }) => {
  return (
    <div className={styles.highlight_container}>
      <img className={styles.highlight_image} src={imageScr} alt="" />
    </div>
  );
};

export default HighlightBase;
