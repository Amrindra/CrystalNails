import styles from '../styles/Highlight.module.css';

const Highlight = ({ imageScr }) => {
  return (
    <div className={styles.highlight_container}>
      <img className={styles.highlight_image} src={imageScr} alt="" />
    </div>
  );
};

export default Highlight;
