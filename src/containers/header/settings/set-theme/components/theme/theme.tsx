import { AtmIcon } from "@src/shared"

import { ThemeContainer } from "./_theme.styled"

interface PropsTheme {
	active?: boolean
}

export const Theme = ({ active = false }: PropsTheme) => {
	return (
		<ThemeContainer $active={active}>
			<div className="theme-wrapper">
				<div className="circle">
					<div className="half-top"></div>
					<div className="half-bottom"></div>
				</div>
				<AtmIcon
					className="icon"
					name="settings"
				/>
			</div>
		</ThemeContainer>
	)
}
