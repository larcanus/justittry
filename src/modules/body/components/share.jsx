import React, { Component } from 'react';
import logger from '../../../common/logger';

class Share extends Component {
    constructor(props) {
        super(props);
        this.shareContainerId = `ya-share-${Date.now()}`;
        this.state = {
            isLoading: true,
            error: null
        };
    }

    /**
     * Экранирование специальных символов для безопасности
     */
    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text?.replace(/[&<>"']/g, m => map[m]);
    }

    /**
     * Формирование безопасного URL с UTM-метками
     */
    buildShareUrl() {
        const baseUrl = 'https://justittry.ru';
        const { testName } = this.props;

        // URLSearchParams сам заботится об экранировании спецсимволов
        const utmParams = new URLSearchParams({
            utm_source: 'social',
            utm_medium: 'share',
            utm_campaign: 'test_results',
            utm_content: testName || ''
        });

        return `${baseUrl}?${utmParams.toString()}`;
    }

    /**
     * Формирование текста для шаринга
     */
    buildShareText() {
        const { testName, result, difficulty } = this.props;

        // Экранируем данные для безопасности
        const safeTestName = this.escapeHtml(testName);
        const safeResult = this.escapeHtml(result || '');
        const safeDifficulty = this.escapeHtml(difficulty || '');

        if (result) {
            return `Я прошел тест "${safeTestName}" на ${safeResult} (уровень: ${safeDifficulty}) на Just IT Try! 🎯`;
        } else {
            return `Проверь свои знания в тесте "${safeTestName}" на Just IT Try! 💻`;
        }
    }

    /**
     * Формирование хэштегов
     */
    buildHashtags() {
        const { testName } = this.props;
        const baseHashtags = ['JustITTry', 'программирование', 'тестирование'];

        if (testName) {
            const testHashtag = testName.replace(/\s+/g, '');
            baseHashtags.push(testHashtag);
        }

        return baseHashtags.join(',');
    }

    componentDidMount() {
        if (!window.Ya || !window.Ya.share2) {
            this.setState({
                isLoading: false,
                error: 'Yandex.Share API недоступен'
            });
            logger.error('Yandex.Share API не загружен');
            return;
        }

        try {
            const shareUrl = this.buildShareUrl();
            const shareText = this.buildShareText();
            const hashtags = this.buildHashtags();
            const { testName, result, difficulty } = this.props;

            window.Ya.share2(this.shareContainerId, {
                theme: {
                    services: 'vkontakte,facebook,twitter,telegram,whatsapp',
                    lang: 'ru',
                    size: 'm',
                    bare: false,
                    shape: 'round',
                    limit: 6,
                    popupDirection: 'auto',
                    curtain: false,
                    copy: 'extraItem',
                },
                content: {
                    url: shareUrl,
                    title: `Тест ${this.escapeHtml(testName)} - Just IT Try`,
                    description: shareText,
                    image: 'https://justittry.ru/logo512.png'
                },
                contentByService: {
                    vkontakte: {
                        url: shareUrl,
                        title: `Тест ${this.escapeHtml(testName)}`,
                        description: shareText,
                        image: 'https://justittry.ru/logo512.png'
                    },
                    facebook: {
                        url: shareUrl,
                        title: `Тест ${this.escapeHtml(testName)} - Just IT Try`,
                        description: shareText,
                        image: 'https://justittry.ru/logo512.png'
                    },
                    twitter: {
                        url: shareUrl,
                        title: shareText,
                        hashtags: hashtags
                    },
                    telegram: {
                        url: shareUrl,
                        title: `Тест ${this.escapeHtml(testName)}`,
                        description: shareText
                    },
                    whatsapp: {
                        url: shareUrl,
                        title: shareText
                    },
                },
                hooks: {
                    onshare: (name) => {
                        // Отправка события в Yandex.Metrika
                        if (window.ym) {
                            window.ym(71738629, 'reachGoal', 'share', {
                                service: name,
                                test: testName,
                                result: result,
                                difficulty: difficulty
                            });
                        }
                        logger.log(`Поделились через: ${name}`);
                    },
                    onready: () => {
                        this.setState({ isLoading: false });
                        logger.log('Yandex.Share инициализирован');
                    }
                }
            });
        } catch (error) {
            this.setState({
                isLoading: false,
                error: 'Ошибка инициализации кнопок шаринга'
            });
            logger.error('Ошибка инициализации Yandex.Share:', error);
        }
    }

    componentWillUnmount() {
        const container = document.getElementById(this.shareContainerId);
        if (container) {
            container.innerHTML = '';
        }
    }

    render() {
        const { isLoading, error } = this.state;

        return (
            <div className='formBtnShare'>
                {isLoading && (
                    <div className='share-loading'>
                        <span>Загрузка кнопок...</span>
                    </div>
                )}
                {error && (
                    <div className='share-error'>
                        <span>{error}</span>
                    </div>
                )}
                <div id={this.shareContainerId} />
            </div>
        );
    }
}

export default Share;
