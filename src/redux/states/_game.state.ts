import { createSlice } from "@reduxjs/toolkit"

import { Game, GameInitialState, SessionStorageTypes } from "@src/models"

const initialState: Game = GameInitialState

export const GameSlice = createSlice({
	name: SessionStorageTypes.GAME,
	initialState,
	reducers: {
		setLevel: (state: Game, action) => {
			const newState = {
				...state,
				levelID: action.payload
			}
			return newState
		},
		setStatus: (state: Game, action) => {
			const newState = {
				...state,
				status: action.payload
			}
			return newState
		},
		setAvailableFlags: (state: Game, action) => {
			const newState = {
				...state,
				availableFlags: action.payload
			}
			return newState
		}
	}
})

export const { setLevel, setStatus, setAvailableFlags } = GameSlice.actions
