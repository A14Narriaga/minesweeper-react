import { SettingsContainer } from "./_settings.styled"
import { SetLevel } from "./set-level"
import { SetMine } from "./set-mine"
import { SetSound } from "./set-sound"
import { SetTheme } from "./set-theme"

export const Settings = () => {
	return (
		<SettingsContainer>
			<div>
				<SetTheme />
				<SetMine />
				<SetSound />
			</div>
			<SetLevel />
		</SettingsContainer>
	)
}
