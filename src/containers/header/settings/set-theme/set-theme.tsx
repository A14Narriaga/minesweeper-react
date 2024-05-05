import { SetThemeContainer } from "./_set-theme.styled"
import { Theme } from "./components"

export const SetTheme = () => {
	return (
		<SetThemeContainer>
			<p>Temas</p>
			<div className="themes">
				<Theme active />
				<Theme />
				<Theme />
				<Theme />
				<Theme />
			</div>
		</SetThemeContainer>
	)
}
