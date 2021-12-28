import { Link } from "react-router-dom";

const Profile = ({ logoutHandler }) => {
  return (
    <>
      <div>
        <h2>This is Profile Page</h2>
        <div className="mb-3">
          <Link className="btn btn-danger" to="/dashboard">
            Go To DashBoard
          </Link>
        </div>
        <div>
          <button className="btn btn-success" onClick={logoutHandler}>
            Log Out
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
