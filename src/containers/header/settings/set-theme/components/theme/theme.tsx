import { ITheme } from "@src/models"
import { AtmIcon } from "@src/shared"

import { ThemeContainer } from "./_theme.styled"

interface PropsTheme {
	active?: boolean
	theme: ITheme
}

export const Theme = ({ theme, active = false }: PropsTheme) => {
	return (
		<ThemeContainer
			$theme={theme}
			$active={active}>
			<div className="theme-wrapper">
				<div className="circle">
					<div className="half-top"></div>
					<div className="half-bottom"></div>
				</div>
				<AtmIcon
					className="icon"
					name="mine"
				/>
			</div>
		</ThemeContainer>
	)
}
