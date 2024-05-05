import { ICell } from "@src/models"

interface Position {
	rowIndex: number
	colIndex: number
}

export class Minesweeper {
	private board: Array<Array<ICell>>
	private mines: Array<Position>
	private numOfCols: number
	private numOfRows: number
	private numOfMines: number

	constructor(numOfRows: number, numOfCols: number, numOfMines: number) {
		this.numOfMines = numOfMines
		this.numOfRows = numOfRows
		this.numOfCols = numOfCols
		this.mines = []
		this.board = Array.from({ length: numOfRows }).map(() =>
			Array.from({ length: numOfCols }).map(
				() => ({ cover: true, type: "" }) as ICell
			)
		)
		this.#addMines()
		this.#addNumbers()
	}

	getBoard() {
		return this.board
	}

	#uncoverMines() {
		for (const mine of this.mines) {
			const { rowIndex, colIndex } = mine
			this.board[rowIndex][colIndex].cover = false
		}
	}

	unconverBoard(rowIndex: number, colIndex: number) {
		if (this.board[rowIndex]?.[colIndex]?.cover) {
			this.board[rowIndex][colIndex].cover = false
			if (this.board[rowIndex]?.[colIndex]?.type === "mine") {
				this.#uncoverMines()
			}
			if (this.board[rowIndex]?.[colIndex]?.type === "") {
				const movesAxis = [-1, 0, 1]
				for (const dx of movesAxis) {
					for (const dy of movesAxis) {
						if (this.board[rowIndex + dx]?.[colIndex + dy]?.type === "")
							this.unconverBoard(rowIndex + dx, colIndex + dy)
						else if (
							this.board[rowIndex + dx]?.[colIndex + dy]?.type === "mine"
						)
							continue
						else {
							if (this.board[rowIndex + dx]?.[colIndex + dy]?.cover)
								this.board[rowIndex + dx][colIndex + dy].cover = false
						}
					}
				}
			}
		}
	}

	#getRandomCell() {
		return {
			rowIndex: Math.floor(Math.random() * this.numOfRows),
			colIndex: Math.floor(Math.random() * this.numOfCols)
		}
	}

	#addMines() {
		for (let index = 0; index < this.numOfMines; index++) {
			const { rowIndex, colIndex } = this.#getRandomCell()
			this.mines.push({ rowIndex, colIndex })
			this.board[rowIndex][colIndex].type = "mine"
		}
	}

	#addNumbers() {
		const movesAxis = [-1, 0, 1]
		for (let row = 0; row < this.numOfRows; row++) {
			for (let col = 0; col < this.numOfCols; col++) {
				const cell = this.board[row][col]
				if (cell.type !== "mine") {
					let minesNear = 0
					for (const dx of movesAxis) {
						for (const dy of movesAxis) {
							if (this.board[row + dx]?.[col + dy]?.type === "mine") minesNear++
						}
					}
					cell.type = minesNear === 0 ? "" : minesNear
				}
			}
		}
	}
}