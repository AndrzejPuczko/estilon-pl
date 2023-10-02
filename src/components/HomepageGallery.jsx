'use client'
import Image from 'next/image'
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import galleryItems from '@/helpers/galleryItems'

const HomepageGallery = () => {
	return (
		<div className="homepage-portfolio mt-20" id='galeria'>
			<div className="flex text-center mx-auto justify-center flex-col items-center">
				<h3 className="scroll-m-20 mb-10 px-2 text-5xl font-light tracking-tight transition-colors max-w-4xl leading-tight">
					Zobacz kilka naszych <span className="font-bold">prac</span>
				</h3>

				<Gallery>
					<ul className="gallery grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
						{galleryItems
							.filter(image => image.homepageGallery === true)
							.map(image => {
								return (
									<li>
										<Item original={image.src} thumbnail={image.src} width={image.width} height={image.height}>
											{({ ref, open }) => <Image ref={ref} onClick={open} src={image.src} width={image.width} height={image.height} alt={image.alt} />}
										</Item>
									</li>
								)
							})}
					</ul>
				</Gallery>
			</div>
		</div>
	)
}

export default HomepageGallery
