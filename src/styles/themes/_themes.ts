import { BlueTheme } from "./_blue.theme"
import { GreenTheme } from "./_green.theme"
import { OrangeTheme } from "./_orange.theme"
import { PinkTheme } from "./_pink.theme"
import { PurpleTheme } from "./_purple.theme"

export const ThemesArray = [
	GreenTheme,
	BlueTheme,
	OrangeTheme,
	PinkTheme,
	PurpleTheme
]
export const getThemeByID = (id: string) => {
	switch (id) {
		case "green-theme": {
			return GreenTheme
		}
		case "blue-theme": {
			return BlueTheme
		}
		case "orange-theme": {
			return OrangeTheme
		}
		case "pink-theme": {
			return PinkTheme
		}
		case "purple-theme": {
			return PurpleTheme
		}
		default: {
			return GreenTheme
		}
	}
}
