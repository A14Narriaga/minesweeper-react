import "./app.scss"

import { Controls, Header, Minesweeper, Timer } from "./containers"

function App() {
	return (
		<>
			<Header />
			<Minesweeper />
			<Timer />
			<Controls />
		</>
	)
}

export default App
