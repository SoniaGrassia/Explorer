import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <Link className={styles.item} to="/">
        Home
      </Link>
      <Link className={styles.item} to="/about">
        About
      </Link>
      <Link className={styles.item} to="/activities">
        Activities
      </Link>
    </div>
  );
};

export default Navbar;
