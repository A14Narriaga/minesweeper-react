import { Slider, useTheme } from "@mui/material"
import { useState } from "react"

import { ITheme } from "@src/models"
import { AtmIcon } from "@src/shared"

import { SetSoundContainer } from "./set-sound.styled"

export const SetSound = () => {
	const theme = useTheme()
	const customTheme = theme as unknown as ITheme
	const [value, setValue] = useState<number>(100)

	const handleChange = (event: Event, newValue: number | number[]) => {
		setValue(newValue as number)
	}

	return (
		<SetSoundContainer $theme={customTheme}>
			<p>Sonido</p>
			<div>
				<AtmIcon name={`volume-${value === 0 ? "off" : "down"}`} />
				<Slider
					aria-label="Volume"
					value={value}
					onChange={handleChange}
				/>
				<AtmIcon name="volume-up" />
			</div>
		</SetSoundContainer>
	)
}
