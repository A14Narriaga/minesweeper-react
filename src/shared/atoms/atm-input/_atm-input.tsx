import { TextField } from "@mui/material"

interface PropsAtmInput {
	label: string
	variant?: "standard" | "outlined" | "filled"
	value: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const AtmInput = ({ variant = "standard", ...props }: PropsAtmInput) => {
	return (
		<TextField
			variant={variant}
			{...props}
		/>
	)
}
