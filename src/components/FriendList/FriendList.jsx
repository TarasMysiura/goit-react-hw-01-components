import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Friends, Li, Name, Status } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Friends className="friend-list">
      {friends.map(({ id, isOnline, avatar, name }) => (
        <Li className="item" key={id}>
          {isOnline ? (
            <Status
              className="status"
              style={{ backgroundColor: 'green' }}
            ></Status>
          ) : (
            <Status
              className="status"
              style={{ backgroundColor: 'red' }}
            ></Status>
          )}
          <Avatar
            className="avatar"
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <Name className="name">{name}</Name>
        </Li>
      ))}
    </Friends>
  );
};

FriendList.propTypes = {
  id: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
