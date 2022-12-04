import React from 'react';

const Relaxing = () => {
	return (
		<div className="w-[calc(100%-260px)] xl:w-[calc(100%-130px)] lg:w-[calc(100%-16px)] min-h-[680px] flex xl:flex-col mx-auto">
			<div className="basis-1/2 xl:w-full">
				<div className="flex-container flex gap-x-6 [&>div]:flex-auto [&>div]:w-full hover:[&>div>img]:shadow-2xl [&>div>img]:transition-shadow xl:[&>div>img]:translate-y-0 xl:[&>div>img]:mb-12 sm:[&>div>img]:hidden">
					<div>
						<img src="view1.jpg" alt="view-one" className="rounded-lg h-[400px] object-center object-cover translate-y-32"/>
					</div>
					<div>
						<img src="view2.jpg" alt="view-two" className="rounded-lg h-[400px] object-center object-cover"/>
					</div>
					<div>
						<img src="view3.jpg" alt="view-three" className="rounded-lg h-[400px] object-center object-cover translate-y-32"/>
					</div>
				</div>
			</div>
			<div className="basis-1/2 xl:basis-0 xl:w-full">
				<div className="flex flex-col space-y-8 px-8">
					<p className="text-rose-500 font-semibold text-xl">Welcome to <span className="text-cyan-500">MARNstudio</span> Resort</p>
					<h1 className="text-5xl font-semibold">Relaxing Pleasure</h1>
					<p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste voluptatum ratione obcaecati voluptatem, exercitationem! Inventore, voluptatum dolorem dolor. Natus, rerum, sed amet quod ipsa modi itaque sapiente ullam dolores?</p>
					<button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white px-8 py-2 xl:px-4 text-2xl xl:text-lg font-medium rounded-full w-fit">Book Now</button>
				</div>
			</div>
		</div>
	);
}

export default Relaxing;
