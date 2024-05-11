import styled from "styled-components"

import { ITheme } from "@src/models"

interface PropsSetThemeContainer {
	$theme: ITheme
}

export const SetThemeContainer = styled.div<PropsSetThemeContainer>`
	p {
		color: ${({ $theme }) => $theme.colors.cellCover1};
	}
	.themes {
		margin-top: 0.5rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
`
