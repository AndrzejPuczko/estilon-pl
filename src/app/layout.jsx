import { Lato, Open_Sans } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/Header'

const lato = Lato({
	subsets: ['latin'],
	weight: ['400', '700', '900'],
	variable: '--font-lato',
})
const openSans = Open_Sans({
	subsets: ['latin'],
	variable: '--font-open-sans',
})

export const metadata = {
	title: 'Estilon',
	description: 'Estilon',
}

const RootLayout = ({ children }) => {
	return (
		<html lang="pl">
			<body className={`${openSans.className} ${openSans.variable} ${lato.variable}`}>
				<Header />
				{children}
			</body>
		</html>
	)
}

export default RootLayout
