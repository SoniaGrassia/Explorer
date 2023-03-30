import { useState, useEffect } from "react";
// import { GET } from "../../utils/http";
import { activities } from "../../moks/activities";
import ActivitiesList from "../../components/activitiesList";
import styles from "../../styles/Activities.module.scss";

export default function Activities() {
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    //   GET().then(({ data }) => {
    setDataList(activities.data);
    // console.log(dataList);
    //   });
  }, []);
  return (
    <div className={styles.Activities}>
      <h1>Best Activities:</h1>
      <ActivitiesList data={dataList} />
    </div>
  );
}
