import { Outlet } from "react-router-dom";
import NavBar from "../pages/Share/Navbar/NavBar";
import Footer from "../pages/Share/Footer/Footer";



const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;