import {CHOICE_TEST,REMOVE_TEST} from '../../../common/constants';

export default function newValue(test) {
    switch (test) {
        case 'js-test-logo'  : test =  'JavaScript';
            break;
        case 'html-test-logo' : test = 'HTML';
            break;
        case 'dart-test-logo' : test = 'DART 3';
            break;
        case 'php-test-logo' : test = 'PHP 8';
            break;
        case 'py-test-logo' : test = 'Py 3';
            break;
        case REMOVE_TEST : test = '';
            break;
    }

    return {
        type: CHOICE_TEST,
        payload: test
    }
}
