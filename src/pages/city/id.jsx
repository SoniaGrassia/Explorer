import { activities } from "../../moks/activities";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./id.module.scss";

export default function City() {
  const [activity, setActivity] = useState([]);

  const { id } = useParams();

  // useEffect(() => {
  //   setActivity(activities.data.find((activity) => activity.city.name === id));
  // });
  return (
    <div className={styles.City}>
      <h1></h1>
    </div>
  );
}
