import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// import { GET } from "../../utils/http";
import { activities } from "../../moks/activities";
import styles from "./id.module.scss";

export default function Activity() {
  const { id } = useParams();
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    //   GET(id).then((data) => {
    setActivity(activities.data.find((activity) => activity.uuid === id));
    // console.log(activity);
    //   });
  }, []);
  return (
    <div className={styles.Activity}>
      <h1 className={styles.title}>{activity.title}</h1>
      <div className={styles.containerImage}>
        <img className={styles.image} src={activity.cover_image_url} alt="" />
      </div>
      <p>{activity.about}</p>
      <hr />
      <div className={styles.activities}>
        <h2 className={styles.secondTitle}>
          Best activities in {activity.city?.name}
        </h2>
        {/* si spacca */}
        {/* {activity.categories.map((category) => (
          <h1>{category.name}</h1>
        ))} */}
      </div>
    </div>
  );
}
