export enum GameLevelTypes {
	EASY = "easy",
	NORMAL = "normal",
	HARD = "hard"
}

export interface ILevel {
	id: string
	category: GameLevelTypes
	display: string
	numOfCols: number
	numOfRows: number
	numOfMines: number
}
