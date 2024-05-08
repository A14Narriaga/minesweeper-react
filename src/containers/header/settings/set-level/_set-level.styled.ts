import styled from "styled-components"

import { ITheme } from "@src/models"

interface PropsSetLevelContainer {
	$theme: ITheme
}

export const SetLevelContainer = styled.div<PropsSetLevelContainer>`
	p {
		color: ${({ $theme }) => $theme.colors.cellCover2};
	}
	.levels {
		margin-top: 0.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		.level {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border: 1px solid ${({ $theme }) => $theme.colors.disabled};
			border-radius: var(--border-radius);
			padding: 0.5rem;
			cursor: pointer;
			color: ${({ $theme }) => $theme.colors.disabled};
		}
		.active {
			color: ${({ $theme }) => $theme.colors.text2};
			background-color: ${({ $theme }) => $theme.colors.cellCover1};
		}
	}
`
