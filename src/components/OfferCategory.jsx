'use client'
import { useState, useEffect } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { OfferAnimations, OfferPackshot } from '@/helpers/offerContent'

const OfferCategory = () => {
	const [activeTab, setActiveTab] = useState('photography')

	useEffect(() => {
		const categoryMap = {
			'#fotografia': 'photography',
			'#animacje360': 'animations',
			'#szparowanie': 'clipping',
			'#projekty-indywidualne': 'individual',
		}

		if (categoryMap[window.location.hash]) {
			setActiveTab(categoryMap[window.location.hash])
		}
	}, [])

	const changeValue = category => {
		setActiveTab(category)
	}

	return (
		<div className="offer-category max-w-1400 mx-auto my-10">
			<Tabs value={activeTab} onValueChange={changeValue} className="flex-wrap justify-center mx-auto px-5 max-w-7xl">
				<TabsList className="mx-auto flex">
					<TabsTrigger value="photography">Fotografia produktowa</TabsTrigger>
					<TabsTrigger value="animations">Animacje 360</TabsTrigger>
					<TabsTrigger value="clipping">Szparowanie / Wycinanie tła</TabsTrigger>
					<TabsTrigger value="individual">Projekty indywidualne</TabsTrigger>
				</TabsList>
				<TabsContent value="photography">
					<OfferPackshot />
				</TabsContent>
				<TabsContent value="animations">
					<OfferAnimations />
				</TabsContent>
				<TabsContent value="clipping">
					<OfferAnimations />
				</TabsContent>
				<TabsContent value="individual">
					<OfferAnimations />
				</TabsContent>
			</Tabs>
		</div>
	)
}

export default OfferCategory
