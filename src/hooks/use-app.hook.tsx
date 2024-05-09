import { useDispatch, useSelector } from "react-redux"

import {
	AppInitialState,
	AppStore,
	AppTypes,
	SessionStorageTypes
} from "@src/models"
import { setTheme, setVolume } from "@src/redux"
import { setSessionStorageObj } from "@src/utilities"

export const useApp = () => {
	const dispatch = useDispatch()
	const app = useSelector((store: AppStore) => store.app)

	function _setTheme(themeID: string) {
		dispatch(setTheme(themeID))
		setSessionStorageObj(
			SessionStorageTypes.APP,
			AppInitialState,
			AppTypes.THEME_ID,
			themeID
		)
	}

	function _setVolume(volume: number) {
		dispatch(setVolume(volume))
		setSessionStorageObj(
			SessionStorageTypes.APP,
			AppInitialState,
			AppTypes.VOLUME,
			volume
		)
	}

	const AppActions = {
		get: () => app,
		changeTheme: (themeID: string) => _setTheme(themeID),
		setVolume: (volume: number) => _setVolume(volume)
	}

	return AppActions
}
