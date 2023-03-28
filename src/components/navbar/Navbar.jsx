import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <Link className={styles.about} to="/about">
        About
      </Link>
    </div>
  );
};

export default Navbar;
