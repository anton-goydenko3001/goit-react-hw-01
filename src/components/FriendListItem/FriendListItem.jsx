import styles from "./FriendListItem.module.css";

const FriendListItem = ({ friends: { avatar, name, isOnline } }) => {
  return (
    <div className={styles.friendItem}>
      <img
        className={styles.friendImage}
        src={avatar}
        alt="Avatar"
        width="48"
      />
      <p className={styles.friendName}>{name}</p>
      {isOnline ? (
        <p className={styles.isOnline}>Online</p>
      ) : (
        <p className={styles.isOffLine}>Offline</p>
      )}
    </div>
  );
};

export default FriendListItem;
