import styled from "styled-components"

import { ITheme } from "@src/models"

interface PropsSetLevelContainer {
	$theme: ITheme
}

export const SetLevelContainer = styled.div<PropsSetLevelContainer>`
	p {
		color: ${({ $theme }) => $theme.colors.cellCover1};
	}
	.levels {
		margin-top: 0.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}
`
