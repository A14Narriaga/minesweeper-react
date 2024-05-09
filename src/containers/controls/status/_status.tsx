import { useGame } from "@src/hooks"
import { GameStausTypes } from "@src/models"
import { AtmIcon } from "@src/shared"

import { StatusContainer } from "./_status.styled"

const getIconName = (status: GameStausTypes) => {
	switch (status) {
		case GameStausTypes.NONE: {
			return "status-none"
		}
		case GameStausTypes.STARTED: {
			return "status-started"
		}
		case GameStausTypes.LOST: {
			return "status-lost"
		}
		case GameStausTypes.WON: {
			return "status-won"
		}
	}
}

export const Status = () => {
	const { status } = useGame().get()
	return (
		<StatusContainer>
			<AtmIcon name={getIconName(status)} />
		</StatusContainer>
	)
}
