import "./app.scss"

import { ThemeProvider } from "@mui/material"

import { Board, Controls, Header, Timer } from "./containers"
import { Sound } from "./containers/sound"
import { Themes } from "./styles/themes"

function App() {
	return (
		<ThemeProvider theme={Themes.green}>
			<Header />
			<Board
				numOfCols={18}
				numOfRows={14}
				numOfMines={40}
			/>
			<Timer />
			<Controls />
			<Sound />
		</ThemeProvider>
	)
}

export default App
