import styled from 'styled-components';

const Table = styled.table`
  margin: 50px auto;
  text-align: center;
  font-size: 25px;
`;
const TableTitle = styled.th`
  padding: 5px;
  background-color: #55acee;
  color: white;
  text-transform: capitalize;
  border: 1px solid white;
`;
const TableCell = styled.td`
  width: 300px;
  padding: 5px;
  border: 1px solid #98caa3;
`;

export { Table, TableTitle, TableCell };
