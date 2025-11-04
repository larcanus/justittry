import React, {Component} from 'react';

class Share extends Component {
    componentDidMount() {
        const { testName, result, difficulty } = this.props;

        const shareText = result ?
            `Я прошел тест "${testName}" на ${result} (${difficulty}) на Just IT Try!` :
            `Проверь свои знания в тесте "${testName}" на Just IT Try!`;

        window.Ya.share2('ya', {
            theme: {
                services: 'vkontakte,facebook,twitter,linkedin,telegram,whatsapp',
                lang: 'ru',
                size: 'm',
                bare: false,
                shape: 'round',
            },
            content: {
                url: 'https://justittry.ru',
                title: `Тест ${testName} - Just IT Try`,
                description: shareText,
                image: 'https://justittry.ru/logo.png', // Добавьте путь к логотипу
            },
            contentByService: {
                twitter: {
                    url: 'https://justittry.ru',
                    title: `Тест ${testName} - Just IT Try`,
                    description: shareText,
                    hashtags: 'ITтесты,программирование,JavaScript,тестирование'
                },
                facebook: {
                    url: 'https://justittry.ru',
                    title: `Тест ${testName} - Just IT Try`,
                    description: shareText,
                },
                vkontakte: {
                    url: 'https://justittry.ru',
                    title: `Тест ${testName} - Just IT Try`,
                    description: shareText,
                },
                telegram: {
                    url: 'https://justittry.ru',
                    title: `Тест ${testName} - Just IT Try`,
                    description: shareText,
                }
            },
        });
    }

    render() {
        return (
            <form className='formBtnShare'>
                <div id='ya' />
            </form>
        );
    }
}

export default Share;
