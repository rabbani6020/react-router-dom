import { Routes, Route } from "react-router-dom";
import About from "../pages/about";
import Blog from "../pages/blog";
import Home from "../pages/home";
import Profile from "../pages/profile";
import Contact from "../pages/contact";
import Posts from "../pages/posts";
import User from "../pages/profile/user";
import UserOne from "../pages/profile/user/user_1";
import UserTwo from "../pages/profile/user/user_2";
import NotFound from "../pages/notfound/not_found";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />}>
          {/* <Route path="blog/:postId" element={<Posts />}/> */}
        </Route>
        <Route path="posts" element={<Posts />} />
        <Route path="profile/:id" element={<Profile />}>
          <Route path="user_1" element={<UserOne />} />
          <Route path="user_2" element={<UserTwo />} />
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
