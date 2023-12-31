import Image from 'next/image'

const currentYear = new Date().getFullYear();

const Footer = () => {
	return (
		<div className="footer bg-neutral-900 text-zinc-400 pt-16 pb-10">
			<div className="grid grid-cols-1 lg:grid-cols-3 max-w-6xl px-6 mx-auto ">
				<div>
					<h3 className="text-lg font-semibold text-zinc-200">Empowering Designers, Makers, Doers and Creatives</h3>
					<p className="leading-7 mt-2 text-sm max-w-md lg:max-w-xs">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, vitae. Lorem ipsum dolor sit amet.</p>
					<div className="flex gap-4 mt-4">
						<Image src="/like-fb.jpg" width="146" height="35" />
						<Image src="/slick-2.jpg" width="185" height="35" />
					</div>
				</div>
				<nav className="footer-nav flex gap-8 mx-auto">
					<div className="AboutUs">
						<h3 className="mt-1 mb-3 uppercase font-semibold text-zinc-200">About Us</h3>
						<ul className="text-sm">
							<li className="py-1">Contact us</li>
							<li className="py-1">Newsletter</li>
							<li className="py-1">Animations</li>
							<li className="py-1">NextJS</li>
						</ul>
					</div>
					<div className="AboutUs">
						<h3 className="mt-1 mb-3 uppercase font-semibold text-zinc-200">Info</h3>
						<ul className="text-sm">
							<li className="py-1">Contact us</li>
							<li className="py-1">Newsletter</li>
							<li className="py-1">Animations</li>
							<li className="py-1">NextJS</li>
						</ul>
					</div>
				</nav>
				<div className="flex flex-col max-h-9 gap-3 items-end">
					<Image src="/like-fb.jpg" width="146" height="35" />
					<Image src="/slick-2.jpg" width="185" height="35" />
				</div>
			</div>
			<p className="mt-10 text-sm text-center">© {currentYear} - <a href="https://webdevlab.pl" className='hover:text-purple-500 duration-200 font-bold'>webdevLab.pl</a> - Wszelkie prawa zastrzeżone</p>
		</div>
	)
}

export default Footer
