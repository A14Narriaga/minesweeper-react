import { useEffect, useRef } from "react"

import { useApp, useGame } from "@src/hooks"
import { GameStausTypes } from "@src/models"

const src = "/public/sounds/cyberpunk-moonlight-sonata-v2.mp3"

export const Sound = () => {
	const { status } = useGame().get()
	const isRunning = status === GameStausTypes.STARTED
	const volume = useApp().get().volume / 100
	const audioRef = useRef<HTMLAudioElement>(null)

	useEffect(() => {
		setVolume(volume)
	}, [volume])

	useEffect(() => {
		isRunning ? play() : stop()
	}, [isRunning])

	const play = () => {
		if (audioRef.current) {
			void audioRef.current.play()
		}
	}

	const setVolume = (volume: number) => {
		if (audioRef.current) {
			audioRef.current.volume = volume
		}
	}

	const stop = () => {
		if (audioRef.current) {
			audioRef.current.pause()
			audioRef.current.currentTime = 0
		}
	}

	const handleEnded = () => {
		if (audioRef.current) {
			audioRef.current.currentTime = 0
			void audioRef.current.play()
		}
	}

	return (
		<audio
			ref={audioRef}
			src={src}
			onEnded={handleEnded}
		/>
	)
}
