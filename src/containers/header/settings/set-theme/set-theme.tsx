import { useTheme } from "@mui/material"

import { ITheme } from "@src/models"
import { ThemesArray } from "@src/styles/themes"

import { SetThemeContainer } from "./_set-theme.styled"
import { Theme } from "./components"

export const SetTheme = () => {
	const theme = useTheme()
	const customTheme = theme as unknown as ITheme
	return (
		<SetThemeContainer $theme={customTheme}>
			<p>Temas</p>
			<div className="themes">
				{ThemesArray.map((theme) => {
					const auxTheme = theme as unknown as ITheme
					return (
						<Theme
							key={auxTheme.id}
							active={customTheme.id === auxTheme.id}
							theme={auxTheme}
						/>
					)
				})}
			</div>
		</SetThemeContainer>
	)
}
