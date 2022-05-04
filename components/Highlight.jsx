import styles from '../styles/Highlight.module.css';

// import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Highlight = () => {
  return (
    <div className={styles.highlight_container}>
      {/* <FaAngleLeft size={40} /> */}
      <img
        className={styles.highlight_image}
        src="https://user-images.githubusercontent.com/70451928/166390465-fc137271-f827-4681-a6b4-85394b6936b5.jpg"
        alt=""
      />
      {/* <FaAngleRight size={40} /> */}
    </div>
  );
};

export default Highlight;
