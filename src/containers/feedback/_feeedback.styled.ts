import styled from "styled-components"

import { ITheme } from "@src/models"

interface PropsFeedbackContainer {
	$theme: ITheme
}

export const FeedbackContainer = styled.div<PropsFeedbackContainer>`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.status {
		color: ${({ $theme }) => $theme.colors.cellCover1};
		font-size: 2rem;
	}
	.time {
		font-size: 1.3rem;
	}
`
