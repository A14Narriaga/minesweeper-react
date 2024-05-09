import { useTheme } from "@mui/material"
import { useEffect, useRef } from "react"

import { useApp } from "@src/hooks"
import { ITheme } from "@src/models"

import { SoundContainer } from "./_sound.styled"

const src = "/public/sounds/cyberpunk-moonlight-sonata-v2.mp3"

export const Sound = () => {
	const volume = useApp().get().volume / 100
	const theme = useTheme()
	const customTheme = theme as unknown as ITheme
	const audioRef = useRef<HTMLAudioElement>(null)

	useEffect(() => {
		setVolume(volume)
	}, [volume])

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
		<SoundContainer $theme={customTheme}>
			<audio
				ref={audioRef}
				src={src}
				onEnded={handleEnded}
			/>
			<button onClick={play}>play</button>
			<button onClick={stop}>stop</button>
		</SoundContainer>
	)
}
