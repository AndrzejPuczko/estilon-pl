import Image from 'next/image'
import cartLabels from '@/helpers/cartLabels'

const Cards = () => {
	return (
		<div className="cards flex flex-wrap max-w-screen-xl my-0 mx-auto pt-10 px-10">
			{cartLabels.map(cart => {
				return (
					<div className="w-full sm:w-1/2 lg:w-1/4">
						<div className="flex flex-col items-center justify-center text-center py-12 px-2 m-2 border rounded-lg">
							<Image src={cart.src} width="50" height="50" className="text-gray-500" />
							<h4 className="scroll-m-20 text-xl font-semibold tracking-tight my-2">{cart.title}</h4>
							<p className="leading-7 max-w-5xl text-gray-500 text-sm">{cart.description}</p>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default Cards
