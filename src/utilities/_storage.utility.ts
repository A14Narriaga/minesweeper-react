export const setLocalStorage = (key: string, value: unknown): unknown => {
	localStorage.setItem(key, JSON.stringify(value))
	return value
}

export const getLocalStorage = (key: string, otherwise: unknown): unknown => {
	const value = localStorage.getItem(key)
	return value ? JSON.parse(value) : otherwise
}

export function setSessionStorage(key: string, value: unknown): unknown {
	sessionStorage.setItem(key, JSON.stringify(value))
	return value
}

export function getSessionStorage(key: string, otherwise: unknown): unknown {
	const value = sessionStorage.getItem(key)
	return value ? JSON.parse(value) : otherwise
}

export function setSessionStorageObj(
	key: string,
	init: unknown,
	prop: string,
	value: unknown
): unknown {
	const storage = {
		...(getSessionStorage(key, init) as Record<string, unknown>)
	}
	storage[prop] = value
	setSessionStorage(key, storage)
	return storage[prop]
}

export function getSessionStorageObj(
	key: string,
	init: unknown,
	prop: string
): unknown {
	const storage = getSessionStorage(key, init)
	return (storage as Record<string, unknown>)[prop]
}
