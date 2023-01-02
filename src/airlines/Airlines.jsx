import React from "react";

const Airlines = () => {
  return (
    <div className="w-full min-h-[600px] flex justify-center xl:justify-start items-center" id="contact">
      <div className="container w-full h-96 bg-sky-100/70 flex justify-center items-center">
        <div className="w-3/4 rounded-lg bg-white flex xl:flex-col xl:shadow-lg">
          <div className="flex flex-col space-y-6 basis-1/2 p-10 xl:p-2">
            <h1 className="text-3xl font-semibold">Search for Top Airlines</h1>
            <div className="grid grid-cols-2 gap-x-4 xl:flex xl:flex-col [&>span]:flex xl:[&>span]:flex-col [&>span]:items-center [&>span]:gap-x-4 [&>span]:mb-6 [&>span]:text-xl text-center">
              <span>
                <i className="fa-brands fa-twitter text-sky-300"></i>Airline
                Marn Htet Zan
              </span>
              <span>
                <i className="fa-brands fa-facebook text-blue-600"></i>Airline
                Wynn Naing Swe
              </span>
              <span>
                <i className="fa-brands fa-tiktok"></i>Airline Hlyan Htet
              </span>
              <span>
                <i className="fa-brands fa-instagram text-pink-500"></i>Airline
                Zucker Berg
              </span>
              <span>
                <i className="fa-solid fa-envelope text-amber-300"></i>Airline
                Elon Musk
              </span>
              <span>
                <i className="fa-brands fa-wordpress text-blue-400"></i>Airline
                Ronaldo
              </span>
            </div>
          </div>
          <div className="right basis-1/2 relative xl:hidden">
            <div className="absolute w-[450px] bottom-0">
              <img src="model.png" alt="model" className="max-w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Airlines;
