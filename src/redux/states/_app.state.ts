import { createSlice } from "@reduxjs/toolkit"

import { App, AppInitialState, SessionStorageTypes } from "@src/models"

const initialState: App = AppInitialState

export const AppSlice = createSlice({
	name: SessionStorageTypes.APP,
	initialState,
	reducers: {
		setTheme: (state: App, { payload }) => {
			const themeID = payload as unknown as string
			const newState = {
				...state,
				themeID
			}
			return newState
		},
		setVolume: (state: App, { payload }) => {
			const volume = payload as unknown as number
			const newState = {
				...state,
				volume
			}
			return newState
		}
	}
})

export const { setTheme, setVolume } = AppSlice.actions
