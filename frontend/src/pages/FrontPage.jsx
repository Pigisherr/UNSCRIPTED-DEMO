import React from "react";
import { useNavigate } from "react-router-dom";

// Define a custom component for the logo

const Logo = () => (
  <div className="flex flex-row items-center">
    <img
      src="https://cdn-icons-png.flaticon.com/512/2702/2702154.png"
      alt="Book Icon"
      className="w-12"
    />
    <h3 className="text-4xl pl-1">Unscripted</h3>
  </div>
);

// Define a custom component for the navigation links
const NavLinks = ({ handleGift }) => {
  return (
    <ul className="flex flex-row items-center gap-6 text-md pl-5">
      <li>
        <a className="" href="#">
          Our Science
        </a>
      </li>
      <li>
        <a href="#">About Us</a>
      </li>
      <li>
        <a href="#" onClick={handleGift}>
          Gift
        </a>
      </li>
    </ul>
  );
};

// Define a custom component for the sign in and sign up buttons
const AuthButtons = ({ handleSignIn, handleSignUp }) => (
  <ul className="flex flex-row items-center gap-6">
    <li>
      <button
        onClick={handleSignIn}
        className="bg-blue1 py-2 px-4 rounded-full text-white"
      >
        Sign In
      </button>
    </li>
    <li>
      <button
        onClick={handleSignUp}
        className="bg-blue2 py-2 px-4 rounded-full text-white"
      >
        Try Brain.fm for free
      </button>
    </li>
  </ul>
);

// Define a custom component for the hero section
const HeroSection = ({ handleSignIn, handleSignUp }) => (
  <div className="container mx-auto grid grid-cols-2 mt-10 items-center">
    <div className="flex flex-col">
      <h1 className="text-9xl font-bold">
        <span className="text-7xl">Changing Education,</span> Digitally
      </h1>
      <p className="text-lg pt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        porttitor sed justo ut placerat. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Aliquam porttitor sed justo ut placerat.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Aliquam porttitor sed justo
        ut placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elLorem
        ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitor sed
        justo ut placerat. Lorem ipsum dolor sit amet, consectetur adipiscing el{" "}
      </p>
      <div className="flex flex-row gap-6 text-3xl pt-5">
        <button
          onClick={handleSignIn}
          className="px-2 py-1 rounded-full bg-blue1 text-white"
        >
          Sign In
        </button>
        <button
          onClick={handleSignUp}
          className="px-2 py-1 rounded-full bg-blue2 text-white"
        >
          Sign up with email
        </button>
      </div>
      <em className="pt-2">Featured In:</em>
      <div className="flex gap-10">
        <img
          className="w-[200px] h-15"
          alt="Logo of gouvernement du Canada"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Gouvernement_du_Canada_logo.svg/550px-Gouvernement_du_Canada_logo.svg.png"
        />
        <img
          className="w-[200px] h-15"
          alt="logo of gouvernement du Quebec"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Logo_du_le_gouvernement_du_Qu%C3%A9bec.svg/800px-Logo_du_le_gouvernement_du_Qu%C3%A9bec.svg.png"
        />
        <img
          className="w-[200px] h-15"
          alt="logo of forbes"
          src="https://upload.wikimedia.org/wikipedia/commons/d/db/Forbes_logo.svg"
        />
      </div>
    </div>
    <div className="flex justify-center">
      <img
        src="https://photos5.appleinsider.com/gallery/40577-78180-students-make-app-1-xl.jpg"
        alt="Hero image"
        className="w-3/4 h-auto rounded-lg shadow-lg"
      />
    </div>
  </div>
);

const FrontPage = () => {
  const navigate = useNavigate();

  // Use arrow functions for event handlers
  const handleSignIn = () => navigate("/signIn");
  const handleSignUp = () => navigate("/signUp");
  const handleGift = () => navigate("/gift");

  return (
    <header className="bg-green1 text-white">
      <nav className="flex justify-between container mx-auto">
        <div className="flex flex-row items-center">
          {" "}
          <Logo />
          <NavLinks handleGift={handleGift} />
        </div>

        <div className="items-center flex ">
          <AuthButtons
            handleSignIn={handleSignIn}
            handleSignUp={handleSignUp}
          />
        </div>
      </nav>

      <HeroSection handleSignIn={handleSignIn} handleSignUp={handleSignUp} />
    </header>
  );
};

export default FrontPage;
