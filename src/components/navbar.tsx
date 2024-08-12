import { navLinks } from '../constant'

function Navbar() {
	return (
		<div className='container w-full max-w-[1050px] mx-auto flex items-center justify-between py-5 px-5 lg:px-0'>
			<a href='/' className='text-3xl font-bold text-white'>
				P.
			</a>
			<ul className='hidden md:flex gap-6 text-[#A1B5BB] font-medium'>
				{navLinks.map(item => (
					<li
						key={item.id}
						className='hover:text-white transition duration-300 ease-in-out cursor-pointer'
					>
						{item.name}
					</li>
				))}
			</ul>
			<button className='ml-5 py-2 px-7 text-white rounded-lg bg-[#145E76]'>
				Contact
			</button>
		</div>
	)
}

export default Navbar
