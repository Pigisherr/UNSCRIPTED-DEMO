import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  FaUser,
  FaLock,
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export const RegisterPage = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });
  const navigate = useNavigate();

  const handleClick = () => {
    alert("button clicked");
  };
 
  const handleValidation = () => {
    const { password,confirmPassword, username ,email} = values;
    
    if (password !== confirmPassword) {
     alert('both passwords should be the same')
     return false;
    } else if (username.lenght < 3) {
     alert('username should be greater than 3 characters')
     return false;
    } else if (password.lenght < 8) {
     alert('password should be greater than 8 characters')
     return false;
    } else if (email === "") {
     alert("email is required")
     return false;
    } else {
     return true;
    }
    
  }

  const handleSubmit = (e) => {
    e.preventDefault;
    if (handleValidation) {
     alert("handle Submit working OK")
    }
    
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSignIn = () => navigate("/signIn");

  return (
    <main className="flex items-center justify-center h-screen bg-gradient-to-r from-blue1 to-green1">
      <section className="flex flex-col items-center justify-center border-solid">
        <form
          onSubmit={handleSubmit}
          className="border-4 rounded-lg bg-white p-10 shadow-lg"
        >
          <h3 className="flex justify-center text-7xl pt-10 pb-10 font-bold text-gray-800">
            Register
          </h3>
          <div className="input-box flex items-center border-b-2 border-gray-200 py-2 px-4 mb-4">
            <FaEnvelope className="text-gray-400 mr-2" />
            <input
              className="border-none w-full focus:outline-none text-gray-600"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div className="input-box flex items-center border-b-2 border-gray-200 py-2 px-4 mb-4">
            <FaUser className="text-gray-400 mr-2" />
            <input
              className="border-none w-full focus:outline-none text-gray-600"
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
            />
          </div>
          <div className="input-box flex items-center border-b-2 border-gray-200 py-2 px-4 mb-4">
            <FaLock className="text-gray-400 mr-2" />
            <input
              className="border-none w-full focus:outline-none text-gray-600"
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
          </div>
          <div className="input-box flex items-center border-b-2 border-gray-200 py-2 px-4 mb-4">
            <FaLock className="text-gray-400 mr-2" />
            <input
              className="border-none w-full focus:outline-none text-gray-600"
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              onChange={handleChange}
            />
          </div>

          <div className="input-box flex items-center border-b-2 border-gray-200 py-2 px-4 mb-4">
            <FaPhone className="text-gray-400 mr-2" />
            <input
              className="border-none w-full focus:outline-none text-gray-600"
              type="tel"
              placeholder="Phone number"
              name="phone"
              onChange={handleChange}
            />
          </div>

          <div className="terms-and-conditions flex justify-start px-4 pt-1 mb-4">
            <label htmlFor="" className="flex items-center text-gray-600">
              <input type="checkbox" className="mr-2" />I agree to the terms and
              conditions of this website.
            </label>
          </div>

          <div className="flex justify-center items-center pt-5">
            <button
              className="flex justify-center items-center h-10 w-[20rem] bg-blue1 text-white text-xl font-bold hover:bg-blue-600 transition-all duration-300 ease-in-out"
              type="submit"
              onClick={handleClick}
            >
              Sign Up!
            </button>
          </div>

          <div className="login-link flex justify-center pt-3 pb-5">
            <p className="text-lg text-gray-600">
              Already have an account?{" "}
              <a
                href="#"
                className="text-blue-500 hover:text-blue-600"
                onClick={handleSignIn}
              >
                Login
              </a>
            </p>
          </div>

          <div className="social-login flex justify-center items-center space-x-4">
            <a
              href="#"
              className="flex justify-center items-center h-10 w-10 bg-blue-800 text-white rounded-full hover:bg-blue-900 transition-all duration-300 ease-in-out"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="flex justify-center items-center h-10 w-10 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-all duration-300 ease-in-out"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="flex justify-center items-center h-10 w-10 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all duration-300 ease-in-out"
            >
              <FaGoogle />
            </a>
          </div>
        </form>
      </section>
    </main>
  );
};

export default RegisterPage;
