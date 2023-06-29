import React from 'react';
import PropTypes from 'prop-types';
import { Friends} from './FriendList.styled';
import FriendListItem from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <Friends>
      <FriendListItem />
    </Friends>
  );
};

// FriendList.propTypes = {
//   id: PropTypes.string.isRequired,
//   isOnline: PropTypes.bool.isRequired,
//   avatar: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
// };
