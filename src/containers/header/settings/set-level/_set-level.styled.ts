import styled from "styled-components"

export const SetLevelContainer = styled.div`
	p {
		color: var(--color-primary);
		font-weight: 500;
	}
	.levels {
		margin-top: 0.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		.level {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border: 1px solid var(--color-disabled);
			border-radius: var(--border-radius);
			padding: 0.5rem;
			cursor: pointer;
			color: var(--color-disabled);
		}
		.active {
			border-color: var(--color-primary);
			border-width: 2px;
			color: var(--color-secondary-text);
			font-weight: 500;
		}
	}
`
