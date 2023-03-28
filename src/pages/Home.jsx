import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.Home}>
      <Navbar />
      <h1>Home</h1>
      <Footer />
    </div>
  );
}
