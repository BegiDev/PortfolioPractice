function Hero() {
	return (
		<div className='container w-full max-w-[1050px] mx-auto flex flex-col lg:flex-row pb-10 mt-9 md:mt-16 px-5 lg:px-0'>
			<div className='lg:w-[50%] lg:mb-0'>
				<h2 className='bg-[#094556] text-white py-2 rounded-lg font-schoolbell w-[60%] sm:w-[30%] lg:w-[27%] text-center'>
					Hey, I’m Musa
				</h2>
				<h1 className='text-white font-bold text-5xl md:text-6xl font-inter my-6 w-[500px] md:w-full'>
					Building Digital Products, Brands & Experience.
				</h1>
				<span className='text-[#849499] text-lg w-[400px] md:w-full'>
					A Product Design and Visual Designer in SF. I specialize in UI/UX,
					Responsive web design, and Visual Development.
				</span>
				<div className='mt-6 md:mt-9'>
					<button className='bg-[#FFA63A] py-2 px-7 text-white rounded-lg'>
						Hire Me
					</button>
					<button className='ml-5 py-2 px-7 text-white rounded-lg bg-[#145E76]'>
						My Works
					</button>
				</div>
			</div>
			<div className='hidden lg:w-[50%] md:flex flex-col gap-6 justify-center items-center'>
				<div className='relative w-[300px] py-4 px-4 text-white border border-white rounded-lg backdrop-blur-sm bg-[#145E76]/0.5'>
					<p className='relative text-[14px] font-inter'>
						Musa has benn an outstanding contributor to our team’s UI Designer
						needs highly recommened’’ officia.
					</p>
				</div>
				<div className='relative w-[300px] py-4 px-4 text-white border border-white rounded-lg backdrop-blur-sm bg-[#145E76]/0.5 mr-[70px]'>
					<p className='relative text-[14px] font-inter'>
						Your work has been outstanding! Your attention to detail and
						commitment to excellence really show in the results. Keep up the
						great work
					</p>
				</div>
				<div className='relative w-[300px] py-4 px-4 text-white border border-white rounded-lg backdrop-blur-sm bg-[#145E76]/0.5 ml-[50px]'>
					<p className='relative text-[14px] font-inter'>
						I appreciate how you always step up when the team needs you. Your
						ability to work well with others and lead by example is invaluable
					</p>
				</div>
			</div>
		</div>
	)
}

export default Hero
