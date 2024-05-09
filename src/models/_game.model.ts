import { getSessionStorage } from "@src/utilities"

import { ICell } from "./_cell.model"
import { IRecord } from "./_record.model"

export interface Game {
	board: ICell[][]
	usedFlags: number
	time: string
	records: {
		easy: IRecord[]
		normal: IRecord[]
		hard: IRecord[]
	}
	levelID: string
}

export enum GameTypes {
	BOARD = "board",
	USED_FLAGS = "usedFlags",
	TIME = "time",
	RECORDS = "records",
	LEVEL_ID = "levelID"
}

const GameDefaultState = {
	board: [],
	usedFlags: 0,
	time: "00:00:00",
	records: {
		easy: [],
		normal: [],
		hard: []
	},
	levelID: "adga4334"
}

export const GameInitialState = getSessionStorage(
	"game",
	GameDefaultState
) as Game
