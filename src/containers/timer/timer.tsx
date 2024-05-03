import { useEffect, useState } from "react"

import { TimerContainer } from "./_timer.styled"

const formatTime = (seconds: number): string => {
	const hours = Math.floor(seconds / 3600)
	const minutes = Math.floor((seconds % 3600) / 60)
	const remainingSeconds = seconds % 60
	return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
}

export const Timer = () => {
	const [seconds, setSeconds] = useState<number>(0)
	const [isRunning, setIsRunning] = useState<boolean>(false)

	const start = () => setIsRunning(true)
	const stop = () => setIsRunning(false)
	const reset = () => setSeconds(0)

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
		<TimerContainer>
			{formatTime(seconds)}
			{/* <button onClick={isRunning ? stop : start}>
				{isRunning ? "Detener" : "Iniciar"}
			</button>
			<button onClick={reset}>Reiniciar</button> */}
		</TimerContainer>
	)
}
