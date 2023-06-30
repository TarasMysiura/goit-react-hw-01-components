// import './Profile.css';
import PropTypes from 'prop-types';
import {
  AvatarImg,
  CardDiv,
  DescriptionDiv,
  LabelSpan,
  Li,
  LocationP,
  NameP,
  ProfileStyleDiv,
  QuantitySpan,
  StatsUl,
  TagP,
} from './Profile.styled';

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
    <CardDiv>
      <ProfileStyleDiv>
        <DescriptionDiv>
          <AvatarImg src={avatar} alt="User avatar" className="avatar" />

          <NameP className="name">{username}</NameP>
          <TagP className="tag">@{tag}</TagP>
          <LocationP className="location">{location}</LocationP>
        </DescriptionDiv>

        <StatsUl className="stats">
          <Li>
            <LabelSpan className="label">Followers</LabelSpan>
            <QuantitySpan className="quantity">{followers}</QuantitySpan>
          </Li>
          <Li>
            <LabelSpan className="label">Views</LabelSpan>
            <QuantitySpan className="quantity">{views}</QuantitySpan>
          </Li>
          <Li>
            <LabelSpan className="label">Likes</LabelSpan>
            <QuantitySpan className="quantity">{likes}</QuantitySpan>
          </Li>
        </StatsUl>
      </ProfileStyleDiv>
    </CardDiv>
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

