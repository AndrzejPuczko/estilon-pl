import Image from 'next/image'

const AboutAnimations = () => {
	return (
		<div className="about-animations bg-neutral-900 text-zinc-200">
			<div className="flex text-center my-0 mx-auto justify-center flex-col items-center">
				<h2 className="mt-12 scroll-m-20 pb-2 px-2 text-5xl font-light tracking-tight transition-colors max-w-4xl leading-tight">
					Slick comes with <span className="font-semibold">modular,</span> structured codes Lorem ipsum dolor sit amet.
				</h2>
				<p className="leading-7 mt-6 max-w-xl  px-10 text-zinc-400">
					Estilon to ekspert w obszarze e-merchandisingu. Specjalizujemy się w fotografii produktowej, animacjach 360 oraz obsłudze kart produktowych - od optymalizacji po
					kompleksową
				</p>
			</div>
			<div className="flex my-20 mx-auto justify-center flex-wrap max-w-7xl text-zinc-400">
				<div className="animation-options px-5">
					<div className="max-w-sm lg:max-w-xs h-px bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"></div>
					<h3 className="mt-6 text-lg font-semibold uppercase text-zinc-200">Control everything</h3>
					<p className="leading-7 mt-2 text-base max-w-md lg:max-w-xs">Estilon to ekspert w obszarze e-merchandisingu. Specjalizujemy się w fotografii produktowej,</p>
				</div>

				<div className="animation-options px-5">
					<div className="max-w-sm lg:max-w-xs h-px bg-gradient-to-r from-red-400 via-pink-500 to-purple-500"></div>
					<h3 className="mt-6 text-lg font-semibold uppercase text-zinc-200">everything</h3>
					<p className="leading-7 mt-2 text-base max-w-md lg:max-w-xs">Estilon to ekspert w obszarze e-merchandisingu. Specjalizujemy </p>
				</div>
				<div className="animation-options px-5">
					<div className="max-w-sm lg:max-w-xs h-px bg-gradient-to-r from-indigo-600 to-blue-300"></div>
					<h3 className="mt-6 text-lg font-semibold uppercase text-zinc-200">Control everything</h3>
					<p className="leading-7 mt-2 text-base max-w-md lg:max-w-xs">Estilon to ekspert w obszarze e-merchandisingu. się w fotografii produktowej,</p>
				</div>
			<Image src="/anim.png" width="850" height="300" alt="Animation" className="mt-20" />
			</div>

			<p>test</p>
			<p>test</p>
			<p>test</p>
		</div>
	)
}

export default AboutAnimations
