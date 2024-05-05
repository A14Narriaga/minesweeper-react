import { ICell } from "@src/models"

import { BoardContainer } from "./_board.styled"
import { Cell } from "./cell"

const cell: ICell = { cover: false, type: "" }

interface PropsBoard {
	numOfRows: number
	numOfCols: number
}

const getArrayOfZeros = (length: number) => Array.from({ length }).fill(0)

export const Board = ({ numOfCols, numOfRows }: PropsBoard) => {
	const rows = getArrayOfZeros(numOfRows)
	const cols = getArrayOfZeros(numOfCols)

	return (
		<BoardContainer>
			<div className="board">
				{rows.map((__, rowIndex) => (
					<div
						key={rowIndex}
						className="rows">
						{cols.map((__, colIndex) => (
							<Cell
								key={`${colIndex}${rowIndex}`}
								cell={cell}
								colIndex={colIndex}
								rowIndex={rowIndex}
							/>
						))}
					</div>
				))}
			</div>
		</BoardContainer>
	)
}
