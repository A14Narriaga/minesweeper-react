import { getSessionStorage } from "@src/utilities"

import { GameLevelTypes, ILevel } from "./_level.model"
import { IRecord } from "./_record.model"

export enum GameStausTypes {
	NONE = "none",
	STARTED = "started",
	LOST = "lost",
	WON = "won"
}

export interface Game {
	status: GameStausTypes
	records: {
		easy: IRecord[]
		normal: IRecord[]
		hard: IRecord[]
	}
	levelID: string
	availableFlags: number
	time: number
	levels: ILevel[]
}

export enum GameTypes {
	STATUS = "status",
	RECORDS = "records",
	LEVEL_ID = "levelID",
	FLAGS_USED = "availableFlags",
	TIME = "time",
	LEVELS = "levels"
}

const GameDefaultState: Game = {
	status: GameStausTypes.NONE,
	records: {
		easy: [],
		normal: [],
		hard: []
	},
	levelID: "adga4334",
	availableFlags: 0,
	time: 0,
	levels: [
		{
			id: "adga4334",
			category: GameLevelTypes.EASY,
			display: "Facil",
			numOfCols: 14,
			numOfRows: 10,
			numOfMines: 10
		},
		{
			id: "asdfasdf34452",
			category: GameLevelTypes.NORMAL,
			display: "Normal",
			numOfCols: 18,
			numOfRows: 14,
			numOfMines: 30
		},
		{
			id: "asdfa3535",
			category: GameLevelTypes.HARD,
			display: "Dificil",
			numOfCols: 25,
			numOfRows: 15,
			numOfMines: 40
		}
	]
}

export const GameInitialState = getSessionStorage(
	"game",
	GameDefaultState
) as Game
