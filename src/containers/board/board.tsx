import { useState } from "react"

import { Minesweeper } from "@src/classes"
import { ICell } from "@src/models"

import { BoardContainer } from "./_board.styled"
import { Cell } from "./cell"

interface PropsBoard {
	numOfRows: number
	numOfCols: number
	numOfMines: number
}

export const Board = ({ numOfCols, numOfRows, numOfMines }: PropsBoard) => {
	const [board, setBoard] = useState<Array<Array<ICell>>>([])
	const minesweeper = new Minesweeper(numOfRows, numOfCols, numOfMines)

	const startGame = (rowIndex: number, colIndex: number) => {
		minesweeper.unconverBoard(rowIndex, colIndex)
		setBoard(minesweeper.getBoard())
	}

	useState(() => {
		const initialBoard = minesweeper.getBoard()
		setBoard(initialBoard)
	}, [])

	return (
		<BoardContainer>
			<div className="board">
				{board.map((row, rowIndex) => (
					<div
						key={rowIndex}
						className="rows">
						{row.map((cell, colIndex) => (
							<Cell
								onClick={() => startGame(rowIndex, colIndex)}
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
