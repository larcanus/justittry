import {CHOICE_TEST,REMOVE_TEST} from '../../../common/constants';

export default function newValue(test) {
    switch (test) {
        case 'js-test-logo'  : test =  'Тест на знание языка JavaScript';
            break;
        case 'html-test-logo' : test = 'Тест на знание языка HTML';
            break;
        case 'css-test-logo' : test = 'Тест на знание языка CSS';
            break;
        case 'php-test-logo' : test = 'Тест на знание языка PHP';
            break;
        case REMOVE_TEST : test = 'Выберите тест';
            break;
    }

    return {
        type: CHOICE_TEST,
        payload: test
    }
}