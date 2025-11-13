const PHPQuestions = {
	jun: [
		{
			question: 'Как расшифровывается PHP?',
			option: {
				a1: 'PHP - Hypertext Preprocessor',
				a2: 'PHP - Page Hypertext Processor',
				a3: 'PHP - Processor Hyper protocol Page',
				a4: 'PHP - Protocol hire page',
			},
			answerOption: 'a1',
			answer: 'PHP-препроцессор гипертекста» первоначально PHP/FI (Personal Home Page/Form Interpreter),\n' +
				'а позже названный Personal Home Page Tools[11] — \n' +
				'«Инструменты для создания персональных веб-страниц»)\n',
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
	],
	mid: [
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
	],
};

export default PHPQuestions;
