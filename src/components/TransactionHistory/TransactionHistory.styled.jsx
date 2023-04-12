import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  width: 1000px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-color: azure;
  justify-content: center;
  align-items: center;

  box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.2);
`;

export const TableHeader = styled.thead`
  width: 100%;
  background-color: rgb(71, 110, 110);
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
  color: rgb(255, 183, 50);
`;

export const TableTransactionsData = styled.tbody`
  background-color: rgb(219, 238, 212);
  width: 100%;

  :nth-child(2n) {
    background-color: rgb(208, 255, 255);
  }
`;

export const TableStatisticsItem = styled.tr`
  display: flex;

  :nth-child(2n) {
    background-color: rgb(219, 238, 212);
  }

  :hover {
    background-color: white;
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

  :nth-child(2) {
    font-size: 14px;
  }

  :first-child,
  :nth-child(3) {
    font-weight: 600;
  }

  :hover {
    box-shadow: inset 0px 0px 4px 2px rgba(146, 145, 145, 0.59);
    background-color: rgb(96, 94, 94);
    color: white;
  }
`;
