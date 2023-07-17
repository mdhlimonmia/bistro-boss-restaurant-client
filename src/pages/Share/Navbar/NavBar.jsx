import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';
import { AuthContext } from "../../../provider/AuthProvider";

const NavBar = () => {
  const { user, signOutUser, createUser} = useContext(AuthContext);

  const handelSignOut = () => {
    signOutUser()
      .then(() => {
        createUser(null);
      })
      .catch(() => {
        // An error happened.
      });
  };
  const navItem = (
    <>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact Us</Link>
      <Link to="/menu">Our Menu</Link>
      <Link to="/shop">Our Shop</Link>
      <Link to="/dashboard">Dashboard</Link>
      
      {user ? (
        (
          <>
            {" "}
            <img
              className="w-10 h-10 rounded-full hover:{}"
              src={user.photoURL}
              alt=""
            />{" "}
            <p className="">{user.displayName}</p>
            <p onClick={handelSignOut} className="hover:cursor-pointer">LogOut</p>
          </>
        ) || <p>{user.displayName}</p> || <p>{user.email}</p>
      ) : (
        <>
          {" "}
          <Link to="/login">Login</Link>
          {/* <Link to="/signup">SignUp</Link> */}
        </>
      )}
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content  mt-3 p-2  shadow bg-base-100 rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>
        <div>
          <p className="normal-case text-xl">Bistro Boss</p>
          <p className="normal-case text-xl">Restaurant</p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-5 px-1 items-center">
          {navItem}
        </ul>
      </div>
      <div className="navbar-end">
      <Link to="/">
                <button className="btn bg-transparent border-0 p-2 gap-2">
                    <FaShoppingCart className="text-[#D1A054] text-3xl"></FaShoppingCart>
                    <div className="badge badge-secondary text-xl">+ 0</div>
                </button>
            </Link>
      </div>
    </div>
  );
};

export default NavBar;
