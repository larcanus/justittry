/**
 * Утилиты для работы с fingerprint браузера и сессиями
 */

import { safeLocalStorage, safeSessionStorage } from './storageUtils';
import logger from "../logger";

/**
 * Генерирует уникальный fingerprint браузера
 */
export const getBrowserFingerprint = () => {
	// Проверяем localStorage
	let fingerprint = safeLocalStorage.getItem('browser_fingerprint');

	if (!fingerprint) {
		try {
			// Создаем новый fingerprint на основе доступных данных
			const nav = navigator;
			const screen = window.screen;

			const data = [
				nav.userAgent || 'unknown',
				nav.language || 'unknown',
				screen.colorDepth || 0,
				screen.width + 'x' + screen.height,
				new Date().getTimezoneOffset(),
				!!window.sessionStorage,
				!!window.localStorage
			].join('|');

			// Простой хеш
			let hash = 0;
			for (let i = 0; i < data.length; i++) {
				const char = data.charCodeAt(i);
				hash = ((hash << 5) - hash) + char;
				hash = hash & hash;
			}

			fingerprint = 'fp_' + Math.abs(hash).toString(36) + '_' + Date.now().toString(36);
			safeLocalStorage.setItem('browser_fingerprint', fingerprint);
		} catch (e) {
			logger.warn('Ошибка создания fingerprint:', e);
			// Генерируем временный ID
			fingerprint = 'temp_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 9);
		}
	}

	return fingerprint;
};

/**
 * Получает информацию о сессии
 */
export const getSessionInfo = () => {
	try {
		const sessionId = safeSessionStorage.getItem('session_id') ||
			'session_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 9);

		if (!safeSessionStorage.getItem('session_id')) {
			safeSessionStorage.setItem('session_id', sessionId);
			safeSessionStorage.setItem('session_start', new Date().toISOString());
		}

		return {
			sessionId,
			sessionStart: safeSessionStorage.getItem('session_start') || new Date().toISOString(),
			pageViews: parseInt(safeSessionStorage.getItem('page_views') || '0') + 1
		};
	} catch (e) {
		logger.error('Ошибка получения информации о сессии:', e);
		// Возвращаем временные данные
		return {
			sessionId: 'temp_session_' + Date.now(),
			sessionStart: new Date().toISOString(),
			pageViews: 1
		};
	}
};

/**
 * Увеличивает счетчик просмотров страниц
 */
export const incrementPageViews = () => {
	try {
		const views = parseInt(safeSessionStorage.getItem('page_views') || '0');
		safeSessionStorage.setItem('page_views', (views + 1).toString());
	} catch (e) {
		logger.warn('Не удалось обновить счетчик просмотров:', e);
	}
};
