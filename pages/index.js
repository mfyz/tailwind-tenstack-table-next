import Head from 'next/head'
import { H1 } from '../components/headings'

const SectionTitle = ({ children }) => <H1 className="mt-4">{children}</H1>

export default function Home() {
	return (
		<div>
			<Head>
				<title>Tailwind CSS Test</title>
			</Head>
			<main>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Enim minima iure cupiditate dignissimos. Blanditiis qui
					ut minima totam? Tenetur provident facere amet nobis
					earum minus repellendus ducimus voluptatibus dolorum
					laborum!
				</p>
			</main>
		</div>
	)
}
