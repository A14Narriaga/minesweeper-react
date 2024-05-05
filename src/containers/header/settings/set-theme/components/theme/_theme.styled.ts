import styled from "styled-components"

interface PropsThemeContainer {
	$active?: boolean
}

export const ThemeContainer = styled.div<PropsThemeContainer>`
	border: ${({ $active }) =>
		$active ? "2px solid var(--color-primary)" : "1px solid gray"};
	padding: 0.2rem;
	border-radius: 10rem;
	cursor: pointer;
	.theme-wrapper {
		position: relative;
		width: 3rem;
		aspect-ratio: 1;
		.circle {
			transform: rotate(-45deg);
			.half-top,
			.half-bottom {
				height: 1.46rem;
			}
			.half-top {
				background-color: var(--color-primary);
				border-radius: 1.5rem 1.5rem 0 0;
			}
			.half-bottom {
				background-color: var(--color-secondary);
				border-radius: 0 0 1.5rem 1.5rem;
			}
		}
		.icon {
			position: absolute;
			font-size: 1.5rem;
			background-color: var(--color-primary-text);
			color: var(--color-secondary-text);
			border-radius: 10rem;
			padding: 0.2rem;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}
`
