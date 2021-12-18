import PropTypes from 'prop-types';
import {
  ListItem,
  ListStatusOn,
  ListStatusOff,
  ListImg,
  ListText,
} from './FriendList.styles';

const FriendListItem = ({ avatar, name, status }) => {
  return (
    <ListItem>
      {status ? <ListStatusOn></ListStatusOn> : <ListStatusOff></ListStatusOff>}
      <ListImg src={avatar} alt="User avatar" />
      <ListText>{name}</ListText>
    </ListItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};

export default FriendListItem;
