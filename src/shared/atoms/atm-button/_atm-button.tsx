import { Button, IconButton } from "@mui/material"
import { ReactNode } from "react"

interface PropsAtmButton {
	startIcon?: ReactNode
	endIcon?: ReactNode
	text?: string
	disabled?: boolean
	href?: string
	variant?: "text" | "contained" | "outlined"
	size?: "small" | "medium" | "large"
	onClick?: () => void
}

export const AtmButton = ({
	text,
	startIcon,
	endIcon,
	disabled = false,
	variant = "text",
	size = "medium",
	onClick
}: PropsAtmButton) => {
	return text === undefined ? (
		<Button
			onClick={onClick}
			startIcon={startIcon}
			endIcon={endIcon}
			size={size}
			variant={variant}
			disabled={disabled}>
			{text}
		</Button>
	) : (
		<IconButton
			onClick={onClick}
			size={size}
			disabled={disabled}>
			{startIcon || endIcon}
		</IconButton>
	)
}
