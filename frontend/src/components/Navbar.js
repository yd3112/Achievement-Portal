 
import ReactDOM from 'react-dom'
import React, { useEffect, useState } from "react";
import { Link , useLocation} from "react-router-dom";
import '../Drop.css';

const Navbar = (props) => {
    const [state, setState] = useState({ navbarTransparent: true });
    const [user, setUser] = useState(localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : false);
    const location = useLocation();
    useEffect(() => {
        window.addEventListener("scroll", (evt) => {
            setState({ navbarTransparent: window.scrollY >= 50 ? false : true });
        });
    });
//   constructor(props) {
//       super(props);
//       this.state = {
//           navbarTransparent: true,
//       };
//   }
//   const componentDidMount = () => {
//       window.addEventListener("scroll", (evt) => {
//           this.setState({ navbarTransparent: window.scrollY >= 50 ? false : true });
//       });
//   };
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* <nav
        className={`grid grid-cols-1 bg-gray-800 w-screen h-16 fixed z-20 transition-all duration-500 ${
          this.state.navbarTransparent ? "bg-opacity-0" : ""
        }`}
      > */}
      <nav className={`grid grid-cols-1 bg-gray-800 w-screen h-16 fixed z-20 transition-all duration-500`}>
        <div className="flex h-16 items-center justify-between bg-black-300 pr-8">
          <div className="mx-5 col-span-1">
            <Link to="/">
              <img
                className="h-12 w-12"
                src="/svnit_logo.png"
                alt="Your Company"
              />
            </Link>
          </div>
          <div className=" col-span-9 flex justify-center">
            <Link 
              to="/"
              className="text-gray-300 px-0 mx-3 py-1 border-b-2 border-transparent hover:border-blue-300 hover:text-blue-300 transition-colors duration-500 text-xs font-medium"
              aria-current="page"
            >
              Home
            </Link>
            <Link
              to="/aboutUs"
              className="text-gray-300 px-0 mx-3 py-1 border-b-2 border-transparent hover:border-blue-300 hover:text-blue-300 transition-colors duration-500 text-xs font-medium"
              aria-current="page"
            >
              About
            </Link>
            <div
              className="text-gray-300 px-0 mx-3 py-1 border-b-2 border-transparent hover:border-blue-300 hover:text-blue-300 transition-colors text-xs font-medium"
              aria-current="page"
            >
              <button onMouseOver={handleOpen}>Achievements</button>
              {open ? (
                    <ul className="menu" style={{marginTop: '20px', zIndex: "100"}} onMouseLeave={handleOpen}>
                    <li className="text-blue-300 hover:text-blue-800 menu-item" style={{marginTop: '2px', borderRadius: "5px", width: "100%"}}>
                        <button><Link to='/academic_achievement'>Academic Achievements</Link></button>
                    </li>
                    <li className="text-blue-300 hover:text-blue-800 menu-item" style={{marginTop: '2px', borderRadius: "5px"}}>
                        <button><Link to='/cocurricular_achievement'>Cocurricular Achievements</Link></button>
                    </li>
                    <li className="text-blue-300 hover:text-blue-800 menu-item" style={{marginTop: '2px', borderRadius: "5px"}}>
                        <button><Link to='/placement_section'>Placement Section</Link></button>
                    </li>
                    <li className="text-blue-300 hover:text-blue-800 menu-item" style={{marginTop: '2px', borderRadius: "5px"}}>
                        <button><Link to='/higher_studies'>Higher Studies</Link></button>
                    </li>
                    <li className="text-blue-300 hover:text-blue-800 menu-item" style={{marginTop: '2px', borderRadius: "5px"}}>
                        <button><Link to='/miscellaneous_achievement'>Miscellaneous Achievements</Link></button>
                    </li>
                    </ul>
                ) : null}
            </div>
            <Link
              to="/contactUs"
              className="text-gray-300 px-0 mx-3 py-1 border-b-2 border-transparent hover:border-blue-300 hover:text-blue-300 transition-colors duration-500 text-xs font-medium"
            >
              Contact Us
            </Link>
          </div>
          <div className=" col-span-2">
          {user ? (
                        <div className="relative ml-3 col-span-2">
                            <div className="flex">
                                <img className="block h-8 w-8 rounded-full" src="profile.jpg" alt="profile image" />
                                <div className=" px-2 mt-2 font-medium text-xs text-gray-300 inline-block align-middle">
                                    {user.name}
                                </div>
                            </div>
                            <div
                                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="user-menu-button"
                                tabIndex="-1"
                                hidden={true}
                            >
                                <Link
                                    to={`/${user.username}`}
                                    className="block px-4 py-2 text-sm text-gray-700"
                                    role="menuitem"
                                    tabIndex="-1"
                                    id="user-menu-item-0"
                                >
                                    Your Profile
                                </Link>

                                <Link
                                    to={`/${user.username}/settings`}
                                    className="block px-4 py-2 text-sm text-gray-700"
                                    role="menuitem"
                                    tabIndex="-1"
                                    id="user-menu-item-1"
                                >
                                    Settings
                                </Link>

                                <Link
                                    to={`/${user.username}/logout`}
                                    className="block px-4 py-2 text-sm text-gray-700"
                                    role="menuitem"
                                    tabIndex="-1"
                                    id="user-menu-item-2"
                                >
                                    Sign out
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <div className=" col-span-2">
                            <Link
                                to="/signup"
                                className="text-gray-300 px-0 mx-3 py-1 border-b-2 border-transparent hover:border-blue-300 hover:text-blue-300 transition-colors duration-500 text-xs font-medium"
                            >
                                Sign Up
                            </Link>
                            <Link
                                to="/login"
                                className="text-gray-300 px-0 mx-3 py-1 border-b-2 border-transparent hover:border-blue-300 hover:text-blue-300 transition-colors duration-500 text-xs font-medium"
                            >
                                Sign In
                            </Link>
                        </div>
                    )}
          </div>
        </div>
        <div className="-mr-2 flex lg:hidden">
          {/* <!-- Mobile menu button --> */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <svg
              className="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;


// /* <!-- Mobile menu, show/hide based on menu state. --> */
// <div className="md:hidden" id="mobile-menu">
//     <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
//         <a
//             href="index.html"
//             className="bg-gray-900 hover:border-b-2 text-white block px-0 mx-3 py-1 text-base font-medium"
//             aria-current="page"
//         >
//             About
//         </a>

//         <a
//             href="index.html"
//             className="text-gray-300 hover hover:border-b-2:text-white block px-0 mx-3 py-1 text-base font-medium"
//         >
//             Academic
//         </a>

//         <a
//             href="index.html"
//             className="text-gray-300 hover hover:border-b-2:text-white block px-0 mx-3 py-1 text-base font-medium"
//         >
//             Co-curricular
//         </a>

//         <a
//             href="index.html"
//             className="text-gray-300 hover hover:border-b-2:text-white block px-0 mx-3 py-1 text-base font-medium"
//         >
//             Placement
//         </a>

//         <a
//             href="index.html"
//             className="text-gray-300 hover hover:border-b-2:text-white block px-0 mx-3 py-1 text-base font-medium"
//         >
//             Higher Studies
//         </a>
//         <a
//             href="index.html"
//             className="text-gray-300 hover hover:border-b-2:text-white block px-0 mx-3 py-1 text-base font-medium"
//         >
//             Miscellaneous
//         </a>
//         <a
//             href="index.html"
//             className="text-gray-300 hover hover:border-b-2:text-white block px-0 mx-3 py-1 text-base font-medium"
//         >
//             Contact Us
//         </a>
//     </div>
//     <div className="border-t border-gray-700 pt-4 pb-3">
//         <div className="flex items-center px-5">
//             <div className="flex-shrink-0">
//                 <img
//                     className="h-10 w-10 rounded-full"
//                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                     alt=""
//                 />
//             </div>
//             <div className="ml-3">
//                 <div className="text-base font-medium leading-none text-white">Tom Cook</div>
//                 <div className="text-xs font-medium leading-none text-gray-400">
//                     tom@example.com
//                 </div>
//             </div>
//             <button
//                 type="button"
//                 className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//             >
//                 <span className="sr-only">View notifications</span>
//                 {/* <!-- Heroicon name: outline/bell --> */}
//                 <svg
//                     className="h-6 w-6"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth="1.5"
//                     stroke="currentColor"
//                     aria-hidden="true"
//                 >
//                     <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
//                     />
//                 </svg>
//             </button>
//         </div>
//     </div>
// </div>
