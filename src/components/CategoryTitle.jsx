const CategoryTitle = props => {
	return (
		<div class="category-title pt-14 bg-slate-900 flex justify-center text-gray-100 bg-title-pattern">
			<h1 className="py-20 text-5xl font-bold">{props.title}</h1>
		</div>
	)
}

export default CategoryTitle
