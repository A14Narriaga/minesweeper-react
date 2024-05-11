import { useTheme } from "@mui/material"
import { useEffect, useState } from "react"

import { useGame } from "@src/hooks"
import { GameStausTypes, ITheme } from "@src/models"
import { formatTime } from "@src/utilities"

import { TimerContainer } from "./_timer.styled"

export const Timer = () => {
	const game = useGame()
	const { status } = game.get()
	const theme = useTheme()
	const customTheme = theme as unknown as ITheme
	const [seconds, setSeconds] = useState<number>(0)
	const [isRunning, setIsRunning] = useState<boolean>(false)

	useEffect(() => {
		if (status === GameStausTypes.WON || status === GameStausTypes.LOST) {
			setIsRunning(false)
			game.setTime(seconds)
		}
		if (status === GameStausTypes.STARTED) setIsRunning(true)
		if (status === GameStausTypes.NONE) {
			setIsRunning(false)
			setSeconds(0)
		}
	}, [status])

	useEffect(() => {
		let intervalId: NodeJS.Timeout | undefined
		if (isRunning) {
			intervalId = setInterval(() => {
				setSeconds((seconds) => seconds + 1)
			}, 1000)
		} else {
			clearInterval(intervalId)
		}
		return () => clearInterval(intervalId)
	}, [isRunning])

	return (
		<TimerContainer $theme={customTheme}>{formatTime(seconds)}</TimerContainer>
	)
}
