import { getSessionStorage } from "@src/utilities"

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
}

export enum GameTypes {
	STATUS = "status",
	RECORDS = "records",
	LEVEL_ID = "levelID"
}

const GameDefaultState = {
	status: GameStausTypes.NONE,
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
