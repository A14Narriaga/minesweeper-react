import { useTheme } from "@mui/material"
import { useState } from "react"

import { Minesweeper } from "@src/classes"
import { ICell, ITheme } from "@src/models"

import { BoardContainer } from "./_board.styled"
import { Cell } from "./cell"

interface PropsBoard {
	numOfRows: number
	numOfCols: number
	numOfMines: number
}

export const Board = ({ numOfCols, numOfRows, numOfMines }: PropsBoard) => {
	const theme = useTheme()
	const customTheme = theme as unknown as ITheme
	const [minesweeper] = useState<Minesweeper>(
		new Minesweeper(numOfRows, numOfCols, numOfMines)
	)
	const [board, setBoard] = useState<Array<Array<ICell>>>(minesweeper.board)

	const uncover = (rowIndex: number, colIndex: number) => {
		minesweeper.unconverBoard(rowIndex, colIndex)
		setBoard([...minesweeper.board])
	}

	return (
		<BoardContainer $theme={customTheme}>
			<div className="board">
				{board.map((row, rowIndex) => (
					<div
						key={rowIndex}
						className="rows">
						{row.map((cell, colIndex) => (
							<Cell
								onClick={() => uncover(rowIndex, colIndex)}
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
