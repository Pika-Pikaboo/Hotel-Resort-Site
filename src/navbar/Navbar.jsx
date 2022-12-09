const Navbar = () => {
  return (
    <nav
      aria-label="navigation"
      className="flex justify-between px-32 py-6 bg-white items-center [&>*]:text-xl [&>*]:font-semibold lg:hidden"
    >
      <span>
        <a href="#home">MARNstudio</a>
      </span>
      <div className="flex justify-evenly text-center w-[600px] hover:[&>*]:bg-sky-100/70 [&>a]:p-3 [&>*]:rounded-lg">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
        <button className="ml-14 border border-slate-300/70 px-12 py-2">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
