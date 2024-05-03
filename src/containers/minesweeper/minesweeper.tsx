import { MinesweeperContainer } from "./_minesweeper.styled"
import { Board } from "./board"

export const Minesweeper = () => {
	return (
		<MinesweeperContainer>
			<Board
				numOfCols={10}
				numOfRows={10}
			/>
		</MinesweeperContainer>
	)
}
