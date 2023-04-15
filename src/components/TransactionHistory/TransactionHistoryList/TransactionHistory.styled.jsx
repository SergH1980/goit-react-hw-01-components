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
