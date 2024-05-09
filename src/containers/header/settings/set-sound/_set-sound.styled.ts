import styled from "styled-components"

import { ITheme } from "@src/models"

interface PropsSetSoundContainer {
	$theme: ITheme
}

export const SetSoundContainer = styled.div<PropsSetSoundContainer>`
	p {
		color: ${({ $theme }) => $theme.colors.cellCover2};
	}
	div {
		margin-top: 0.5rem;
		display: flex;
		gap: 1rem;
		align-items: center;
		font-size: 2rem;
	}
`
