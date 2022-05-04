import styles from '../styles/Highlight.module.css';

const Highlight = () => {
  return (
    <div className={styles.highlight_container}>
      <img
        className={styles.highlight_image}
        src="https://user-images.githubusercontent.com/70451928/166390465-fc137271-f827-4681-a6b4-85394b6936b5.jpg"
        alt=""
      />
    </div>
  );
};

export default Highlight;
