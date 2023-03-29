import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import styles from "./id.module.scss";

export default function Activity() {
  const { id } = useParams();
  const [activity, setActivity] = useState({});

  useEffect(() => {
    GET(id).then((data) => {
      setActivity(() => data);
    });
  }, []);
  return (
    <div className={styles.Activity}>
      <p>{activity.about}</p>
    </div>
  );
}
