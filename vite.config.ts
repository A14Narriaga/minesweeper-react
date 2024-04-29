// eslint-disable-next-line unicorn/import-style
import * as path from "node:path"

import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"

// https://vitejs.dev/config/

const port = Number(process.env.PORT) || 4000

export default defineConfig({
	base: "/",
	plugins: [react()],
	server: {
		port,
		strictPort: true,
		host: true,
		origin: `http://0.0.0.0:${port}`
	},
	resolve: {
		alias: [
			{ find: "@src", replacement: path.resolve(__dirname, "src") },
			{ find: "@tests", replacement: path.resolve(__dirname, "tests") }
		]
	}
})
