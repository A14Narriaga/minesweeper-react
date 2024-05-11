import { useDispatch, useSelector } from "react-redux"

import {
	AppStore,
	GameInitialState,
	GameStausTypes,
	GameTypes,
	SessionStorageTypes
} from "@src/models"
import {
	addRecord,
	setAvailableFlags,
	setLevel,
	setStatus,
	setTime
} from "@src/redux"
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

	function _addRecord(levelCategory: string, time: number, userName: string) {
		dispatch(addRecord({ levelCategory, time, userName }))
		// setSessionStorageObj(
		// 	SessionStorageTypes.GAME,
		// 	GameInitialState,
		// 	GameTypes.RECORDS,
		// 	{ levelCategory, time }
		// )
	}

	function _setStatus(status: GameStausTypes) {
		dispatch(setStatus(status))
	}

	function _setAvailableFlags(availableFlags: number) {
		dispatch(setAvailableFlags(availableFlags))
	}

	function _setTime(sec: number) {
		dispatch(setTime(sec))
	}

	const GameActions = {
		get: () => app,
		setLevel: (levelID: string) => _setLevel(levelID),
		setStatus: (status: GameStausTypes) => _setStatus(status),
		setTime: (sec: number) => _setTime(sec),
		addRecord: (levelCategory: string, time: number, userName: string) =>
			_addRecord(levelCategory, time, userName),
		setAvailableFlags: (availableFlags: number) =>
			_setAvailableFlags(availableFlags)
	}

	return GameActions
}
