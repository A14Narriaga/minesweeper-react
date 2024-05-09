import { configureStore } from "@reduxjs/toolkit"

import { AppStore } from "@src/models"

import { AppSlice } from "./states"

export default configureStore<AppStore>({
	reducer: {
		app: AppSlice.reducer
	}
})
