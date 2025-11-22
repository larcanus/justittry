/**
 * Утилиты для сбора метаданных о браузере и устройстве
 */

import logger from "../logger";

/**
 * Собирает метаданные о браузере и устройстве
 */
export const collectBrowserMetadata = () => {
	try {
		const nav = navigator;
		const screen = window.screen;

		return {
			userAgent: nav.userAgent || 'unknown',
			language: nav.language || 'unknown',
			platform: nav.platform || 'unknown',
			screenResolution: `${screen.width || 0}x${screen.height || 0}`,
			colorDepth: screen.colorDepth || 0,
			timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'unknown',
			timezoneOffset: new Date().getTimezoneOffset(),
			referrer: document.referrer || 'direct',
			viewport: `${window.innerWidth || 0}x${window.innerHeight || 0}`
		};
	} catch (e) {
		logger.warn('Ошибка сбора метаданных браузера:', e);
		return {
			userAgent: 'unknown',
			language: 'unknown',
			platform: 'unknown',
			screenResolution: '0x0',
			colorDepth: 0,
			timezone: 'unknown',
			timezoneOffset: 0,
			referrer: 'unknown',
			viewport: '0x0'
		};
	}
};
