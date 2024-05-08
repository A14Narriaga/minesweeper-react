import styled from "styled-components"

interface PropsCellContainer {
	$cover: boolean
	$row: number
	$col: number
}

const colorCover1 = "var(--color-cell-cover-1)"
const colorCover2 = "var(--color-cell-cover-2)"
const colorUncover1 = "var(--color-cell-uncover-1)"
const colorUncover2 = "var(--color-cell-uncover-2)"
const colorHover = "var(--color-cell-hover)"

const getCellColor = (
	isHover: boolean,
	cover: boolean,
	col: number,
	row: number
) => {
	const colorAux1 = isHover ? colorHover : colorCover1
	const colorAux2 = isHover ? colorHover : colorCover2
	const color1 = cover ? colorAux1 : colorUncover1
	const color2 = cover ? colorAux2 : colorUncover2
	const evenCol = col % 2 === 0 ? color1 : color2
	const oddCol = col % 2 === 0 ? color2 : color1
	return row % 2 === 0 ? evenCol : oddCol
}

export const CellContainer = styled.div<PropsCellContainer>`
	background-color: ${({ $cover, $col, $row }) =>
		getCellColor(false, $cover, $col, $row)};
	min-width: 2rem;
	aspect-ratio: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	i {
		color: rgba(34, 31, 31, 0.801);
		font-size: 1.2rem;
		font-weight: 500;
	}
	.num-1 {
		color: blue;
	}
	.num-2 {
		color: red;
	}
	.num-3 {
		color: green;
	}
	.num-4 {
		color: purple;
	}
	.num-5 {
		color: orange;
	}
	.num-6 {
		color: rgb(176, 233, 225);
	}
	.num-7 {
		color: rgb(213, 175, 235);
	}
	.num-8 {
		color: rgb(240, 216, 193);
	}
	&:hover {
		background-color: ${({ $cover, $col, $row }) =>
			getCellColor(true, $cover, $col, $row)};
	}
`
