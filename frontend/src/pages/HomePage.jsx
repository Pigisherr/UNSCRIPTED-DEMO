import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { FaUser, FaLock } from "react-icons/fa";

export const HomePage = () => {
  const navigate = useNavigate();

  const handleClickFrench = () => {
    navigate("/french");
  };

  return (
    <main className="">
      <section className="flex flex-row">
        <div className="mx-10 my-10">
          <div className="flex-col bg-red-400 w-[280px] border-4 border-gray-400 border-solid rounded-tl-lg rounded-tr-lg pl-2 pt-3 pb-3">
            <h3 className="text-4xl">sciences</h3>
            <h4>Mr. Albert</h4>
          </div>
          <div className="flex-col bg-white w-[280px] border-4 border-gray-400 pt-2 pl-2 rounded-bl-lg rounded-br-lg pb-3">
            <h4>devoir a remettre:</h4>
            <p>questionaire sur les etats de la matiere</p>
          </div>
        </div>

        <div onClick={handleClickFrench} className="mx-10 my-10">
          <div className="flex-col bg-blue-400 w-[280px] border-4 border-gray-400 border-solid rounded-tl-lg rounded-tr-lg pl-2 pt-3 pb-3">
            <h3 className="text-4xl">Francais</h3>
            <h4>Mme. Alberte</h4>
          </div>
          <div className="flex-col bg-white w-[280px] border-4 border-gray-400 pt-2 pl-2 rounded-bl-lg rounded-br-lg pb-3">
            <h4>devoir a remettre:</h4>
            <p>questionaire sur la conjugaison des verbes</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
