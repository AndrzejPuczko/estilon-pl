import Cards from './Cards'
import { Button } from './ui/button'

const AboutUs = () => {
	return (
		<div class="about-us bg-zinc-50 py-16" id="o-nas">
			<div className="flex max-w-1400 my-0 mx-auto items-center flex-col text-center">
				<h3 className="scroll-m-20 pb-2 px-2 text-5xl font-bold tracking-tight transition-colors max-w-4xl leading-tight">O nas</h3>

				<p className="leading-7 [&:not(:first-child)]:mt-6 max-w-5xl  px-10  text-gray-500">
					<span className="text-lg font-semibold text-blue-500">Estilon</span> to ekspert w obszarze e-merchandisingu. Specjalizujemy się w fotografii produktowej, animacjach 360
					oraz obsłudze kart produktowych - od optymalizacji po kompleksową kreację graficzną. Wyróżnia nas podejście konsultingowe - każda usługa Estilon obejmuje doradztwo
					specjalistów.
				</p>
				<p className="leading-7 max-w-5xl text-gray-500 px-10">
					Dzielimy się wiedzą na temat najlepszych praktyk e-merchandisingu i wdrażamy je w projektach dla naszych klientów.
				</p>
				<p className="leading-7 max-w-5xl text-gray-500 px-10">Dzięki naszym inteligentnym e-wizualizacjom, sprzedaż w sieci jest skuteczna i zyskowna.</p>
				<Button variant="red" className="mt-6">
					Sprawdź
				</Button>
			</div>
			<Cards />
		</div>
	)
}

export default AboutUs
