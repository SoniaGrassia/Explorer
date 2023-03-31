import Card from "../../components/card";
import { activities } from "../../moks/activities";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./id.module.scss";

export default function City() {
  const [activity, setActivity] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // console.log(searchParams.get("search"));
    setActivity(
      activities.data.find(
        (activity) => activity.city?.name === searchParams.get("search")
      )
    );
    // console.log(activity);
  });
  return (
    <div className={styles.City}>
      <h1>Risultati per: {searchParams.get("search")}</h1>
      <Card data={activity} />
    </div>
  );
}
