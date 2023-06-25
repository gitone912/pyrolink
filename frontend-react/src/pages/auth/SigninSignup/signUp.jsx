import React from 'react';
import './style.css';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
const Signup = () => {
  return (
    <section className="signup-container">
      <form className="signup-form">
        <h1>Sign Up</h1>
        <div className="inputbox">
          <ion-icon name="person-outline"></ion-icon>
          <input type="text" required name="name" />
          <label htmlFor="name">Name </label>
        </div>
        <div className="inputbox">
          <ion-icon name="mail-outline"></ion-icon>
          <input type="email" required name="email" />
          <label htmlFor="email">Email</label>
        </div>
        <div className="inputbox">
          <ion-icon name="lock-closed-outline"></ion-icon>
          <input type="password" required name="password" />
          <label htmlFor="password">Password</label>
        </div>
        <div className="inputbox">
          <ion-icon name="lock-closed-outline"></ion-icon>
          <input type="password" required name="confirmPassword" />
          <label htmlFor="confirmPassword">Confirm Password</label>
        </div>
        <div className="terms">
          <label htmlFor="terms">
            <input type="checkbox" name="terms" />I agree to the terms and conditions
          </label>
        </div>
        <button>Sign Up</button>
        <div className="login">
          <p>
            Already have an account? <a href="#">Login</a>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Signup;
