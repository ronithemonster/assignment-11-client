import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut, updateUrl } = useContext(AuthContext);
  console.log(updateUrl.photoURL);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        localStorage.removeItem("doctors");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className=" px-4 text-lg py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        <Link to="/" className="inline-flex items-center text-3xl">
          <span>
            <img
              src="https://i.ibb.co/3hGttQ9/d9gq-oo09-151115-1.jpg"
              className="w-20"
              alt=""
            />
          </span>
        </Link>

        <ul className="items-center hidden space-x-8 lg:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/toys"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              All Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Blogs
            </NavLink>
          </li>
          <li>
            {user && (
              <NavLink
                to="/mytoy"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                My Toys
              </NavLink>
            )}
          </li>
          <li>
            {user && (
              <NavLink
                to="/addToy"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Add a toy
              </NavLink>
            )}
          </li>
        </ul>
        {user ? (
          <>
            {" "}
            <button onClick={handleLogOut} className="p-2 rounded btn btn-sm">
              {" "}
              SignOut{" "}
            </button>
            <div className="relative inline-block group">
              <img
                src={user?.photoURL?user?.photoURL:'https://lh3.googleusercontent.com/a/AGNmyxYoZpZr3z629at42vhbr5aWTk9mhTWhyajofPABXQ=s96-c'}
                alt="User Picture"
                className="w-12 h-12 rounded-full"
              />
              <div className="opacity-0 bg-white p-2 rounded-md shadow-md absolute bottom-0 left-0 group-hover:opacity-100">
                <span className="text-gray-800">{user?.displayName?user?.displayName:'No Name'}</span>
              </div>
            </div>
          </>
        ) : (
          <Link to={"/login"}>
            {" "}
            <button className="p-2 rounded btn btn-sm"> SignIn </button>
          </Link>
        )}

        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars3BottomRightIcon className="w-5 text-gray-600" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                {/* Logo & Button section */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/" className="inline-flex items-center">
                      <span>
                        <img
                          src="https://i.ibb.co/3hGttQ9/d9gq-oo09-151115-1.jpg"
                          className="w-20"
                          alt=""
                        />
                      </span>
                    </Link>
                  </div>

                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className="w-5 text-gray-600" />
                    </button>
                  </div>
                </div>

                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link to="/" className="default">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/toys"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                      >
                        All toys
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/mytoy"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                      >
                        My Toys
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/addToy"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                      >
                        add a toy
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blog"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                      >
                        Blogs
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
