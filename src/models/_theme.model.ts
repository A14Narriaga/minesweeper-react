import { ThemeOptions } from "@mui/material"

export interface ITheme {
	id: string
	icons: {
		flag: string
		mine: string
	}
	colors: {
		background: string
		primary: string
		secondary: string
		text1: string
		text2: string
		disabled: string
		cellCover1: string
		cellCover2: string
		cellUncover1: string
		cellUncover2: string
		cellHover: string
		num1: string
		num2: string
		num3: string
		num4: string
		num5: string
		num6: string
		num7: string
		num8: string
	}
}

export type CustomThemeOptions = ThemeOptions & { theme?: ITheme }
