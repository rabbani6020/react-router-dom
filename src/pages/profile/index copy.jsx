import { useEffect, useState } from "react";
import axios from "axios";
import {
  Link,
  Navigate,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

const Profile = () => {
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const [isLoading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setLoading(false);
        setUsers(res.data.slice(0, 10));
      })
      .catch((error) => {
        setErrors(error);
      });
  }, []);
  const navigateToHome = () => {
    // navigate("/");
    // <Navigate to="/" state={{fromRoutes: location, }}/>
    setRedirect(true);
  };

  console.log(location);

  const searchUser = !!users && users.filter((user) => user.id == id);
  return (
    <>
      <div>
        <h2>This is Profile Page for {id}</h2>
        <button className="btn btn-primary" onClick={navigateToHome}>
          Navigate to home page
        </button>
        {redirect ? <Navigate to="/" state={{ fromRoutes: location }} /> : null}
        <h2>Use List</h2>
        <div>
          <Link to="user_1">User One</Link>
        </div>
        <div>
          <Link to="user_2">User Two</Link>
        </div>
        <div>
          <Outlet />
        </div>
        {!!isLoading && <h2 className="loading">Loading......</h2>}
        {!!errors && <h2>{errors}</h2>}
        {!!searchUser && (
          <ul className="d-grid gap-4">
            {searchUser.map((user) => (
              <li className="card p-3" key={user.id}>
                <h3>
                  <Link to={`${user.id}`} className="text-black">
                    {user.name}
                  </Link>
                </h3>
                <p>{user.email}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Profile;
