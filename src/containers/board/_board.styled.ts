import styled from "styled-components"

export const BoardContainer = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	.board {
		background-color: var(--color-primary);
		padding: 0.5rem;
		border-radius: var(--border-radius);
		display: flex;
		flex-direction: column;
		.rows {
			display: flex;
		}
	}
`
