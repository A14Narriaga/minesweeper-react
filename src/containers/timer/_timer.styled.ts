import styled from "styled-components"

import { ITheme } from "@src/models"

interface PropsTimerContainer {
	$theme: ITheme
}

export const TimerContainer = styled.div<PropsTimerContainer>`
	position: fixed;
	bottom: 0;
	left: 0;
	background-color: ${({ $theme }) => $theme.colors.primary};
	color: ${({ $theme }) => $theme.colors.text1};
	padding: 0.5rem;
	border-radius: 0 var(--border-radius) 0 0;
	font-size: 1.3rem;
	display: flex;
	gap: 1rem;
	button {
		color: ${({ $theme }) => $theme.colors.text1};
		font-size: 1rem;
	}
`
