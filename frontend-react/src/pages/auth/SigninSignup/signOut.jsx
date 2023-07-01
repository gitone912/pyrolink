import { unsetUserInfo } from '../../../features/userSlice';
import { unSetUserToken } from '../../../features/authSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeToken } from '../../../services/LocalStorageService';
import React, { useState, useEffect } from 'react';

const SignOut = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showMessage, setShowMessage] = useState(true);

  const handleLogout = () => {
    dispatch(unsetUserInfo({ name: '', email: '' }));
    dispatch(unSetUserToken({ access_token: null }));
    removeToken();
    navigate('/sign-in');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false);
      handleLogout();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showMessage && <p>Logging out...</p>}
      {!showMessage && <p>Logged out successfully!</p>}
    </div>
  );
};

export default SignOut;
