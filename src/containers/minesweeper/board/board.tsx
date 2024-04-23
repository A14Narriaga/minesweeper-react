import { ICell } from "@src/models"

import { BoardContainer } from "./_board.styled"
import { Cell } from "./cell"

const cell: ICell = { icon: "flag", type: "flag" }

export const Board = () => {
	return (
		<BoardContainer>
			<Cell cell={cell} />
		</BoardContainer>
	)
}
