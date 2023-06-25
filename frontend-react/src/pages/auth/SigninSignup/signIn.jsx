import React, { useState } from 'react';
import { Box, TextField, Button, CircularProgress, Typography } from '@mui/material';
import { IonIcon } from 'react-ionicons';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserToken } from '../../../features/authSlice';
import { getToken, storeToken } from '../../../services/LocalStorageService';
import { useLoginUserMutation } from '../../../services/userAuthApi';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [serverError, setServerError] = useState({});
  const navigate = useNavigate();
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const actualData = {
      email: email,
      password: password,
    };
    const res = await loginUser(actualData);
    if (res.error) {
      console.log(res.error.data.data);
      setServerError(res.error.data.data);
    }
    if (res.data) {
      storeToken(res.data.data.token);
      let { access_token } = getToken();
      dispatch(setUserToken({ access_token: access_token }));
      navigate('/dashboard');
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        
        <h1>Login</h1>
        <div className="inputbox">
          <ion-icon name="mail-outline"></ion-icon>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="">Email</label>
        </div>
        {serverError.errors && (
          <Typography style={{ fontSize: 12, color: 'white', paddingLeft: 10 }}>
            {serverError.errors}
          </Typography>
        )}
        <div className="inputbox">
          <ion-icon name="lock-closed-outline"></ion-icon>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="">Password</label>
        </div>
        {serverError.errors && (
          <Typography style={{ fontSize: 12, color: 'white', paddingLeft: 10 }}>
            {serverError.errors}
          </Typography>
        )}
        <div className="forget">
          <label htmlFor="">
            <input type="checkbox" />Remember Me 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">Forget Password</a>
          </label>
        </div>
        
        <Box textAlign="center">
          {isLoading ? (
            <CircularProgress />
          ) : (
            <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, px: 5 }}>
              Login
            </Button>
          )}
        </Box>
        {serverError.non_field_errors && (
          <Alert severity="error">{serverError.non_field_errors[0]}</Alert>
        )}
        <div className="register">
          <p>
            Already have an account <a href="#">Register</a>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Signin;
