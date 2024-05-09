import { getSessionStorage } from "@src/utilities"

export interface App {
	themeID: string
	volume: number
}

export enum AppTypes {
	THEME_ID = "themeID",
	VOLUME = "volume"
}

const AppDefaultState = {
	themeID: "green-theme",
	volume: 5
}

export const AppInitialState = getSessionStorage("app", AppDefaultState) as App
