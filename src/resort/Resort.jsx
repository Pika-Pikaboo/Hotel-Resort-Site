const Resort = () => {
  return (
    <div className="w-[calc(100%-260px)] xl:w-[calc(100%-130px)] lg:w-[calc(100%-16px)] mx-auto min-h-[800px] flex flex-wrap gap-x-4 items-center justify-center 2xl:mb-[8rem]" id="services">
      <div className="left max-w-[500px] flex flex-col space-y-6">
        <h1 className="text-5xl font-semibold">Resort Surprises</h1>
        <p className="text-base font-medium">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus quas,
          illum autem nisi facilis voluptatibus architecto eveniet eligendi
          voluptatem error!
        </p>
        <div className="items [&>div]:flex [&>div]:items-center [&>div]:gap-x-8">
          <div>
            <span className="text-cyan-500 text-xl border border-slate-400/70 rounded-md py-3 px-5 mb-3 inline-block">
              <i className="fa-solid fa-person-swimming"></i>
            </span>
            <p>Infinity Pool</p>
          </div>
          <div>
            <span className="text-red-500 text-xl border border-slate-400/70 rounded-md py-3 px-5 mb-3 inline-block">
              <i className="fa-solid fa-wifi"></i>
            </span>
            <p>The Beach</p>
          </div>
          <div>
            <span className="text-lime-500 text-xl border border-slate-400/70 rounded-md py-3 px-5 mb-3 inline-block">
              <i className="fa-regular fa-snowflake"></i>
            </span>
            <p>Beach Surprises</p>
          </div>
          <div>
            <span className="text-orange-500 text-xl border border-slate-400/70 rounded-md py-3 px-5 mb-3 inline-block">
              <i className="fa-solid fa-utensils"></i>
            </span>
            <p>The beach resort</p>
          </div>
        </div>
      </div>
      <div className="relative right w-[650px]">
        <div className="flex-auto">
          <img
            src="place2.jpg"
            alt="picture-one"
            className="w-3/4 h-3/4 mx-auto border-4 border-sky-300"
          />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-cyan-500 text-5xl">
            <a href="#play">
              <i className="fa-regular fa-circle-play"></i>
            </a>
          </span>
        </div>
        <div className="absolute w-full left-1/2 -translate-x-1/2 bg-sky-100 h-56 rounded-xl -bottom-20 -z-10"></div>
      </div>
    </div>
  );
};

export default Resort;
