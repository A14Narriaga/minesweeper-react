import { useTheme } from "@mui/material"

import { ITheme } from "@src/models"

import { ControlsContainer } from "./_controls.styled"
import { Flags } from "./flags"
import { Status } from "./status"

export const Controls = () => {
	const theme = useTheme()
	const customTheme = theme as unknown as ITheme
	return (
		<ControlsContainer $theme={customTheme}>
			<Flags />
			<Status />
		</ControlsContainer>
	)
}
