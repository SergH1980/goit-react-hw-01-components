import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendsListItem = ({ avatar, name, isOnline, id }) => {
  console.log(isOnline);
  return (
    <li key={id} className={css.item}>
      <span
        className={`${css.status} ${
          { isOnline } ? `${css.true}` : `${css.false}`
        }`}
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
