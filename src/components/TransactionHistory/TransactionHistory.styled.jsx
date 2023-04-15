import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  justify-content: center;
  align-items: center;

  box-shadow: ${p => p.theme.shadow.box};
`;

export const TableHeader = styled.thead`
  width: 100%;
  background-color: ${p => p.theme.colors.titleColor};
`;

export const TableHeaderList = styled.tr`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TableHeaderItem = styled.th`
  width: calc(100% / 3);
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 5px 0px;
  font-size: 20px;
  color: ${p => p.theme.colors.accentColor};
`;

export const TableTransactionsData = styled.tbody`
  background-color: ${p => p.theme.colors.mainBackground};
  width: 100%;
`;

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
