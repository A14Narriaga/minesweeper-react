import { useTheme } from "@mui/material"
import { useEffect, useRef, useState } from "react"

import { Minesweeper } from "@src/classes"
import levels from "@src/data/levels.json"
import { useGame } from "@src/hooks"
import { ICell, ILevel, ITheme } from "@src/models"

import { BoardContainer } from "./_board.styled"
import { Cell } from "./cell"

export const Board = () => {
	const game = useGame()
	const { levelID } = game.get()
	const level = levels.find((level) => level.id === levelID) as ILevel
	const { numOfCols, numOfRows, numOfMines } = level
	const theme = useTheme()
	const customTheme = theme as unknown as ITheme
	const minesweeperRef = useRef<Minesweeper | null>(null)
	const [board, setBoard] = useState<ICell[][]>([])

	useEffect(() => {
		minesweeperRef.current = new Minesweeper(numOfRows, numOfCols, numOfMines)
		updateStates()
	}, [numOfCols, numOfRows, numOfMines])

	const updateStates = () => {
		setBoard([...minesweeperRef.current.board])
		game.setAvailableFlags(minesweeperRef.current.availableFlags)
		game.setStatus(minesweeperRef.current.status)
	}

	const handleCell = (rowIndex: number, colIndex: number) => {
		minesweeperRef.current.handleCell(rowIndex, colIndex)
		updateStates()
	}

	const handleFlag = (
		event: React.MouseEvent,
		rowIndex: number,
		colIndex: number
	) => {
		event.preventDefault()
		minesweeperRef.current.handleFlag(rowIndex, colIndex)
		updateStates()
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
								key={`${colIndex}${rowIndex}`}
								onContextMenu={(event) => handleFlag(event, rowIndex, colIndex)}
								onClick={() => handleCell(rowIndex, colIndex)}
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
