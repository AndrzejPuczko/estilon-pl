import Image from 'next/image'
const ShortPortfolio = () => {
	return (
		<div className="short-portfolio my-20">
			<div className="flex text-center mx-auto justify-center flex-col items-center">
				<h3 className="scroll-m-20 mb-10 px-2 text-5xl font-light tracking-tight transition-colors max-w-4xl leading-tight">
					Zobacz kilka naszych <span className="font-bold">prac</span>.
				</h3>

				<ul className="gallery grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					<li>
						<Image src="/short-portfolio/1.jpg" width="650" height="300" alt="" />
					</li>
					<li>
						<Image src="/short-portfolio/3.jpg" width="650" height="300" alt="" />
					</li>
					<li>
						<Image src="/short-portfolio/4.jpg" width="650" height="300" alt="" />
					</li>
					<li>
						<Image src="/short-portfolio/5.jpg" width="650" height="300" alt="" />
					</li>
					<li>
						<Image src="/short-portfolio/2.jpg" width="650" height="300" alt="" />
					</li>
					<li>
						<Image src="/short-portfolio/6.jpg" width="650" height="300" alt="" />
					</li>
				</ul>
			</div>
		</div>
	)
}

export default ShortPortfolio
