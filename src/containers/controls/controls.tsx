import { ControlsContainer } from "./_controls.styled"
import { Flags } from "./flags"
import { Status } from "./status"

export const Controls = () => {
	return (
		<ControlsContainer>
			<Flags />
			<Status />
		</ControlsContainer>
	)
}
