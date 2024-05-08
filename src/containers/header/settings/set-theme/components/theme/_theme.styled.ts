import styled from "styled-components"

import { ITheme } from "@src/models"

interface PropsThemeContainer {
	$active: boolean
	$theme: ITheme
}

const getColor = (active: boolean, theme: ITheme): string => {
	return active ? theme.colors.cellCover2 : theme.colors.disabled
}

export const ThemeContainer = styled.div<PropsThemeContainer>`
	border: 2px solid ${({ $active, $theme }) => getColor($active, $theme)};
	padding: 0.2rem;
	border-radius: 10rem;
	cursor: pointer;
	.theme-wrapper {
		position: relative;
		width: 3rem;
		aspect-ratio: 1;
		.circle {
			transform: rotate(-45deg);
			.half-top,
			.half-bottom {
				height: 1.46rem;
			}
			.half-top {
				background-color: ${({ $theme }) => $theme.colors.primary};
				border-radius: 1.5rem 1.5rem 0 0;
			}
			.half-bottom {
				background-color: ${({ $theme }) => $theme.colors.secondary};
				border-radius: 0 0 1.5rem 1.5rem;
			}
		}
		.icon {
			position: absolute;
			font-size: 1.1rem;
			background-color: ${({ $theme }) => $theme.colors.text1};
			color: ${({ $theme }) => $theme.colors.text2};
			border-radius: 10rem;
			padding: 0.1rem;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}
`
