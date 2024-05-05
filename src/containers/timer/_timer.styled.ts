import styled from "styled-components"

export const TimerContainer = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	background-color: var(--color-primary);
	color: var(--color-primary-text);
	padding: 0.5rem;
	border-radius: 0 var(--border-radius) 0 0;
	font-size: 1.3rem;
	display: flex;
	gap: 1rem;
	button {
		color: var(--color-primary-text);
		font-size: 1rem;
	}
`
