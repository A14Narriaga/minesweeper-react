import { App } from "./_app.model"
import { Game } from "./_game.model"

export interface AppStore {
	app: App
	game: Game
}
