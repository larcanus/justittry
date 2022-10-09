import React, {Component} from 'react';

class Share extends Component {
    componentDidMount() {
        window.Ya.share2('ya', {
            theme: {
                services: 'vkontakte,facebook,twitter,linkedin,telegram,whatsapp',
                lang: 'en',
                size: 'm',
                bare: false,
                shape: 'round',
            },
            content: {
                url: 'https://justittry.ru',
                title: 'Just it try. Tests for IT developers',
                description: 'Tests to test your knowledge',
            },
            contentByService: {
                twitter: {
                    url: 'https://justittry.ru',
                    title: 'Just it try. Tests for IT developers',
                    hashtags: 'Just it try,share'
                },
                facebook: {
                    url: 'https://justittry.ru',
                    title: 'Just it try. Tests for IT developers',
                }
            },
        });
    }

    render() {
        return (
            <form className='formBtnShare'>
                <p>Поделиться:</p>
                <div id='ya' />
            </form>
        );
    }
}

export default Share;