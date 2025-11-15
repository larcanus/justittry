const DartQuestions = {
// Вопросы для Dart 3.10+
jun: [
        {
            question: 'С помощью каких символов нельзя оставить комментарий \nразработчика в DART?',
            option: {
                a1: '/',
                a2: '//',
                a3: '<!--',
                a4: '/**',
            },
            answerOption: 'a3',
            answer: 'Dart поддерживает однострочные комментарии - //,\n' +
                'многострочные комментарии - /* */\n' +
                'и комментарии к документации - /// или /** */',
            num: '#1',
        },
        {
            question: 'Какие из представленных вариантов\nвыведут значение в терминал, если есть только dart:core?',
            option: {
                a1: 'print_r("Hello")',
                a2: 'print("Hello")',
                a3: 'dart.console("Hello")',
                a4: 'echo "Hello"',
            },
            answerOption: 'a2',
            answer: 'В dart:core есть только void print(Object? object).\n' +
                'Также можно использовать stderr.writeln() и stdout.writeln() из dart:io',
            num: '#2',
        },
        {
            question: 'Сколько базовых числовых типов есть в dart:core?',
            option: {
                a1: '2 типа (number и digit)\n4 вида (int, double, bigint, smallint)',
                a2: '3 типа (int, double, BigInt)',
                a3: '1 тип (num) 2 подтипа (int, double)',
                a4: '2 типа (int, double)',
            },
            answerOption: 'a3',
            answer: 'num в Dart имеет два подтипа:\n' +
                'int - Целочисленные значения (произвольной точности на нативной платформе,\n' +
                '53-битная точность на Web из-за JavaScript)\n' +
                'double - 64-битные числа с плавающей запятой (IEEE 754).\n' +
                'Также существует BigInt для работы с целыми числами произвольной точности.',
            num: '#3',
        },
        {
            question: 'С помощью какого символа или слова возможно указать,\nчто идентификатор является приватным\nи не будет доступен вне библиотеки?',
            option: {
                a1: 'private',
                a2: 'protected',
                a3: '#',
                a4: '_',
            },
            answerOption: 'a4',
            answer: 'В отличие от других языков, в Dart нет ключевых слов public, protected и private.\n' +
                'Если идентификатор начинается с символа подчеркивания (_),\n' +
                'он является приватным для своей библиотеки (library-private).',
            num: '#4',

        },
        {
            question: 'Какие кавычки вы НЕ можете использовать для создания строки?',
            option: {
                a1: '``',
                a2: `''`,
                a3: `""`,
                a4: `'''`,
            },
            answerOption: 'a1',
            answer: 'Строка Dart (String объект) содержит последовательность кодовых единиц UTF-16.\n' +
                'Вы можете использовать одинарные (\') или двойные (") кавычки для создания строки.\n' +
                'Для многострочных строк используйте тройные кавычки (\'\'\' или """)',
            num: '#5',
        },
        {
            question: 'Что выведет print()?\n\n' +
                'List<dynamic> things = [2, null, 3, 4, 5];\n' +
                'List<dynamic> more = [1, ...things.where((thing) => thing != 3)];\n' +
                'print(more);',
            option: {
                a1: '[1, 2, null, 4, 5]',
                a2: '[1, null, 3, 4, 5]',
                a3: '[1, null, 2, 4, 5]',
                a4: 'Error',
            },
            answerOption: 'a1',
            answer: 'Оператор spread (...) и null-aware spread (...?)\n' +
                'не фильтруют null значения внутри коллекции.\n' +
                'where((thing) => thing != 3) исключает только элемент 3, но сохраняет null.',
            num: '#6',
        },
        {
            question: 'Какой вариант создания коллекции вызовет ошибку?\n\n' +
                '1. var numberList = [1, 2, 3, if(null == null) 4]\n' +
                '2. var numberList = [1, 2, for(var i in infinityList) 4]\n' +
                '3. var numberList = [1, 2, 3, while(numberList.length < 0) 4]\n' +
                '4. var numberList = [1, 2, 3, if(double.infinity == double.infinity) 4]',
            option: {
                a1: '1',
                a2: '2',
                a3: '3',
                a4: '4',
            },
            answerOption: 'a3',
            answer: 'Dart поддерживает collection if и collection for для создания коллекций.\n' +
                'while не поддерживается в литералах коллекций.\n' +
                'Используйте if для условий и for для итераций.',
            num: '#7',
        },
        {
            question: 'Что выведет print()?\n\n' +
                'List anotherList = [1, 1];\n' +
                'List simpleList = [\n' +
                '  1, if(double.nan == double.infinity) 2, 3,\n' +
                '  for(var i in anotherList) 4, 5\n' +
                '];\n' +
                'print(simpleList);',
            option: {
                a1: '[1, 3, 4, 4, 5]',
                a2: '[1, 2, 3, 5]',
                a3: '[1, 2, 3, 4, 5]',
                a4: '[1, 3, 4, 5]',
            },
            answerOption: 'a1',
            answer: 'double.nan == double.infinity возвращает false (NaN не равен ничему, даже себе).\n' +
                'Поэтому элемент 2 не добавляется.\n' +
                'Collection for добавляет элементы по количеству итераций:\n' +
                'для каждого элемента в anotherList добавляется 4, затем 5.',
            num: '#8',
        },
        {
            question: 'Какое объявление переменной с использованием\nмодификатора late вызовет ошибку?',
            option: {
                a1: 'late final variable;',
                a2: 'late var variable;',
                a3: 'late String variable;',
                a4: 'late variable;',
            },
            answerOption: 'a4',
            answer: 'late - модификатор, а не способ объявления переменной.\n' +
                'Он должен использоваться с явным типом (String, int и т.д.),\n' +
                'var, final или const.\n' +
                'late откладывает инициализацию до первого использования.',
            num: '#9',
        },
        {
            question: 'В чем отличие объявления переменной с помощью const от final?',
            option: {
                a1: 'final переменная может быть установлена только один раз;\nconst переменная является константой времени компиляции',
                a2: 'final переменная может быть установлена дважды;\nconst переменная является константой времени компиляции',
                a3: 'Нет отличий, кроме того, что к final можно применить late,\nа к const нет',
                a4: 'Нет отличий, кроме того, что const можно применить для создания конструкторов,\nа final нет',
            },
            answerOption: 'a1',
            answer: 'final - переменная может быть установлена только один раз (runtime constant);\n' +
                'const - константа времени компиляции (compile-time constant).\n' +
                'const значения должны быть известны на этапе компиляции.\n' +
                'К final можно применить late, к const нельзя.\n' +
                'const можно использовать для создания const конструкторов.',
            num: '#10',
        },
        {
            question: 'Что произойдет при выполнении?\n\n' +
                'late final variable;\n' +
                '\n' +
                'void main() {\n' +
                '  final variable = const {\n' +
                '    \'arr\': [1, 2, 3,],\n' +
                '  };\n' +
                '  variable[\'arr\'] = [0, 0, 0];\n' +
                '}',
            option: {
                a1: 'ошибка Uncaught Error - Cannot modify unmodifiable Map',
                a2: 'ошибка Error: Expected an identifier, but got two - final',
                a3: 'ошибка Error: The == isn\'t a user-definable operator.',
                a4: 'ничего не произойдет',
            },
            answerOption: 'a1',
            answer: 'Хотя final переменную нельзя переназначить, её поля можно изменить.\n' +
                'Но const объект и его содержимое неизменяемы (deeply immutable).\n' +
                'Попытка изменить const Map вызовет runtime ошибку.',
            num: '#11',
        },
        {
            question: 'Какое объявление вызовет ошибку?\n\n' +
                '1. late dynamic symbol = #test;\n' +
                '2. final Symbol symbol = #test;\n' +
                '3. Object symbol = #test;\n' +
                '4. var symbol = const #test;',
            option: {
                a1: '1',
                a2: '2',
                a3: '3',
                a4: '4',
            },
            answerOption: 'a4',
            answer: 'Символьные литералы (#test) уже являются константами времени компиляции.\n' +
                'Использование const с символьным литералом избыточно и вызовет ошибку компиляции.',
            num: '#12',
        },
        {
            question: 'Что произойдет?\n\n' +
                'class YourCoolClass {\n' +
                '  String call(String a, String b, String c) => \'$a $b $c!\';\n' +
                '}\n' +
                '\n' +
                'var ycc = YourCoolClass();\n' +
                'var out = ycc(\'Hi\', \'there,\', \'gang\');\n' +
                '\n' +
                'void main() => print(out);',
            option: {
                a1: 'произойдет вывод "Closure \'main_ycc_call\'"',
                a2: 'произойдет вывод "Hi there, gang!"',
                a3: 'произойдет ошибка',
                a4: 'произойдет вывод "$a $b $c!"',
            },
            answerOption: 'a2',
            answer: 'Чтобы экземпляр класса можно было вызывать как функцию,\n' +
                'реализуйте метод call().\n' +
                'Это делает класс callable и позволяет использовать синтаксис вызова функции.',
            num: '#13',
        },
        {
            question: 'Какие виды параметров существуют в Dart?',
            option: {
                a1: 'именованные, позиционные, запрашиваемые (required)',
                a2: 'позиционные, именованные, необязательные позиционные, запрашиваемые (required)',
                a3: 'позиционные, именованные, необязательные позиционные',
                a4: 'именованные, позиционные',
            },
            answerOption: 'a2',
            answer: 'В Dart 3.10+ существуют:\n' +
                '1. Обязательные позиционные параметры: func(int a, int b)\n' +
                '2. Необязательные позиционные параметры: func([int? a])\n' +
                '3. Именованные параметры: func({int? a})\n' +
                '4. Обязательные именованные параметры: func({required int a})\n' +
                'Нельзя смешивать необязательные позиционные и именованные параметры.',
            num: '#14',
        },
        {
            question: 'Каких префиксов/постфиксов не существует в Dart?\n\n' +
                '1. -var\n' +
                '2. --var\n' +
                '3. var++\n' +
                '4. var+',
            option: {
                a1: '1',
                a2: '2',
                a3: '3',
                a4: '4',
            },
            answerOption: 'a4',
            answer: 'Унарные операторы в Dart:\n' +
                'Постфиксные: expr++  expr--  ()  []  ?[]  .  ?.  !\n' +
                'Префиксные: -expr  !expr  ~expr  ++expr  --expr  await expr\n' +
                'Оператор + не является унарным в Dart.',
            num: '#15',
        },
        {
            question: 'Каких операторов присваивания не существует в Dart?\n\n' +
                '1. |=\n' +
                '2. &&=\n' +
                '3. ~/=\n' +
                '4. ^=',
            option: {
                a1: '1',
                a2: '2',
                a3: '3',
                a4: '4',
            },
            answerOption: 'a2',
            answer: 'Операторы присваивания в Dart:\n' +
                '=  ??=  +=  -=  *=  /=  ~/=  %=\n' +
                '<<=  >>=  >>>=  &=  ^=  |=\n' +
                'Логические операторы && и || не имеют составных форм присваивания.',
            num: '#16',
        },
        {
            question: 'Какое объявление функции ошибочно?\n\n' +
                '1. int timesTwo({required int x}) => x * 2;\n' +
                '2. int timesFour(int x) => timesTwo(x: timesTwo(x: x));\n' +
                '3. Function(int a, int b) sum = (int a, int b) => a + b;\n' +
                '4. var sum = Function(int a, int b) => a + b;',
            option: {
                a1: '1',
                a2: '2',
                a3: '3',
                a4: '4',
            },
            answerOption: 'a4',
            answer: 'Вариант 4 ошибочен: Function не может использоваться как конструктор типа.\n' +
                'Правильно: var sum = (int a, int b) => a + b;\n' +
                'Вариант 3 использует typedef-подобное объявление через Function type.',
            num: '#17',
        },
        {
            question: 'Что произойдет при выполнении?\n\n' +
                'var callbacks = [];\n' +
                'for (var i = 0; i < 2; i++) {\n' +
                '  callbacks.add(() => print(i));\n' +
                '}\n' +
                'callbacks.forEach((c) => c());',
            option: {
                a1: 'вывод: 0\n1',
                a2: 'вывод: 0\n1\n2',
                a3: 'вывод: 2\n2',
                a4: 'вывод: 1\n2',
            },
            answerOption: 'a3',
            answer: 'В Dart замыкания захватывают переменную, а не её значение.\n' +
                'Когда цикл завершается, i = 2.\n' +
                'Оба замыкания ссылаются на одну и ту же переменную i,\n' +
                'поэтому оба выведут 2.\n' +
                'Для захвата значения создайте локальную переменную: var local = i;',
            num: '#18',

        },
        {
            question: 'Какое утверждение НЕ верно в отношении Iterable?',
            option: {
                a1: 'Вы можете создать не более одного итератора из одного и того же Iterable.',
                a2: 'Все методы, которые возвращает Iterable (например, map и where) ленивы,\n' +
                    'они будут повторять оригинал каждый раз, когда повторяется возвращаемый итерируемый объект',
                a3: 'Можно перебирать элементы Iterable с помощью конструкции цикла for-in,\n' +
                    'которая за кулисами использует геттер iterator.',
                a4: 'Классы List и Set оба являются Iterable, как и большинство классов в dart:collection библиотеке.',
            },
            answerOption: 'a1',
            answer: 'НЕВЕРНО: "не более одного итератора".\n' +
                'Вы можете создать множество итераторов из одного Iterable.\n' +
                'Каждый вызов геттера iterator возвращает новый независимый итератор.\n' +
                'Разные итераторы могут работать параллельно над одним Iterable.',
            num: '#19',

        },
        {
            question: 'Какое утверждение НЕ верно для этого кода?\n\n' +
                'try {\n' +
                '  ...\n' +
                '} on OutOfLlamasException {\n' +
                '  ...\n' +
                '} on Exception catch (e) {\n' +
                '  ...\n' +
                '} catch (e, s) {\n' +
                '  rethrow;\n' +
                '}',
            option: {
                a1: 'on - служит для обработки кода, который может генерировать более одного типа исключений',
                a2: 'У catch() возможны два параметра.\n' +
                    'Первое — это выброшенное исключение,\n' +
                    'а второе — трассировка стека (StackTrace объект).',
                a3: 'rethrow - для частичной обработки исключения, позволяет ему распространяться далее',
                a4: 'Exception - тип в обработке ветки catch() прерывает дальнейшее выполнение всех блоков',
            },
            answerOption: 'a4',
            answer: 'НЕВЕРНО: "прерывает дальнейшее выполнение всех блоков".\n' +
                'Выполняется только ПЕРВЫЙ подходящий блок catch.\n' +
                'Если on Exception catch (e) сработал, последующий catch (e, s) не выполнится.\n' +
                'Порядок блоков важен: более специфичные типы должны идти первыми.',
            num: '#20',

        },
    ],
    mid: [
        {
            question: 'Что выведет следующий код?\n\n' +
                'String? name;\n' +
                'print(name ?? "Guest");',
            option: {
                a1: 'null',
                a2: 'Guest',
                a3: 'Ошибка компиляции',
                a4: 'name',
            },
            answerOption: 'a2',
            answer: 'Оператор ?? возвращает правый операнд,\n' +
                'если левый равен null.',
            num: '#21',
        },
        {
            question: 'Как объявить функцию, возвращающую Future<int>?',
            option: {
                a1: 'int async myFunc()',
                a2: 'Future<int> myFunc() async',
                a3: 'async Future<int> myFunc()',
                a4: 'Future myFunc<int>()',
            },
            answerOption: 'a2',
            answer: 'Правильный синтаксис: Future<T> func() async.',
            num: '#22',
        },
        {
            question: 'Что делает оператор ??= ?',
            option: {
                a1: 'Присваивает значение, если переменная не null',
                a2: 'Присваивает значение, если переменная null',
                a3: 'Сравнивает два значения на равенство',
                a4: 'Выполняет побитовое ИЛИ',
            },
            answerOption: 'a2',
            answer: 'x ??= value эквивалентно: if (x == null) x = value.',
            num: '#23',
        },
        {
            question: 'Какой тип у выражения [1, 2, 3].map((x) => x * 2)?',
            option: {
                a1: 'List<int>',
                a2: 'Iterable<int>',
                a3: 'Stream<int>',
                a4: 'Map<int, int>',
            },
            answerOption: 'a2',
            answer: 'Метод map() возвращает ленивый Iterable,\n' +
                'а не List.',
            num: '#24',
        },
        {
            question: 'Как создать неизменяемый список во время выполнения?',
            option: {
                a1: 'final list = [1, 2, 3];',
                a2: 'const list = [1, 2, 3];',
                a3: 'var list = List.unmodifiable([1, 2, 3]);',
                a4: 'Все вышеперечисленные',
            },
            answerOption: 'a3',
            answer: 'Только List.unmodifiable() гарантирует\n' +
                'неизменяемость при любом объявлении.',
            num: '#25',
        },
        {
            question: 'Что выведет код?\n\n' +
                'Future.delayed(Duration.zero, () => print("A"));\n' +
                'print("B");',
            option: {
                a1: 'A затем B',
                a2: 'B затем A',
                a3: 'Только B',
                a4: 'Ошибка',
            },
            answerOption: 'a2',
            answer: 'Future.delayed() добавляет задачу в очередь\n' +
                'событий, поэтому B выводится первым.',
            num: '#26',
        },
        {
            question: 'Какой результат выполнения?\n\n' +
                'int Function(int) doubler = (x) => x * 2;\n' +
                'print(doubler is Function);',
            option: {
                a1: 'true',
                a2: 'false',
                a3: 'Ошибка типизации',
                a4: 'null',
            },
            answerOption: 'a1',
            answer: 'Все функции в Dart — подтипы Function.',
            num: '#27',
        },
        {
            question: 'Что такое mixin в Dart?',
            option: {
                a1: 'Интерфейс без реализации',
                a2: 'Класс, который можно наследовать только один раз',
                a3: 'Повторно используемый фрагмент реализации',
                a4: 'Алиас для typedef',
            },
            answerOption: 'a3',
            answer: 'Mixin — это способ повторного\n' +
                'использования кода между классами.',
            num: '#28',
        },
        {
            question: 'Как правильно объявить extension для String?',
            option: {
                a1: 'extension on String { bool get isLong => length > 10; }',
                a2: 'extension String { bool isLong() => this.length > 10; }',
                a3: 'extend String { bool get isLong => length > 10; }',
                a4: 'extension(String) { bool isLong => length > 10; }',
            },
            answerOption: 'a1',
            answer: 'Правильный синтаксис: extension [Name] on Type { ... }',
            num: '#29',
        },
        {
            question: 'Что делает Stream.periodic?',
            option: {
                a1: 'Создаёт конечный поток с задержкой',
                a2: 'Создаёт бесконечный поток с интервалом',
                a3: 'Преобразует Future в Stream',
                a4: 'Запускает изолят с периодичностью',
            },
            answerOption: 'a2',
            answer: 'Stream.periodic(Duration, callback)\n' +
                'генерирует события с интервалом.',
            num: '#30',
        },
        {
            question: 'Как передать данные в Isolate?',
            option: {
                a1: 'Через глобальные переменные',
                a2: 'Через SendPort и ReceivePort',
                a3: 'Через Future.send()',
                a4: 'Напрямую через аргументы функции',
            },
            answerOption: 'a2',
            answer: 'Isolates не делят память. Обмен —\n' +
                'только через SendPort/ReceivePort.',
            num: '#31',
        },
        {
            question: 'Что такое required в именованных параметрах?',
            option: {
                a1: 'Устаревшее ключевое слово',
                a2: 'Аннотация для опциональных параметров',
                a3: 'Ключевое слово, делающее параметр обязательным',
                a4: 'Синоним для final',
            },
            answerOption: 'a3',
            answer: 'required делает именованный параметр\n' +
                'обязательным к передаче.',
            num: '#32',
        },
        {
            question: 'Какой тип у переменной?\n\n' +
                'var items = <int>[1, 2];',
            option: {
                a1: 'dynamic',
                a2: 'List<dynamic>',
                a3: 'List<int>',
                a4: 'Iterable<int>',
            },
            answerOption: 'a3',
            answer: 'Явное указание <int> задаёт тип списка.',
            num: '#33',
        },
        {
            question: 'Что выведет?\n\n' +
                'print([1, 2, 3].where((x) => x > 1).runtimeType);',
            option: {
                a1: 'List<int>',
                a2: '_WhereIterable<int>',
                a3: 'Iterable<dynamic>',
                a4: 'FilteredList',
            },
            answerOption: 'a2',
            answer: 'where() возвращает ленивый\n' +
                'внутренний Iterable (обычно _WhereIterable).',
            num: '#34',
        },
        {
            question: 'Какой конструктор вызывается первым при наследовании?',
            option: {
                a1: 'Потомка',
                a2: 'Родителя',
                a3: 'Миксина',
                a4: 'Все одновременно',
            },
            answerOption: 'a2',
            answer: 'Сначала инициализируется родительский класс,\n' +
                'затем — потомок.',
            num: '#35',
        },
        {
            question: 'Что означает void Function()? callback?',
            option: {
                a1: 'callback — необязательная функция без параметров и возврата',
                a2: 'callback — обязательная функция с параметром',
                a3: 'Это синтаксическая ошибка',
                a4: 'callback — Future<void>',
            },
            answerOption: 'a1',
            answer: 'void Function()? — опциональная функция,\n' +
                'возвращающая void и не принимающая аргументов.',
            num: '#36',
        },
        {
            question: 'Какой результат?\n\n' +
                'final a = const [1];\n' +
                'final b = const [1];\n' +
                'print(identical(a, b));',
            option: {
                a1: 'true',
                a2: 'false',
                a3: 'Ошибка',
                a4: 'null',
            },
            answerOption: 'a1',
            answer: 'const-литералы с одинаковым значением\n' +
                'ссылаются на один объект (canonicalized).',
            num: '#37',
        },
        {
            question: 'Как обработать ошибку в async-функции?',
            option: {
                a1: 'try/catch внутри async',
                a2: 'onError у Future',
                a3: 'Все варианты верны',
                a4: 'Только через then().catchError()',
            },
            answerOption: 'a3',
            answer: 'Можно использовать как try/catch,\n' +
                'так и catchError/onError.',
            num: '#38',
        },
        {
            question: 'Что делает оператор ?.',
            option: {
                a1: 'Принудительно распаковывает nullable',
                a2: 'Вызывает метод, если объект не null',
                a3: 'Сравнивает два nullable-значения',
                a4: 'Присваивает значение при null',
            },
            answerOption: 'a2',
            answer: 'x?.method() вызовет method(),\n' +
                'только если x не null.',
            num: '#39',
        },
        {
            question: 'Какой тип у выражения?\n\n' +
                'T id<T>(T value) => value;\n' +
                'var x = id(42);',
            option: {
                a1: 'dynamic',
                a2: 'Object',
                a3: 'int',
                a4: 'T',
            },
            answerOption: 'a3',
            answer: 'Dart выводит тип T как int из аргумента 42.',
            num: '#40',
        },
    ],
};

export default DartQuestions;
