import { ITheme } from "@src/models"

import { ThemeContainer } from "./_theme.styled"

interface PropsTheme {
	active?: boolean
	theme: ITheme
	onClick: () => void
}

export const Theme = ({ theme, active = false, ...props }: PropsTheme) => {
	return (
		<ThemeContainer
			$theme={theme}
			$active={active}>
			<div
				className="theme-wrapper"
				{...props}>
				<div className="circle">
					<div className="half-top"></div>
					<div className="half-bottom"></div>
				</div>
				<div className="icon">{theme.icons.mine}</div>
			</div>
		</ThemeContainer>
	)
}
