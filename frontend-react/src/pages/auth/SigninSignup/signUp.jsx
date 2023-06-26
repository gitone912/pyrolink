import { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { useRegisterUserMutation } from '../../../services/userAuthApi';
import { storeToken } from '../../../services/LocalStorageService';
import './signin.css';
import { Typography } from '@mui/material';

const Signup = () => {
  const [server_error, setServerError] = useState({});
  const navigate = useNavigate();
  const [registerUser, { isLoading }] = useRegisterUserMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
      confirmPassword: data.get('confirmPassword'),
      terms: data.get('terms'),
    };
    const res = await registerUser(actualData);
    if (res.error) {
      setServerError(res.error.data.errors);
    }
    if (res.data) {
      storeToken(res.data.data.token);
      navigate('/dashboard');
    }
  };

  return (<>
    {console.log(server_error)}
    <div className="section">
      <form onSubmit={handleSubmit}>
        <h1>Signup</h1>
        <div className="inputbox">
          <input type="text" name="name" required />
          <label>Name</label>
        </div>
        {server_error.name ? (
          <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>
            {server_error.name[0]}
          </Typography>
        ) : null}
        <div className="inputbox">
          <input type="email" name="email" required />
          <label>Email</label>
        </div>
        {server_error.email ? (
          <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>
            {server_error.email[0]}
          </Typography>
        ) : null}
        <div className="inputbox">
          <input type="password" name="password" required />
          <label>Password</label>
        </div>
        {server_error.password ? (
          <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>
            {server_error.password}
          </Typography>
        ) : null}
        <div className="inputbox">
          <input type="password" name="confirmPassword" required />
          <label>Confirm Password</label>
        </div>
        {server_error.confirmPassword ? (
          <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>
            {server_error.confirmPassword[0]}
          </Typography>
        ) : null}
        <div className="forget">
          <label>
            <input type="checkbox" required name="terms" id="terms" />
            I agree to term and condition.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </label>
          {server_error.terms ? (
            <span style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>
              {server_error.terms[0]}
            </span>
          ) : null}
          <a href="#">Forget Password</a>
        </div>
        <button type="submit">Sign up</button>
        <div className="register">
          <p>
            Already have an account? <a href="#">Login</a>
          </p>
        </div>
      </form>
    </div>
    </>
  );
};

export default Signup;
