import { Link, NavLink } from "react-router-dom";
import { useContext, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { AuthContext } from "../../Utility/AuthProvider/Authprovider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then()
      .catch((err) => {
        console.error(err);
      });
  };

  const navLinks = (
    <>
      <li className="z-40">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="z-40">
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li className="z-40">
        <NavLink to="/contact">Contact</NavLink>
      </li>
      {user && (
        <div className="flex z-40">
          <li className="z-40">
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
          <li className="z-40">
            <NavLink to="/shop">Shop</NavLink>
          </li>
        </div>
      )}
    </>
  );

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="navbar bg-base-100" data-aos="fade-left">
        <div className="navbar-start">
          <div className="dropdown z-30">
            <div tabIndex={0} role="button" className="btn btn-ghost z-40 lg:hidden">
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
              className="menu z-30 menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/">
            <img
              className="w-40"
              src="https://i.ibb.co/g7fPMy2/Screenshot-2023-10-07-002129.png"
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-center hidden z-30 lg:flex">
          <ul className="menu z-30 menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex lg:flex items-center md:justify-center md:gap-3">
            {user?.displayName ? (
              <>
                {user.displayName}
                {user.photoURL ? (
                  <img
                    className="md:w-11 w-8 object-cover rounded-full"
                    src={user.photoURL}
                    alt="User Profile"
                  />
                ) : (
                  <img
                    className="md:w-11 w-8"
                    src="https://i.ibb.co/SvWDpny/profile.png"
                    alt="Default Profile"
                  />
                )}
                <button
                  onClick={handleSignOut}
                  className="btn btn-sm md:ml-4 text-lg"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <NavLink className="btn btn-sm ml-2 text-lg" to="/register">
                  Register
                </NavLink>
                <button className="btn btn-sm ml-2 text-lg">
                  <NavLink to="/Login">Login</NavLink>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
