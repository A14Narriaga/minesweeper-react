import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	useTheme
} from "@mui/material"

import { ITheme } from "@src/models"

import { TableRecordsContainer } from "./_table-records.styled"

interface Records {
	userName: string
	time: string
}

interface PropsTable {
	title: string
	records: Array<Records>
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
								hover
								key={record.userName}
								sx={{
									"&:last-child td, &:last-child th": { border: 0 }
								}}>
								<TableCell
									component="th"
									scope="row">
									{getMedal(index + 1)} {record.userName}
								</TableCell>
								<TableCell align="right">{record.time}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</TableRecordsContainer>
	)
}
