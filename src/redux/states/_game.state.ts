import { createSlice } from "@reduxjs/toolkit"

import {
	Game,
	GameInitialState,
	GameLevelTypes,
	GameStausTypes,
	SessionStorageTypes
} from "@src/models"

const initialState: Game = GameInitialState

export const GameSlice = createSlice({
	name: SessionStorageTypes.GAME,
	initialState,
	reducers: {
		setLevel: (state: Game, { payload }) => {
			const levelID = payload as unknown as string
			const newState = {
				...state,
				levelID
			}
			return newState
		},
		setStatus: (state: Game, { payload }) => {
			const status = payload as unknown as GameStausTypes
			const newState = {
				...state,
				status
			}
			return newState
		},
		setAvailableFlags: (state: Game, { payload }) => {
			const availableFlags = payload as unknown as number
			const newState = {
				...state,
				availableFlags
			}
			return newState
		},
		setTime: (state: Game, { payload }) => {
			const time = payload as unknown as number
			const newState = {
				...state,
				time
			}
			return newState
		},
		addRecord: (state: Game, { payload }) => {
			const record = payload as unknown as {
				levelCategory: GameLevelTypes
				time: number
				userName: string
			}
			const { levelCategory, time, userName } = record
			const updatedRecords = {
				...state.records,
				[levelCategory]: [...state.records[levelCategory], { time, userName }]
			}
			const newState = {
				...state,
				records: updatedRecords
			}
			return newState
		}
	}
})

export const { setLevel, setStatus, setAvailableFlags, setTime, addRecord } =
	GameSlice.actions
