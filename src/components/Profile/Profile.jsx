import styles from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.userContainer}>
        <img className={styles.userAvatar} src={image} alt="User avatar" />
        <p className={styles.userName}>{name}</p>
        <p className={styles.userTag}>@{tag}</p>
        <p className={styles.userLocation}>{location}</p>
      </div>

      <ul className={styles.userInformation}>
        <li className={styles.userInfoList}>
          <span className={styles.userInfoItem}>Followers</span>
          <span className={styles.userInfoValue}>{followers}</span>
        </li>

        <li className={styles.userInfoList}>
          <span className={styles.userInfoItem}>Views</span>
          <span className={styles.userInfoValue}>{views}</span>
        </li>

        <li className={styles.userInfoList}>
          <span className={styles.userInfoItem}>Likes</span>
          <span className={styles.userInfoValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
