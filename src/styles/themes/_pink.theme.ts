import { createTheme } from "@mui/material"

import { CustomThemeOptions } from "@src/models"

export const PinkTheme = createTheme({
	id: "pink-theme",
	typography: {
		fontFamily: "Orbitron, sans-serif"
	},
	palette: {
		mode: "dark",
		background: {
			paper: "#000000"
		}
	},
	components: {
		MuiSlider: {
			styleOverrides: {
				thumb: {
					color: "#f08ea3"
				},
				track: {
					color: "#f08ea3"
				},
				rail: {
					color: "#f76d90"
				}
			}
		}
	},
	icons: {
		flag: "🚩",
		mine: "⭐"
	},
	colors: {
		background: "#242424",
		primary: "#f08ea3",
		secondary: "#f8c4d5",
		text1: "#ffffff",
		text2: "#000000",
		disabled: "#808080",
		cellCover1: "#f08ea3",
		cellCover2: "#f76d90",
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
