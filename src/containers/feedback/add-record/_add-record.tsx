import React, { useState } from "react"

import { useGame } from "@src/hooks"
import { AtmButton, AtmInput } from "@src/shared"

import { AtmParticles } from "../../../shared/atoms/atm-particles/_atm-particles"
import { AddRecordContainer } from "./_add-record.styled"
interface PropsAddRecord {
	levelCategory: string
	time: number
}

export const AddRecord = ({ levelCategory, time }: PropsAddRecord) => {
	const game = useGame()

	const [inputValue, setInputValue] = useState<string>("")

	const addRecord = () => {
		game.addRecord(levelCategory, time, inputValue)
	}

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value)
	}

	return (
		<AddRecordContainer>
			<AtmParticles />
			<div className="trophy">🏆</div>
			<div className="form">
				<p>🎉 Felicidades 🎉</p>
				<p>Rompiste un nuevo record</p>
				<br />
				<AtmInput
					label="Nombre de usuario"
					value={inputValue}
					onChange={handleInputChange}
				/>
				<br />
				<AtmButton
					text="Guardar record"
					onClick={addRecord}
				/>
			</div>
		</AddRecordContainer>
	)
}
