import "./app.scss"

import { Provider } from "react-redux"

import { AppWrapper } from "./app-wrapper"
import store from "./redux/_store"

function App() {
	return (
		<Provider store={store}>
			<AppWrapper />
		</Provider>
	)
}

export default App
