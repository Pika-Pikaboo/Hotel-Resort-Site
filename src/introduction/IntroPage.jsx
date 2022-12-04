import React from 'react';

const IntroPage = () => {
	return (
		<div className="relative w-[calc(100%-180px)] lg:w-full lg:min-h-3/4 xl:w-[calc(100%-130px)] mx-auto h-[770px] bg-intro-image bg-no-repeat bg-cover bg-center rounded-2xl lg:rounded-none -z-10">
			<div className="absolute inset-0 w-full h-full lg:rounded-none rounded-2xl bg-gradient-to-r from-black/70"></div>
			<div className="absolute max-w-[650px] left-[3%] top-1/2 -translate-y-1/2">
				<h1 className="text-6xl lg:text-3xl font-semibold text-cyan-500 mb-8">Enjoy Your<br/>Dream Vacation</h1>
				<p className="text-white font-medium text-lg mb-12">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam officiis a recusandae laudantium, repudiandae, hic!</p>
				<button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white px-8 py-2 xl:px-4 text-2xl xl:text-lg font-medium rounded-full w-fit">Explore Now</button>
			</div>
		</div>
	);
}

export default IntroPage;
