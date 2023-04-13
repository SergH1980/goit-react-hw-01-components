import styled from '@emotion/styled';

export const ProfileGeneral = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  width: 320px;
  padding-top: 30px;
  margin-bottom: 50px;

  background-color: ${p => p.theme.colors.mainBackground};
  border-radius: ${p => {
    return p.theme.border.radius;
  }};

  box-shadow: ${p => p.theme.shadow.box};
  overflow: auto;
`;

export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProfileImage = styled.img`
  width: 150px;

  outline: calc(150px / 2) solid #0004;
  outline-offset: calc(150px / -2);
  cursor: pointer;
  transition: 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  border-radius: 50%;
  background-color: ${p => p.theme.colors.textColor};
  box-shadow: ${p => {
    return p.theme.shadow.box;
  }};

  &:hover {
    outline: 8px solid ${p => p.theme.colors.titleColor};
    outline-offset: 0px;
  }
`;

export const ProfileName = styled.p`
  font-size: 40px;
  color: ${p => p.theme.colors.titleColor};
  font-weight: 600;
`;

export const ProfileTag = styled.p`
  margin-top: 0px;
  font-size: 20px;
  font-weight: 600;
  color: ${p => p.theme.colors.accentColor}; ;
`;

export const ProfileLocation = styled.p`
  font-size: 25px;
  margin-bottom: 10px;
  font-style: italic;
`;

export const ProfileStats = styled.ul`
  list-style: none;

  display: flex;

  margin-bottom: 0;
  padding-left: 0;
  min-width: 320px;
  background-color: ${p => p.theme.colors.secondaryBackground};

  border-top: ${p => p.theme.border.separator}; ;
`;

export const ProfileStatWrap = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;

  justify-content: center;
  align-items: center;
  width: calc(100% / 3);
  padding-top: 15px;
  padding-bottom: 15px;

  &:not(:last-child) {
    border-right: ${p => p.theme.border.separator};
  }
`;

export const ProfileStatName = styled.span`
  font-size: 20px;
  font-weight: 300;
`;

export const ProfileStatValue = styled.span`
  font-weight: 600;
  font-size: 20px;
`;
