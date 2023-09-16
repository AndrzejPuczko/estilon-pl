import HeroImg from '@/components/HeroImg'
import AboutUs from '@/components/AboutUs'
import AboutAnimations from '@/components/AboutAnimations'
import Cooperation from '@/components/Cooperation'
import ShortPortfolio from '@/components/ShortPortfolio'
import Opinions from '@/components/Opinions'

const Home = () => {
	return (
		<main className="main">
			<HeroImg />
			<AboutUs />
			<AboutAnimations />
			<Cooperation />
			<ShortPortfolio />
			<Opinions />
		</main>
	)
}

export default Home
