import Image from 'next/image'

const Opinions = () => {
	return (
		<div class="opinions bg-zinc-50 py-16" id="opinie">
			<div className="flex text-center my-0 mx-auto justify-center flex-col items-center">
				<h2 className="scroll-m-20 pb-2 px-2 text-5xl font-light tracking-tight transition-colors max-w-4xl leading-tight">
					Jak <span className="font-semibold">o nas</span> mówią?
				</h2>
				<p className="leading-7 mt-6 max-w-4xl  px-10 text-gray-500">
					Estilon to ekspert w obszarze e-merchandisingu. Specjalizujemy się w fotografii produktowej, animacjach 360 oraz obsłudze kart produktowych - od optymalizacji po
					kompleksową
				</p>
			</div>
			<div className="flex mx-auto justify-center mt-10 max-w-6xl text-gray-500 px-6">
				<ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
					<li className="grid grid-cols-5 border rounded-lg px-2 py-4 gap-2 lg:px-10 lg:py-12">
						<Image src="/user.jpg" width="65" height="65" alt="opis" />

						<div className="col-span-4">
							<p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla obcaecati quaerat nesciunt vel temporibus blanditiis doloremque.</p>
							<p className="mt-4 font-bold text-gray-950">Laim Nesson</p>
							<p className="text-xs">Allegro, Dział Grafiki</p>
						</div>
					</li>
					<li className="grid grid-cols-5	  border rounded-lg px-10 py-12">
						<Image src="/user.jpg" width="65" height="65" alt="opis" />

						<div className="col-span-4">
							<p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla obcaecati quaerat nesciunt vel temporibus blanditiis doloremque.</p>
							<p className="mt-4 font-bold text-gray-950">Laim Nesson</p>
							<p className="text-xs">Allegro, Dział Grafiki</p>
						</div>
					</li>
					<li className="grid grid-cols-5	  border rounded-lg px-10 py-12">
						<Image src="/user.jpg" width="65" height="65" alt="opis" />

						<div className="col-span-4">
							<p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla obcaecati quaerat nesciunt vel temporibus blanditiis doloremque.</p>
							<p className="mt-4 font-bold text-gray-950">Laim Nesson</p>
							<p className="text-xs">Allegro, Dział Grafiki</p>
						</div>
					</li>
					<li className="grid grid-cols-5 border rounded-lg px-10 py-12">
						<Image src="/user.jpg" width="65" height="65" alt="opis" />

						<div className="col-span-4">
							<p className="">Lorem ipsum dolor siipisicing elit. Nulla obcaecati quaerat nesciunt vel temporibus blanditiis doloremque.</p>
							<p className="mt-4 font-bold text-gray-950">Laim Nesson</p>
							<p className="text-xs">Allegro, Dział Grafiki</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Opinions
