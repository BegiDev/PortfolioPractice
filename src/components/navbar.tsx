import { useState } from 'react'
import { navLinks } from '../constant'
import { Menu } from 'lucide-react'

function Navbar() {
	const [menu, setMenu] = useState(true)

	return (
		<div className='w-full max-w-[1050px] mx-auto flex items-center justify-between py-5 px-5 lg:px-0 relative'>
			<a href='/' className='text-3xl font-bold text-white'>
				P.
			</a>
			<ul className='hidden md:flex gap-6 text-[#A1B5BB] font-medium'>
				{navLinks.map(item => (
					<li
						key={item.id}
						className='hover:text-white transition duration-300 ease-in-out cursor-pointer'
					>
						<a href={item.href}>{item.name}</a>
					</li>
				))}
			</ul>
			{menu && (
				<div className='absolute top-0 right-0 block md:hidden backdrop-blur-sm bg-[#145E76]/0.5 h-[100vh] w-[250px] z-40 translate-x-5		'>
					<ul className='text-white font-medium absolute top-16 right-[100px]'>
						{navLinks.map(item => (
							<li
								key={item.id}
								className='hover:text-[#A1B5BB] block transition duration-300 ease-in-out cursor-pointer py-4'
							>
								<a href={item.href}>{item.name}</a>
							</li>
						))}
					</ul>
					<button className='py-2 px-6 text-white rounded-lg bg-[#145E76] text-base mt-3 absolute top-[343px] right-[65px]'>
						Contact
					</button>
				</div>
			)}
			<button className='hidden md:block ml-5 py-2 px-7 text-white rounded-lg bg-[#145E76]'>
				Contact
			</button>
			<button
				className='z-50 text-white block md:hidden'
				onClick={() => setMenu(!menu)}
			>
				<Menu />
			</button>
		</div>
	)
}

export default Navbar
