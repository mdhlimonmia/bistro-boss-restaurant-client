import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../pages/Share/Navbar/NavBar";
import Footer from "../pages/Share/Footer/Footer";

const Main = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('/signup');
//   console.log(location);

  return (
    <div>
      {noHeaderFooter || <NavBar></NavBar>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
