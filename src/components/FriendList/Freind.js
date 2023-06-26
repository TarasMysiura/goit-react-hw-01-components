const Friend = ({list}) => {
  console.log(list);
    return list.map(friend => {
    return (
      <li className="item" key={friend.id}>
        {friend.isOnline ? (
          <span className="status" style={{ backgroundColor: "green" }}></span>
        ) : (<span className="status" style={{ backgroundColor: "red" }}></span>
        ) }
        <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
            <p className="name">{ friend.name}</p>
      </li>
    );
  });
};

export default Friend;
