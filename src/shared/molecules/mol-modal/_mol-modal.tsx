import { Dialog, DialogContent, DialogTitle } from "@mui/material"
import { ReactNode } from "react"

interface MolModalProps {
	open: boolean
	title?: string
	children: ReactNode
	handleClose?: () => void
}

export const MolModal = ({
	open,
	title,
	handleClose,
	children
}: MolModalProps) => {
	return (
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description">
			<DialogTitle id="alert-dialog-title">{title}</DialogTitle>
			<DialogContent>{children}</DialogContent>
			{/* <DialogActions>
					<Button onClick={handleClose}>Disagree</Button>
					<Button
						onClick={handleClose}
						autoFocus>
						Agree
					</Button>
				</DialogActions> */}
		</Dialog>
	)
}
