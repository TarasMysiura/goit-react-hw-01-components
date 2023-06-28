// import './Profile.css';
import PropTypes from 'prop-types';
import { Avatar, Card, Description, Label, Li, Location, Name, ProfileStyle, Quantity, Stats, Tag } from './Profile.styled';

export const Profile = ({
  username = 'Petra Marica',
  tag = 'pmarica',
  location = 'Salvador, Brasil',
  avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  stats,
}) => {
  const followers = stats.followers;
  const views = stats.views;
  const likes = stats.likes;

  return (
    <Card className="card">
      <ProfileStyle className="profile">
        <Description className="description">
          <Avatar src={avatar} alt="User avatar" className="avatar" />

          <Name className="name">{username}</Name>
          <Tag className="tag">@{tag}</Tag>
          <Location className="location">{location}</Location>
        </Description>

        <Stats className="stats">
          <Li>
            <Label className="label">Followers</Label>
            <Quantity className="quantity">{followers}</Quantity>
          </Li>
          <Li>
            <Label className="label">Views</Label>
            <Quantity className="quantity">{views}</Quantity>
          </Li>
          <Li>
            <Label className="label">Likes</Label>
            <Quantity className="quantity">{likes}</Quantity>
          </Li>
        </Stats>
      </ProfileStyle>
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
