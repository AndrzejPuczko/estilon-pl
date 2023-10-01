import Image from "next/image"
const Cooperation = () => {
	return (
		<div className="cooperation mt-16 mx-10" id='zaufali-nam'>
			<div className="flex text-center my-0 mx-auto justify-center flex-col items-center">
				<h3 className="scroll-m-20 pb-2 px-2 text-5xl font-light tracking-tight transition-colors max-w-4xl leading-tight">
					Dziękujemy za <span className="font-bold">zaufanie</span>.<br />
					Każda współpraca jest dla nas ważna.
				</h3>
				<p className="leading-7 mt-6 max-w-xl px-10 text-gray-500">
					Estilon to ekspert w obszarze e-merchandisingu. Specjalizujemy się w fotografii produktowej, animacjach 360 oraz obsłudze kart produktowych - od optymalizacji po
					kompleksową
				</p>
			</div>
			<div className="cooperation-list max-w-6xl mx-auto">
                <ul className="flex flex-wrap justify-center gap-6 my-10">
                    <li><Image src="/anim.png" width="250" height="100" alt="Animation" /></li>
                    <li><Image src="/anim.png" width="250" height="100" alt="Animation" /></li>
                    <li><Image src="/anim.png" width="250" height="100" alt="Animation" /></li>
                    <li><Image src="/anim.png" width="250" height="100" alt="Animation" /></li>
                    <li><Image src="/anim.png" width="250" height="100" alt="Animation" /></li>
                    <li><Image src="/anim.png" width="250" height="100" alt="Animation" /></li>
                    <li><Image src="/anim.png" width="250" height="100" alt="Animation" /></li>
                    <li><Image src="/anim.png" width="250" height="100" alt="Animation" /></li>
                </ul>
            </div>
		</div>
	)
}

export default Cooperation
