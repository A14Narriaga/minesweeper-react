import styled from "styled-components"

import { ITheme } from "@src/models"

interface PropsInstructionsContainer {
	$theme: ITheme
}

export const InstructionsContainer = styled.section<PropsInstructionsContainer>`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	span {
		color: ${({ $theme }) => $theme.colors.cellCover2};
	}
`
