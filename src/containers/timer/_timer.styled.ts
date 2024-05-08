import styled from "styled-components"

export const TimerContainer = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	background-color: var(--color-1);
	color: var(--color-text-1);
	padding: 0.5rem;
	border-radius: 0 var(--border-radius) 0 0;
	font-size: 1.3rem;
	display: flex;
	gap: 1rem;
	button {
		color: var(--color-text-1);
		font-size: 1rem;
	}
`
