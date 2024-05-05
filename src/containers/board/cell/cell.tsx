import { ICell } from "@src/models"

import { CellContainer } from "./_cell.styled"

type CellProps = {
	cell: ICell | null
	colIndex: number
	rowIndex: number
	onClick?: (e: React.MouseEvent) => void
}

export const Cell = ({ cell, colIndex, rowIndex, ...props }: CellProps) => {
	return (
		<CellContainer
			$col={colIndex}
			$row={rowIndex}
			$cover={cell?.cover}
			{...props}></CellContainer>
	)
}
