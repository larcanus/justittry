const JavaScriptQuestions = {
    jun: [
        {
            question: 'С помощью каких символов можно оставить комментарий \nразработчика  в JavaScrip?',
            option: {
                a1: '/',
                a2: '//',
                a3: '<--!',
                a4: '\\',
            },
            answerOption: 'a2',
            answer: 'Однострочные комментарии начинаются с двойной косой черты //.\n' +
                'Многострочные комментарии начинаются косой чертой со звёздочкой /* и \n ' +
                'заканчиваются звёздочкой с косой чертой */. ',
            num: '#10',
        },
        {
            question: 'Что выведет консоль?\n\n\n' +
                'function example() {\n' +
                '  let x = 1;\n' +
                `  if ('false') {\n` +
                '    let x = 2; \n' +
                '  }\n' +
                '  console.log(x);\n' +
                '}',
            option: {
                a1: '1',
                a2: 'undefined',
                a3: '2',
                a4: 'error',
            },
            answerOption: 'a1',
            answer: 'Областью видимости переменных, объявленных ключевым словом let, является блок, \n в котором они объявлены,' +
                ' и все его подблоки.',
            num: '#11',
        },
        {
            question: 'Сколько типов данных, являющихся примитивами, определено \n в стандарте ECMAScript 6 ? ',
            option: {
                a1: '5',
                a2: '7',
                a3: '6',
                a4: '4',
            },
            answerOption: 'a3',
            answer: 'Undefined (Неопределенный тип)  : typeof instance === "undefined"\n' +
                'Boolean (Булев, Логический тип) : typeof instance === "boolean"\n' +
                'Number (Число) : typeof instance === "number"\n' +
                'String (Строка) : typeof instance === "string"\n' +
                'BigInt  : typeof instance === "bigint"\n' +
                'Symbol (в ECMAScript 6)  : typeof instance === "symbol"',
            num: '#12',
        },
        {
            question: 'Что выведет консоль?\n\n' +
                'const ex = Boolean( \'0\' )\n' +
                'console.log( !( ex ) )',
            option: {
                a1: '0',
                a2: '1',
                a3: 'false',
                a4: 'true',
            },
            answerOption: 'a3',
            answer: 'В JavaScript, если строка не пустая, то она всегда true \n' +
                'ex = true\n' +
                '!(ex) = false',
            num: '#13',

        },
        {
            question: 'Какой метод вызовет объект window?',
            option: {
                a1: 'document.window',
                a2: 'document.defaultView',
                a3: `document.querySelector( 'window' )`,
                a4: 'document.getWindow()',
            },
            answerOption: 'a2',
            answer: ' Окно текущего документа может быть получено с помощью свойства document.defaultView \n',
            num: '#14',
        },
        {
            question: 'Что выведет alert?\n\n' +
                'let x;\n' +
                '\n' +
                'false || (x = 1) || (x = 2);\n' +
                '\n' +
                'alert(x);',
            option: {
                a1: 'true',
                a2: '2',
                a3: 'false',
                a4: '1',
            },
            answerOption: 'a4',
            answer: 'Оператор || выполняет следующие действия:\n' +
                '- Вычисляет операнды слева направо.\n' +
                '- Каждый операнд конвертирует в логическое значение.\n Если результат true,' +
                'останавливается и возвращает исходное значение этого операнда\n' +
                '- Если все операнды являются ложными (false), возвращает последний из них.',
            num: '#15',
        },
        {
            question: 'Что выведет getName при вызове через setTimeout?\n\n' +
                'let fruit = "Яблоко";\n' +
                '\n' +
                'const getName = () => {\n' +
                '  console.log(fruit);\n' +
                '}\n' +
                '\n' +
                'setTimeout( () => {\n' +
                '  let fruit = "Банан";\n' +
                '  getName();\n' +
                '}, 2000);',

            option: {
                a1: 'Банан',
                a2: 'undefined',
                a3: 'Яблоко',
                a4: 'null',
            },
            answerOption: 'a3',
            answer: 'У переменных, объявленных с помощью директивы let, блочная область видимости \n',
            num: '#16',
        },
        {
            question: 'Чему равно значение переменной res?\n\n' +
                `const arr = [ '0' || -1, 1 || 0 && 3, 2 ** -1 ]\n` +
                '\n' +
                'const res = arr[arr.length-2]',

            option: {
                a1: '3',
                a2: '1',
                a3: '0',
                a4: '2',
            },
            answerOption: 'a2',
            answer: 'res = arr[1]. Приоритет оператора && больше, чем ||',
            num: '#17',
        },
        {
            question: 'Что выведет консоль?\n\n' +
                'let number = \'string+\';\n\n' +
                '' +
                'if( number !== \'string+\' ){\n' +
                '   console.log( number )\n' +
                '} else {\n' +
                '   console.log( number += number )\n' +
                '}',

            option: {
                a1: 'undefined',
                a2: 'number+string',
                a3: 'string',
                a4: 'string+string+',
            },
            answerOption: 'a4',
            answer: 'Оператор - Строго не равно( !== )\t \n ' +
                'Возвращает true, если операнды не равны и/или имеют разный тип. \n' +
                'сработает else',
            num: '#18',
        },
        {
            question: 'Чему равно значение переменной result?\n\n' +
                'const res = \'string\'.substring( 3, -2 );',
            option: {
                a1: 'ing',
                a2: 'st',
                a3: 'ошибка',
                a4: 'str',
            },
            answerOption: 'a4',
            answer: 'Если аргумент end отрицательное число, то он преобразуется в 0\n' +
                'если аргумент start > end, они меняются местами',
            num: '#20',
        },
        {
            question: 'Чему равно значение перемменой сount после выполнения switch?\n\n' +
                'let сount = 0;\n\n' +
                'switch( сount ){\n' +
                '   case 1 : сount += 1;\n' +
                '   break;\n' +
                '   case 0 : сount += 2;\n' +
                '   default : сount += 3;\n' +
                '}',
            option: {
                a1: '2',
                a2: '3',
                a3: '5',
                a4: '1',
            },
            answerOption: 'a3',
            answer: 'Если break нет, то выполнение пойдёт ниже по следующим case,\n' +
                ' при этом остальные проверки игнорируются.',
            num: '#21',
        },
        {
            question: 'Что произойдет при выполнении этого цикла?\n\n' +
                'for ( let i = 0; i < 4; i++ ) {\n' +
                '\n' +
                '  i % 2 === 0 ? alert(i) : continue;\n' +
                '\n' +
                '}',
            option: {
                a1: 'будет получен alert со значениями 0 и 2',
                a2: 'будет получен alert со значениями 1 и 3',
                a3: 'будет получен alert со значениями 0, 2, 4',
                a4: 'ошибка',
            },
            answerOption: 'a4',
            answer: 'Нельзя использовать break/continue справа от оператора „?“\n' +
                ' эти синтаксические конструкции не являются выражениями\n' +
                ' и не могут быть использованы с тернарным оператором ?. \n',
            num: '#22',
        },
        {
            question: 'Что выведет консоль?\n\n' +
                'const seller = {\n' +
                "  name: 'Ivan',\n" +
                '   age: 25,\n' +
                '};\n\n' +
                "seller.name = 'Tom'; \n\n" +
                'console.log( seller.name ); ',
            option: {
                a1: 'Tom',
                a2: 'Ошибка',
                a3: 'Ivan',
                a4: 'true',
            },
            answerOption: 'a1',
            answer: 'Объявление const защищает от изменений только саму переменную, а не её содержимое.',
            num: '#23',
        },
        {
            question: 'Что выведет модальное окно?\n\n' +
                'const arr = [ 1,2,3,\'1\',\'2\',\'3\' ];\n\n' +
                'alert( typeof arr ); ',
            option: {
                a1: 'Array',
                a2: 'array',
                a3: 'object',
                a4: 'В коде ошибка',
            },
            answerOption: 'a3',
            answer: 'Массив – разновидность объекта,\n' +
                ' которая предназначена для хранения проиндексированных значений и \n' +
                'предлагает дополнительные методы для удобного манипулирования такой коллекцией.',
            num: '#24',
        },
        {
            question: 'Что произойдет после выполнения этого кода?\n\n' +
                'const object = {\n' +
                '\tname: \'objectName\',\n\n' +
                '\tgetName(){\n' +
                '\t\treturn this.name\n' +
                '\t},\n' +
                '}\n\n' +
                'console.log( object?.getName?.() )',
            option: {
                a1: 'в консоль выведет - \'objectName\'',
                a2: 'в консоль выведет - \'object\'',
                a3: 'TypeError',
                a4: 'В коде ошибка',
            },
            answerOption: 'a1',
            answer: 'специальная синтаксическая конструкция, опциональная цепочка -  ?.\n' +
                ' останавливает вычисление и возвращает undefined,\n ' +
                'если часть перед ?. имеет значение undefined или null. \n',
            num: '#25',
        },
        {
            question: 'Чему равно значение переменной result?\n\n' +
                'const obj = {\n\n' +
                '\tcheckNullish(){\n' +
                ' \t\treturn (null || undefined) ?? \'foo\';\n' +
                '\t},\n' +
                '}\n\n' +
                'let result = obj.checkNullish();',
            option: {
                a1: 'null',
                a2: 'undefined',
                a3: 'foo',
                a4: 'В коде ошибка',
            },
            answerOption: 'a3',
            answer: 'Оператор нулевого слияния (??) это логический оператор,\n' +
                ' который возвращает значение правого операнда когда значение левого операнда \n' +
                'равно null или undefined, в противном случае будет возвращено значение левого операнда.',
            num: '#27',

        },
        {
            question: 'Что произойдёт при выполнении этого кода?\n\n' +
                'function f() {\n' +
                '  let promise = Promise.resolve( 1 );\n' +
                '  let result = await promise; // \n' +
                '}\n\n' +
                'f().then(alert)',
            option: {
                a1: 'alert выведет 1',
                a2: 'alert выведет true',
                a3: 'alert выведет false',
                a4: 'SyntaxError',
            },
            answerOption: 'a4',
            answer: 'await нельзя использовать в обычных функциях.\n' +
                'Функция должна быть объявленна с async',
            num: '#29',

        },
        {
            question: 'Чему равно значение переменой fullName?\n\n' +
                'const user = {\n' +
                '   name : \'Mike\',\n' +
                '   surname : \'Havrov\',\n' +
                '   patronynic : undefined,\n' +
                '}\n' +

                'const { name = \'\', surname = \'\', patronynic = \'\' } = user\n' +
                '\n' +
                'const fullName = `${name} ${surname[\'0\']}. ${patronynic[\'0\']}.`',
            option: {
                a1: 'TypeError',
                a2: 'Пустая строка',
                a3: 'Mike H. undefined.',
                a4: '  undefined',
            },
            answerOption: 'a3',
            answer: 'Значения по умолчанию для деструктурирующего присваивания выполняются,\n ' +
                'только если значения отсутствуют. ',
            num: '#30',
        },
        {
            question: 'Что выполнит метод getDate() объекта Date?\n\n',
            option: {
                a1: 'Вернет день месяца, от 1 до 31',
                a2: 'Вернет год, от 1970 до текущего',
                a3: 'Вернет месяц, от 1 до 12',
                a4: 'Вернет текущие день, месяц и год ',
            },
            answerOption: 'a1',
            answer: 'Метод getDate() возвращает день месяца указанной даты по местному времени.',
            num: '#31',
        },
        {
            question: 'Для чего служит создание такого объекта? \n\n new ArrayBuffer( length )\n\n',
            option: {
                a1: 'Для работы с коллекциями WeakSet',
                a2: 'У этого объекта нет особого назначения',
                a3: 'Для работы с бинарными данными',
                a4: 'Для работы с коллекциями Set и Map',
            },
            answerOption: 'a3',
            answer: 'Объект ArrayBuffer используется для работы с бинарными данными.\n ' +
                'Он представляет собой ссылку на поток "сырых" двоичных данных,\n' +
                ' однако работать с ними напрямую возможности не дает.',
            num: '#32',
        },
        {
            question: 'Чему равно значени переменной res?\n\n' +
                'let gen = [\n' +
                '   new String( \'bar\' ) === \'bar\',\n' +
                '   new String( \'bar\' ) === new String( \'bar\' ),\n' +
                '];\n' +
                'let res = null;\n' +
                'res += gen.some( prop => prop === true );',
            option: {
                a1: '2',
                a2: '1',
                a3: '0',
                a4: 'true',
            },
            answerOption: 'a3',
            answer: 'new String("foo") - строковый объект, \'foo\' -  строковый примитив.\n' +
                'Метод arr.some() проверяет, соответствует ли хотя бы один элемент массива условию,\n' +
                'задаваемому передаваемой ему функцией.',
            num: '#34',
        },
        {
            question: 'Чему равно значени переменной rounded?\n\n' +
                'const rounded = 5n / 2n;',
            option: {
                a1: '2.5n',
                a2: '2n',
                a3: 'Infinity',
                a4: 'NaN',
            },
            answerOption: 'a2',
            answer: 'Результат операции с дробным значением будет округлен в меньшую сторону \n' +
                'при использовании BigInt.',
            num: '#35',
        },
        {
            question: 'Что такое поднятие (Hoisting)?\n\n',
            option: {
                a1: 'Термин, описывающий подъем переменной или \n' +
                    ' функции в глобальную или функциональную \n области видимости.',
                a2: 'Термин, описывающий скорость подьема переменной \n' +
                    'или функции в различных областях видимости.',
                a3: 'Термин, описывающий вложенность областей видимости.',
                a4: 'Термин, описывающий услугу по запуску ресурса на сервере.',
            },
            answerOption: 'a1',
            answer: 'Объявление переменной или функции физически перемещается в начало \n' +
                'вашего кода, хотя в действительности этого не происходит. На самом же деле,\n' +
                ' объявления переменных и функций попадают в память в процессе фазы компиляции, \n' +
                'но остаются в коде на том месте, где вы их объявили.',
            num: '#36',
        },
        {
            question: 'Что произойдет при выполнении этого кода?\n\n' +
                '\'use strict\'\n' +
                'function getNum() {\n' +
                '    num = 123;\n' +
                '    return num;\n' +
                '}\n' +
                'alert( getNum() );\n\n',
            option: {
                a1: 'Alert выведет "123"',
                a2: 'Ошибка - Uncaught ReferenceError',
                a3: 'Ошибка - TypeError',
                a4: 'Alert выведет - "function getNum()".',
            },
            answerOption: 'a2',
            answer: 'Строгий режим вводит ограничения по написанию кода.\n' +
                'Например нельзя присваивать значения или обращаться к необъявленным переменным',
            num: '#37',
        },
        {
            question: 'Что такое IIFE ?\n\n',

            option: {
                a1: 'Функция, которая выполняется в конце событийного цикла',
                a2: 'Функция, которая не выполняется сразу же после того, как она была определена.',
                a3: 'Функция, которая выполняется сразу же после того, как она была определена.',
                a4: 'В JavaScript нет такого термина',
            },
            answerOption: 'a3',
            answer: 'Immediately Invoked Function Expression - JavaScript функция,\n ' +
                'которая выполняется сразу же после того, как она была определена.\n',
            num: '#38',
        },
        {
            question: 'Что такое функция высшего порядка (Higher Order Functions)?\n\n',

            option: {
                a1: 'функция, не имеющая this',
                a2: 'функция, принимающая в качестве аргументов только другие функции',
                a3: 'функция, взаимодействующая с высокоуровневыми языками программирования',
                a4: 'функция, принимающая в качестве аргументов другие функции\n' +
                    'или возвращающая другую функцию в качестве результата.',
            },
            answerOption: 'a4',
            answer: ' Основная идея состоит в том, что функции имеют тот же статус, что и другие объекты данных.\n ' +
                'Использование функций высшего порядка приводит к абстрактным и компактным программам, \n' +
                'принимая во внимание сложность производимых ими вычислений.',
            num: '#40',
        },
        {
            question: 'Для чего используется ключевое слово «new»?\n\n',

            option: {
                a1: 'создает экземпляр объекта, имеющего конструктор',
                a2: 'создает экземпляр функции',
                a3: 'создает экземпляр объекта, не имеющего конструктор',
                a4: 'создает объект, не имеющий this',
            },
            answerOption: 'a1',
            answer: 'Оператор (операторная функция) «new» создает экземпляр объекта, \n' +
                'встроенного или определенного пользователем, имеющего конструктор.',
            num: '#41',
        },
        {
            question: 'Что произойдет при выполнении этого кода?\n\n' +
                'functionFoo()\n' +
                'functionBar()\n' +
                '\n' +
                'function functionFoo(){\n' +
                '    console.log(\'I am working.\')\n' +
                '}\n' +
                'const functionBar = function(){\n' +
                '    console.log(\'I work too!\')\n' +
                '}?',

            option: {
                a1: 'консоль выведет сначала \'I am working.\', а потом \'I work too!\'',
                a2: 'консоль выведет только \'I work too!\'',
                a3: 'консоль выведет только \'I am working.\'',
                a4: 'консоль выведет сначала \'I work too!\', а потом \'I am working.\'',
            },
            answerOption: 'a3',
            answer: 'Вызов functionBar приведет к ошибке, а вызов functionFoo нет, \n' +
                'потому что functionFoo поднимается в глобальную область видимости, \n' +
                'а functionBar нет.',
            num: '#42',
        },
        {
            question: 'Чему должен быть равен третий парамер метода \n ' +
                'Object.defineProperty()\n\n ',

            option: {
                a1: 'Объекту, на котором определяется свойство.',
                a2: 'Третьего параметра нет',
                a3: 'Дескриптору определяемого или изменяемого свойства',
                a4: 'Имени определяемого или изменяемого свойства.',
            },
            answerOption: 'a3',
            answer: 'Метод Object.defineProperty(obj, prop, descriptor) определяет новое или изменяет\n ' +
                'существующее свойство\n\n' +
                'Например: Object.defineProperty(obj, \'key\', {\n' +
                '  enumerable: false,\n' +
                '  configurable: false,\n' +
                '  writable: false,\n' +
                '  value: \'static\'\n' +
                '});',
            num: '#46',
        },
        {
            question: 'Что выведет консоль? \n\n' +
                'const doc = window.document;\n' +
                'console.log( typeof doc );\n',

            option: {
                a1: `'objectDOM'`,
                a2: `'DOMobject'`,
                a3: `'object'`,
                a4: `'node'`,
            },
            answerOption: 'a3',
            answer: `Оператор typeof возвращает строку, указывающую тип операнда. В данном случае тип - 'object'`,
            num: '#51',
        },
        {
            question: 'Чему будет равно значение в консоли?\n\n' +
                'const str = \'Быть или не быть, вот в чём вопрос.\';\n' +
                '\n' +
                'console.log( str.startsWith(\'Быть\') );\n ',

            option: {
                a1: `1`,
                a2: `true`,
                a3: `false`,
                a4: `0`,
            },
            answerOption: 'a2',
            answer: 'Метод startsWith() помогает определить, начинается ли строка с символов указанных в скобках,\n' +
                ' возвращая, соответственно, true или false.',
            num: '#53',
        },
        {
            question: 'Что произойдет после выполнения этого кода?\n\n' +
                ` document.cookie = 'user=John; max-age=0';\n `,

            option: {
                a1: `Куки с именем John будут удалены.`,
                a2: `Куки с именем user будут обновлены.`,
                a3: `Куки с именем user будут удалены.`,
                a4: `Куки с именем John будут обновлены.`,
            },
            answerOption: 'a3',
            answer: 'Альтернатива expires, определяет срок действия куки в секундах с текущего момента.\n' +
                'Если задан ноль или отрицательное значение, то куки будет удалено.\n' +
                ' (срок действия истекает прямо сейчас)',
            num: '#54',
        },
        {
            question: 'Что выведет код?\n\n' +
                'let promise = new Promise( (resolve, reject) => {\n' +
                '  resolve(1);\n' +
                '  setTimeout( () => resolve(2), 1000 );\n' +
                '});\n' +
                '\n' +
                'promise.then(alert);\n ',

            option: {
                a1: `1`,
                a2: `2`,
                a3: `3`,
                a4: `SyntaxError`,
            },
            answerOption: 'a1',
            answer: 'Второй вызов resolve будет проигнорирован, поскольку учитывается только \n' +
                'первый вызов reject/resolve. Все последующие вызовы – игнорируются.',
            num: '#58',
        },
        {
            question: `Какое итоговое значение будет у переменной finNum? \n\n ` +
                'function showName( firstNum, lastNum, ...secondNum ) {\n' +
                '  let finNum = firstNum;\n' +
                '  finNum += secondNum;\n' +
                '  finNum += lastNum;\n' +
                '  return finNum;\n' +
                '}\n' +
                '\n' +
                'showName( 1, 2, 3, 4 );',

            option: {
                a1: `'10'`,
                a2: `'13,42'`,
                a3: `13,42`,
                a4: `10`,
            },
            answerOption: 'a2',
            answer: 'Результатом сложения массива и числа, является строка ',
            num: '#61',
        },
        {
            question: 'Для чего используется метод Object.assign()?\n\n ',

            option: {
                a1: 'для копирования значений всех собственных перечисляемых свойств ' +
                    'из одного или более исходных объектов в целевой объект',
                a2: 'для копирования значений всех не перечисляемых свойств ' +
                    'из одного или более исходных объектов в целевой объект',
                a3: 'для копирования значений всех собственных перечисляемых свойств ' +
                    'из одного или более исходных объектов в упорядоченный массив',
                a4: 'для сравнения и последующего удаления значений всех собственных ' +
                    'перечисляемых свойств из целевого объекта',
            },
            answerOption: 'a1',
            answer: 'Метод Object.assign() используется для копирования значений всех собственных\n' +
                'перечисляемых свойств из одного или более исходных объектов в целевой объект.\n' +
                'После копирования он возвращает целевой объект.',
            num: '#62',
        },
        {
            question: 'Для чего служит метод Function.prototype.bind()?\n\n ',

            option: {
                a1: 'Метод создаёт новую функцию, которая при вызове устанавливает в качестве\n' +
                    ' контекста выполнения this предоставленное значение',
                a2: 'Метод кладет функцию в Storage через localStorage',
                a3: 'Метод копирует аргументы и scope функции',
                a4: 'Метод копирует функцию, которая при вызове устанавливает в качестве\n' +
                    ' контекста выполнения this, вызвавшего ее объекта',
            },
            answerOption: 'a1',
            answer: 'Метод bind() создаёт новую функцию, которая при вызове устанавливает в качестве\n' +
                ' контекста выполнения this предоставленное значение. \n' +
                'В метод также передаётся набор аргументов, которые будут установлены перед переданными в\n' +
                ' привязанную функцию аргументами при её вызове.\n',
            num: '#64',
        },
        {
            question: 'Что выведет консоль ?\n\n' +
                'obj = {\n' +
                '  internal: {}\n' +
                '};\n' +
                '\n' +
                'Object.freeze(obj);\n' +
                'obj.internal.a = \'getString()\';\n' +
                '\n' +
                'console.log( obj.internal.a);',

            option: {
                a1: `'getString()'`,
                a2: `'Object obj'`,
                a3: '{}',
                a4: 'выбросит TypeError',
            },
            answerOption: 'a1',
            answer: 'Значения-объекты в замороженном объекте могут быть изменены (заморозка неглубокая). \n' +
                'Для того чтобы сделать объект obj полностью неизменяемым, надо заморозить каждый объект \n' +
                'в объекте obj.',
            num: '#65',
        },
        {
            question: 'Что выведет следующий код? \n\n' +
                'const output = ( (x) => {\n' +
                '  delete x;\n' +
                '  return x;\n' +
                '})(0);\n' +
                '\n' +
                'console.log( output ); ',

            option: {
                a1: `выбросит SyntaxError`,
                a2: `выбросит TypeError`,
                a3: '-1',
                a4: '0',
            },
            answerOption: 'a4',
            answer: 'Этот код выведет 0. Оператор delete используется для удаления свойств объектов.\n' +
                ' А x — это не свойство объекта — это локальная переменная. \n' +
                'Оператор delete не воздействует на локальные переменные.\n',
            num: '#66',
        },
        {
            question: 'Что выведет следующий код? \n\n' +
                'let users = new Set();\n' +
                '\n' +
                'let vasya = {name: \'Вася\'};\n' +
                'let petya = {name: \'Петя\'};\n' +
                '\n' +
                'users.add(vasya);\n' +
                'users.add(petya);\n' +
                'users.add(vasya);\n' +
                'users.add(petya);\n' +
                '\n' +
                'alert( users.size );',

            option: {
                a1: `2`,
                a2: `3`,
                a3: '4',
                a4: 'выбросит SyntaxError',
            },
            answerOption: 'a1',
            answer: 'Set – коллекция для хранения множества значений, причём каждое значение\n' +
                ' может встречаться лишь один раз',
            num: '#68',
        },
        {
            question: 'Чему будет равно значение в переменной done? \n\n' +
                'const mathResult = ( x ) => {\n' +
                `  return\n` +
                `      ( x + 3,14 * 2 + 10 + 5 - '0.1' )\n` +
                '}\n' +
                'let done = mathResult( 1 );',

            option: {
                a1: `'429.0'`,
                a2: `undefined`,
                a3: `'430.1'`,
                a4: '42.9',
            },
            answerOption: 'a2',
            answer: 'Код вычислений не выполнится, потому что интерпретатор JavaScript \n' +
                'подставит точку с запятой после return.',
            num: '#71',
        },
        {
            question: 'Что произойдет при выполнении?\n\n' +
                'const callbacks = [];\n' +
                'for (var i = 0; i < 2; i++) {\n' +
                '  callbacks.push(() => console.log(i));\n' +
                '}\n' +
                'callbacks.forEach((c) => c());\n\n',

            option: {
                a1: `вывод: 1 2`,
                a2: `вывод: 2 2`,
                a3: `вывод: 0 1 2`,
                a4: 'вывод: 0 0 0',
            },
            answerOption: 'a2',
            answer: 'Поскольку используется var, переменная i имеет функциональную область видимости и общую для всех замыканий.\n' +
                'К моменту вызова i === 2, поэтому оба вызова выведут 2.',
            num: '#73',
        },
        {
            question: 'Что выведет консоль?\n' +
                'console.log(typeof null);',
            option: {
                a1: 'null',
                a2: 'object',
                a3: 'undefined',
                a4: 'primitive',
            },
            answerOption: 'a2',
            answer: 'Это историческая ошибка в JavaScript: typeof null возвращает "object", хотя null — примитив.',
            num: '#74',
        },
        {
            question: 'Какой результат выполнения выражения?\n' +
                'console.log(0.1 + 0.2 === 0.3);',
            option: {
                a1: 'true',
                a2: 'false',
                a3: 'NaN',
                a4: 'TypeError',
            },
            answerOption: 'a2',
            answer: 'Из-за особенностей представления чисел с плавающей точкой в двоичной системе, 0.1 + 0.2 не равно в точности 0.3.',
            num: '#75',
        },
        {
            question: 'Что выведет следующий код?\n' +
                'var a = 5;\n' +
                'function foo() {\n' +
                '  console.log(a);\n' +
                '  var a = 10;\n' +
                '}\n' +
                'foo();',
            option: {
                a1: '5',
                a2: '10',
                a3: 'undefined',
                a4: 'ReferenceError',
            },
            answerOption: 'a3',
            answer: 'Из-за поднятия (hoisting) переменная a внутри функции объявляется в начале, но инициализируется позже, поэтому при логировании она undefined.',
            num: '#76',
        },
        {
            question: 'Какой метод массива возвращает новый массив, отфильтрованный по условию?',
            option: {
                a1: 'map',
                a2: 'reduce',
                a3: 'filter',
                a4: 'forEach',
            },
            answerOption: 'a3',
            answer: 'Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.',
            num: '#77',
        },
        {
            question: 'Что произойдёт при попытке изменить свойство, установленное как writable: false?\n' +
                'const obj = {};\n' +
                'Object.defineProperty(obj, "x", { value: 42, writable: false });\n' +
                'obj.x = 100;\n' +
                'console.log(obj.x);',
            option: {
                a1: '100',
                a2: '42',
                a3: 'undefined',
                a4: 'TypeError',
            },
            answerOption: 'a2',
            answer: 'Если свойство не записываемое (writable: false), присвоение игнорируется (в нестрогом режиме) или вызывает ошибку (в строгом).',
            num: '#78',
        },
        {
            question: 'Что выведет консоль?\n' +
                'console.log(1 + "2" + "2");',
            option: {
                a1: '122',
                a2: '5',
                a3: '"122"',
                a4: 'TypeError',
            },
            answerOption: 'a1',
            answer: 'При сложении числа и строки JavaScript приводит число к строке. ' +
                'Сначала 1 + "2" → "12", затем "12" + "2" → "122".',
            num: '#84',
        },
        {
            question: 'Какой результат выполнения?\n' +
                'console.log([] == ![]);',
            option: {
                a1: 'true',
                a2: 'false',
                a3: 'undefined',
                a4: 'ReferenceError',
            },
            answerOption: 'a1',
            answer: '[] приводится к 0, ![] → false → 0. Таким образом, 0 == 0 → true.',
            num: '#85',
        },
        {
            question: 'Что выведет код?\n' +
                'let a = 1;\n' +
                'let b = a++;\n' +
                'console.log(b);',
            option: {
                a1: '1',
                a2: '2',
                a3: 'undefined',
                a4: '0',
            },
            answerOption: 'a1',
            answer: 'Постфиксный инкремент (a++) сначала возвращает текущее значение, ' +
                'а затем увеличивает переменную. Поэтому b = 1.',
            num: '#86',
        },
        {
            question: 'Какой метод массива изменяет исходный массив?',
            option: {
                a1: 'map',
                a2: 'filter',
                a3: 'slice',
                a4: 'splice',
            },
            answerOption: 'a4',
            answer: 'Метод splice() изменяет содержимое массива, удаляя или заменяя ' +
                'существующие элементы и/или добавляя новые.',
            num: '#87',
        },
        {
            question: 'Что выведет консоль?\n' +
                'console.log(typeof function() {});',
            option: {
                a1: 'function',
                a2: 'object',
                a3: 'undefined',
                a4: 'method',
            },
            answerOption: 'a1',
            answer: 'Оператор typeof возвращает "function" для функций, хотя на самом деле ' +
                'функции являются подтипом объектов.',
            num: '#88',
        },
        {
            question: 'Что выведет консоль?\n' +
                'console.log(Boolean(0));',
            option: {
                a1: 'true',
                a2: 'false',
                a3: '0',
                a4: 'null',
            },
            answerOption: 'a2',
            answer: 'В JavaScript значение 0 является falsy, поэтому Boolean(0) возвращает false.',
            num: '#94',
        },
        {
            question: 'Какой результат выполнения?\n' +
                'console.log("5" - 3);',
            option: {
                a1: '53',
                a2: '2',
                a3: 'NaN',
                a4: '"53"',
            },
            answerOption: 'a2',
            answer: 'При использовании оператора вычитания строка "5" приводится к числу, и выполняется 5 - 3 = 2.',
            num: '#95',
        },
        {
            question: 'Как правильно объявить функцию в JavaScript?',
            option: {
                a1: 'function myFunc() {}',
                a2: 'func myFunc() {}',
                a3: 'def myFunc() {}',
                a4: 'myFunc() => {}',
            },
            answerOption: 'a1',
            answer: 'Стандартный способ объявления функции — через ключевое слово function: function имя() {}.',
            num: '#96',
        }
    ],
    mid: [
        {
            question: 'Что выведет консоль? \n\n' +
                'const array = [ 1, 2, 3 ]\n' +
                'const callback = x => x*2\n' +
                '\n' +
                'console.log( array.map(x => callback()) ); ',

            option: {
                a1: `[x => x*2, x => x*2, x => x*2]`,
                a2: `[NaN, NaN, NaN]`,
                a3: '[2, 4, 6]',
                a4: 'выбросит ReferenceError',
            },
            answerOption: 'a2',
            answer: '',
            num: '#70',
        },
        {
            question: 'Чем отличаются методы: ' +
                'function.call()' +
                'function.apply();\n\n',

            option: {
                a1: 'Принимаемыми аргументами',
                a2: 'Возвращаемым результатом',
                a3: "Зависимостью от режима 'use strict'",
                a4: 'Нет отличий',
            },
            answerOption: 'a1',
            answer: ' function.call( context, ...args ) ожидает список аргументов, в то время как \n' +
                'function.apply( context, args ) принимает псевдомассив.',
            num: '#39',
        },
        {
            question: 'Что произойдет после выполнения этого кода?\n\n' +
                ' window.history.go(-1);\n ',

            option: {
                a1: `Перемещение по истории на одну страницу назад`,
                a2: `Перемещение по истории на одну страницу вперёд`,
                a3: `Перемещение по истории на две страницы назад`,
                a4: `Перемещение по истории на позицию 0`,
            },
            answerOption: 'a1',
            answer: 'Метод go() используется для загрузки конкретной страницы из истории сессии,\n' +
                'определяемой её позицией относительно текущей страницы.\n' +
                'Относительная позиция текущей страницы равняется 0.\n' +
                'Значение -1 === вернуться на одну страницу назад (равноценно вызову back())',
            num: '#56',
        },
        {
            question: 'Какое значение выведет консоль?\n\n' +
                'const regexp = /[a-c]/g\n' +
                'const str = \'abc\'\n' +
                'const array = [ ...str.matchAll(regexp) ];\n\n' +
                'console.log( array[1] )',
            option: {
                a1: 'ab',
                a2: 'bc',
                a3: 'b',
                a4: 'В коде ошибка',
            },
            answerOption: 'a3',
            answer: 'Метод matchAll() возвращает итератор по всем результатам \n' +
                'при сопоставлении строки с регулярным выражением',
            num: '#26',
        },
        {
            question: 'Чем отличаются механизмы веб хранилища: \n' +
                'sessionStorage и localStorage?  \n\n ',

            option: {
                a1: 'sessionStorage хранит данные на протяжении сессии, а localStorage\n' +
                    ' сохраняет данные даже в случае, если переоткрыть браузер. ',
                a2: 'Методом setItem() для доступа к интерфейсу Storage. Отличается количество параметров.\n' +
                    'Для sessionStorage их 3, у localStorage 2',
                a3: 'Отсутсвием возможности удаления данных. У localStorage нет метода removeItem(). ',
                a4: 'Ничем не отличаются',
            },
            answerOption: 'a1',
            answer: 'localStorage аналогично sessionStorage. Разница только в том, что sessionStorage\n' +
                ' хранит данные в течение сеанса (до закрытия браузера), в отличие от данных, \n' +
                ' находящихся в localStorage, которые не имеют ограничений по времени хранения \n' +
                'и могут быть удалены только с помощью JavaScript.',
            num: '#50',
        },
        {
            question: 'Чему равно значение переменной result?\n\n' +
                'const res = ~\'string\'.indexOf( \'in\' );',
            option: {
                a1: '-3',
                a2: '-4',
                a3: '3',
                a4: '4',
            },
            answerOption: 'a2',
            answer: ' Побитовый оператор НЕ — ~, для 32-разрядных целых чисел действует как ~n равно -(n+1).',
            num: '#19',
        },
        {
            question: 'Что произойдет после выполнения этого кода?\n\n' +
                'const object = {\n' +
                '\tname: \'objectName\',\n\n' +
                '\tgetName(){\n' +
                '\t\treturn this.name\n' +
                '\t},\n' +
                '}\n\n' +
                'console.log( object?.getName?.() )',
            option: {
                a1: 'ReferenceError',
                a2: 'в консоль выведет - \'object\'',
                a3: 'TypeError',
                a4: 'В коде ошибка',
            },
            answerOption: 'a1',
            answer: 'специальная синтаксическая конструкция, опциональная цепочка -  ?.\n' +
                ' останавливает вычисление и возвращает undefined,\n ' +
                'если часть перед ?. имеет значение undefined или null. \n',
            num: '#25',
        },
        {
            question: 'Чему равно значение переменной result?\n\n' +
                'const res = \'string\'.substring( 3, -2 );',
            option: {
                a1: 'ing',
                a2: 'st',
                a3: 'ошибка',
                a4: 'str',
            },
            answerOption: 'a4',
            answer: 'Если аргумент end отрицательное число, то он преобразуется в 0\n' +
                'если аргумент start > end, они меняются местами',
            num: '#20',
        },
        {
            question: 'Чему равно значение в консоли?\n\n' +
                'let bar = 2;\n' +
                'bar ^= 5;\n' +
                'console.log( bar++ )',
            option: {
                a1: '6',
                a2: '7',
                a3: '8',
                a4: '5',
            },
            answerOption: 'a2',
            answer: 'Побитовый оператор присваивания XOR использует двоичное представление обоих операндов, \n' +
                'выполняет побитовую XOR-операцию и присваивает результат переменной. \n' +
                'Если оператор инкремента используется как постфикс, (например, x++), \n ' +
                'значение операнда возвращается, а затем увеличивается на единицу',
            num: '#28',

        },
        {
            question: 'Чему равно значение переменной result?\n\n' +
                'const obj = {\n\n' +
                '\tcheckNullish(){\n' +
                ' \t\treturn (null || undefined) ?? \'foo\';\n' +
                '\t},\n' +
                '}\n\n' +
                'let result = obj.checkNullish();',
            option: {
                a1: 'null',
                a2: 'undefined',
                a3: 'foo',
                a4: 'В коде ошибка',
            },
            answerOption: 'a3',
            answer: 'Оператор нулевого слияния (??) это логический оператор,\n' +
                ' который возвращает значение правого операнда когда значение левого операнда \n' +
                'равно null или undefined, в противном случае будет возвращено значение левого операнда.',
            num: '#27',

        },
        {
            question: 'Чему равно значение перемменой сount после выполнения switch?\n\n' +
                'let сount = 0;\n\n' +
                'switch( сount ){\n' +
                '   case 1 : сount += 1;\n' +
                '   break;\n' +
                '   case 0 : сount += 2;\n' +
                '   default : сount += 3;\n' +
                '}',
            option: {
                a1: '2',
                a2: '3',
                a3: '5',
                a4: '1',
            },
            answerOption: 'a3',
            answer: 'Если break нет, то выполнение пойдёт ниже по следующим case,\n' +
                ' при этом остальные проверки игнорируются.',
            num: '#21',
        },
        {
            question: 'Что выведет alert?\n\n' +
                'let x;\n' +
                '\n' +
                'false || (x = 1) || (x = 2);\n' +
                '\n' +
                'alert(x);',
            option: {
                a1: 'true',
                a2: '2',
                a3: 'false',
                a4: '1',
            },
            answerOption: 'a4',
            answer: 'Оператор || выполняет следующие действия:\n' +
                '- Вычисляет операнды слева направо.\n' +
                '- Каждый операнд конвертирует в логическое значение.\n Если результат true,' +
                'останавливается и возвращает исходное значение этого операнда\n' +
                '- Если все операнды являются ложными (false), возвращает последний из них.',
            num: '#15',
        },
        {
            question: 'Чему равно значение переменной res?\n\n' +
                `const arr = [ '0' || -1, 1 || 0 && 3, 2 ** -1 ]\n` +
                '\n' +
                'const res = arr[arr.length-2]',

            option: {
                a1: '3',
                a2: '1',
                a3: '0',
                a4: '2',
            },
            answerOption: 'a2',
            answer: 'res = arr[1]. Приоритет оператора && больше, чем ||',
            num: '#17',
        },
        {
            question: 'Что произойдет при ввыполнении этого кода?\n\n' +
                'function* idMaker() {\n' +
                '    let index = 0;\n' +
                '    while( true ){\n' +
                '        yield index++;\n' +
                '    }\n' +
                '}\n\n' +
                'let gen = idMaker();\n' +
                'console.log( gen.next().value );\n' +
                'console.log( gen.next().value );\n',
            option: {
                a1: 'Консоль выведет 0 и 1',
                a2: 'Консоль выведет 1 и 2',
                a3: 'В коде ошибка',
                a4: 'Итерация уйдет в бесконечное выполнение',
            },
            answerOption: 'a1',
            answer: 'Постфикс инкремент, сначала возвращает значение операнда, а затем увеличивает на единицу.\n' +
                'Вызов метода next()с аргументом прекращает выполнение функции-генератора,\n' +
                'и заменяет инструкцию yield на которой было приостановлено выполнение на аргумент \n' +
                'переданный в next().',
            num: '#33',
        },
        {
            question: 'Что такое IETF?\n\n ',

            option: {
                a1: 'Международное сообщество проектировщиков, учёных, сетевых операторов, \n ' +
                    'занимающееся развитием протоколов и архитектуры Интернета.',
                a2: 'Европейское сообщество проектировщиков, учёных, сетевых операторов,  \n ' +
                    'занимающееся безопасностью Интернета.',
                a3: 'Международное сообщество программистов, занимающееся разработкой стнадартов и соглашений \n' +
                    'по стилю написания кода.',
                a4: 'Европейское сообщество  сетевых операторов и провайдров \n ' +
                    'занимающееся развитием, анализом и регулированием ценовой политики Интернет улуг.',
            },
            answerOption: 'a1',
            answer: 'Internet Engineering Task Force, IETF — открытое международное сообщество проектировщиков,\n' +
                ' учёных, сетевых операторов и провайдеров, созданное IAB в 1986 году и занимающееся \n' +
                'развитием протоколов и архитектуры Интернета.',
            num: '#43',
        },
        {
            question: 'Что такое  MIME тип?\n\n ',

            option: {
                a1: 'стандарт, который рекодирует тип документа, файла или набора байтов',
                a2: 'стандарт, который описывает природу и формат документа, файла или набора байтов',
                a3: 'стандарт, который описывает адресность документа или файла',
                a4: 'такого стандарта не существует',
            },
            answerOption: 'a2',
            answer: 'Multipurpose Internet Mail Extensions или MIME тип является стандартом,\n ' +
                'который описывает природу и формат документа, файла или набора байтов.\n' +
                'Он определён и стандартизирован в спецификации RFC 6838 \n ',
            num: '#44',
        },
        {
            question: 'Для чего служит метод Blob.stream()?\n\n ',

            option: {
                a1: 'Возвращает promise, который исполняется с USVString, содержащей всё содержимое Blob,\n' +
                    'интерпретируемое как текст UTF-8.',
                a2: 'Возвращает строку с MIME-типом данных, содержащихся в Blob. Если тип неизвестен, строка пуста.',
                a3: 'Возвращает размер данных, содержащихся в объекте Blob, в байтах, в виде объекта',
                a4: 'Возвращает интерфейс ReadableStream',
            },
            answerOption: 'a4',
            answer: 'Возвращает интерфейс ReadableStream от Streams API, который может \n' +
                'использоваться для чтения содержимого Blob. Например через ReadableStream.getReader()',
            num: '#45',
        },
        {
            question: 'Что означает третий параметр метода?\n' +
                'EvTarget.addEventListener(event, handler, { passive: true });\n\n ',

            option: {
                a1: 'Указывает, что обработчик никогда не вызовет preventDefault()',
                a2: 'Указывает наличие фазы, на которой должен сработать обработчик',
                a3: 'Указывает, что обработчик будет автоматически удалён после выполнения.',
                a4: 'Такого параметра нет',
            },
            answerOption: 'a1',
            answer: 'Cвойство {passive: Boolean} указывает, что обработчик никогда не вызовет preventDefault(). \n' +
                'Если все же вызов будет произведен, браузер должен игнорировать его \n' +
                'и генерировать консольное предупреждение.',
            num: '#47',
        },
        {
            question: 'Чем отличаются события DOMContentLoaded и load ? \n\n ',

            option: {
                a1: 'load можно обработать через addEventListener(), а DOMContentLoaded - нет',
                a2: 'load отслеживает только полностью загруженную страницу,\n' +
                    'а DOMContentLoaded выполняется сразу после загруки HTML и его парсинга ',
                a3: 'load выполняется после загруки HTML и его парсинга, \n' +
                    ' а DOMContentLoaded отслеживает только полностью загруженную страницу, ',
                a4: 'Ничем не отличаются',
            },
            answerOption: 'a2',
            answer: 'Событие DOMContentLoaded происходит когда весь HTML был полностью загружен и пройден парсером,\n' +
                ' не дожидаясь окончания загрузки таблиц стилей, изображений и фреймов.\n ' +
                'Значительно отличающееся от него событие load используется для отслеживания только полностью\n' +
                ' загруженной страницы.',
            num: '#48',
        },
        {
            question: 'Когда запускается событие beforeunload ?  \n\n ',

            option: {
                a1: 'Перед выгрузкой окна, документа и его ресурсов. \n',
                a2: 'После выгрузки ресурсов, окна и документа. \n',
                a3: 'Только перед выгрузкой окна \n',
                a4: 'Только перед выгрузкой документа \n',
            },
            answerOption: 'a1',
            answer: 'Событие beforeunload запускается, когда окно, документ и его ресурсы вот-вот будут выгружены.\n' +
                ' Документ все еще виден, и событие в этот момент может быть отменено.  \n' +
                'Например дает веб-странице вызвать диалоговое окно подтверждения, спрашивающее пользователя,\n' +
                ' действительно ли он хочет покинуть страницу.',
            num: '#49',
        },
        {
            question: 'Что означает свойство characterData?\n\n ' +
                'let observer = new MutationObserver( callback );\n\n ' +
                'observer.observe(node, { characterData: true } ); \n',

            option: {
                a1: `Наблюдать ли за node.data (текстовое содержимое)`,
                a2: `Наблюдать ли за изменениями во всех потомках node`,
                a3: `Наблюдать ли за изменениями в атрибутах node`,
                a4: `Нет такого свойства`,
            },
            answerOption: 'a1',
            answer: 'observer.observe( node, config );\n' +
                'config – это объект с булевыми параметрами «на какие изменения реагировать»:\n' +
                '\n' +
                ' - childList – изменения в непосредственных детях node,\n' +
                ' - subtree – во всех потомках node,\n' +
                ' - attributes – в атрибутах node,\n' +
                ' - attributeFilter – массив имён атрибутов, чтобы наблюдать только за выбранными.\n' +
                ' - characterData – наблюдать ли за node.data (текстовое содержимое),',
            num: '#52',
        },
        {
            question: 'Какой цели служит данный код?\n\n' +
                `document.addEventListener( 'visibilitychange', () => {\n` +
                '  if ( document.visibilityState === \'visible\' ) {\n' +
                '    funcFirst();\n' +
                '  } else {\n' +
                '    funcSecond();\n' +
                '  }\n' +
                '});\n ',

            option: {
                a1: `Для обработки события выгрузки страницы`,
                a2: `Для обработки события обновления или не-обновления страницы`,
                a3: `Для обработки события обновления статуса видимости документа`,
                a4: `Для обработки события закрытия страницы`,
            },
            answerOption: 'a3',
            answer: 'Когда пользователь сворачивает окно или переключается на другую вкладку, Page Visibility API\n' +
                'отправляет visibilitychange событие обработчикам, что состояние страницы изменилось.\n',
            num: '#57',
        },
        {
            question: 'Для чего служит интерфейс Performance?\n ',

            option: {
                a1: `Такого интерфейса нет`,
                a2: `Для представления информации о афише местых театров и ДЦ (отностильно location)`,
                a3: `Для представления информации о выполняемых задачах в фоновом потоке`,
                a4: `Для представления информации о производительности страницы с временными метками.`,
            },
            answerOption: 'a4',
            answer: 'Интерфейс Performance представляет информацию о производительности страницы \n' +
                'с временными метками. Объект этого типа может быть получен в результате вызова атрибута \n' +
                'window.performance, доступного только для чтения.',
            num: '#55',
        },
        {
            question: 'Какой заголовок будет у этой отправки? \n\n ' +
                `<form id='formElem'>\n` +
                `  <input type='text' name='name' value='John'>\n` +
                `  <input type='submit'>\n` +
                '</form>\n' +
                'formElem.onsubmit = async (e) => {\n' +
                `    formElem.append( 'title', 'my-data-form' )\n` +
                `    let response = await fetch( 'someURL', {\n` +
                '      method: \'POST\',\n' +
                '      body: new FormData(formElem)\n' +
                '    });\n' +
                '  };',

            option: {
                a1: `my-data-form`,
                a2: `Content-Type: my-data-form/multipart`,
                a3: `Content-Type: multipart/form-data`,
                a4: `my-data-form: form/multipart`,
            },
            answerOption: 'a3',
            answer: 'Объекты FormData всегда отсылаются с заголовком Content-Type: form/multipart',
            num: '#59',
        },
        {
            question: `\n Что такое 'Каррирование'? \n\n`,

            option: {
                a1: `это трансформация функций таким образом, чтобы они принимали аргументы не как f(a, b, c),\n
                     а как f(a++)(b++)(c++)`,
                a2: `это трансформация функций таким образом, чтобы они не принимали лишние аргументы`,
                a3: `это процесс добавления специи Карри в продукты`,
                a4: `это трансформация функций таким образом, чтобы они принимали аргументы не как f(a, b, c),\n
                     а как f(a)(b)(c)`,
            },
            answerOption: 'a4',
            answer: 'Каррирование - это преобразование функции от многих аргументов в набор функций, \n' +
                'каждая из которых является функцией от одного аргумента.',
            num: '#60',
        },
        {
            question: 'Что такое IndexedDB?\n\n ',

            option: {
                a1: 'JavaScript-основанная, иерархическая база данных',
                a2: 'Низкоуровневое API для клиентского хранилища небольшого объема \n' +
                    'структурированных данных (не более 20Mb), включая файлы/blobs\n' +
                    'из одного или более исходных объектов в целевой объект',
                a3: 'Встроенная база данных, менее мощная, чем localStorage.',
                a4: 'Низкоуровневое API для клиентского хранилища большого объема \n' +
                    'структурированных данных, включая файлы/blobs',
            },
            answerOption: 'a4',
            answer: 'IndexedDB - транзакционная система базы данных, как SQL-основанная RDBMS.\n' +
                'Однако, в отличие от RDBMS, которая использует таблицы с фиксированными колонками,\n' +
                'IndexedDB — JavaScript-основанная объектно-ориентированная база данных. \n' +
                'IndexedDB позволяет сохранять и возвращать объекты, которые были проиндексированы с ключом;',
            num: '#63',
        },
        {
            question: 'Что выведет следующий код? \n' +
                'let weakmap = new WeakMap();\n' +
                '\n' +
                '( () => {\n' +
                '    const b = {\n' +
                '        y: 12\n' +
                '    };\n' +
                '    weakmap.set(b, 2);\n' +
                '})()\n' +
                '\n' +
                'console.log( weakmap.get(b) ); ',

            option: {
                a1: `2`,
                a2: `'2'`,
                a3: 'выбросит TypeError',
                a4: 'выбросит ReferenceError',
            },
            answerOption: 'a4',
            answer: 'После завершения выполнения IIFE, уже не будет доступа к объекту b. \n' +
                'Поэтому сборщик мусора удаляет ключ b из weakmap и очищает память.\n',
            num: '#69',
        },
        {
            question: 'Что выведет следующий код? \n\n' +
                'const Compary = {\n' +
                '  erty: \'sopart\'\n' +
                '}\n\n' +
                'const top1 = Object.create(Compary);\n' +
                'delete top1.erty;\n' +
                'console.log(top1.erty);',

            option: {
                a1: `выбросит SyntaxError`,
                a2: `'sopart'`,
                a3: 'null',
                a4: 'undefined',
            },
            answerOption: 'a2',
            answer: 'Этот код выведет sopart. Свойство erty является не свойством объекта top1, \n' +
                'а свойством его прототипа. Оператор delete не удаляет свойства прототипов объектов. \n' +
                'У объекта top1 нет собственного свойства erty. ',
            num: '#67',
        },
        {
            question: 'Что выведет следующий код?\n' +
                'const obj = { a: 1 };\n' +
                'const arr = [obj];\n' +
                'const copy = [...arr];\n' +
                'obj.a = 2;\n' +
                'console.log(copy[0].a);',
            option: {
                a1: '1',
                a2: '2',
                a3: 'undefined',
                a4: 'ReferenceError',
            },
            answerOption: 'a2',
            answer: 'Оператор расширения создаёт поверхностную копию массива. Объект внутри остаётся тем же самым по ссылке, поэтому изменения в нём отражаются и в копии.',
            num: '#79',
        },
        {
            question: 'Какой результат выполнения?\n' +
                'Promise.resolve()\n' +
                '  .then(() => console.log(1))\n' +
                '  .then(() => console.log(2))\n' +
                '  .then(() => {\n' +
                '    throw new Error();\n' +
                '  })\n' +
                '  .catch(() => console.log(3))\n' +
                '  .then(() => console.log(4));',
            option: {
                a1: '1 2 3 4',
                a2: '1 2 3',
                a3: '1 2 4',
                a4: '1 2',
            },
            answerOption: 'a1',
            answer: 'После catch управление передаётся следующему then, если в catch не выброшено исключение. Поэтому выполнится и console.log(4).',
            num: '#80',
        },
        {
            question: 'Что выведет следующий код?\n' +
                'console.log([] + []);',
            option: {
                a1: '""',
                a2: '[]',
                a3: '0',
                a4: 'NaN',
            },
            answerOption: 'a1',
            answer: 'При сложении двух массивов они приводятся к строкам. Пустой массив даёт пустую строку, "" + "" = "". Лог в консоли покажет пустую строку.',
            num: '#81',
        },
        {
            question: 'Какой результат выполнения?\n' +
                'const fn = (x, ...rest, y) => {};',
            option: {
                a1: 'Создаст функцию, где y — последний аргумент',
                a2: 'SyntaxError',
                a3: 'y будет undefined',
                a4: 'rest будет пустым массивом',
            },
            answerOption: 'a2',
            answer: 'Оператор rest (...) должен быть последним параметром функции. Иначе возникнет синтаксическая ошибка.',
            num: '#82',
        },
        {
            question: 'Что такое "event loop" в JavaScript?',
            option: {
                a1: 'Механизм, отвечающий за обработку ошибок в асинхронном коде',
                a2: 'Цикл, который последовательно вызывает все функции в коде',
                a3: 'Механизм, управляющий очередью выполнения асинхронных задач и вызовом callback-функций',
                a4: 'Функция, которая возвращает текущее время выполнения скрипта',
            },
            answerOption: 'a3',
            answer: 'Event loop — это механизм, который следит за стеком вызовов и очередью задач, обеспечивая выполнение асинхронного кода в правильном порядке.',
            num: '#83',
        },
        {
            question: 'Что выведет следующий код?\n' +
                'console.log(0.1 + 0.2 == 0.3);',
            option: {
                a1: 'true',
                a2: 'false',
                a3: 'NaN',
                a4: 'ReferenceError',
            },
            answerOption: 'a2',
            answer: 'Из-за особенностей хранения чисел с плавающей точкой в двоичной системе, ' +
                '0.1 + 0.2 не в точности равно 0.3. Это известная особенность IEEE 754.',
            num: '#89',
        },
        {
            question: 'Какой результат выполнения?\n' +
                'const arr = [10, 12, 15, 21];\n' +
                'for (let i in arr) {\n' +
                '  setTimeout(() => console.log(i), 0);\n' +
                '}',
            option: {
                a1: '10 12 15 21',
                a2: '0 1 2 3',
                a3: '21 21 21 21',
                a4: 'ReferenceError',
            },
            answerOption: 'a2',
            answer: 'for...in перебирает ключи (индексы) массива как строки, но здесь они логируются как есть. ' +
                'Поскольку i объявлен с let, создаётся новая привязка для каждой итерации — вывод: "0", "1", "2", "3".',
            num: '#90',
        },
        {
            question: 'Что выведет код?\n' +
                'const obj = { a: 1 };\n' +
                'const copy = Object.assign({}, obj);\n' +
                'obj.a = 2;\n' +
                'console.log(copy.a);',
            option: {
                a1: '1',
                a2: '2',
                a3: 'undefined',
                a4: 'ReferenceError',
            },
            answerOption: 'a1',
            answer: 'Object.assign() выполняет поверхностное копирование. После копирования изменения ' +
                'в исходном объекте не влияют на копию.',
            num: '#91',
        },
        {
            question: 'Что произойдет при выполнении?\n' +
                'JSON.parse(\'{"name": "John", "age": undefined}\');',
            option: {
                a1: '{"name": "John", "age": undefined}',
                a2: '{"name": "John"}',
                a3: 'SyntaxError',
                a4: 'ReferenceError',
            },
            answerOption: 'a3',
            answer: 'Значение undefined не является допустимым в формате JSON, ' +
                'поэтому JSON.parse выбросит SyntaxError.',
            num: '#92',
        },
        {
            question: 'Какой результат выполнения?\n' +
                'console.log(({} + {}).toString());',
            option: {
                a1: '[object Object][object Object]',
                a2: 'NaN',
                a3: '{}{}',
                a4: 'TypeError',
            },
            answerOption: 'a1',
            answer: 'При сложении двух объектов каждый преобразуется в строку "[object Object]", ' +
                'и результатом будет конкатенация этих строк.',
            num: '#93',
        },
        {
            question: 'Какой встроенный интерфейс в браузере позволяет работать с историей переходов?',
            option: {
                a1: 'Location',
                a2: 'History',
                a3: 'Navigator',
                a4: 'Document',
            },
            answerOption: 'a2',
            answer: 'Интерфейс History предоставляет доступ к истории сессии браузера и позволяет перемещаться по ней программно.',
            num: '#97',
        },
        {
            question: 'Какой интерфейс описывает объект, возвращаемый fetch()?',
            option: {
                a1: 'XMLHttpRequest',
                a2: 'FetchResponse',
                a3: 'Response',
                a4: 'NetworkInterface',
            },
            answerOption: 'a3',
            answer: 'Метод fetch() возвращает промис, который резолвится в объект типа Response — это часть Fetch API.',
            num: '#98',
        },
        {
            question: 'Какой интерфейс позволяет отслеживать изменения в DOM с помощью наблюдателя?',
            option: {
                a1: 'EventListener',
                a2: 'DOMObserver',
                a3: 'MutationObserver',
                a4: 'ChangeDetector',
            },
            answerOption: 'a3',
            answer: 'MutationObserver — это интерфейс, предоставляющий возможность наблюдать за изменениями в DOM-дереве (в атрибутах, тексте, структуре).',
            num: '#99',
        },
        {
            question: 'Какой из перечисленных интерфейсов не является частью Web APIs?',
            option: {
                a1: 'CanvasRenderingContext2D',
                a2: 'ReadableStream',
                a3: 'FunctionInterface',
                a4: 'IntersectionObserver',
            },
            answerOption: 'a3',
            answer: 'FunctionInterface — вымышленный термин. В JavaScript и Web APIs нет такого стандартного интерфейса.',
            num: '#100',
        }
    ],
};

export default JavaScriptQuestions;
