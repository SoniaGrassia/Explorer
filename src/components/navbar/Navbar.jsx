import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

const Navbar = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const onHandleInput = (e) => setInputValue(() => e.target.value);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    navigate(`/city/${inputValue.toLowerCase()}`);
    setInputValue(() => "");
  };

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
      <form className={styles.form} onSubmit={onHandleSubmit}>
        <input
          type="text"
          placeholder="Search.."
          value={inputValue}
          onChange={onHandleInput}
        />
      </form>
    </div>
  );
};

export default Navbar;
