import { useTheme } from "@mui/material"

import { ITheme } from "@src/models"

import { SetLevelContainer } from "./_set-level.styled"

export const SetLevel = () => {
	const theme = useTheme()
	const customTheme = theme as unknown as ITheme
	return (
		<SetLevelContainer $theme={customTheme}>
			<p>Niveles</p>
			<div className="levels">
				<div className="level active">
					<div>Facil - 10x10</div>
					<div>{customTheme.icons.mine} 10</div>
				</div>
				<div className="level">
					<div>Normal - 10x10</div>
					<div>{customTheme.icons.mine} 10</div>
				</div>
				<div className="level">
					<div>Hard - 10x10</div>
					<div>{customTheme.icons.mine} 10</div>
				</div>
			</div>
		</SetLevelContainer>
	)
}
