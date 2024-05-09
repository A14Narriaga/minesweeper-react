import { useTheme } from "@mui/material"

import { ICell, ITheme } from "@src/models"
import { AtmIcon } from "@src/shared"

import { CellContainer } from "./_cell.styled"

type CellProps = {
	cell: ICell
	colIndex: number
	rowIndex: number
	onClick?: (e: React.MouseEvent) => void
	onContextMenu?: (e: React.MouseEvent) => void
}

const getCellContent = ({ cover, type, flag }: ICell) => {
	if (cover) {
		return flag ? <AtmIcon name="flag" /> : ""
	}
	if (typeof type === "number") return <i className={`num-${type}`}>{type}</i>
	else if (type === "mine") return <AtmIcon name={type} />
	else return ""
}

export const Cell = ({ cell, colIndex, rowIndex, ...props }: CellProps) => {
	const theme = useTheme()
	const customTheme = theme as unknown as ITheme
	return (
		<CellContainer
			$theme={customTheme}
			$col={colIndex}
			$row={rowIndex}
			$cover={cell.cover}
			$isMine={cell.type === "mine"}
			{...props}>
			{getCellContent(cell)}
		</CellContainer>
	)
}
