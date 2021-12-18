import styled from 'styled-components';

const StatsSection = styled.section`
  padding: 30px 0;
  align-items: center;
  text-align: center;
`;
const StatsTitle = styled.h2`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`;
const StatsList = styled.ul`
  display: inline-flex;
  padding: 0;
`;
const StatsListItem = styled.li`
  list-style: none;
  width: 100px;
  padding: 15px;
  background-color: ${props => props.bgdClr};
`;
const StatsListText = styled.span`
  display: block;
  text-align: center;
  font-size: 15px;
  color: white;
`;
const StatsListTextBig = styled(StatsListText)`
  text-align: center;
  font-size: 25px;
`;

export {
  StatsSection,
  StatsTitle,
  StatsList,
  StatsListItem,
  StatsListText,
  StatsListTextBig,
};
