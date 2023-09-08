'use client'
import React from 'react'
import { cn } from '@/utils/utils'
import Link from 'next/link'
import portfolio from '@/labels/navLabels'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

const DesktopMenu = () => {
	return (
		<NavigationMenu className="hidden sm:grid">
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Home</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
							<li className="row-span-3">
								<NavigationMenuLink asChild>
									<a
										className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
										href="/">
										<p>IMAGE</p>
										<div className="mb-2 mt-4 text-lg font-medium">shadcn/ui</div>
										<p className="text-sm leading-tight text-muted-foreground">Beautifully designed components built with Radix UI and Tailwind CSS.</p>
									</a>
								</NavigationMenuLink>
							</li>
							<ListItem href="/docs" title="O nas">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore praesentium.
							</ListItem>
							<ListItem href="/docs/installation" title="Zaufali nam">
								Lorem ipsum dolor sit amet consectetur adipisicing elit
							</ListItem>
							<ListItem href="/docs/primitives/typography" title="Opinie">
								Lorem ipsum dolor sit amet consectetur adipisicing elit
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Portfolio</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
							{portfolio.map(link => (
								<ListItem key={link.title} title={link.title} href={link.href}>
									{link.description}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="/docs" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>Oferta</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="/docs" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>Kontakt</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	)
}

const ListItem = React.forwardRef((props, ref) => {
	const { className, title, children, ...otherProps } = props
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground',
						className
					)}
					{...otherProps}>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
				</a>
			</NavigationMenuLink>
		</li>
	)
})
ListItem.displayName = 'ListItem'

export default DesktopMenu
