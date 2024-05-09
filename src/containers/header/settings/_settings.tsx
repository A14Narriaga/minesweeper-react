import { useState } from "react"

import { AtmIcon, MolModal } from "@src/shared"

import { SettingsContainer } from "./_settings.styled"
import { SetLevel } from "./set-level"
import { SetTheme } from "./set-theme"
import { SetVolume } from "./set-volume"

export const Settings = () => {
	const [open, setOpen] = useState(false)

	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	return (
		<>
			<AtmIcon
				name="settings"
				onClick={handleOpen}
			/>
			<MolModal
				open={open}
				title="Ajustes"
				handleClose={handleClose}>
				<SettingsContainer>
					<SetVolume />
					<SetTheme />
					<SetLevel />
				</SettingsContainer>
			</MolModal>
		</>
	)
}
