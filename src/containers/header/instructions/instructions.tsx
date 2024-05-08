import { useTheme } from "@mui/material"
import { useState } from "react"

import { ITheme } from "@src/models"
import { AtmIcon, MolModal } from "@src/shared"

import { InstructionsContainer } from "./_instructions.styled"

export const Instructions = () => {
	const theme = useTheme()
	const customTheme = theme as unknown as ITheme

	const [open, setOpen] = useState(false)

	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	return (
		<>
			<AtmIcon
				name="instructions"
				onClick={handleOpen}
			/>
			<MolModal
				open={open}
				title="Instrucciones"
				handleClose={handleClose}>
				<InstructionsContainer $theme={customTheme}>
					<p>
						<span>Objetivo del juego:</span> El objetivo del Buscaminas es
						descubrir todas las casillas que no contienen minas sin hacer
						explotar ninguna de las casillas que sí las contienen.
					</p>
					<p>
						<span>El tablero:</span> El juego se desarrolla en un tablero
						cuadriculado. Cada casilla del tablero puede estar vacía o contener
						una mina.
					</p>
					<p>
						<span>Inicio del juego:</span> Al comenzar, todas las casillas están
						cubiertas. No sabes dónde están las minas.
					</p>
					<p>
						<span>Descubrir casillas:</span> Haz clic en una casilla para
						descubrirla. Si la casilla que seleccionas contiene una mina,
						pierdes el juego. Si no contiene una mina, se revelará un número o
						estará vacía.
					</p>
					<p>
						<span>Números:</span> Si una casilla no contiene una mina, puede
						mostrar un número. Este número indica la cantidad de minas que hay
						en las casillas adyacentes (horizontal, vertical o diagonalmente).
					</p>
					<p>
						<span>Usar los números:</span> Utiliza los números para deducir la
						ubicación de las minas. Si una casilla tiene el número "1" al lado,
						significa que hay una mina en una de las casillas adyacentes.
					</p>
					<p>
						<span>Marcar minas:</span> Si crees que una casilla contiene una
						mina, puedes marcarla con una bandera haciendo clic derecho. Esto te
						ayuda a recordar dónde están las minas y evitar seleccionar esas
						casillas por error.
					</p>
					<p>
						<span>Ganar el juego:</span> Ganarás el juego cuando descubras todas
						las casillas que no contienen minas. Esto significa que todas las
						casillas seguras están descubiertas y todas las minas están marcadas
						con banderas.
					</p>
					<p>
						<span>Perder el juego:</span> Pierdes el juego si seleccionas una
						casilla que contiene una mina. En ese caso, todas las minas se
						revelarán y el juego terminará.
					</p>
					<p>
						<span>Práctica:</span> El Buscaminas requiere práctica y lógica para
						tener éxito. Juega con cuidado, utiliza la información proporcionada
						por los números y marca las minas con precaución.
					</p>
				</InstructionsContainer>
			</MolModal>
		</>
	)
}
