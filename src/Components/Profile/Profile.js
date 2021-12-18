import PropTypes from 'prop-types';
import {
  Wrapper,
  Image,
  Text,
  TextBold,
  List,
  ListItem,
  ListText,
  ListTextBold,
} from './Profile.styles';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Wrapper>
      <Wrapper>
        <Image src={avatar} alt="User avatar" />
        <TextBold>{username}</TextBold>
        <Text>@{tag}</Text>
        <Text>{location}</Text>
      </Wrapper>

      <List>
        <ListItem>
          <ListText>Followers</ListText>
          <ListTextBold>{stats.followers}</ListTextBold>
        </ListItem>
        <ListItem>
          <ListText>Views</ListText>
          <ListTextBold>{stats.views}</ListTextBold>
        </ListItem>
        <ListItem>
          <ListText>Likes</ListText>
          <ListTextBold>{stats.likes}</ListTextBold>
        </ListItem>
      </List>
    </Wrapper>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
