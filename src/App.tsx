import Blog from './components/blog'
import Feedback from './components/feedback'
import Footer from './components/footer'
import Hero from './components/hero'
import Navbar from './components/navbar'
import Services from './components/services'
import Statistica from './components/statistica'

function App() {
	return (
		<div className='relative'>
			<div className='bg-img -z-10'>
				<Navbar />
				<Hero />
			</div>

			<div className='md:absolute top-[570px] bottom-1 left-0 right-0 z-50'>
				<Statistica />
			</div>
			<Services />
			<Feedback />
			<Blog />
			<Footer />
		</div>
	)
}

export default App
