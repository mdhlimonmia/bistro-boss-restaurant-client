import { Link, Outlet } from "react-router-dom";
import { AiOutlineHome, AiOutlineBars, AiOutlineMenu, AiOutlineShopping, AiOutlineMail} from "react-icons/ai";
import { MdRestaurant } from "react-icons/md";
import { GiWallet } from "react-icons/gi";
import { BsStars } from "react-icons/bs";
import { TbCalendarTime } from "react-icons/tb";
import { FaUsers,FaBook, FaCalendarAlt, FaShoppingCart} from "react-icons/fa";


const Dashboard = () => {
  return (
    <div className="drawer drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <div className="menu pt-10 pl-4 w-[250px] h-full bg-[#D1A054] text-[#151515] ">
           <div className="pl-4">
           <h1 className="font-[900] text-[24px] uppercase">BISTRO BOSS</h1>
            <h2 className="font-[700] tracking-[5px] text-[17px] uppercase">
              Restaurant
            </h2>
           </div>
          <ul className="mt-14 uppercase pl-0 ml-0 font-[500] text-[16px]">
            {/* Sidebar content here */}
            <li><Link to ="/dashboard/adminhome"><AiOutlineHome></AiOutlineHome> ADMIN HOME</Link></li>
            <li><Link to ="/dashboard/additems"><MdRestaurant></MdRestaurant>ADD ITEMS</Link></li>
            <li><Link to ="/dashboard/manageitems"><AiOutlineBars></AiOutlineBars>MANAGE ITEMS</Link></li>
            <li><Link to ="/dashboard/managebooking"><FaBook></FaBook>MANAGE BOOKING</Link></li>
            <li><Link to ="/dashboard/allusers"><FaUsers></FaUsers>ALL USERS</Link></li>

            <li><Link to ="/dashboard/userhome"><AiOutlineHome></AiOutlineHome> USER HOME</Link></li>
            <li><Link to="reservation"><FaCalendarAlt></FaCalendarAlt> RESERVATION</Link></li>
            <li><Link to="paymenthistory"><GiWallet></GiWallet>PAYMENT HISTORY</Link></li>
            <li><Link to="mycart"><FaShoppingCart></FaShoppingCart>MY CART</Link></li>
            <li><Link to="addreview"><BsStars></BsStars>ADD REVIEW</Link></li>
            <li><Link to="mybooking"><TbCalendarTime></TbCalendarTime>MY BOOKING</Link></li>
            <hr className="mr-8 ml-2" />
             <li><Link to="/"><AiOutlineHome></AiOutlineHome>HOME</Link></li>
             <li><Link to="/menu"><AiOutlineMenu></AiOutlineMenu>MENU</Link></li>
             <li><Link to="/shop"><AiOutlineShopping></AiOutlineShopping>SHOP</Link></li>
             <li><Link to="/contact"><AiOutlineMail></AiOutlineMail>CONTACT</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
