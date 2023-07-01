import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { getToken } from '../services/LocalStorageService';
import './navbar.css';
import { setUserInfo, unsetUserInfo } from '../features/userSlice';
import { unSetUserToken } from '../features/authSlice';
// const Navbar = () => {
//   const { access_token } = getToken()
//   return <>
    {/* <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant='h5' component="div" sx={{ flexGrow: 1 }}>Geek-Shop</Typography>

          <Button component={NavLink} to='/' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Home</Button>

          <Button component={NavLink} to='/contact' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Contact</Button>

          {access_token ? <Button component={NavLink} to='/dashboard' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Dashboard</Button> : <Button component={NavLink} to='/login' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Login/Registration</Button>}



        </Toolbar>
      </AppBar>
    </Box> */}
    {/* <div className="navbar">
  <div className="logo">Logo</div>
  <div className="nav-links">
    <a href="/sign-up">Signup</a>
    <a href="/sign-in">Signin</a>
    <a href="#">Link 3</a>
    <a href="#">Link 4</a>
  </div>
</div>

  </>;
}; */}

// export default Navbar;
const Navbar = () => {
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
    <>
    <section>
     <div className={`navbar${isResponsive ? ' responsive' : ''}`}>
        <div className="logo"><img src="/vite.svg" alt="logo" /></div>
        <div className="nav-links">
          {access_token ? (
            <>
              <a href="/dashboard">Dashboard</a>
              <a onClick={handleLogout} >Sign Out</a>
            </>
          ) : (
            <>
              <a href="/sign-up">Sign Up</a>
              <a href="/sign-in">Sign In</a>
            </>
          )}
        </div>
        <div className="hamburger" onClick={toggleResponsive}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      </section>
    </>
  );
};

export default Navbar;








