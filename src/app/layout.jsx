import { Lato, Open_Sans } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
	title: 'Estilon papapa',
	description: 'Estilon pl - papa',
}

const RootLayout = ({ children }) => {
	return (
		<html lang="pl">
			<head>
				<script src="https://www.google.com/recaptcha/api.js" async defer></script>
			</head>
			<body className={`${openSans.className} ${openSans.variable} ${lato.variable}`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}

export default RootLayout
