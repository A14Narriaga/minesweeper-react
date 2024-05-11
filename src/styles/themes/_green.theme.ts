import { createTheme } from "@mui/material"

import { CustomThemeOptions } from "@src/models"

export const GreenTheme = createTheme({
	id: "green-theme",
	typography: {
		fontFamily: "Orbitron, sans-serif"
	},
	palette: {
		mode: "dark",
		background: {
			paper: "#000000"
		},
		primary: {
			main: "#aad751"
		}
	},
	icons: {
		flag: "🚩",
		mine: "⭐"
	},
	colors: {
		background: "#242424",
		primary: "#4a752c",
		secondary: "#cfcfcf",
		text1: "#ffffff",
		text2: "#000000",
		disabled: "#808080",
		cellCover1: "#aad751",
		cellCover2: "#a2d149",
		cellUncover1: "#e5c29f",
		cellUncover2: "#d7b899",
		cellHover: "#ffffffb7",
		num1: "blue",
		num2: "red",
		num3: "green",
		num4: "purple",
		num5: "orange",
		num6: "rgb(176, 233, 225)",
		num7: "rgb(213, 175, 235)",
		num8: "rgb(240, 216, 193)"
	}
} as CustomThemeOptions)
