import "../global-styles/normalize.css"
import "../global-styles/main.module.css"
import "../index.css"
import "../data"


import Pomodoro from "../components/Pomodoro"
import Layout from "../components/Layout"

export default function App({ Component, pageProps }) {
	return (
		
			<Layout page = 'Main'>
				<Pomodoro>
					<Component {...pageProps}></Component>
				</Pomodoro>
			</Layout>
		
	)
}


