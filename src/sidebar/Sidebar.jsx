import React, { useState } from "react";

const Sidebar = () => {
  const [active, setActive] = useState("");
  const [navigate, setNavigate] = useState(false);

  return (
    <React.Fragment>
      <a
        href="#open"
        aria-label="open navigation"
        className="hidden lg:block fixed text-2xl right-8 top-4"
      >
        <i
          className="fa-solid fa-bars text-white"
          onClick={() => setNavigate(true)}
        ></i>
      </a>
      <nav
        aria-label="navigation"
        className={`flex flex-col space-y-14 items-center justify-center fixed right-0 top-0 z-40 w-80 h-full bg-sky-400 text-center [&>a]:max-w-max [&>a]:text-white [&>a]:font-semibold [&>a]:text-2xl [&>a]:block [&>a]:px-4 [&>a]:py-2 transition-all ${
          navigate ? "open-nav" : "close-nav"
        }`}
      >
        <a href="#home">
          <span
            className={`${active === "home" ? "active" : ""}`}
            onClick={() => setActive("home")}
          >
            Home
          </span>
        </a>
        <a href="#about">
          <span
            className={`${active === "about" ? "active" : ""}`}
            onClick={() => setActive("about")}
          >
            About
          </span>
        </a>
        <a href="#services">
          <span
            className={`${active === "services" ? "active" : ""}`}
            onClick={() => setActive("services")}
          >
            Services
          </span>
        </a>
        <a href="#contact">
          <span
            className={`${active === "contact" ? "active" : ""}`}
            onClick={() => setActive("contact")}
          >
            Contact
          </span>
        </a>
        <a
          href="#close"
          aria-label="close navigation"
          className="absolute right-8 -top-6"
        >
          <i
            className="fa-solid fa-xmark text-3xl"
            onClick={() => {
              setNavigate(false);
              setActive("");
            }}
          ></i>
        </a>
      </nav>
    </React.Fragment>
  );
};

export default Sidebar;
