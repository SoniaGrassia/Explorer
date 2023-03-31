import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

const Card = ({ data }) => {
  const navigate = useNavigate();

  const onHandleClick = () => {
    navigate(`/activities/${data.uuid}`);
    // const id = data.uuid;
    // console.log(id);
  };

  return (
    <div className={styles.Card} onClick={onHandleClick}>
      <div className={styles.container}>
        {/* Image */}
        <div className={styles.image}>
          <img src={data.cover_image_url} />
        </div>
        {/* Content */}
        <div className={styles.content}>
          <h1>{data.city?.name}</h1>
          <p>{data.title}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
