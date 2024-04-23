import { ICell } from "@src/models"

import { CellData } from "./_cell.data"
import { CellSkeleton } from "./_cell.skeleton"

type CellProps = {
	cell: ICell | null
	onClick?: (e: React.MouseEvent) => void
}

export const Cell = ({ cell }: CellProps) => {
	return cell ? <CellData /> : <CellSkeleton />
}
