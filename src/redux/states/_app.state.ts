import { createSlice } from "@reduxjs/toolkit"

import { App, AppInitialState, SessionStorageTypes } from "@src/models"

const initialState: App = AppInitialState

export const AppSlice = createSlice({
	name: SessionStorageTypes.APP,
	initialState,
	reducers: {
		setTheme: (state: App, action) => {
			const newState = {
				...state,
				themeID: action.payload
			}
			return newState
		},
		setVolume: (state: App, action) => {
			const newState = {
				...state,
				volume: action.payload
			}
			return newState
		}
	}
})

export const { setTheme, setVolume } = AppSlice.actions
