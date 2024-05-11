import styled from "styled-components"

import { ITheme } from "@src/models"

interface PropsTableRecordsContainer {
	$theme: ITheme
}

export const TableRecordsContainer = styled.div<PropsTableRecordsContainer>`
	p {
		color: ${({ $theme }) => $theme.colors.cellCover1};
	}
`
