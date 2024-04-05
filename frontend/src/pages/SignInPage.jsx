import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import {
  FaUser,
  FaLock,
  FaFacebookF,
  FaTwitter,
  FaGoogle,
} from "react-icons/fa";

export const SignInPage = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      try {
        axios
          .post("http://localhost:4444/signIn", values)
          .then((response) => {
            if (response.status === 200) {
              const successToast = toast.success("User logged in successfully");
              navigate("/home");
            } else {
              toast.error("Failed to login due to a problem in the backend");
            }
          })
          .catch((error) => {
            console.log("error happened for the post for /signIn:", error);
            toast.error("Failed to log in due to a problem in the frontend");
          });
      } catch (error) {
        console.log("error happened for the post for /signIn:", error);
        toast.error("Failed to log in due to a problem in the frontend");
      }
    }
  };

  const handleValidation = () => {
    const { username, password } = values;

    if (username.length < 4) {
      toast.error("Username should be at least 4 characters long!");
      return false;
    } else if (password.length < 8) {
      toast.error("Password should be at least 8 characters long!");
      return false;
    } else {
      return true;
    }
  };

  const navigate = useNavigate();

  const handleSignUp = () => navigate("/signUp");

  return (
    <main className="flex items-center justify-center h-screen bg-gradient-to-r from-blue1 to-green1">
      <section className="flex flex-col items-center justify-center border-solid">
        <form
          onSubmit={handleSubmit}
          className="border-4 rounded-lg bg-white p-10 shadow-lg"
        >
          <h3 className="flex justify-center text-7xl pt-10 pb-10 font-bold text-gray-800">
            Login
          </h3>
          <div className="input-box flex items-center border-b-2 border-gray-200 py-2 px-4 mb-4">
            <FaUser className="text-gray-400 mr-2" />
            <input
              className="border-none w-full focus:outline-none text-gray-600"
              type="text"
              placeholder="Username"
              onChange={handleChange}
              name="username"
            />
          </div>
          <div className="input-box flex items-center border-b-2 border-gray-200 py-2 px-4 mb-4">
            <FaLock className="text-gray-400 mr-2" />
            <input
              className="border-none w-full focus:outline-none text-gray-600"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              name="password"
            />
          </div>

          <div className="remember-forgot flex justify-between px-4 pt-1 mb-4">
            <label htmlFor="" className="flex items-center text-gray-600">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>

            <a href="" className="text-gray-600 hover:text-blue-500">
              Forgot password?
            </a>
          </div>

          <div className="flex justify-center items-center pt-5">
            <button
              className="flex justify-center items-center h-10 w-[20rem] bg-blue1 text-white text-xl font-bold hover:bg-blue-600 transition-all duration-300 ease-in-out"
              type="submit"
            >
              Log in
            </button>
          </div>

          <div className="register-link flex justify-center pt-3 pb-5">
            <p className="text-lg text-gray-600">
              Don't have an account?{" "}
              <a
                href="#"
                className="text-blue-500 hover:text-blue-600"
                onClick={handleSignUp}
              >
                Register
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
        <ToastContainer />
      </section>
    </main>
  );
};

export default SignInPage;
