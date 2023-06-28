import React from 'react';
import './FriendList.css';
import PropTypes from 'prop-types';


export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ id, isOnline, avatar, name }) => (
        <li className="item" key={id}>
          {isOnline ? (
            <span
              className="status"
              style={{ backgroundColor: 'green' }}
            ></span>
          ) : (
            <span className="status" style={{ backgroundColor: 'red' }}></span>
          )}
          <img className="avatar" src={avatar} alt="User avatar" width="48" />
          <p className="name">{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  id: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

