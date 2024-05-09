import { useDispatch, useSelector } from "react-redux"

import {
	AppInitialState,
	AppStore,
	AppTypes,
	SessionStorageTypes
} from "@src/models"
import { setTheme } from "@src/redux"
import { setSessionStorageObj } from "@src/utilities"

export const useApp = () => {
	const dispatch = useDispatch()
	const app = useSelector((store: AppStore) => store.app)

	function changeTheme(themeID: string) {
		dispatch(setTheme(themeID))
		setSessionStorageObj(
			SessionStorageTypes.APP,
			AppInitialState,
			AppTypes.THEME_ID,
			themeID
		)
	}

	const AppActions = {
		get: () => app,
		changeTheme: (themeID: string) => changeTheme(themeID)
	}

	return AppActions
}
