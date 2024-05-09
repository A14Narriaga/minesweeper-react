import { ThemeProvider } from "@mui/material"

import { Board, Controls, Header, Timer } from "./containers"
import { Sound } from "./containers/sound"
import { useApp } from "./hooks"
import { getThemeByID } from "./styles"

export const AppWrapper = () => {
	const themeID = useApp().get().themeID

	return (
		<ThemeProvider theme={getThemeByID(themeID)}>
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
