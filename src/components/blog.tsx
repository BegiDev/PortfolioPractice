import { ArrowLeft, ArrowRight } from 'lucide-react'
import blogImg from '../../public/blog.jpg'
import { blogSite } from '../constant'

function Blog() {
	return (
		<div className='flex w-full max-w-[1050px] m-auto mt-20 px-5' id='blog'>
			<div className='w-[430px]'>
				<img src={blogImg} alt='Blog img' className='w-[430px] h-[400px]' />
				<h2 className='text-[#08546C] font-semibold text-3xl mt-7'>
					How This Agency Helped My Business And Career Journey?
				</h2>
				<p className='text-[#757575] my-4'>
					A successful marketing plan relies heavily on the pulling-power of
					advertising copy. writing result-oriented ad copy is dificult, as it
					must appeal to, entice, and onviced consumers tp action.
				</p>
				<div className='flex justify-between text-[#757575]'>
					<div className='flex gap-4'>
						{blogSite.map(item => (
							<p className='cursor-pointer hover:text-yellow-900' key={item.id}>
								{item.name}
							</p>
						))}
					</div>

					<p>05 jun, 2021</p>
				</div>
			</div>
			<div className='w-[400px] ml-24'>
				<h1 className='font-semibold text-[#08546C] text-4xl pr-[190px]'>
					My Blog And News
				</h1>
				<p className='text-[#757575] pr-[110px] mt-5'>
					If It’s abillboard ad, you’ll need a super catchy headline due to the
					speed at which people will pass.
				</p>
				<button className='py-3 px-4 bg-[#FFA63A] font-semibold text-white rounded-xl mt-10'>
					Go To The Blog
				</button>

				<div className='mt-24 flex gap-8 text-2xl text-[#FFA63A]'>
					<div className='rounded-full border border-[#FFA63A] p-2  hover:bg-[#FFA63A] transition-colors  cursor-pointer'>
						<ArrowLeft />
					</div>
					<div className='rounded-full border border-[#FFA63A] p-2 hover:bg-[#FFA63A] transition-colors cursor-pointer'>
						<ArrowRight />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Blog
