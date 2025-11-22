import Prism from 'prismjs';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-dart';
import 'prismjs/components/prism-python';
import logger from '../../../common/logger';

const TEST_LANGUAGE_MAP = {
    'JavaScript': 'javascript',
    'HTML': 'javascript',
    'DART': 'dart',
    'PHP': 'php',
    'Py 3': 'python',
};

/**
 * Определяет язык программирования по названию теста
 * @param {string} testName - Название теста
 * @returns {string} Язык для Prism
 */
export const getLanguageFromTest = (testName) => {
    if (!testName) return 'javascript';

    for (const [testKey, language] of Object.entries(TEST_LANGUAGE_MAP)) {
        if (testName.includes(testKey)) {
            return language;
        }
    }

    return 'javascript';
};

/**
 * Применяет подсветку синтаксиса
 */
export const highlightSyntax = () => {
    try {
        Prism.highlightAll();
    } catch (error) {
        logger.warn('Prism highlighting error:', error);
    }
};
