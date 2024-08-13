import useEmblaCarousel from 'embla-carousel-react'
import { Quote } from 'lucide-react'
import Autoplay from 'embla-carousel-autoplay'
import { feedbackPage } from '../constant'

function Feedback() {
	const autoplayOptions = {
		delay: 1800,
		stopOnInteraction: true,
	}
	const [emblaRef] = useEmblaCarousel({ loop: true }, [
		Autoplay(autoplayOptions),
	])

	return (
		<div
			className='feedback w-full max-w-[1050px] m-auto flex mt-24 gap-6 justify-center embla px-5'
			ref={emblaRef}
		>
			<div className='embla__container'>
				{feedbackPage.map(item => (
					<div className='w-[33%] embla__slide ' key={item.id}>
						<div className='flex justify-between items-center font-inter'>
							<div className='flex gap-3'>
								<img
									src={item.img}
									alt='img'
									className='h-[40px] w-[40px] object-cover rounded-full'
								/>
								<div>
									<h2>{item.name}</h2>
									<p>{item.job}</p>
								</div>
							</div>
							<span>
								<Quote />
							</span>
						</div>
						<p className='mt-[3px] font-sans'>{item.feedback}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default Feedback
