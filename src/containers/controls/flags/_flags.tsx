import { useGame } from "@src/hooks"
import { AtmIcon } from "@src/shared"

import { FlagsContainer } from "./_flags.styled"

export const Flags = () => {
	const { availableFlags } = useGame().get()
	return (
		<FlagsContainer>
			<AtmIcon name="flag" />
			<p>{availableFlags}</p>
		</FlagsContainer>
	)
}
