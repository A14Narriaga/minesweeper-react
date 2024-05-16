import { Slider, useTheme } from "@mui/material"
import { useEffect, useState } from "react"

import { useApp } from "@src/hooks"
import { ITheme } from "@src/models"
import { AtmIcon } from "@src/shared"

import { SetVolumeContainer } from "./_set-volume.styled"

export const SetVolume = () => {
	const app = useApp()
	const { volume: initialVolume } = app.get()
	const theme = useTheme()
	const customTheme = theme as unknown as ITheme
	const [volume, setVolume] = useState<number>(initialVolume)

	const handleChange = (_event: Event, volume: number | number[]) => {
		setVolume(volume as number)
	}

	useEffect(() => {
		app.setVolume(volume)
	}, [volume])

	return (
		<SetVolumeContainer $theme={customTheme}>
			<p>Sonido</p>
			<div>
				<AtmIcon name={`volume-${volume === 0 ? "off" : "down"}`} />
				<Slider
					aria-label="Volume"
					value={volume}
					onChange={handleChange}
				/>
				<AtmIcon name="volume-up" />
			</div>
		</SetVolumeContainer>
	)
}
