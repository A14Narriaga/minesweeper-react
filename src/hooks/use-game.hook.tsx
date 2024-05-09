import { useDispatch, useSelector } from "react-redux"

import {
	AppStore,
	GameInitialState,
	GameStausTypes,
	GameTypes,
	SessionStorageTypes
} from "@src/models"
import { setAvailableFlags, setLevel, setStatus } from "@src/redux"
import { setSessionStorageObj } from "@src/utilities"

export const useGame = () => {
	const dispatch = useDispatch()
	const app = useSelector((store: AppStore) => store.game)

	function _setLevel(levelID: string) {
		dispatch(setLevel(levelID))
		setSessionStorageObj(
			SessionStorageTypes.GAME,
			GameInitialState,
			GameTypes.LEVEL_ID,
			levelID
		)
	}

	function _setStatus(status: GameStausTypes) {
		dispatch(setStatus(status))
	}

	function _setAvailableFlags(availableFlags: number) {
		dispatch(setAvailableFlags(availableFlags))
	}

	const GameActions = {
		get: () => app,
		setLevel: (levelID: string) => _setLevel(levelID),
		setStatus: (status: GameStausTypes) => _setStatus(status),
		setAvailableFlags: (availableFlags: number) =>
			_setAvailableFlags(availableFlags)
	}

	return GameActions
}
