import React from 'react';
import './signin.css';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';


const Signup = () => {
  return (
    <div className="section">
      <form>
        <h1>Signup</h1>
        <div className="inputbox">

          <input type="text" required />
          <label>Name</label>
        </div>
        <div className="inputbox">

          <input type="email" required />
          <label>Email</label>
        </div>
        <div className="inputbox">

          <input type="password" required />
          <label>Password</label>
        </div>
        <div className="inputbox">

          <input type="password" required />
          <label>Confirm Password</label>
        </div>
        <div className="forget">
          <label>
            <input type="checkbox" required />
            Remember Me
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </label>
          <a href="#">Forget Password</a>
        </div>
        <button>Sign up</button>
        <div className="register">
          <p>
            Already have an account? <a href="#">Login</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
