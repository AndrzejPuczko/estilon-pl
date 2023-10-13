'use client'
import Image from 'next/image'
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import galleryItems from '@/helpers/galleryItems'
import { useState } from 'react'
import FilterButtons from './FilterButtons'

import { Modal, ModalAction, ModalContent, ModalDescription, ModalFooter, ModalHeader, ModalTrigger } from '@/components/ui/modal'

const PortfolioGallery = () => {
	const [selectedCategory, setSelectedCategory] = useState(null)
	const filteredImages = selectedCategory ? galleryItems.filter(image => image.category === selectedCategory) : galleryItems

	const clickOne = category => {
		setSelectedCategory(category)
	}

	return (
		<>
			<FilterButtons onClick={clickOne} selectedCategory={selectedCategory} />
			<Gallery>
				<ul className="gallery grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-10">
					{filteredImages.map(image =>
						image.animation === true ? (
							<li key={image.id} className="cursor-pointer m-2">
								<Modal>
									<ModalTrigger>
										<Image src={image.src} width={image.width} height={image.height} />
									</ModalTrigger>
									<ModalContent>
										<ModalHeader>
											<ModalDescription>
												<iframe src="/homepage-animation/index.html" width="100%" height="600" />
											</ModalDescription>
										</ModalHeader>
										<ModalFooter>
											<ModalAction>Zamknij</ModalAction>
										</ModalFooter>
									</ModalContent>
								</Modal>
							</li>
						) : (
							<li key={image.id || image.src} className="cursor-pointer m-2">
								<Item original={image.src} thumbnail={image.src} width={image.width} height={image.height}>
									{({ ref, open }) => <Image ref={ref} onClick={open} src={image.src} width={image.width} height={image.height} alt={image.alt} />}
								</Item>
							</li>
						)
					)}
				</ul>
			</Gallery>
		</>
	)
}

export default PortfolioGallery
