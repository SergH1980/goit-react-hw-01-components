import styled from '@emotion/styled';

export const TableStatisticsItem = styled.tr`
  display: flex;
  :nth-of-type(2n) {
    background-color: ${p => p.theme.colors.secondaryBackground};
  }

  :hover {
    background-color: ${p => p.theme.colors.white};
  }
`;

export const TableStatisticsValue = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;

  width: calc(100% / 3);
  padding: 5px 0px;

  border: 1px solid rgba(0, 0, 0, 0.2);

  text-transform: capitalize;

  :nth-of-type(2) {
    font-size: 14px;
  }

  :first-of-type,
  :nth-of-type(3) {
    font-weight: 600;
  }

  :hover {
    box-shadow: ${p => {
      return p.theme.shadow.inset;
    }};
    background-color: ${p => p.theme.colors.tableHighlight};
    color: white;
  }
`;
