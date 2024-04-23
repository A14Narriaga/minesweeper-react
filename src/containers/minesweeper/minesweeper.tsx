import { MinesweeperContainer } from "./_minesweeper.styled"
import { Board } from "./board"
import { Controls } from "./controls"

export const Minesweeper = () => {
	return (
		<MinesweeperContainer>
			<Controls />
			<Board />
		</MinesweeperContainer>
	)
}
