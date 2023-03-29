import styles from "./index.module.scss";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";

const MainLayouts = () => {
  return (
    <div className={styles.MainLayouts}>
      <Navbar />
      <section>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};
export default MainLayouts;
