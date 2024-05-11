import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	useTheme
} from "@mui/material"
import { v4 as uuidv4 } from "uuid"

import { IRecord, ITheme } from "@src/models"
import { formatTime } from "@src/utilities"

import { TableRecordsContainer } from "./_table-records.styled"

interface PropsTable {
	title: string
	records: IRecord[]
}

const getMedal = (position: number) => {
	switch (position) {
		case 1: {
			return "🥇"
		}
		case 2: {
			return "🥈"
		}
		case 3: {
			return "🥉"
		}
		default: {
			return "⭐"
		}
	}
}

export const TableRecords = ({ title, records }: PropsTable) => {
	const theme = useTheme()
	const customTheme = theme as unknown as ITheme
	return (
		<TableRecordsContainer $theme={customTheme}>
			<p>{title}</p>
			<TableContainer>
				<Table
					sx={{ minWidth: 300 }}
					size="small"
					aria-label="a dense table">
					<TableHead>
						<TableRow>
							<TableCell>Usuario</TableCell>
							<TableCell align="right">Tiempo</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{records.map((record, index) => (
							<TableRow
								key={uuidv4()}
								hover
								sx={{
									"&:last-child td, &:last-child th": { border: 0 }
								}}>
								<TableCell
									component="th"
									scope="row">
									{getMedal(index + 1)} {record.userName}
								</TableCell>
								<TableCell align="right">{formatTime(record.time)}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</TableRecordsContainer>
	)
}
