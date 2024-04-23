import { HeaderContainer } from "./_header.styled"
import { Instructions } from "./instructions"
import { Records } from "./records"
import { Settings } from "./settings"

export const Header = () => {
	return (
		<HeaderContainer>
			<h3>Minesweeper</h3>
			<div>
				<Instructions />
				<Records />
				<Settings />
			</div>
		</HeaderContainer>
	)
}
