import { ControlsContainer } from "./_controls.styled"
import { Flags } from "./flags"
import { Status } from "./status"
import { Timer } from "./timer"

export const Controls = () => {
	return (
		<ControlsContainer>
			<Timer />
			<Status />
			<Flags />
		</ControlsContainer>
	)
}
