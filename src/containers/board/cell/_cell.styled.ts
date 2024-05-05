import styled from "styled-components"

interface PropsCellContainer {
	$cover: boolean
	$row: number
	$col: number
}

const getCellColor = (cover: boolean, col: number, row: number) => {
	if (cover) {
		const colorA = "var(--color-primary-cell)"
		const colorB = "var(--color-secondary-cell)"
		const evenCol = col % 2 === 0 ? colorA : colorB
		const oddCol = col % 2 === 0 ? colorB : colorA
		return row % 2 === 0 ? evenCol : oddCol
	} else {
		return "rgba(199, 199, 199, 0.568)"
	}
}

export const CellContainer = styled.div<PropsCellContainer>`
	background-color: ${({ $cover, $col, $row }) =>
		getCellColor($cover, $col, $row)};
	min-width: 2rem;
	aspect-ratio: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	i {
		color: rgba(34, 31, 31, 0.801);
		font-size: 1.2rem;
	}
	.num-1 {
		color: rgb(240, 206, 206);
	}
	.num-2 {
		color: rgb(198, 205, 235);
	}
	.num-3 {
		color: rgb(173, 230, 185);
	}
	.num-4 {
		color: rgb(231, 187, 231);
	}
	.num-5 {
		color: rgb(235, 231, 186);
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
		background-color: ${({ $cover }) =>
			$cover ? "gray" : "rgba(199, 199, 199, 0.568)"};
	}
`
