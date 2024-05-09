import { useDispatch, useSelector } from "react-redux"

import {
	AppStore,
	GameInitialState,
	GameTypes,
	SessionStorageTypes
} from "@src/models"
import { setLevel } from "@src/redux"
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

	const GameActions = {
		get: () => app,
		setLevel: (levelID: string) => _setLevel(levelID)
	}

	return GameActions
}
