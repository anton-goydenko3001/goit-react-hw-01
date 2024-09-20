import FriendListItem from "../FriendListItem/FriendListItem";

import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map((friends) => (
        <li key={friends.id}>
          <FriendListItem friends={friends} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
