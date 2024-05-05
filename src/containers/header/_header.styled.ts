import styled from "styled-components"

export const HeaderContainer = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	background-color: var(--color-primary);
	color: var(--color-primary-text);
	padding: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	div {
		display: flex;
		align-items: center;
		font-size: 1.2rem;
		gap: 1.5rem;
	}
`
