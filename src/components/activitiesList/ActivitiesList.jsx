import Card from "../card";
import styles from "./index.module.scss";

const ActivitiesList = ({ data }) => {
  return (
    <div className={styles.ActivitiesList}>
      {data.map((item) => (
        <Card data={item} key={item.slug_id} />
      ))}
    </div>
  );
};
export default ActivitiesList;
