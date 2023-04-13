import styled from '@emotion/styled';

export const FriendListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  overflow: auto;

  margin: 0 auto;
  padding: 0px 0px;
  margin-bottom: 50px;

  width: 320px;
  border-radius: ${p => p.theme.border.radius};
  box-shadow: ${p => {
    return p.theme.shadow.box;
  }};
  background-color: ${p => p.theme.colors.mainBackground};

  list-style: none;
`;
