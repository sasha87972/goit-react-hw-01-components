import styled from 'styled-components';

const Wrapper = styled.div`
  align-items: center;
  text-align: center;
`;
const List = styled.ul`
  display: inline-block;
  padding: 0;
`;
const ListItem = styled.li`
  display: flex;
  padding: 10px;
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
  width: 300px;
  background-color: #f1f1f1;
`;
const ListStatusOn = styled.span`
  width: 20px;
  height: 20px;
  margin: auto 10px;
  border-radius: 50%;
  background-color: green;
`;
const ListStatusOff = styled(ListStatusOn)`
  background-color: red;
`;
const ListImg = styled.img`
  display: inline-block;
  width: 75px;
  height: auto;
`;
const ListText = styled.p`
margin-left: 30px;
font-size 30px;
font-weight: bold;`;

export {
  Wrapper,
  List,
  ListItem,
  ListStatusOn,
  ListStatusOff,
  ListImg,
  ListText,
};
