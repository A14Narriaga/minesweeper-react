import styled from "styled-components"

interface PropsCellContainer {
	$cover?: boolean
	$row: number
	$col: number
}

const getCellColor = (col: number, row: number) => {
	const colorA = "var(--color-primary-cell)"
	const colorB = "var(--color-secondary-cell)"
	const evenCol = col % 2 === 0 ? colorA : colorB
	const oddCol = col % 2 === 0 ? colorB : colorA
	return row % 2 === 0 ? evenCol : oddCol
}

export const CellContainer = styled.div<PropsCellContainer>`
	background-color: ${({ $col, $row }) => getCellColor($col, $row)};
	min-width: 2rem;
	aspect-ratio: 1;
	display: flex;
	justify-content: center;
	align-items: center;
`
