import { useTheme } from "@emotion/react"
import { CSSProperties } from "react"
import { BsVolumeUp } from "react-icons/bs"
import { BsVolumeOff } from "react-icons/bs"
import { BsVolumeDown } from "react-icons/bs"
import { FaRegFileLines } from "react-icons/fa6"
import { GoTrophy } from "react-icons/go"
import { IoSettingsOutline } from "react-icons/io5"
import { TbError404 } from "react-icons/tb"

import { ITheme } from "@src/models"

interface PropsAtmIcon {
	name: string
	style?: CSSProperties
	className?: string
	onClick?: () => void
}

export const AtmIcon = ({ name, ...props }: PropsAtmIcon) => {
	const theme = useTheme()
	const customTheme = theme as unknown as ITheme
	switch (name) {
		case "instructions": {
			return <FaRegFileLines {...props} />
		}
		case "settings": {
			return <IoSettingsOutline {...props} />
		}
		case "records": {
			return <GoTrophy {...props} />
		}
		case "flag": {
			return <span {...props}>{customTheme.icons.flag}</span>
		}
		case "mine": {
			return <span {...props}>{customTheme.icons.mine}</span>
		}
		case "status-none": {
			return <span {...props}>😗</span>
		}
		case "status-started": {
			return <span {...props}>🤔</span>
		}
		case "status-lost": {
			return <span {...props}>💀</span>
		}
		case "status-won": {
			return <span {...props}>😎</span>
		}
		case "volume-up": {
			return <BsVolumeUp />
		}
		case "volume-down": {
			return <BsVolumeDown />
		}
		case "volume-off": {
			return <BsVolumeOff />
		}
		default: {
			return <TbError404 {...props} />
		}
	}
}
