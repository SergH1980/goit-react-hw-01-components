import PropTypes from 'prop-types';

import {
  FriendCard,
  FriendOnlineStatus,
  FriendAvatar,
  FriendName,
} from './FriendListItem.styled';

export const FriendsListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <FriendCard key={id}>
      <FriendOnlineStatus isOnline={isOnline}></FriendOnlineStatus>
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendCard>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
