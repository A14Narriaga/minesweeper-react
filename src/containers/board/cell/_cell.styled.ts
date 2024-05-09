import styled from "styled-components"

import { ITheme } from "@src/models"

interface PropsCellContainer {
	$cover: boolean
	$row: number
	$col: number
	$theme: ITheme
	$isMine: boolean
}

const getCellColor = (
	{ colors }: ITheme,
	isHover: boolean,
	cover: boolean,
	col: number,
	row: number,
	isMine: boolean
) => {
	const { cellCover1, cellCover2, cellUncover1, cellUncover2, cellHover } =
		colors
	const coverAux1 = isHover ? cellHover : cellCover1
	const coverAux2 = isHover ? cellHover : cellCover2
	const uncoverAux1 = isMine ? "trasparent" : cellUncover1
	const uncoverAux2 = isMine ? "trasparent" : cellUncover2
	const color1 = cover ? coverAux1 : uncoverAux1
	const color2 = cover ? coverAux2 : uncoverAux2
	const evenCol = col % 2 === 0 ? color1 : color2
	const oddCol = col % 2 === 0 ? color2 : color1
	return row % 2 === 0 ? evenCol : oddCol
}

export const CellContainer = styled.div<PropsCellContainer>`
	background-color: ${({ $theme, $cover, $col, $row, $isMine }) =>
		getCellColor($theme, false, $cover, $col, $row, $isMine)};
	min-width: 2rem;
	aspect-ratio: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	i {
		font-size: 1.2rem;
		font-weight: 500;
	}
	.num-1 {
		color: ${({ $theme }) => $theme.colors.num1};
	}
	.num-2 {
		color: ${({ $theme }) => $theme.colors.num2};
	}
	.num-3 {
		color: ${({ $theme }) => $theme.colors.num3};
	}
	.num-4 {
		color: ${({ $theme }) => $theme.colors.num4};
	}
	.num-5 {
		color: ${({ $theme }) => $theme.colors.num5};
	}
	.num-6 {
		color: ${({ $theme }) => $theme.colors.num6};
	}
	.num-7 {
		color: ${({ $theme }) => $theme.colors.num7};
	}
	.num-8 {
		color: ${({ $theme }) => $theme.colors.num8};
	}
	&:hover {
		background-color: ${({ $theme, $cover, $col, $row, $isMine }) =>
			getCellColor($theme, true, $cover, $col, $row, $isMine)};
	}
`
