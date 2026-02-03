import logo from '../logo.svg'
import ReactDOM from 'react-dom/client';
//import './Profile.css'


  function Profile() {
  const getCurrentTime = () => new Date().toTimeString();

  return (
    <div>
      <p>
        The current time is <span className="red">{getCurrentTime()}</span>
      </p>
    </div>
  );
}
export default Profile;

// function Profile() {
// return (

//   <div className="card">
//     <img
//       src={logo}
//       alt="Profile"
//       className="card-img"
//     />
//     <h2 className="card-name">Rahul Patil</h2>
//     <p className="card-role">Frontend Developer</p>
//     <button className="card-btn">View Profile</button>
//   </div>

// )}

