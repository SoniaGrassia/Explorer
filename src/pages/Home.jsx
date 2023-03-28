// import { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer";
import Card from "../components/card/Card";
import styles from "../styles/Home.module.scss";

export default function Home() {
  // const [dataList, setDataList] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.musement.com/api/v3/activities.json")
  //     .then((res) => res.json())
  //     .then(({ data }) => setDataList(data.data));
  //   console.log(dataList);
  // }, []);
  return (
    <div className={styles.Home}>
      <Navbar />
      <h1>Home</h1>
      <Card />
      <Footer />
    </div>
  );
}
