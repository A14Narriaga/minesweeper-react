import styled from "styled-components"

import { ITheme } from "@src/models"

interface PropsSetVolumeContainer {
	$theme: ITheme
}

export const SetVolumeContainer = styled.div<PropsSetVolumeContainer>`
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
