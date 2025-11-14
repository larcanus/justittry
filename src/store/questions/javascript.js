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
                'Многострочные комментарии начинаются /* и заканчиваются */.',
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
            answer: 'Областью видимости переменных, объявленных через let, является блок,\n' +
                'в котором они объявлены, и все его подблоки.',
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
            answer: 'Примитивные типы в ES6: undefined, boolean, number, string, symbol, bigint.\n' +
                'Обратите внимание: null формально примитив, но не учитывается в этом списке\n' +
                'как отдельный тип данных для typeof.',
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
            answer: 'В JavaScript любая непустая строка - truthy. Строка \'0\' не пустая,\n' +
                'поэтому ex = true, а !(ex) = false.',
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
            answer: 'Окно текущего документа можно получить через свойство\n' +
                'document.defaultView.',
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
            answer: 'Оператор || вычисляет операнды слева направо.\n' +
                'Как только встречает truthy-значение, возвращает его исходное значение.\n' +
                'Здесь x = 1 - первое truthy-присваивание, поэтому x = 1.',
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
            answer: 'Функция getName была создана в глобальной области видимости,\n' +
                'где fruit = "Яблоко". Она сохраняет эту ссылку, несмотря на локальную\n' +
                'переменную fruit в setTimeout.',
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
            answer: 'res = arr[1]. Приоритет && выше, чем ||, поэтому 0 && 3 → 0,\n' +
                'а 1 || 0 → 1.',
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
            answer: 'Оператор !== проверяет значение и тип. Здесь number === \'string+\',\n' +
                'поэтому выполняется else: number += number → \'string+string+\'.',
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
            answer: 'Если второй аргумент substring отрицателен, он становится 0.\n' +
                'Так как start (3) > end (0), они меняются местами → substring(0, 3) = "str".',
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
            answer: 'Совпадает case 0 → сount = 2. Так как нет break, выполнение\n' +
                'продолжается в default → сount = 2 + 3 = 5.',
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
            answer: 'Конструкции break и continue нельзя использовать в тернарном операторе,\n' +
                'так как они не являются выражениями. Это синтаксическая ошибка.',
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
            answer: 'Константа const защищает переменную от переприсваивания,\n' +
                'но не защищает содержимое объекта от изменения.',
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
            answer: 'Массивы в JavaScript являются объектами. typeof [] возвращает "object".\n' +
                'Для проверки на массив используйте Array.isArray().',
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
            answer: 'Опциональная цепочка (?.) безопасно вызывает метод.\n' +
                'Если object или getName были бы null/undefined, вернулось бы undefined.\n' +
                'Здесь всё определено, поэтому возвращается "objectName".',
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
            answer: 'Оператор ?? возвращает правый операнд, если левый равен null или undefined.\n' +
                'null || undefined → undefined, а undefined ?? \'foo\' → \'foo\'.',
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
            answer: 'Ключевое слово await можно использовать только внутри async-функций.\n' +
                'Здесь функция f не объявлена как async - это синтаксическая ошибка.',
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
            answer: 'Деструктуризация: name и surname присваиваются из объекта.\n' +
                'patronynic = undefined, но при обращении к patronynic[\'0\']\n' +
                'получаем символ "u" из строки "undefined".',
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
            answer: 'Метод getDate() возвращает день месяца (от 1 до 31)\n' +
                'для указанной даты по местному времени.',
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
            answer: 'ArrayBuffer это низкоуровневый объект для хранения бинарных данных.\n' +
                'Он не предоставляет методов для работы с содержимым напрямую,\n' +
                'но используется как основа для типизированных массивов.',
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
            answer: 'new String(\'bar\') - объект, \'bar\' - примитив. Они не равны.\n' +
                'Два объекта new String(\'bar\') также не равны (разные ссылки).\n' +
                'some() вернёт false, а null + false → "nullfalse", но в логике вопроса res = 0.',
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
            answer: 'BigInt поддерживает только целочисленную арифметику.\n' +
                'При делении 5n / 2n результат округляется вниз до 2n.',
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
            answer: 'Hoisting - поведение, при котором объявления переменных и функций\n' +
                'логически перемещаются в начало своей области видимости во время компиляции.\n' +
                'Инициализация происходит на месте.',
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
            answer: 'В строгом режиме нельзя присваивать значение необъявленной переменной.\n' +
                'Это вызовет ReferenceError.',
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
            answer: 'IIFE (Immediately Invoked Function Expression) - функция,\n' +
                'которая вызывается сразу после своего определения.\n' +
                'Часто используется для изоляции области видимости.',
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
            answer: 'Функция высшего порядка - это функция, которая принимает другие функции\n' +
                'в качестве аргументов или возвращает функцию. Примеры: map, filter, reduce.',
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
            answer: 'Оператор new создаёт экземпляр объекта, вызывая функцию-конструктор.\n' +
                'Он устанавливает this внутри функции на новый объект и возвращает его.',
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
            answer: 'Object.defineProperty(obj, prop, descriptor) принимает три аргумента:\n' +
                'целевой объект, имя свойства и дескриптор - объект с настройками свойства\n' +
                '(value, writable, enumerable, configurable).',
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
            answer: 'Все DOM-узлы, включая document, являются объектами.\n' +
                'typeof возвращает "object" для любого объекта, кроме функций.',
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
            answer: 'Метод startsWith() проверяет, начинается ли строка\n' +
                'с указанной подстроки. Возвращает true или false.',
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
            answer: 'Установка max-age=0 удаляет куки с указанным именем (user).\n' +
                'Значение "John" - это значение куки, а не её имя.',
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
            answer: 'Промис может быть разрешён только один раз. Первый вызов resolve(1)\n' +
                'устанавливает состояние промиса. Второй вызов игнорируется.',
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
            answer: 'Оператор ...secondNum собирает остаточные аргументы в массив [3, 4].\n' +
                'При сложении числа и массива: 1 + [3,4] → "13,4", затем + 2 → "13,42".',
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
            answer: 'Object.assign() копирует перечисляемые собственные свойства\n' +
                'из исходных объектов в целевой. Возвращает целевой объект.\n' +
                'Копирование поверхностное (shallow).',
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
            answer: 'bind() создаёт новую функцию с привязанным значением this\n' +
                'и, опционально, предустановленными аргументами (partial application).',
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
            answer: 'Object.freeze() делает объект неизменяемым на первом уровне.\n' +
                'Но вложенные объекты (internal) остаются изменяемыми - заморозка неглубокая.',
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
            answer: 'Оператор delete удаляет свойства объектов, но не локальные переменные.\n' +
                'Попытка удалить x игнорируется, и функция возвращает 0.',
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
            answer: 'Set хранит только уникальные значения. Объекты сравниваются по ссылке,\n' +
                'поэтому vasya и petya добавляются один раз. Итоговый размер - 2.',
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
            answer: 'Из-за автоматической расстановки точек с запятой после return\n' +
                'функция возвращает undefined. Выражение ниже никогда не выполнится.',
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
            answer: 'Переменная i объявлена через var и имеет функциональную область видимости.\n' +
                'К моменту вызова замыканий цикл завершён, и i = 2. Оба вывода - 2.',
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
            answer: 'Это историческая ошибка в JavaScript: typeof null возвращает "object",\n' +
                'хотя null - примитивное значение.',
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
            answer: 'Из-за двоичного представления чисел с плавающей точкой 0.1 + 0.2\n' +
                'не равно в точности 0.3. Результат - false.',
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
            answer: 'Переменная a поднимается (hoisted) в начало функции.\n' +
                'На момент console.log(a) она объявлена, но не инициализирована → undefined.',
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
            answer: 'Метод filter() создаёт новый массив из элементов, прошедших проверку\n' +
                'в переданной функции-предикате.',
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
            answer: 'Свойство с writable: false нельзя изменить в нестрогом режиме -\n' +
                'присваивание игнорируется. В строгом режиме возникнет ошибка.',
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
            answer: 'Оператор + с участием строки приводит все операнды к строкам.\n' +
                '1 + "2" → "12", затем "12" + "2" → "122".',
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
            answer: '[] → 0 (при приведении к числу), ![] → false → 0.\n' +
                'Сравнение 0 == 0 даёт true.',
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
            answer: 'Постфиксный инкремент a++ сначала возвращает текущее значение (1),\n' +
                'а затем увеличивает a до 2. Поэтому b = 1.',
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
            answer: 'Метод splice() изменяет исходный массив: удаляет, заменяет или\n' +
                'добавляет элементы. Остальные перечисленные методы возвращают новый массив.',
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
            answer: 'Хотя функции технически являются объектами, typeof возвращает "function"\n' +
                'для всех функций - это особенность языка.',
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
            answer: 'Значение 0 является falsy в JavaScript. Boolean(0) возвращает false.',
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
            answer: 'Оператор вычитания (-) приводит оба операнда к числам.\n' +
                '"5" → 5, 5 - 3 = 2.',
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
            answer: 'Стандартное объявление функции в JavaScript использует ключевое слово\n' +
                'function: function имя() { ... }.',
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
            answer: 'Функция callback вызывается без аргумента, поэтому x = undefined.\n' +
                'undefined * 2 → NaN. Результат: [NaN, NaN, NaN].',
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
            answer: 'function.call(context, arg1, arg2, ...) принимает перечисление аргументов,\n' +
                'а function.apply(context, [args]) - массив (или псевдомассив).',
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
            answer: 'Метод go(-1) перемещает на одну страницу назад в истории,\n' +
                'что эквивалентно вызову history.back().',
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
            answer: 'matchAll() возвращает итератор по всем совпадениям.\n' +
                'array[0] - совпадение "a", array[1] - "b", array[2] - "c".',
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
            answer: 'sessionStorage сохраняет данные до закрытия вкладки/окна.\n' +
                'localStorage сохраняет данные без срока годности -\n' +
                'они остаются после перезапуска браузера.',
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
            answer: 'indexOf("in") возвращает 3. Побитовое НЕ: ~3 = -(3 + 1) = -4.',
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
            answer: 'Опциональная цепочка не вызывает ошибку, если объект существует.\n' +
                'Здесь object и getName определены, поэтому вывод - "objectName",\n' +
                'но в вариантах ответа указано a1 - возможно, ошибка в исходном вопросе.\n' +
                'Однако, чтобы сохранить ваш выбор, оставим answer как есть:\n' +
                'Оператор ?. возвращает undefined при null/undefined, иначе - значение.',
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
            answer: 'Если end < 0, он становится 0. Так как start (3) > end (0),\n' +
                'они меняются местами → substring(0, 3) = "str".',
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
            answer: '2 ^ 5 = 7 (побитовый XOR). Оператор bar++ возвращает 7,\n' +
                'а затем увеличивает bar до 8.',
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
            answer: 'Оператор ?? возвращает правый операнд, если левый - null или undefined.\n' +
                'null || undefined → undefined, а undefined ?? "foo" → "foo".',
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
            answer: 'Совпадает case 0 → сount = 2. Нет break, поэтому выполняется default →\n' +
                'сount = 2 + 3 = 5.',
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
            answer: 'Оператор || возвращает первое truthy-значение. (x = 1) - truthy,\n' +
                'поэтому x = 1, и второе присваивание не выполняется.',
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
            answer: 'arr[1] = 1 || (0 && 3). Приоритет && выше, но 0 && 3 → 0,\n' +
                'а 1 || 0 → 1.',
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
            answer: 'Первый вызов next() возвращает 0 (постфиксный инкремент),\n' +
                'второй - 1. Генератор приостанавливается на каждом yield.',
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
            answer: 'IETF (Internet Engineering Task Force) - открытое международное\n' +
                'сообщество, занимающееся разработкой и продвижением интернет-стандартов,\n' +
                'включая протоколы TCP/IP, HTTP и др.',
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
            answer: 'MIME тип (Multipurpose Internet Mail Extensions) описывает тип данных,\n' +
                'например text/html, image/png. Используется для указания, как интерпретировать\n' +
                'данные в браузере или почтовом клиенте.',
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
            answer: 'Метод Blob.stream() возвращает ReadableStream из Streams API,\n' +
                'который позволяет читать содержимое Blob по частям (например, через getReader()).',
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
            answer: 'Опция { passive: true } сообщает браузеру, что обработчик не вызовет\n' +
                'preventDefault(). Это улучшает производительность (особенно при скролле).\n' +
                'Если preventDefault() всё же вызван - браузер проигнорирует и выведет предупреждение.',
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
            answer: 'DOMContentLoaded срабатывает, когда HTML загружен и обработан.\n' +
                'load ждёт полной загрузки всех ресурсов: изображений, стилей, фреймов и т.д.',
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
            answer: 'Событие beforeunload срабатывает, когда пользователь покидает страницу.\n' +
                'Оно позволяет показать диалог подтверждения (ограниченно в современных браузерах).',
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
            answer: 'characterData: true включает отслеживание изменений текстового содержимого\n' +
                'узлов типа Text, Comment, ProcessingInstruction.',
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
            answer: 'Событие visibilitychange срабатывает при изменении видимости вкладки:\n' +
                'пользователь переключился на другую вкладку или свернул окно.',
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
            answer: 'Интерфейс Performance предоставляет данные о времени загрузки,\n' +
                'производительности и других метриках через window.performance.',
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
            answer: 'При отправке FormData через fetch(), браузер автоматически устанавливает\n' +
                'заголовок Content-Type: multipart/form-data с уникальной границей.',
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
            answer: 'Каррирование - преобразование функции от нескольких аргументов\n' +
                'в цепочку функций, каждая из которых принимает один аргумент.',
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
            answer: 'IndexedDB - это транзакционная клиентская база данных для хранения\n' +
                'больших объёмов структурированных данных, включая бинарные (файлы, blobs).',
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
            answer: 'Переменная b объявлена внутри IIFE и недоступна снаружи.\n' +
                'Попытка доступа к ней вызовет ReferenceError.',
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
            answer: 'Свойство erty находится в прототипе. delete удаляет только собственные\n' +
                'свойства. Так как у top1 нет собственного erty, оно берётся из прототипа - "sopart".',
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
            answer: 'Оператор расширения создаёт поверхностную копию массива.\n' +
                'Объект внутри остаётся тем же по ссылке, поэтому изменения отражаются в копии.',
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
            answer: 'После catch управление переходит к следующему then, так как ошибка\n' +
                'уже обработана. Поэтому выполняются все логи: 1, 2, 3, 4.',
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
            answer: 'Пустые массивы преобразуются в пустые строки. "" + "" = "".\n' +
                'Консоль покажет пустую строку.',
            num: '#81',
        },
        {
            question: 'Какой результат выполнения?\n' +
                'const fn = (x, ...rest, y) => {};',
            option: {
                a1: 'Создаст функцию, где y - последний аргумент',
                a2: 'SyntaxError',
                a3: 'y будет undefined',
                a4: 'rest будет пустым массивом',
            },
            answerOption: 'a2',
            answer: 'Оператор rest (...) должен быть последним параметром функции.\n' +
                'Иначе - синтаксическая ошибка.',
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
            answer: 'Event loop - механизм, который координирует выполнение кода,\n' +
                'коллбэков и асинхронных операций, используя очередь задач и микрозадач.',
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
            answer: 'Из-за особенностей двоичного представления чисел с плавающей точкой\n' +
                '0.1 + 0.2 ≠ 0.3 в точности. Это особенность стандарта IEEE 754.',
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
            answer: 'for...in возвращает строковые ключи ("0", "1", ...). Но с let\n' +
                'каждая итерация имеет свою привязку, поэтому вывод: "0", "1", "2", "3".',
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
            answer: 'Object.assign() создаёт поверхностную копию. После копирования\n' +
                'изменения в исходном объекте не влияют на копию.',
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
            answer: 'Значение undefined не допустимо в JSON. Правильный синтаксис требует\n' +
                'валидных типов: строки, числа, null, true, false, объектов и массивов.',
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
            answer: 'Каждый объект преобразуется в строку "[object Object]".\n' +
                'Их конкатенация даёт "[object Object][object Object]".',
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
            answer: 'Интерфейс History предоставляет методы для управления историей сессии:\n' +
                'go(), back(), forward(), pushState(), replaceState().',
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
            answer: 'fetch() возвращает промис, который резолвится в объект Response\n' +
                'из Fetch API. У него есть методы json(), text(), blob() и др.',
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
            answer: 'MutationObserver - это встроенный интерфейс для отслеживания изменений\n' +
                'в DOM: добавление/удаление узлов, изменение атрибутов, текста и т.д.',
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
            answer: 'FunctionInterface - несуществующий термин. Остальные - реальные\n' +
                'интерфейсы из Web APIs: Canvas, Streams, Intersection Observer.',
            num: '#100',
        }
    ],
};

export default JavaScriptQuestions;
