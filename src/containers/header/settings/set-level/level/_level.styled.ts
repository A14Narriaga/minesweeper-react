import styled from "styled-components"

import { ITheme } from "@src/models"

interface PropsLevelContainer {
	$theme: ITheme
	$active: boolean
}

const getBGColor = (theme: ITheme, active: boolean) => {
	return active ? theme.colors.cellCover1 : "transparent"
}

const getColor = (theme: ITheme, active: boolean) => {
	return active ? theme.colors.text2 : theme.colors.disabled
}

export const LevelContainer = styled.div<PropsLevelContainer>`
	width: 100%;
	background-color: ${({ $theme, $active }) => getBGColor($theme, $active)};
	display: flex;
	align-items: center;
	justify-content: space-between;
	border: 1px solid ${({ $theme, $active }) => getColor($theme, $active)};
	border-radius: var(--border-radius);
	padding: 0.5rem;
	cursor: pointer;
	color: ${({ $theme, $active }) => getColor($theme, $active)};
`
