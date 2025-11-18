/**
 * Утилиты для безопасной работы с localStorage и sessionStorage
 */

// Fallback хранилище в памяти
const memoryStorage = {
	data: {},
	getItem(key) {
		return this.data[key] || null;
	},
	setItem(key, value) {
		this.data[key] = value;
	}
};

/**
 * Безопасная работа с localStorage
 */
export const safeLocalStorage = {
	getItem(key) {
		try {
			return localStorage.getItem(key);
		} catch (e) {
			console.warn('localStorage недоступен, используется память:', e.message);
			return memoryStorage.getItem(key);
		}
	},
	setItem(key, value) {
		try {
			localStorage.setItem(key, value);
		} catch (e) {
			console.warn('localStorage недоступен, используется память:', e.message);
			memoryStorage.setItem(key, value);
		}
	}
};

/**
 * Безопасная работа с sessionStorage
 */
export const safeSessionStorage = {
	getItem(key) {
		try {
			return sessionStorage.getItem(key);
		} catch (e) {
			console.warn('sessionStorage недоступен, используется память:', e.message);
			return memoryStorage.getItem(key);
		}
	},
	setItem(key, value) {
		try {
			sessionStorage.setItem(key, value);
		} catch (e) {
			console.warn('sessionStorage недоступен, используется память:', e.message);
			memoryStorage.setItem(key, value);
		}
	}
};