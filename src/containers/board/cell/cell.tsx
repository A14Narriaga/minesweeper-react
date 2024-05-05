import { ICell } from "@src/models"
import { AtmIcon } from "@src/shared"

import { CellContainer } from "./_cell.styled"

type CellProps = {
	cell: ICell
	colIndex: number
	rowIndex: number
	onClick?: (e: React.MouseEvent) => void
}

const getCellContent = ({ cover, type }: ICell) => {
	if (cover) return ""
	if (typeof type === "number") return <i className={`num-${type}`}>{type}</i>
	else if (["mine"].includes(type)) return <AtmIcon name={type} />
	else return ""
}

export const Cell = ({ cell, colIndex, rowIndex, ...props }: CellProps) => {
	return (
		<CellContainer
			$col={colIndex}
			$row={rowIndex}
			$cover={cell.cover}
			{...props}>
			{getCellContent(cell)}
		</CellContainer>
	)
}
