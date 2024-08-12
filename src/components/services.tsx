import { ArrowRight } from 'lucide-react'
import { services, portfolio } from '../constant'

function Services() {
	return (
		<>
			<div className='container w-full max-w-[1150px] m-auto my-32'>
				<div className='flex items-center justify-center max-w-96 mx-auto text-center'>
					<div>
						<h2 className='font-schoolbell text-2xl'>Services</h2>
						<h1 className='text-3xl mt-4 font-inter text-[#08546C] font-semibold'>
							Building Digital Products With Better Experience
						</h1>
					</div>
				</div>

				<div className='flex justify-between gap-4 mt-6'>
					{services.map(item => (
						<div
							className={`w-[240px] py-5 px-3 ${
								item.active ? 'bg-[#08546C] text-white' : 'bg-white text-black'
							} transition-colors duration-300`}
							key={item.id}
						>
							<span
								className={`text-[#08546C] ${item.active ? 'text-white' : ''}`}
							>
								<item.icon className='text-2xl' />
							</span>
							<h2
								className={`mt-4 font-semibold text-2xl ${
									item.active ? 'text-white' : 'text-[#0F1221]'
								}`}
							>
								{item.title}
							</h2>
							<p
								className={`mt-2 text-base ${
									item.active ? 'text-gray-300' : 'text-[#696969]'
								}`}
							>
								{item.decr}
							</p>
						</div>
					))}
				</div>
			</div>

			<div className='w-[1000px] m-auto'>
				<div className='flex justify-between gap-5'>
					<div className='m'>
						<div className='max-w-xl'>
							<h1 className='text-3xl text-[#08546C] font-semibold mb-2'>
								Featured My Portfolio
							</h1>
							<span className='text-[#757575] text-base '>
								Explore some of my latest website projects. Non suscipit ex
								blandit vitae. Pellentesque vel urna id massa sagittis luctus
								Fusce iaculis.
							</span>
						</div>

						<div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full '>
							{portfolio.map(item => (
								<div className='mt-8 cursor-pointer' key={item.id}>
									<img
										src={item.img}
										alt='Website design showcasing emotional response to color and image'
										className='w-full h-[270px] object-cover mb-4 rounded-md cursor-pointer'
									/>
									<h2 className='text-2xl font-semibold mb-2 text-[#08546C] font-inter'>
										{item.title}
									</h2>
									<p className='text-[#757575] font-inter mb-3'>{item.decr}</p>
									<a
										href='#'
										className='text-[#08546C] hover:underline font-medium flex gap-2'
									>
										Read Case Study
										<span>
											<ArrowRight />
										</span>
									</a>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Services
