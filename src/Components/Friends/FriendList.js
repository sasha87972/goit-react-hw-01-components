import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { Wrapper, List } from './FriendList.styles';

const FriendList = ({ items }) => {
  return (
    <Wrapper>
      <List>
        {items.map(item => (
          <FriendListItem
            key={item.id}
            avatar={item.avatar}
            name={item.name}
            status={item.isOnline}
          />
        ))}
      </List>
    </Wrapper>
  );
};

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;
