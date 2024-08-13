import { statistic } from '../constant'

function Statistica() {
	return (
		<div className='mt-[-120px] md:mt-0 statistica max-w-7xl h-[150px] w-[700px] m-auto bg-white text-white rounded-md py-6 px-12 font-inter z-30'>
			<h2 className='text-2xl font-semibold text-[#265A6A]'>STATISTIC</h2>

			<div className='flex items-center justify-between text-[#08546C] pt-3'>
				{statistic.map(item => (
					<div key={item.id} className='text-center'>
						<h2 className='font-semibold text-2xl'>{item.number}</h2>
						<span>{item.label}</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default Statistica
