import { Button } from './ui/button'

const FilterButtons = props => {
	return (
		<div className="flex-wrap mt-12 mb-5 flex justify-center gap-5">
			<Button variant={props.selectedCategory === null ? 'destructive' : 'secondary'} onClick={() => props.onClick(null)}>
				Wszystkie
			</Button>
			<Button variant={props.selectedCategory === 'animations' ? 'destructive' : 'secondary'} onClick={() => props.onClick('animations')}>
				Animacje
			</Button>
			<Button variant={props.selectedCategory === 'packshot' ? 'destructive' : 'secondary'} onClick={() => props.onClick('packshot')}>
				Packshot
			</Button>
			<Button variant={props.selectedCategory === 'ghost' ? 'destructive' : 'secondary'} onClick={() => props.onClick('ghost')}>
				Ghost
			</Button>
		</div>
	)
}

export default FilterButtons
