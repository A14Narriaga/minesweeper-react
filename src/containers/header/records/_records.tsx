import { useState } from "react"

import { useGame } from "@src/hooks"
import { AtmIcon, MolModal } from "@src/shared"

import { RecordsContainer } from "./_records.styled"
import { TableRecords } from "./table-records"

export const Records = () => {
	const { records } = useGame().get()
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
				<RecordsContainer>
					<TableRecords
						title="Dificil"
						records={records.hard}
					/>
					<TableRecords
						title="Normal"
						records={records.normal}
					/>
					<TableRecords
						title="Facil"
						records={records.easy}
					/>
				</RecordsContainer>
			</MolModal>
		</>
	)
}
