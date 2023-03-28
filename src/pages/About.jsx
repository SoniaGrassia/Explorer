import { Link } from "react-router-dom";
import styles from "../styles/About.module.scss";

export default function About() {
  return (
    <div className={styles.About}>
      <h1>About</h1>
      <Link to="/">Home</Link>
    </div>
  );
}
