import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const User = () => {
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
  return (
    <>
      <div>
        {!!users && (
          <>
            {users.map((user) => (
              <h2>This is User Page for {user.name}</h2>
            ))}
          </>
        )}
        <h2>Use List</h2>
        {!!isLoading && <h2 className="loading">Loading......</h2>}
        {!!errors && <h2>{errors}</h2>}
        {!!users && (
          <ul className="d-grid gap-4">
            {users.map((user) => (
              <li className="card p-3" key={user.id}>
                
                <p>{user.email}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default User;
