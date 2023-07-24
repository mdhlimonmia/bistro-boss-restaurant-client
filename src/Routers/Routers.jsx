import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../Layout/Main";
import OurMenu from "../pages/OurMenu/OurMenu";
import OurShop from "../pages/OurShop/OurShop";
import Contact from "../pages/Contact/Contact";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import Dashboard from "../Layout/Dashboard";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import ManageBooking from "../pages/Dashboard/ManageBooking/ManageBooking";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import Reservation from "../pages/Dashboard/Reservation/Reservation";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import AddReview from "../pages/Dashboard/AddReview/AddReview";
import MyBooking from "../pages/Dashboard/MyBooking.jsx/MyBooking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <OurMenu></OurMenu>,
      },
      {
        path: "/shop",
        element: <OurShop></OurShop>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      }
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "adminhome",
        element: <AdminHome></AdminHome>
      },
      {
        path: "additems",
        element: <AddItems></AddItems>
      },
      {
        path: "manageitems",
        element: <ManageItems></ManageItems>
      },
      {
        path: "managebooking",
        element: <ManageBooking></ManageBooking>
      },
      {
        path: "allusers",
        element: <AllUsers></AllUsers>
      },
      {
        path: "userhome",
        element: <UserHome></UserHome>
      },
      {
        path: "reservation",
        element: <Reservation></Reservation>
      },
      {
        path:"Paymenthistory",
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path: "mycart",
        element: <MyCart></MyCart>
      },
      {
        path: "addreview",
        element: <AddReview></AddReview>
      },
      {
        path: "mybooking",
        element: <MyBooking></MyBooking>
      }
    ]
  },
  {
    path: "*",
    element: (
      <h1>
        404 <br />
        Page not Found
      </h1>
    ),
  },
]);

export default router;
