import { useRef } from "react"

import { SoundContainer } from "./_sound.styled"

const src = "/public/sounds/cyberpunk-moonlight-sonata-v2.mp3"

export const Sound = () => {
	const audioRef = useRef<HTMLAudioElement>(null)

	const play = () => {
		if (audioRef.current) {
			void audioRef.current.play()
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
		<SoundContainer>
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
