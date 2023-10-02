import PortfolioGallery from '@/components/PortfolioGallery'
import CategoryTitle from '@/components/CategoryTitle'

const Portfolio = () => {
	return (
		<>
			<CategoryTitle title="Portfolio" />
			<div className="flex text-center my-0 mx-auto justify-center flex-col items-center mt-5">
				<h3 className="scroll-m-20 pb-2 px-2 text-5xl font-light tracking-tight transition-colors max-w-4xl leading-tight">
					To mogą być zdjęcia <span className="font-bold">Twoich</span> produktów.
				</h3>
				<p className="leading-7 mt-2 max-w-3xl px-10 text-gray-500">
					Poznaj nasze portfolio i zobacz, jak łączymy innowacyjność z funkcjonalnością, tworząc projekty, które robią wrażenie i spełniają oczekiwania.
				</p>
			</div>
			<div className="mx-auto mt-5 max-w-sm lg:max-w-xs h-px bg-gradient-to-r from-red-400 via-pink-500 to-purple-500"></div>
			<PortfolioGallery />
		</>
	)
}

export default Portfolio
