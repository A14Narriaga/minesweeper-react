import { useTheme } from "@mui/material"
import { useEffect, useRef, useState } from "react"

import { Minesweeper } from "@src/classes"
import levels from "@src/data/levels.json"
import { useGame } from "@src/hooks"
import { ICell, ILevel, ITheme } from "@src/models"

import { BoardContainer } from "./_board.styled"
import { Cell } from "./cell"

export const Board = () => {
	const levelID = useGame().get().levelID
	const level = levels.find((level) => level.id === levelID) as ILevel
	const { numOfCols, numOfRows, numOfMines } = level
	const theme = useTheme()
	const customTheme = theme as unknown as ITheme
	const minesweeperRef = useRef<Minesweeper>(
		new Minesweeper(numOfRows, numOfCols, numOfMines)
	)
	const [board, setBoard] = useState<Array<Array<ICell>>>(
		minesweeperRef.current.board
	)

	useEffect(() => {
		minesweeperRef.current = new Minesweeper(numOfRows, numOfCols, numOfMines)
		setBoard([...minesweeperRef.current.board])
	}, [numOfCols, numOfRows, numOfMines])

	const uncover = (rowIndex: number, colIndex: number) => {
		minesweeperRef.current.unconverBoard(rowIndex, colIndex)
		setBoard([...minesweeperRef.current.board])
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
