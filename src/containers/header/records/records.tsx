import { useState } from "react"

import { AtmIcon, MolModal } from "@src/shared"

import { RecordsContainer } from "./_records.styled"

export const Records = () => {
	const [open, setOpen] = useState(false)

	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	return (
		<>
			<AtmIcon
				name="records"
				onClick={handleOpen}
			/>
			<MolModal
				open={open}
				title="Récords"
				handleClose={handleClose}>
				<RecordsContainer>Récords</RecordsContainer>
			</MolModal>
		</>
	)
}
