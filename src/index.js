// import React from 'react';
import ReactDOM from 'react-dom/client';
import  App  from './components/App';
import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// const imgAvatarUrl = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png';
// const nameAvatar = 'Petra Marica';
// const tagAvatar = '@pmarica';
// const locationAvatar = 'Salvador, Brasil';


// const Profile = props => (
//   <div className="profile">
//     <div className="description">
//       <img
//         src={imgAvatarUrl}
//         alt="User avatar"
//         className="avatar"
//         width="300"
//       />
//       <p className="name">{nameAvatar}</p>
//       <p className="tag">{tagAvatar}</p>
//       <p className="location">{locationAvatar}</p>
//     </div>

//     <ul className="stats">
//       <li>
//         <span className="label">Followers</span>
//         <span className="quantity">1000</span>
//       </li>
//       <li>
//         <span className="label">Views</span>
//         <span className="quantity">2000</span>
//       </li>
//       <li>
//         <span className="label">Likes</span>
//         <span className="quantity">3000</span>
//       </li>
//     </ul>
//   </div>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(App);
