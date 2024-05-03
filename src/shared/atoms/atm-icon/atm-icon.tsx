import { CSSProperties } from "react"
import { FaRegFileLines } from "react-icons/fa6"
import { GoTrophy } from "react-icons/go"
import { IoSettingsOutline } from "react-icons/io5"
import { IoFlag } from "react-icons/io5"
import { TbError404 } from "react-icons/tb"

interface PropsAtmIcon {
	name: string
	style?: CSSProperties
	onClick?: () => void
}

export const AtmIcon = ({ name, ...props }: PropsAtmIcon) => {
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
			return <IoFlag {...props} />
		}
		case "status-playing": {
			return <span {...props}>😃</span>
		}
		default: {
			return <TbError404 {...props} />
		}
	}
}
