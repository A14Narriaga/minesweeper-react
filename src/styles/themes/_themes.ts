import { BlueTheme } from "./_blue.theme"
import { GreenTheme } from "./_green.theme"

export const ThemesArray = [BlueTheme, GreenTheme]
export const getThemeByID = (id: string) => {
	switch (id) {
		case "green-theme": {
			return GreenTheme
		}
		case "blue-theme": {
			return BlueTheme
		}
		default: {
			return GreenTheme
		}
	}
}
