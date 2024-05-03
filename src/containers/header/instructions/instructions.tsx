import { useState } from "react"

import { AtmIcon, MolModal } from "@src/shared"

import { InstructionsContainer } from "./_instructions.styled"

export const Instructions = () => {
	const [open, setOpen] = useState(false)

	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	return (
		<>
			<AtmIcon
				name="instructions"
				onClick={handleOpen}
			/>
			<MolModal
				open={open}
				title="Instrucciones"
				handleClose={handleClose}>
				<InstructionsContainer>
					Instrucciones de como jugar
				</InstructionsContainer>
			</MolModal>
		</>
	)
}
