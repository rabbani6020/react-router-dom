import { Routes, Route, Navigate } from "react-router-dom";
import Profile from "../pages/profile";
import NotFound from "../pages/notfound/not_found";
import Home from "../pages/home";
import Dashboard from "../pages/dashboard";
import Auth from "../pages/auth";
import { useEffect, useState } from "react";

const AllRoutes = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem("user", user);
  }, [user]);

  useEffect(() => {
    const userInfo = localStorage.getItem("user");
    userInfo && JSON.parse(userInfo) ? setUser(true) : setUser(false);
  }, []);

  const loginHandler = () => {
    setUser(true);
  };
  const logoutHandler = () => {
    setUser(false);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {!user && (
          <Route
            path="/auth"
            element={<Auth authenticate={() => loginHandler()} />}
          />
        )}

        {user && (
          <>
            <Route
              path="/profile"
              element={<Profile logoutHandler={() => logoutHandler()} />}
            />
            <Route path="/dashboard" element={<Dashboard />} />
          </>
        )}
        <Route path="*" element={<NotFound />} />
        <Route
          path="/auth"
          element={<Navigate to={user ? "/profile" : "/auth"} />}
        />
      </Routes>
    </>
  );
};

export default AllRoutes;
