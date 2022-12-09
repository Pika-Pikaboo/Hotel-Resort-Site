import React from "react";

const Footer = () => {
  return (
    <div className="grid gap-6 grid-areas-layout grid-cols-layout w-[calc(100%-260px)] xl:w-[calc(100%-130px)] xl:grid-areas-layout-small md:flex md:flex-col lg:w-full mx-auto px-8 py-16 min-h-[680px] text-center">
      <header className="grid-in-header w-full mx-auto text-center flex flex-col space-y-6">
        <h1 className="text-6xl font-semibold lg:text-3xl">Get better work</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Quos,
          architecto.
        </p>
        <div className="flex lg:flex-col lg:space-y-4 gap-x-4 items-center justify-center">
          <input
            type="email"
            name="email"
            id="email"
            className="border rounded-full border-slate-300 text-xl lg:text-base py-2 px-4"
            placeholder="Email adress"
          />
          <button className="text-white text-base font-medium bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-full px-8 py-2">
            Try for free
          </button>
        </div>
      </header>
      <div className="grid-in-first">
        <h3 className="font-semibold text-xl mb-4">MARNstudio</h3>
        <ul className="flex flex-col space-y-4 [&>li]:text-slate-500 [&>li]:font-medium">
          <li>one</li>
          <li>two</li>
          <li>three</li>
          <li>four</li>
        </ul>
      </div>
      <div className="grid-in-second">
        <h3 className="font-semibold text-xl mb-4">Support</h3>
        <ul className="flex flex-col space-y-4 [&>li]:text-slate-500 [&>li]:font-medium">
          <li>one</li>
          <li>two</li>
          <li>three</li>
          <li>four</li>
        </ul>
      </div>
      <div className="grid-in-third">
        <h3 className="font-semibold text-xl mb-4">Links</h3>
        <ul className="flex flex-col space-y-4 [&>li]:text-slate-500 [&>li]:font-medium">
          <li>one</li>
          <li>two</li>
          <li>three</li>
          <li>four</li>
        </ul>
      </div>
      <div className="grid-in-fourth">
        <h3 className="font-semibold text-xl mb-4">Contact Us</h3>
        <ul className="flex flex-col space-y-4 [&>li]:text-slate-500 [&>li]:font-medium">
          <li>one</li>
          <li>two</li>
          <li>three</li>
          <li>four</li>
        </ul>
      </div>
      <footer className="grid-in-foot w-full font-semibold text-center">
        &copy;<span className="text-cyan-500">MARNstudio</span>, Inc. 2022 All
        Rights Reserved.
      </footer>
    </div>
  );
};

export default Footer;
