import DesktopMenu from './DesktopMenu'
import Image from 'next/image'
import Link from 'next/link'
import SocialIcons from './SocialIcons'

const Nav = () => {
	return (
		<div className="nav-section flex justify-between items-center mx-auto my-0 w-full max-w-1400 h-14">
			<div className="nav-logo flex pl-5 2xl:pl-0">
				<Link href="/">
					<Image src="/logo.png" width="170" height="50" alt="estilon logo" />
				</Link>
			</div>
			<div className="nav-content flex items-center gap-2 pr-5 2xl:pr-0">
				<DesktopMenu />
				<SocialIcons />
			</div>
		</div>
	)
}

export default Nav
