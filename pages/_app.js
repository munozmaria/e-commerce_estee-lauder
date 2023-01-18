import "../global-styles/main.module.css"
import "../index.css"
import "../data"

import Pomodoro from "../components/Pomodoro"

export default function App({ Component, pageProps }) {
	return (
		<>
		
			<Pomodoro>
				<Component {...pageProps}></Component>
			</Pomodoro>
		</>
	)
}
