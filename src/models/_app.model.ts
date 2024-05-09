import { getSessionStorage } from "@src/utilities"

export interface App {
	themeID: string
}

export enum AppTypes {
	THEME_ID = "themeID"
}

const AppDefaultState = {
	themeID: "green-theme"
}

export const AppInitialState = getSessionStorage("app", AppDefaultState) as App
