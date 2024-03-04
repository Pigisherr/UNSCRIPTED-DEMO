import React from "react";

export const Gift = () => {
  return (
    <main className="bg-green1 text-white">
      <section>
        <div className="flex flex-col items-center justify-center pt-5">
          <div className="flex flex-row ">
            <img
              className="w-[5rem]"
              src="https://cdn-icons-png.flaticon.com/512/2702/2702154.png"
              alt="Unscripted Logo"
            />
            <h1 className="text-7xl pl-2 items-center justify-center flex">
              Unscripted
            </h1>
          </div>
          <p className="pt-10 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at{" "}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center mt-10">
          <div className="border rounded-tl-lg rounded-tr-lg">
            <img
              src="https://cdn.giftup.app/assets/e382fe5e-19a6-4be5-936e-1bda244f95aa/55b3e3a7-1cf6-4fc6-b6c5-a9ee6f6987d1.png"
              alt=""
            />
          </div>
          <div className="flex justify-between w-[36rem] pt-10 text-sm border rounded-bl-lg rounded-br-lg pb-5">
            <div className="flex flex-col pl-5">
              <h4>Unscripted Pro - 1 year membership</h4>
              <p>blablablablablablbalblabla</p>
              <a href="">terms and conditions</a>
            </div>
            <div className="flex flex-row pr-5">
              <h4 className="flex items-center pr-2">119.99$</h4>
              <button className="rounded-full bg-blue1 py-2 px-4">buy</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gift;
