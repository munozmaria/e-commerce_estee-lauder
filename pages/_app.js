import Layout from "../components/Layout"
import "../global-styles/normalize.css"
import "../global-styles/main.module.css"
import "../global-styles/components-styles.css"
import "../data"

import Pomodoro from "../components/Pomodoro"

export default function App({ Component, pageProps }) {
	return (
		<Layout>
			<Pomodoro>
				<Component {...pageProps}></Component>
			</Pomodoro>
		</Layout>
	)
}
