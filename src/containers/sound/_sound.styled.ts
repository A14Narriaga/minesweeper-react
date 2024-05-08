import styled from "styled-components"

import { ITheme } from "@src/models"

interface PropsSoundContainer {
	$theme: ITheme
}

export const SoundContainer = styled.div<PropsSoundContainer>`
	position: fixed;
	bottom: 50px;
	left: 0;
	background-color: ${({ $theme }) => $theme.colors.primary};
	padding: 0.5rem;
	border-radius: 0 var(--border-radius) 0 0;
	display: flex;
	gap: 1rem;
	button {
		color: ${({ $theme }) => $theme.colors.text1};
		font-size: 1rem;
	}
`
