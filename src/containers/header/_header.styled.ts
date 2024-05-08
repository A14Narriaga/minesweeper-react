import styled from "styled-components"

import { ITheme } from "@src/models"

interface PropsHeaderContainer {
	$theme: ITheme
}

export const HeaderContainer = styled.header<PropsHeaderContainer>`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	background-color: ${({ $theme }) => $theme.colors.primary};
	color: ${({ $theme }) => $theme.colors.text1};
	padding: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	div {
		display: flex;
		align-items: center;
		font-size: 1.2rem;
		gap: 1.5rem;
	}
`
