import React, { useState } from 'react';
import { Box, TextField, Button, CircularProgress, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserToken } from '../../../features/authSlice';
import { getToken, storeToken } from '../../../services/LocalStorageService';
import { useLoginUserMutation } from '../../../services/userAuthApi';
// import './signin.css';

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
    <>
      {/* <div className="section">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="inputbox">
            <ion-icon name="mail-outline"></ion-icon>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="">Email</label>
          </div>
          {serverError.errors && (
            <Typography style={{ fontSize: 14, color: 'white', paddingLeft: 10 }}>
              {serverError.errors}
            </Typography>
          )}
          <div className="inputbox">
            <ion-icon name="lock-closed-outline"></ion-icon>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
            <label htmlFor="">Password</label>
          </div>
          {serverError.errors && (
            <Typography style={{ fontSize: 14, color: 'white', paddingLeft: 10 }}>
              {serverError.errors}
            </Typography>
          )}
          <div className="forget">
            <label htmlFor="">
              <input type="checkbox" /> Remember me
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="#">Forget Password</a>
            </label>
          </div>

          <div style={{ textAlign: 'center' }}>
            {isLoading ? (
              <CircularProgress />
            ) : (
              <Button type="submit" variant="contained" style={{ color: 'white', background: 'black' }}>
                Login
              </Button>
            )}
          </div>
          {serverError.non_field_errors && (
            <Alert severity="error">{serverError.non_field_errors[0]}</Alert>
          )}
          <div className="register">
            <p>
              Already have an account <a href="/sign-up">Register</a>
            </p>
          </div>
        </form>
      </div> */}



      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signin;
