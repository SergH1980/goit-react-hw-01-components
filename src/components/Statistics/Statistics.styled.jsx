import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
  background-color: ${p => p.theme.colors.mainBackground};
  max-width: 450px;
  margin: 0 auto;

  padding-top: 20px;
  margin-bottom: 50px;

  border-radius: ${p => p.theme.border.radius};
  box-shadow: ${p => p.theme.shadow.box};
  overflow: auto;
`;

export const StatisticsTitle = styled.h2`
  text-align: center;
  margin-bottom: 40px;

  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: ${p => p.theme.colors.titleColor};
  font-size: 30px;
  font-style: italic;
  letter-spacing: 3px;
`;

export const StatList = styled.ul`
  list-style: none;
  display: flex;

  justify-content: center;
  align-items: center;
  // padding-left: 0;
  margin: 0;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: calc(100% / 5);

  padding-bottom: 20px;
  padding-top: 20px;

  border-top: ${p => p.theme.border.separator};
  background-color: ${p => p.theme.colors.secondaryBackground};
  overflow: auto;

  :not(:last-child) {
    border-right: ${p => p.theme.border.separator};
  }
`;

export const StatName = styled.span`
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 15px;
`;

export const StatPercentage = styled.span`
  font-weight: 600;
  font-size: 20px;
`;
