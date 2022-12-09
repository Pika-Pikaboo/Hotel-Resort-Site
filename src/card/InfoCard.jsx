const InfoCard = () => {
  return (
    <div className="w-[calc(100%-260px)] lg:w-[calc(100%-16px)] lg:mx-auto xl:w-[calc(100%-130px)] mx-auto z-10 bg-white rounded-2xl -mt-24 border border-slate-200 shadow-xl flex flex-wrap gap-x-20 gap-y-20 px-8 py-12 xl:px-3">
      <div className="flex-auto flex flex-col space-y-14">
        <header className="flex justify-between">
          <p className="uppercase font-bold text-xl">facilities</p>
          <span>
            <a href="#" className="text-amber-500 hover:underline">
              See more
            </a>
          </span>
        </header>
        <div className="flex [&>div]:flex-auto [&>div]:text-center [&>div>p]:font-semibold">
          <div>
            <span className="text-cyan-500 text-xl border border-slate-400/70 rounded-md py-3 px-5 mb-3 inline-block">
              <i className="fa-solid fa-person-swimming"></i>
            </span>
            <p>SWIMMING</p>
          </div>
          <div>
            <span className="text-red-500 text-xl border border-slate-400/70 rounded-md py-3 px-5 mb-3 inline-block">
              <i className="fa-solid fa-wifi"></i>
            </span>
            <p>WIFI</p>
          </div>
          <div>
            <span className="text-lime-500 text-xl border border-slate-400/70 rounded-md py-3 px-5 mb-3 inline-block">
              <i className="fa-regular fa-snowflake"></i>
            </span>
            <p>AC</p>
          </div>
          <div>
            <span className="text-orange-500 text-xl border border-slate-400/70 rounded-md py-3 px-5 mb-3 inline-block">
              <i className="fa-solid fa-utensils"></i>
            </span>
            <p>DINNER</p>
          </div>
        </div>
      </div>
      <div className="flex-auto flex flex-col space-y-5">
        <header className="">
          <p className="font-bold text-xl">Hotels For You</p>
        </header>
        <p className="font-semibold text-slate-500">5 Days 6 Nights</p>
        <div className="button px-5 py-2 inline-flex items-center space-x-3 w-48 border border-slate-500/50 rounded-md">
          <span className="text-blue-500 text-xl">
            <i className="fa-solid fa-circle-xmark"></i>
          </span>
          <span>USD $5000</span>
        </div>
      </div>
      <div className="flex-auto flex flex-col space-y-16">
        <header className="flex flex-col">
          <div className="w-full flex justify-between [&>*]:font-semibold [&>*]:text-xl">
            <p className="text-slate-500/70">150 Results</p>
            <div className="flex space-x-6">
              <span className="text-slate-500/70">
                <i className="fa-solid fa-pen"></i>
              </span>
              <span className="text-sky-600">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
            </div>
          </div>
        </header>
        <div className="flex justify-between xl:justify-center [&>div>img]:object-center [&>div>img]:object-cover [&>div>img]:w-16 lg:overflow-scroll">
          <div>
            <img
              src="https://mui.com/static/images/avatar/1.jpg"
              alt="avatar"
              className="rounded-full"
            />
          </div>
          <div>
            <img
              src="https://mui.com/static/images/avatar/2.jpg"
              alt="avatar"
              className="rounded-full"
            />
          </div>
          <div>
            <img
              src="https://mui.com/static/images/avatar/3.jpg"
              alt="avatar"
              className="rounded-full"
            />
          </div>
          <div>
            <img
              src="https://mui.com/static/images/avatar/4.jpg"
              alt="avatar"
              className="rounded-full"
            />
          </div>
          <div>
            <img
              src="https://mui.com/static/images/avatar/5.jpg"
              alt="avatar"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
