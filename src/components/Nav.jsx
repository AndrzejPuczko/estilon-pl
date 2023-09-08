import DesktopMenu from './DesktopMenu'
import styles from './nav.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const Nav = () => {
	return (
		<nav className="nav-desktop flex justify-between items-center mx-auto my-0 w-full max-w-1400 h-12">
			<div className="nav-logo flex pl-5 2xl:pl-0">
				<Link href="/">
					<Image src="/logo.png" width="170" height="50" alt="estilon logo" />
				</Link>
			</div>

			<div className="nav-content flex items-center gap-2 pr-5 2xl:pr-0">
				<div className="nav-links">
					<DesktopMenu />
				</div>
				<div className="nav-social flex gap-3">
					<Link href="/fb">
						<Image src="/fb.png" width="20" height="20" alt="facebook icon"/>
					</Link>
                    <Link href="/tel">
						<Image src="/tel.png" width="20" height="20" alt="phone icon"/>
					</Link>
				</div>
			</div>
		</nav>
	)
}

export default Nav
