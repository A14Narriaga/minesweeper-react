import { ThemeProvider } from "@mui/material"

import { Board, Controls, Feedback, Header, Timer } from "./containers"
import { Sound } from "./containers/sound"
import { useApp } from "./hooks"
import { getThemeByID } from "./styles"

export const AppWrapper = () => {
	const themeID = useApp().get().themeID

	return (
		<ThemeProvider theme={getThemeByID(themeID)}>
			<Header />
			<Board />
			<Timer />
			<Controls />
			<Sound />
			<Feedback />
		</ThemeProvider>
	)
}
