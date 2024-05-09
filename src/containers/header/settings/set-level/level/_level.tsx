import { useTheme } from "@mui/material"

import { ILevel, ITheme } from "@src/models"

import { LevelContainer } from "./_level.styled"

interface PropsLevel {
	active: boolean
	level: ILevel
	mineIcon: string
	onClick: () => void
}

export const Level = ({ active, level, mineIcon, ...props }: PropsLevel) => {
	const theme = useTheme()
	const customTheme = theme as unknown as ITheme
	return (
		<LevelContainer
			$active={active}
			$theme={customTheme}
			{...props}>
			<div>
				{level.display} - {level.numOfCols}x{level.numOfRows}
			</div>
			<div>
				{mineIcon} {level.numOfMines}
			</div>
		</LevelContainer>
	)
}
