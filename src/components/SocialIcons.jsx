import Link from 'next/link'
import Image from 'next/image'

const SocialIcons = () => {
	return (
		<div className="nav-social flex gap-3">
			<Link href="/fb">
				<Image src="/fb.png" width="20" height="20" alt="facebook icon" />
			</Link>
			<Link href="/tel">
				<Image src="/tel.png" width="20" height="20" alt="phone icon" />
			</Link>
		</div>
	)
}

export default SocialIcons
