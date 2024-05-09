import { useTheme } from "@mui/material"

import levels from "@src/data/levels.json"
import { useGame } from "@src/hooks/use-game.hook"
import { GameStausTypes, ITheme } from "@src/models"

import { SetLevelContainer } from "./_set-level.styled"
import { Level } from "./level"

export const SetLevel = () => {
	const game = useGame()
	const { levelID } = game.get()
	const theme = useTheme()
	const customTheme = theme as unknown as ITheme

	const setLevel = (levelID: string) => {
		game.setLevel(levelID)
		game.setStatus(GameStausTypes.NONE)
	}

	return (
		<SetLevelContainer $theme={customTheme}>
			<p>Niveles</p>
			<div className="levels">
				{levels.map((level) => (
					<Level
						key={level.id}
						active={levelID === level.id}
						level={level}
						mineIcon={customTheme.icons.mine}
						onClick={() => setLevel(level.id)}
					/>
				))}
			</div>
		</SetLevelContainer>
	)
}
