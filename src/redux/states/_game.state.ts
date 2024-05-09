import { createSlice } from "@reduxjs/toolkit"

import { Game, GameInitialState, SessionStorageTypes } from "@src/models"

const initialState: Game = GameInitialState

export const GameSlice = createSlice({
	name: SessionStorageTypes.GAME,
	initialState,
	reducers: {
		setBoard: (state: Game, action) => {
			const newState = {
				...state,
				board: action.payload
			}
			return newState
		},
		setLevel: (state: Game, action) => {
			const newState = {
				...state,
				levelID: action.payload
			}
			return newState
		}
	}
})

export const { setBoard, setLevel } = GameSlice.actions
