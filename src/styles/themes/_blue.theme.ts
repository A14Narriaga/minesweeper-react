import { createTheme } from "@mui/material"

import { CustomThemeOptions } from "@src/models"

export const BlueTheme = createTheme({
	id: "blue-theme",
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
					color: "#00567E"
				},
				track: {
					color: "#00567E"
				},
				rail: {
					color: "#1976D2"
				}
			}
		}
	},
	icons: {
		flag: "🏳️",
		mine: "🔷"
	},
	colors: {
		background: "#242424",
		primary: "#00567E",
		secondary: "#cfcfcf",
		text1: "#ffffff",
		text2: "#000000",
		disabled: "#808080",
		cellCover1: "#00567E",
		cellCover2: "#004C6D",
		cellUncover1: "#90CAF9",
		cellUncover2: "#64B5F6",
		cellHover: "#ffffffb7",
		num1: "#1976D2",
		num2: "#1565C0",
		num3: "#0D47A1",
		num4: "#283593",
		num5: "#01579B",
		num6: "#81D4FA",
		num7: "#B3E5FC",
		num8: "#BBDEFB"
	}
} as CustomThemeOptions)
