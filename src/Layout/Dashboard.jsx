import { Link, Outlet } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineBars,
  AiOutlineMenu,
  AiOutlineShopping,
  AiOutlineMail,
} from "react-icons/ai";
import { MdRestaurant } from "react-icons/md";
import { GiWallet } from "react-icons/gi";
import { BsStars } from "react-icons/bs";
import { TbCalendarTime } from "react-icons/tb";
import { FaUsers, FaBook, FaCalendarAlt, FaShoppingCart } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-white">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side bg-[#D1A054] text-black">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80">
          {/* Sidebar content here */}
          <li>
            <Link to="/dashboard/adminhome">
              <AiOutlineHome></AiOutlineHome> ADMIN HOME
            </Link>
          </li>
          <li>
            <Link to="/dashboard/additems">
              <MdRestaurant></MdRestaurant>ADD ITEMS
            </Link>
          </li>
          <li>
            <Link to="/dashboard/manageitems">
              <AiOutlineBars></AiOutlineBars>MANAGE ITEMS
            </Link>
          </li>
          <li>
            <Link to="/dashboard/managebooking">
              <FaBook></FaBook>MANAGE BOOKING
            </Link>
          </li>
          <li>
            <Link to="/dashboard/allusers">
              <FaUsers></FaUsers>ALL USERS
            </Link>
          </li>

          <li>
            <Link to="/dashboard/userhome">
              <AiOutlineHome></AiOutlineHome> USER HOME
            </Link>
          </li>
          <li>
            <Link to="reservation">
              <FaCalendarAlt></FaCalendarAlt> RESERVATION
            </Link>
          </li>
          <li>
            <Link to="paymenthistory">
              <GiWallet></GiWallet>PAYMENT HISTORY
            </Link>
          </li>
          <li>
            <Link to="mycart">
              <FaShoppingCart></FaShoppingCart>MY CART
            </Link>
          </li>
          <li>
            <Link to="addreview">
              <BsStars></BsStars>ADD REVIEW
            </Link>
          </li>
          <li>
            <Link to="mybooking">
              <TbCalendarTime></TbCalendarTime>MY BOOKING
            </Link>
          </li>
          <hr className="mr-8 ml-2" />
          <li>
            <Link to="/">
              <AiOutlineHome></AiOutlineHome>HOME
            </Link>
          </li>
          <li>
            <Link to="/menu">
              <AiOutlineMenu></AiOutlineMenu>MENU
            </Link>
          </li>
          <li>
            <Link to="/shop">
              <AiOutlineShopping></AiOutlineShopping>SHOP
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <AiOutlineMail></AiOutlineMail>CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
