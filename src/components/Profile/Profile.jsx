import PropTypes from 'prop-types';

import {
  ProfileGeneral,
  ProfileDescription,
  ProfileImage,
  ProfileName,
  ProfileTag,
  ProfileLocation,
  ProfileStats,
  ProfileStatWrap,
  ProfileStatName,
  ProfileStatValue,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileGeneral>
      <ProfileDescription>
        <ProfileImage src={avatar} alt="User avatar" />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </ProfileDescription>

      <ProfileStats>
        <ProfileStatWrap>
          <ProfileStatName>Followers </ProfileStatName>
          <ProfileStatValue>{stats.followers}</ProfileStatValue>
        </ProfileStatWrap>
        <ProfileStatWrap>
          <ProfileStatName>Views </ProfileStatName>
          <ProfileStatValue>{stats.views}</ProfileStatValue>
        </ProfileStatWrap>
        <ProfileStatWrap>
          <ProfileStatName>Likes</ProfileStatName>
          <ProfileStatValue>{stats.likes}</ProfileStatValue>
        </ProfileStatWrap>
      </ProfileStats>
    </ProfileGeneral>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
