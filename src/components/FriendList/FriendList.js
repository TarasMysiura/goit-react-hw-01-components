import React from 'react';
import Friend from './Freind';
import './FriendList.css';

const FriendList = ({ friends }) => {
  console.log(friends);
  return (
    <ul className="friend-list">
      <Friend list={friends} />
    </ul>
  );
};
export default FriendList;
