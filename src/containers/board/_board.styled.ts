import styled from "styled-components"

import { ITheme } from "@src/models"

interface PropsBoardContainer {
	$theme: ITheme
}

export const BoardContainer = styled.div<PropsBoardContainer>`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ $theme }) => $theme.colors.background};
	.board {
		background-color: ${({ $theme }) => $theme.colors.primary};
		padding: 0.3rem;
		border-radius: var(--border-radius);
		display: flex;
		flex-direction: column;
		.rows {
			display: flex;
		}
	}
`
