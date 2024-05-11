import { useTheme } from "@mui/material"

import { useGame } from "@src/hooks"
import { GameStausTypes, ITheme } from "@src/models"
import { AtmButton, MolModal } from "@src/shared"
import { formatTime } from "@src/utilities"

import { FeedbackContainer } from "./_feeedback.styled"
import { AddRecord } from "./add-record"

export const Feedback = () => {
	const game = useGame()
	const theme = useTheme()

	const { status, time, levelID, levels, records } = game.get()
	const customTheme = theme as unknown as ITheme

	const handleNewGame = () => {
		game.setStatus(GameStausTypes.NONE)
	}

	const showAddNewRecord = () => {
		const level = levels.find((level) => level.id === levelID)!
		const { category } = level
		const brokenRecord = records[category].find((record) => record.time > time)
		if (records[category].length === 0 || brokenRecord !== undefined)
			return (
				<AddRecord
					levelCategory={category}
					time={time}
				/>
			)
	}

	return (
		<MolModal
			open={status === GameStausTypes.LOST || status === GameStausTypes.WON}>
			<FeedbackContainer $theme={customTheme}>
				<div className="status">{formatTime(time)}</div>
				{status === GameStausTypes.WON && showAddNewRecord()}
				<AtmButton
					text="Volver a jugar"
					onClick={handleNewGame}
				/>
			</FeedbackContainer>
		</MolModal>
	)
}
