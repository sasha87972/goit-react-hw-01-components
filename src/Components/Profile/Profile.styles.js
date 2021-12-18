import styled from 'styled-components';

const Wrapper = styled.div`
  align-items: center;
  text-align: center;
`;

const Image = styled.img`
  display: inner-block;
  width: 200px;
  height: auto;
  border-radius: 50%;
`;

const Text = styled.p`
  font-size: 16;
  color: grey;
`;
const TextBold = styled(Text)`
  color: black;
  font-weight: bold;
`;

const List = styled.ul`
  display: inline-flex;
  padding: 0;
`;
const ListItem = styled.li`
  list-style: none;
  width: 100px;
  padding: 15px;
  background-color: #bafdfd;
  border: 1px solid #84b5b5;
`;
const ListText = styled.span`
  display: block;
  text-align: center;
  font-size: 15px;
  color: grey;
`;
const ListTextBold = styled(ListText)`
  font-weight: bold;
  color: black;
`;

export {
  Wrapper,
  Image,
  Text,
  TextBold,
  List,
  ListItem,
  ListText,
  ListTextBold,
};
