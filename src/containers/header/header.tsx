import { useTheme } from "@mui/material"

import { ITheme } from "@src/models"

import { HeaderContainer } from "./_header.styled"
import { Instructions } from "./instructions"
import { Records } from "./records"
import { Settings } from "./settings"

export const Header = () => {
	const theme = useTheme()
	const customTheme = theme as unknown as ITheme
	return (
		<HeaderContainer $theme={customTheme}>
			<h3>Minesweeper</h3>
			<div>
				<Instructions />
				<Records />
				<Settings />
			</div>
		</HeaderContainer>
	)
}
