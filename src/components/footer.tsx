import { Facebook, Instagram, Twitch, Twitter } from 'lucide-react'
import { footerContact, footerPages, footerServices } from '../constant'

function Footer() {
	return (
		<div className='border-t mt-12 px-5'>
			<div className='flex justify-between w-full max-w-[1150px] m-auto py-8'>
				<div className='w-[25%]'>
					<a href='/' className='text-[#08546C] font-bold text-3xl'>
						P.
					</a>
					<p className='text-[#757575] font-inter my-6'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
						mattis nunc aliquam tincidunt est non.
					</p>
					<div className='flex gap-5 cursor-pointertext-[#757575] '>
						<Facebook />
						<Instagram />
						<Twitter />
						<Twitch />
					</div>
				</div>
				<div>
					<h2 className='text-[#08546C] font-semibold text-[19px]'>Pages</h2>
					<div className='flex flex-col mt-2'>
						{footerPages.map(item => (
							<a href='#' key={item.id} className='text-[#787878] py-[2.5px]'>
								{item.name}
							</a>
						))}
					</div>
				</div>
				<div>
					<h2 className='text-[#08546C] font-semibold text-[19px]'>Services</h2>
					<div className='flex flex-col mt-2'>
						{footerServices.map(item => (
							<a href='#' key={item.id} className='text-[#787878] py-[2.5px]'>
								{item.name}
							</a>
						))}
					</div>
				</div>
				<div>
					<h2 className='text-[#08546C] font-semibold text-[19px]'>Contact</h2>
					<div className='flex flex-col mt-2'>
						{footerContact.map(item => (
							<a href='#' key={item.id} className='text-[#787878] py-[2.5px]'>
								{item.name}
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
