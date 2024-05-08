import styled from "styled-components"

import { ITheme } from "@src/models"

interface PropsControlsContainer {
	$theme: ITheme
}

export const ControlsContainer = styled.div<PropsControlsContainer>`
	position: fixed;
	bottom: 0;
	right: 0;
	background-color: ${({ $theme }) => $theme.colors.primary};
	color: ${({ $theme }) => $theme.colors.text1};
	padding: 0.5rem;
	border-radius: var(--border-radius) 0 0 0;
	font-size: 1.3rem;
	display: flex;
	align-items: center;
	gap: 0.5rem;
`
