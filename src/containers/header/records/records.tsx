import { useState } from "react"

import { AtmIcon, MolModal } from "@src/shared"

import { RecordsContainer } from "./_records.styled"
import { TableRecords } from "./table-records"

export const Records = () => {
	const [open, setOpen] = useState(false)

	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	const recordsHard = [
		{ userName: "A14Narriaga", time: "00:10:00" },
		{ userName: "JuanPerez", time: "12:00:00" }
	]

	const recordsMiddle = [
		{ userName: "Chichin", time: "00:10:00" },
		{ userName: "La99", time: "08:00:00" }
	]

	const recordsEasy = [
		{ userName: "El junchito", time: "00:00:01" },
		{ userName: "Chesterchetos", time: "10:00:00" }
	]

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
				<RecordsContainer>
					<TableRecords
						title="Dificil"
						records={recordsEasy}
					/>
					<TableRecords
						title="Medio"
						records={recordsMiddle}
					/>
					<TableRecords
						title="Facil"
						records={recordsHard}
					/>
				</RecordsContainer>
			</MolModal>
		</>
	)
}
