import styles from "./index.module.scss";

const Card = () => {
  return (
    <div className={styles.Card}>
      <div className={styles.container}>
        {/* Image */}
        <div className={styles.image}>
          <img
            src="https://images.musement.com/cover/0002/49/fotolia-199353438-subscription-xxl-jpg_header-148705.jpeg"
            alt="cityname"
          />
        </div>
        {/* Content */}
        <div className={styles.content}>
          <h1>Nome città</h1>
          <p>Attrazione e tour guidati</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
