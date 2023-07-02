import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { getToken } from '../services/LocalStorageService';
// import './navbar.css';
import { setUserInfo, unsetUserInfo } from '../features/userSlice';
import { unSetUserToken } from '../features/authSlice';

// const Navbarx = () => {
//   const { access_token } = getToken();
//   const [isResponsive, setIsResponsive] = useState(false);

//   const toggleResponsive = () => {
//     setIsResponsive(!isResponsive);
//   };
//   const handleLogout = () => {
//     dispatch(unsetUserInfo({ name: '', email: '' }));
//     dispatch(unSetUserToken({ access_token: null }));
//     removeToken();
//     navigate('/login');
//   };

//   return (
//     <>
//     <section>
//      <div className={`navbar${isResponsive ? ' responsive' : ''}`}>
//         <div className="logo"><img src="/vite.svg" alt="logo" /></div>
//         <div className="nav-links">
//           {access_token ? (
//             <>
//               <a href="/dashboard">Dashboard</a>
//               <a href='/signOut' >Sign Out</a>
//             </>
//           ) : (
//             <>
//               <a href="/sign-up">Sign Up</a>
//               <a href="/sign-in">Sign In</a>
//             </>
//           )}
//         </div>
//         <div className="hamburger" onClick={toggleResponsive}>
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//       </div>
      
//       </section>
//     </>
//   );
// };

// export default Navbarx;

'use client';

import { Dropdown, Navbar , Avatar} from 'flowbite-react';


const Navbarx = () => {
  const { access_token } = getToken();
  const [isResponsive, setIsResponsive] = useState(false);

  const toggleResponsive = () => {
    setIsResponsive(!isResponsive);
  };
  const handleLogout = () => {
    dispatch(unsetUserInfo({ name: '', email: '' }));
    dispatch(unSetUserToken({ access_token: null }));
    removeToken();
    navigate('/login');
  };
  return (
    <Navbar
      fluid
      rounded
    >
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
          src="/vite.svg"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          inline
          label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded/>}
        >
          <Dropdown.Header>
            <span className="block text-sm">
              Bonnie Green
            </span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>
            Dashboard
          </Dropdown.Item>
          <Dropdown.Item>
            Settings
          </Dropdown.Item>
          <Dropdown.Item>
            Earnings
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            Sign out
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          active
          href="#"
        >
          <p>
            Home
          </p>
        </Navbar.Link>
        <Navbar.Link href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">
          Services
        </Navbar.Link>
        <Navbar.Link href="#">
          Pricing
        </Navbar.Link>
        <Navbar.Link href="#">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}


export default Navbarx;