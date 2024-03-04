import React from "react";
import {
  FaUser,
  FaLock,
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
  const navigate = useNavigate();

  const handleSignIn = () => navigate("/signIn");

  return (
    <main className="flex items-center justify-center h-screen bg-gradient-to-r from-blue1 to-green1">
      <section className="flex flex-col items-center justify-center border-solid">
        <form className="border-4 rounded-lg bg-white p-10 shadow-lg">
          <h3 className="flex justify-center text-7xl pt-10 pb-10 font-bold text-gray-800">
            Register
          </h3>
          <div className="input-box flex items-center border-b-2 border-gray-200 py-2 px-4 mb-4">
            <FaUser className="text-gray-400 mr-2" />
            <input
              className="border-none w-full focus:outline-none text-gray-600"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="input-box flex items-center border-b-2 border-gray-200 py-2 px-4 mb-4">
            <FaLock className="text-gray-400 mr-2" />
            <input
              className="border-none w-full focus:outline-none text-gray-600"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="input-box flex items-center border-b-2 border-gray-200 py-2 px-4 mb-4">
            <FaLock className="text-gray-400 mr-2" />
            <input
              className="border-none w-full focus:outline-none text-gray-600"
              type="password"
              placeholder="Confirm password"
            />
          </div>
          <div className="input-box flex items-center border-b-2 border-gray-200 py-2 px-4 mb-4">
            <FaEnvelope className="text-gray-400 mr-2" />
            <input
              className="border-none w-full focus:outline-none text-gray-600"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="input-box flex items-center border-b-2 border-gray-200 py-2 px-4 mb-4">
            <FaPhone className="text-gray-400 mr-2" />
            <input
              className="border-none w-full focus:outline-none text-gray-600"
              type="tel"
              placeholder="Phone number"
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
