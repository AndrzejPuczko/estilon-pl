'use client'
import Image from 'next/image'
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import galleryItems from '@/helpers/galleryItems'
import { useState } from 'react'
import { Button } from './ui/button'

const PortfolioGallery = () => {
	const [selectedCategory, setSelectedCategory] = useState(null)
	const filteredImages = selectedCategory ? galleryItems.filter(image => image.category === selectedCategory) : galleryItems

	const clickOne = category => {
		setSelectedCategory(category)
	}

	return (
		<>
			<Gallery>
				<ul className="gallery grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{filteredImages.map(image => {
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

			<Button onClick={() => clickOne('animations')}>Test</Button>
			<Button onClick={() => clickOne('packshot')}>Packshot</Button>
			<Button onClick={() => clickOne(null)}>Wszystkie</Button>
		</>
	)
}

export default PortfolioGallery
