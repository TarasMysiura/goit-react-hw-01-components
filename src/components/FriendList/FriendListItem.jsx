import React from 'react';
import PropTypes from 'prop-types';

import { Li, StatusSpan, AvatarImg, NameP } from './FriendList.styled';

export const FriendListItem = ({ friends }) => {
    return friends.map(({ id, isOnline, avatar, name }) => (
    <Li key={id}>
      {isOnline ? (
        <StatusSpan style={{ backgroundColor: 'green' }}></StatusSpan>
      ) : (
        <StatusSpan style={{ backgroundColor: 'red' }}></StatusSpan>
      )}
      <AvatarImg src={avatar} alt="User avatar" width="48" />
      <NameP>{name}</NameP>
    </Li>
  ));
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
