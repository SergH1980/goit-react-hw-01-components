import styled from '@emotion/styled';

export const FriendCard = styled.li`
  display: flex;
  width: 100%;

  background-color: ${p => {
    return p.theme.colors.secondaryBackground;
  }};
  align-items: center;
  box-shadow: ${p => {
    return p.theme.shadow.inset;
  }};
  padding: 5px 0px;
`;

export const FriendOnlineStatus = styled.span`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  display: inline-block;
  margin-left: 20px;

  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;

export const FriendAvatar = styled.img`
  margin-left: 70px;
  border-radius: 50%;
  box-shadow: ${p => {
    return p.theme.shadow.box;
  }};
  padding: 5px;

  :hover {
    transform: scale(1.05);
    box-shadow: ${p => {
      return p.theme.shadow.inset;
    }};
`;

export const FriendName = styled.p`
  margin-left: 50px;
  color: ${p => {
    return p.theme.colors.accentColor;
  }};
  font-weight: 700;
  font-size: 20px;
`;
