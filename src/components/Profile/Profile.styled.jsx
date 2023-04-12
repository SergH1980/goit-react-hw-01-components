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

  background-color: rgb(219, 238, 212);
  border-radius: 10px;

  box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.2);
  overflow: auto;
`;

export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProfileImage = styled.img`
  --s: 150px; /* the size of the image */
  --b: 8px; /* the border thickness*/
  --g: 0px; /* the gap */
  --c: rgb(71, 110, 110); /* the color */

  width: var(--s);

  outline: calc(var(--s) / 2) solid #0009;
  outline-offset: calc(var(--s) / -2);
  cursor: pointer;
  transition: 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  border-radius: 50%;
  background-color: rgb(125, 174, 158);
  box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.2);

  &:hover {
    outline: var(--b) solid var(--c);
    outline-offset: var(--g);
  }
`;

export const ProfileName = styled.p`
  font-size: 40px;
  color: rgb(71, 110, 110);
  font-weight: 600;
`;

export const ProfileTag = styled.p`
  margin-top: 0px;
  font-size: 20px;
  font-weight: 600;
  color: rgb(255, 183, 50);
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
  background-color: rgb(208, 255, 255);

  border-top: 1px solid rgba(0, 0, 0, 0.2);
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
    border-right: 1px solid rgba(0, 0, 0, 0.2);
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
