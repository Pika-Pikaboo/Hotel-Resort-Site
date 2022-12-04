const Options = () => {
	return (
		<div className="w-[calc(100%-260px)] xl:w-[calc(100%-130px)] mx-auto my-24 relative z-10">
			<h1 className="text-center w-full font-semibold text-5xl mb-12">Entire city of choice</h1>
			<div className="xl:w-[calc(100%-130px)] xl:mx-auto lg:mx-auto lg:w-full">
				<div className="flex justify-center gap-4 flex-wrap">
					<div className="basis-[460px] overflow-hidden rounded-lg shadow-lg flex flex-col">
						<div className="relative">
						   <img src="place1.jpg" alt="picture-one" className="max-w-full"/>
						   <p className="absolute top-3 left-4 text-white font-semibold text-xl">MIRACLE RESORT</p>
						   <span className="absolute right-10 top-3 text-2xl text-amber-300 rounded-full"><i className="fa-solid fa-bolt"></i></span>
						</div>
						<div className="bg-white flex-auto py-10 px-6 [&>*]:leading-loose [&>*]:font-medium [&>*]:text-xl">
							<p className="text-rose-600">$500.00</p>
							<p>Booking ID: 12342</p>
							<p className="text-slate-500">Resort 1</p>
						</div>
					</div>
					<div className="basis-[460px] rounded-lg overflow-hidden shadow-lg flex flex-col">
						<div className="relative">
							<img src="place2.jpg" alt="picture-two" className="max-w-full"/>
							<p className="absolute top-3 left-4 text-white font-semibold text-xl">Warwick Hotels & Resorts</p>
							<span className="absolute right-10 top-3 text-2xl text-amber-300 rounded-full"><i className="fa-solid fa-bolt"></i></span>
						</div>
						<div className="bg-white flex-auto py-10 px-6 [&>*]:leading-loose [&>*]:font-medium [&>*]:text-xl">
							<p className="text-rose-600">$650.00</p>
							<p>Booking ID: 13452</p>
							<p className="text-slate-500">Resort 2</p>
						</div>
					</div>
					<div className="basis-[460px] rounded-lg overflow-hidden shadow-lg flex flex-col">
						<div className="relative">
						   <img src="place3.jpg" alt="picture-three" className="max-w-full"/>
						   <p className="absolute top-3 left-4 text-white font-semibold text-xl">Gorgeous Views</p>
						   <span className="absolute right-10 top-3 text-2xl text-amber-300 rounded-full"><i className="fa-solid fa-bolt"></i></span>
						</div>
						<div className="bg-white flex-auto py-10 px-6 [&>*]:leading-loose [&>*]:font-medium [&>*]:text-xl">
							<p className="text-rose-600">$900.00</p>
							<p>Booking ID: 21222</p>
							<p className="text-slate-500">Resort 3</p>
						</div>
					</div>
				</div>
				<div className="absolute w-[calc(100%-125px)] left-1/2 -translate-x-1/2 bg-sky-100 h-56 rounded-xl -bottom-14 -z-10"></div>
				<span className="absolute left-1/2 -translate-x-1/2 -bottom-[75px]"><i className="fa-solid fa-circle-down text-3xl text-black"></i></span>
			</div>
		</div>
	);
}

export default Options;
