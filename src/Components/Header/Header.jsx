import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/listedBooks">Listed Books</NavLink>
      </li>
      <li>
        <NavLink to="/pagesToRead">Pages to Read</NavLink>
      </li>
      <li>
        <NavLink to="/aboutUS">About US</NavLink>
      </li>
      <li>
        <NavLink to="/customerReview">Customer Review</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar mt-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="md:text-2xl text-xl text-wrap font-bold workSans text-[#23BE0A]">
          Book Haven
        </a>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 font-semibold workSans">
          {links}
        </ul>
      </div>
      <div className="navbar-end space-x-2">
        <a className="btn bg-[#23BE0A] text-white hover:bg-[#23BE0A] workSans">
          Sign In
        </a>
        <a className="btn bg-[#59C6D2] text-white hover:bg-[#59C6D2] workSans">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Header;
