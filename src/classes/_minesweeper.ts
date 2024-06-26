import { GameStausTypes, ICell } from "@src/models"

interface Position {
	rowIndex: number
	colIndex: number
}

export class Minesweeper {
	#status: GameStausTypes
	#board: ICell[][]
	#mines: Position[]
	#numOfCols: number
	#numOfRows: number
	#numOfMines: number
	#numCells: number
	#numOfCellsUnconver: number
	#numOfFlagsUsed: number

	constructor(numOfRows: number, numOfCols: number, numOfMines: number) {
		this.#numOfMines = numOfMines
		this.#numOfRows = numOfRows
		this.#numOfCols = numOfCols
		this.#numCells = numOfRows * numOfCols
		this.#numOfCellsUnconver = 0
		this.#numOfFlagsUsed = 0
		this.#mines = []
		this.#board = Array.from({ length: numOfRows }).map(() =>
			Array.from({ length: numOfCols }).map(
				() => ({ cover: true, flag: false, type: "" }) as ICell
			)
		)
		this.#addMines()
		this.#addNumbers()
		this.#status = GameStausTypes.NONE
	}

	get board() {
		return this.#board
	}

	get status() {
		return this.#status
	}

	get availableFlags() {
		return this.#numOfMines - this.#numOfFlagsUsed
	}

	handleCell(rowIndex: number, colIndex: number) {
		if (this.#board[rowIndex][colIndex].flag) return
		this.#status = GameStausTypes.STARTED
		this.#unconverBoard(rowIndex, colIndex)
		this.#checkWinCondition()
	}

	handleFlag(rowIndex: number, colIndex: number) {
		this.#status = GameStausTypes.STARTED
		if (this.#board[rowIndex][colIndex].flag) {
			this.#board[rowIndex][colIndex].flag = false
			this.#numOfFlagsUsed--
		} else {
			if (
				this.#board[rowIndex][colIndex].cover &&
				this.#numOfFlagsUsed !== this.#numOfMines
			) {
				this.#board[rowIndex][colIndex].flag = true
				this.#numOfFlagsUsed++
			}
		}
		this.#checkWinCondition()
	}

	#checkWinCondition() {
		if (this.#numCells === this.#numOfCellsUnconver + this.#numOfFlagsUsed) {
			this.#status = GameStausTypes.WON
		}
	}

	#uncoverMines() {
		for (const mine of this.#mines) {
			const { rowIndex, colIndex } = mine
			this.#board[rowIndex][colIndex].cover = false
		}
		this.#status = GameStausTypes.LOST
	}

	#unconverBoard(rowIndex: number, colIndex: number) {
		if (this.#board[rowIndex]?.[colIndex]?.cover) {
			this.#board[rowIndex][colIndex].cover = false
			this.#numOfCellsUnconver++
			if (this.#board[rowIndex][colIndex].type === "mine") this.#uncoverMines()
			if (this.#board[rowIndex][colIndex].type === "") {
				const movesAxis = [-1, 0, 1]
				for (const dx of movesAxis) {
					for (const dy of movesAxis) {
						if (this.#board[rowIndex + dx]?.[colIndex + dy]?.type === "")
							this.#unconverBoard(rowIndex + dx, colIndex + dy)
						else if (
							this.#board[rowIndex + dx]?.[colIndex + dy]?.type === "mine"
						)
							continue
						else {
							if (this.#board[rowIndex + dx]?.[colIndex + dy]?.cover) {
								this.#board[rowIndex + dx][colIndex + dy].cover = false
								this.#numOfCellsUnconver++
							}
						}
					}
				}
			}
		}
	}

	#getRandomCell() {
		return {
			rowIndex: Math.floor(Math.random() * this.#numOfRows),
			colIndex: Math.floor(Math.random() * this.#numOfCols)
		}
	}

	#addMines() {
		let minesAdded = 0
		while (minesAdded < this.#numOfMines) {
			const { rowIndex, colIndex } = this.#getRandomCell()
			if (this.#board[rowIndex][colIndex].type !== "mine") {
				this.#mines.push({ rowIndex, colIndex })
				this.#board[rowIndex][colIndex].type = "mine"
				minesAdded++
			}
		}
	}

	#addNumbers() {
		const movesAxis = [-1, 0, 1]
		for (let row = 0; row < this.#numOfRows; row++) {
			for (let col = 0; col < this.#numOfCols; col++) {
				const cell = this.#board[row][col]
				if (cell.type !== "mine") {
					let minesNear = 0
					for (const dx of movesAxis) {
						for (const dy of movesAxis) {
							if (this.#board[row + dx]?.[col + dy]?.type === "mine")
								minesNear++
						}
					}
					cell.type = minesNear === 0 ? "" : minesNear
				}
			}
		}
	}
}
