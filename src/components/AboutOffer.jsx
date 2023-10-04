import Image from 'next/image'

const AboutOffer = () => {
	return (
		<div class="bg-zinc-50 pb-10">
			<div className="flex text-center my-0 mx-auto justify-center flex-col items-center pt-5">
				<h3 className="scroll-m-20 pb-2 px-2 text-5xl font-light tracking-tight transition-colors max-w-4xl leading-tight">
					To mogą być zdjęcia <span className="font-bold">Twoich</span> produktów.
				</h3>
				<p className="leading-7 mt-2 max-w-3xl px-10 text-gray-500">
					Poznaj nasze portfolio i zobacz, jak łączymy innowacyjność z funkcjonalnością, tworząc projekty, które robią wrażenie i spełniają oczekiwania.
				</p>
			</div>
			<div className="mx-auto mt-5 max-w-sm lg:max-w-xs h-px bg-gradient-to-r from-red-400 via-pink-500 to-purple-500"></div>
			<div className="flex mx-auto justify-center mt-5 max-w-6xl text-gray-500 px-6">
				<ul className="grid grid-cols-2 lg:grid-cols-3 gap-4">
					<li className="grid grid-cols-5 border rounded-lg px-2 py-4 gap-2 lg:px-5 lg:py-5">
						<Image src="/user.jpg" width="85" height="85" alt="opis" />
						<div className="col-span-4 flex flex-col justify-center">
							<p className="font-bold text-gray-950">Laim Nesson</p>
							<p className="text-sm">Lorem ipsum dolor sit amet </p>
						</div>
					</li>
                    <li className="grid grid-cols-5 border rounded-lg px-2 py-4 gap-2 lg:px-5 lg:py-5">
						<Image src="/user.jpg" width="85" height="85" alt="opis" />
						<div className="col-span-4 flex flex-col justify-center">
							<p className="font-bold text-gray-950">Laim Nesson</p>
							<p className="text-sm">Lorem ipsum dolor sit amet </p>
						</div>
					</li>
                    <li className="grid grid-cols-5 border rounded-lg px-2 py-4 gap-2 lg:px-5 lg:py-5">
						<Image src="/user.jpg" width="85" height="85" alt="opis" />
						<div className="col-span-4 flex flex-col justify-center">
							<p className="font-bold text-gray-950">Laim Nesson</p>
							<p className="text-sm">Lorem ipsum dolor sit amet </p>
						</div>
					</li>
                    <li className="grid grid-cols-5 border rounded-lg px-2 py-4 gap-2 lg:px-5 lg:py-5">
						<Image src="/user.jpg" width="85" height="85" alt="opis" />
						<div className="col-span-4 flex flex-col justify-center">
							<p className="font-bold text-gray-950">Laim Nesson</p>
							<p className="text-sm">Lorem ipsum dolor sit amet </p>
						</div>
					</li>
                    <li className="grid grid-cols-5 border rounded-lg px-2 py-4 gap-2 lg:px-5 lg:py-5">
						<Image src="/user.jpg" width="85" height="85" alt="opis" />
						<div className="col-span-4 flex flex-col justify-center">
							<p className="font-bold text-gray-950">Laim Nesson</p>
							<p className="text-sm">Lorem ipsum dolor sit amet </p>
						</div>
					</li>
                    <li className="grid grid-cols-5 border rounded-lg px-2 py-4 gap-2 lg:px-5 lg:py-5">
						<Image src="/user.jpg" width="85" height="85" alt="opis" />
						<div className="col-span-4 flex flex-col justify-center">
							<p className="font-bold text-gray-950">Laim Nesson</p>
							<p className="text-sm">Lorem ipsum dolor sit amet </p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default AboutOffer
