import Footer from "../components/footer";
import Header from "../components/header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container py-5">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
