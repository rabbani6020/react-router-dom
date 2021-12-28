import { useNavigate } from "react-router-dom";

const Auth = ({ authenticate }) => {
  const navigate = useNavigate();
  const loginHandler = () => {
    authenticate();
    navigate("/profile");
  };
  return (
    <>
      <div>
        <h2>This is Auth Page</h2>
        <div>
          <button className="btn btn-primary" onClick={loginHandler}>
            Log In
          </button>
        </div>
      </div>
    </>
  );
};

export default Auth;
