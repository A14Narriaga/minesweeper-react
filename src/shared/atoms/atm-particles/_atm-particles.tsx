import { type ISourceOptions } from "@tsparticles/engine"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { useEffect, useState } from "react"
import { loadFull } from "tsparticles"

import confettiOptions from "./_confetti.json"

export const AtmParticles = () => {
	const [init, setInit] = useState(false)

	useEffect(() => {
		void initParticlesEngine(async (engine) => {
			await loadFull(engine)
		}).then(() => {
			setInit(true)
		})
	}, [])

	if (init) {
		return (
			<Particles
				id="tsparticles"
				options={confettiOptions as ISourceOptions}
			/>
		)
	}

	return <></>
}
