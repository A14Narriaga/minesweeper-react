import { useState } from "react"

import { AtmIcon, MolModal } from "@src/shared"

import { SettingsContainer } from "./_settings.styled"
import { SetLevel } from "./set-level"
import { SetSound } from "./set-sound"
import { SetTheme } from "./set-theme"

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
					<SetSound />
					<SetTheme />
					<SetLevel />
				</SettingsContainer>
			</MolModal>
		</>
	)
}
