import "./app.scss"

import { createTheme, ThemeProvider } from "@mui/material"

import { Board, Controls, Header, Timer } from "./containers"
import { Sound } from "./containers/sound"

const theme = createTheme({
	typography: {
		fontFamily: "Orbitron, sans-serif"
	},
	palette: {
		mode: "dark"
		// background: {
		// 	paper: "var(--color-bg)"
		// }
	}
})

function App() {
	return (
		<ThemeProvider theme={theme}>
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
