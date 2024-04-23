export const setLocalStorage = (key: string, value: any) => {
	localStorage.setItem(key, JSON.stringify(value))
	return value
}

export const getLocalStorage = (key: string, otherwise: any) => {
	const value = localStorage.getItem(key)
	return value ? JSON.parse(value) : otherwise
}
