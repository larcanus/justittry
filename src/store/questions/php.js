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
			answer: 'PHP - рекурсивный акроним "PHP: Hypertext Preprocessor".\n' +
				'Изначально назывался Personal Home Page Tools.\n' +
				'Язык для создания динамических веб-страниц.',
			num: '#1',
		},
		{
			question: 'Что выведет этот код?\n\n' +
				'<?php\n' +
				'$x = "5";\n' +
				'$y = 5;\n' +
				'var_dump($x === $y);\n' +
				'?>',
			option: {
				a1: 'bool(true)',
				a2: 'bool(false)',
				a3: 'int(1)',
				a4: 'string(5)',
			},
			answerOption: 'a2',
			answer: 'Оператор === проверяет строгое равенство:\n' +
				'значение И тип данных должны совпадать.\n' +
				'Здесь "5" (string) !== 5 (int).',
			num: '#2',
		},
		{
			question: 'Сколько скалярных типов данных в PHP 8.4?',
			option: {
				a1: '4',
				a2: '5',
				a3: '6',
				a4: '7',
			},
			answerOption: 'a1',
			answer: 'Скалярные типы в PHP:\n' +
				'1. bool (boolean)\n' +
				'2. int (integer)\n' +
				'3. float (double)\n' +
				'4. string',
			num: '#3',
		},
		{
			question: 'Что выведет код?\n\n' +
				'<?php\n' +
				'echo "0" ? "true" : "false";\n' +
				'?>',
			option: {
				a1: 'true',
				a2: 'false',
				a3: '0',
				a4: 'Ошибка',
			},
			answerOption: 'a2',
			answer: 'В PHP строка "0" приводится к false.\n' +
				'Только пустая строка "" и "0" считаются false.\n' +
				'Все остальные непустые строки - true.',
			num: '#4',
		},
		{
			question: 'Какой модификатор доступа по умолчанию\n' +
				'у свойств класса в PHP 8.4?',
			option: {
				a1: 'public',
				a2: 'private',
				a3: 'protected',
				a4: 'Нет модификатора по умолчанию',
			},
			answerOption: 'a1',
			answer: 'Начиная с PHP 8.4, если модификатор доступа не указан,\n' +
				'свойство автоматически считается public.\n' +
				'Это упрощает синтаксис для простых классов.',
			num: '#5',
		},
		{
			question: 'Что выведет код?\n\n' +
				'<?php\n' +
				'$a = null;\n' +
				'echo $a ?? "default" ?? "other";\n' +
				'?>',
			option: {
				a1: 'null',
				a2: 'default',
				a3: 'other',
				a4: 'Ошибка',
			},
			answerOption: 'a2',
			answer: 'Оператор ?? (null coalescing) возвращает первое\n' +
				'не-null значение слева направо.\n' +
				'$a равно null, поэтому вернется "default".',
			num: '#6',
		},
		{
			question: 'Что выведет код?\n\n' +
				'<?php\n' +
				'function test(int $x = 5) {\n' +
				'    return $x * 2;\n' +
				'}\n' +
				'echo test("10");\n' +
				'?>',
			option: {
				a1: '20',
				a2: '10',
				a3: 'TypeError',
				a4: '5',
			},
			answerOption: 'a1',
			answer: 'В PHP строка "10" автоматически приводится к int.\n' +
				'Это называется type coercion (приведение типов).\n' +
				'Результат: 10 * 2 = 20.',
			num: '#7',
		},
		{
			question: 'Какой результат выполнения?\n\n' +
				'<?php\n' +
				'$arr = [1, 2, 3];\n' +
				'echo count($arr[10] ?? []);\n' +
				'?>',
			option: {
				a1: '0',
				a2: '3',
				a3: 'null',
				a4: 'Warning',
			},
			answerOption: 'a1',
			answer: '$arr[10] не существует, поэтому ?? вернет [].\n' +
				'count([]) возвращает 0.\n' +
				'Оператор ?? предотвращает Notice об undefined index.',
			num: '#8',
		},
		{
			question: 'Что выведет код?\n\n' +
				'<?php\n' +
				'$str = "Hello";\n' +
				'$str[0] = "h";\n' +
				'echo $str;\n' +
				'?>',
			option: {
				a1: 'Hello',
				a2: 'hello',
				a3: 'hHello',
				a4: 'Ошибка',
			},
			answerOption: 'a2',
			answer: 'Строки в PHP изменяемы (mutable).\n' +
				'Можно изменять отдельные символы по индексу.\n' +
				'$str[0] заменяет "H" на "h".',
			num: '#9',
		},
		{
			question: 'Чему равно значение?\n\n' +
				'<?php\n' +
				'$result = "5" + "10 яблок";\n' +
				'echo $result;\n' +
				'?>',
			option: {
				a1: '15',
				a2: '510',
				a3: '510 яблок',
				a4: 'Ошибка',
			},
			answerOption: 'a1',
			answer: 'PHP извлекает числа из начала строк при сложении.\n' +
				'"10 яблок" преобразуется в 10.\n' +
				'Результат: 5 + 10 = 15.',
			num: '#10',
		},
		{
			question: 'Что выведет код?\n\n' +
				'<?php\n' +
				'$x = 1;\n' +
				'$y = &$x;\n' +
				'$y = 2;\n' +
				'echo $x;\n' +
				'?>',
			option: {
				a1: '1',
				a2: '2',
				a3: 'null',
				a4: 'Ошибка',
			},
			answerOption: 'a2',
			answer: 'Оператор & создает ссылку на переменную.\n' +
				'$y и $x указывают на одну область памяти.\n' +
				'Изменение $y изменяет и $x.',
			num: '#11',
		},
		{
			question: 'Что произойдет при выполнении?\n\n' +
				'<?php\n' +
				'$count = 0;\n' +
				'switch($count) {\n' +
				'    case 0: $count += 2;\n' +
				'    default: $count += 3;\n' +
				'}\n' +
				'echo $count;\n' +
				'?>',
			option: {
				a1: '2',
				a2: '3',
				a3: '5',
				a4: '0',
			},
			answerOption: 'a3',
			answer: 'Без break выполнение продолжается дальше.\n' +
				'case 0: $count = 2, затем default: $count = 5.\n' +
				'Это называется "fall-through".',
			num: '#12',
		},
		{
			question: 'Что выведет код?\n\n' +
				'<?php\n' +
				'for($i = 0; $i < 3; $i++) {\n' +
				'    echo $i % 2 == 0 ? $i : continue;\n' +
				'}\n' +
				'?>',
			option: {
				a1: '02',
				a2: '13',
				a3: '024',
				a4: 'Parse error',
			},
			answerOption: 'a4',
			answer: 'continue нельзя использовать в тернарном операторе.\n' +
				'Это синтаксическая ошибка.\n' +
				'continue - это оператор, а не выражение.',
			num: '#13',
		},
		{
			question: 'Что выведет код?\n\n' +
				'<?php\n' +
				'const USER = ["name" => "Ivan"];\n' +
				'USER["name"] = "Tom";\n' +
				'echo USER["name"];\n' +
				'?>',
			option: {
				a1: 'Tom',
				a2: 'Ivan',
				a3: 'Fatal error',
				a4: 'Warning',
			},
			answerOption: 'a3',
			answer: 'Константы в PHP неизменяемы полностью.\n' +
				'Нельзя изменить ни саму константу, ни её содержимое.\n' +
				'Попытка изменения вызовет Fatal error.',
			num: '#14',
		},
		{
			question: 'Что вернет gettype()?\n\n' +
				'<?php\n' +
				'$arr = [1, 2, 3];\n' +
				'echo gettype($arr);\n' +
				'?>',
			option: {
				a1: 'array',
				a2: 'object',
				a3: 'Array',
				a4: 'collection',
			},
			answerOption: 'a1',
			answer: 'gettype() возвращает строку "array" для массивов.\n' +
				'В PHP массивы - это отдельный тип данных.\n' +
				'Не путать с объектами.',
			num: '#15',
		},
		{
			question: 'Что выведет код?\n\n' +
				'<?php\n' +
				'class User {\n' +
				'    public function __construct(\n' +
				'        public string $name = "Guest"\n' +
				'    ) {}\n' +
				'}\n' +
				'$user = new User();\n' +
				'echo $user->name;\n' +
				'?>',
			option: {
				a1: 'Guest',
				a2: 'null',
				a3: 'Ошибка',
				a4: 'Пустая строка',
			},
			answerOption: 'a1',
			answer: 'Constructor Property Promotion (PHP 8.0+).\n' +
				'Параметры конструктора автоматически становятся свойствами.\n' +
				'Значение по умолчанию "Guest" используется.',
			num: '#16',
		},
		{
			question: 'Что выведет код?\n\n' +
				'<?php\n' +
				'$str = "test";\n' +
				'preg_match_all("/[a-z]/", $str, $matches);\n' +
				'echo count($matches[0]);\n' +
				'?>',
			option: {
				a1: '1',
				a2: '4',
				a3: '0',
				a4: 'Ошибка',
			},
			answerOption: 'a2',
			answer: 'preg_match_all находит все совпадения.\n' +
				'Паттерн /[a-z]/ находит каждую букву.\n' +
				'В "test" 4 буквы, поэтому count = 4.',
			num: '#17',
		},
		{
			question: 'Чему равно значение?\n\n' +
				'<?php\n' +
				'function test(): ?string {\n' +
				'    return null;\n' +
				'}\n' +
				'$result = test() ?? "default";\n' +
				'echo $result;\n' +
				'?>',
			option: {
				a1: 'null',
				a2: 'default',
				a3: 'Ошибка',
				a4: 'Пустая строка',
			},
			answerOption: 'a2',
			answer: '?string означает nullable тип (string или null).\n' +
				'Функция возвращает null.\n' +
				'Оператор ?? заменяет null на "default".',
			num: '#18',
		},
		{
			question: 'Что выведет код?\n\n' +
				'<?php\n' +
				'$x = 2;\n' +
				'$x ^= 5;\n' +
				'echo $x++;\n' +
				'?>',
			option: {
				a1: '6',
				a2: '7',
				a3: '8',
				a4: '5',
			},
			answerOption: 'a2',
			answer: 'Побитовый XOR: 2 ^ 5 = 7 (в двоичной системе).\n' +
				'Постфиксный инкремент возвращает значение до увеличения.\n' +
				'Выводится 7, затем $x становится 8.',
			num: '#19',
		},
		{
			question: 'Что произойдет?\n\n' +
				'<?php\n' +
				'function test() {\n' +
				'    yield 1;\n' +
				'    yield 2;\n' +
				'}\n' +
				'$gen = test();\n' +
				'echo $gen->current();\n' +
				'?>',
			option: {
				a1: '1',
				a2: '2',
				a3: 'null',
				a4: 'Ошибка',
			},
			answerOption: 'a1',
			answer: 'yield создает генератор.\n' +
				'current() возвращает текущее значение без продвижения.\n' +
				'Первое значение - 1.',
			num: '#20',
		},
		{
			question: 'Чему равно значение?\n\n' +
				'<?php\n' +
				'$user = [\n' +
				'    "name" => "Mike",\n' +
				'    "age" => null\n' +
				'];\n' +
				'$age = $user["age"] ?? 18;\n' +
				'echo $age;\n' +
				'?>',
			option: {
				a1: '18',
				a2: 'null',
				a3: '0',
				a4: 'Ошибка',
			},
			answerOption: 'a1',
			answer: 'Оператор ?? проверяет на null и undefined.\n' +
				'$user["age"] равно null.\n' +
				'Поэтому возвращается значение по умолчанию 18.',
			num: '#21',
		},
		{
			question: 'Что делает метод DateTime::getTimestamp()?',
			option: {
				a1: 'Возвращает Unix timestamp',
				a2: 'Возвращает микросекунды',
				a3: 'Возвращает день месяца',
				a4: 'Возвращает строку даты',
			},
			answerOption: 'a1',
			answer: 'getTimestamp() возвращает Unix timestamp.\n' +
				'Это количество секунд с 1 января 1970 года.\n' +
				'Используется для работы с датами.',
			num: '#22',
		},
		{
			question: 'Для чего используется SplFixedArray?',
			option: {
				a1: 'Для работы с фиксированным размером массива',
				a2: 'Для работы с бинарными данными',
				a3: 'Для работы с коллекциями',
				a4: 'Для работы со строками',
			},
			answerOption: 'a1',
			answer: 'SplFixedArray - массив фиксированного размера.\n' +
				'Быстрее обычных массивов PHP.\n' +
				'Используется для оптимизации памяти.',
			num: '#23',
		},
		{
			question: 'Что выведет код?\n\n' +
				'<?php\n' +
				'function gen() {\n' +
				'    $i = 0;\n' +
				'    while(true) {\n' +
				'        yield $i++;\n' +
				'    }\n' +
				'}\n' +
				'$g = gen();\n' +
				'echo $g->current();\n' +
				'$g->next();\n' +
				'echo $g->current();\n' +
				'?>',
			option: {
				a1: '01',
				a2: '12',
				a3: '00',
				a4: 'Бесконечный цикл',
			},
			answerOption: 'a1',
			answer: 'Генератор приостанавливается на yield.\n' +
				'current() возвращает 0, next() продвигает к 1.\n' +
				'Второй current() возвращает 1.',
			num: '#24',
		},
		{
			question: 'Чему равно значение?\n\n' +
				'<?php\n' +
				'$arr = [\n' +
				'    "5" === 5,\n' +
				'    "5" == 5\n' +
				'];\n' +
				'echo (int)array_sum($arr);\n' +
				'?>',
			option: {
				a1: '0',
				a2: '1',
				a3: '2',
				a4: 'true',
			},
			answerOption: 'a2',
			answer: 'Первое сравнение false (разные типы).\n' +
				'Второе сравнение true (значения равны).\n' +
				'array_sum([false, true]) = 1.',
			num: '#25',
		},
		{
			question: 'Что выведет код?\n\n' +
				'<?php\n' +
				'$x = 5;\n' +
				'$y = &$x;\n' +
				'unset($y);\n' +
				'echo $x;\n' +
				'?>',
			option: {
				a1: '5',
				a2: 'null',
				a3: 'Ошибка',
				a4: '0',
			},
			answerOption: 'a1',
			answer: 'unset() удаляет только ссылку, не значение.\n' +
				'$x продолжает существовать со значением 5.\n' +
				'Удаляется только связь между $y и $x.',
			num: '#26',
		},
	],
	mid: [
		{
			question: 'Что выведет код?\n\n' +
				'<?php\n' +
				'enum Status: string {\n' +
				'    case Active = "active";\n' +
				'    case Inactive = "inactive";\n' +
				'}\n' +
				'echo Status::Active->value;\n' +
				'?>',
			option: {
				a1: 'active',
				a2: 'Active',
				a3: 'Status::Active',
				a4: 'Ошибка',
			},
			answerOption: 'a1',
			answer: 'Backed enum с типом string хранит значение в ->value.\n' +
				'Status::Active->value возвращает "active".\n' +
				'Доступен с PHP 8.1.',
			num: '#27',
		},
		{
			question: 'Как правильно объявить строгую типизацию файла?',
			option: {
				a1: 'use strict_types=1;',
				a2: 'declare(strict_types=1);',
				a3: 'strict_types(1);',
				a4: 'set_strict_types(true);',
			},
			answerOption: 'a2',
			answer: 'Строгая типизация включается директивой\n' +
				'declare(strict_types=1) в начале файла.\n' +
				'Должна быть первой строкой после <?php.',
			num: '#28',
		},
		{
			question: 'Что выведет код?\n\n' +
				'<?php\n' +
				'function test(): never {\n' +
				'    throw new Exception("Error");\n' +
				'}\n' +
				'echo "OK";\n' +
				'test();\n' +
				'?>',
			option: {
				a1: 'OK',
				a2: 'Ошибка',
				a3: 'Ничего (исключение)',
				a4: 'OK + исключение',
			},
			answerOption: 'a3',
			answer: 'never означает, что функция никогда не завершится\n' +
				'нормально (всегда бросает исключение или уходит в exit).\n' +
				'Код после вызова не выполнится.',
			num: '#29',
		},
		{
			question: 'Какой результат?\n\n' +
				'<?php\n' +
				'class A {\n' +
				'    public function test(): self {\n' +
				'        return $this;\n' +
				'    }\n' +
				'}\n' +
				'class B extends A {}\n' +
				'$b = new B();\n' +
				'var_dump($b->test());\n' +
				'?>',
			option: {
				a1: 'object(A)',
				a2: 'object(B)',
				a3: 'Ошибка типизации',
				a4: 'null',
			},
			answerOption: 'a2',
			answer: 'self возвращается как текущий экземпляр класса.\n' +
				'Поскольку $b — объект B, метод вернёт B.\n' +
				'self ведёт себя как late static binding для возврата.',
			num: '#30',
		},
		{
			question: 'Что делает код?\n\n' +
				'<?php\n' +
				'$fn = fn($x) => $x * 2;\n' +
				'echo $fn(5);\n' +
				'?>',
			option: {
				a1: '10',
				a2: '5',
				a3: 'Ошибка синтаксиса',
				a4: 'null',
			},
			answerOption: 'a1',
			answer: 'fn() — стрелочная (анонимная) функция (PHP 7.4+).\n' +
				'Короткий синтаксис для однострочных замыканий.\n' +
				'Возвращает 5 * 2 = 10.',
			num: '#31',
		},
		{
			question: 'Что выведет код?\n\n' +
				'<?php\n' +
				'match (2) {\n' +
				'    1 => echo "A",\n' +
				'    2 => echo "B",\n' +
				'    default => echo "C",\n' +
				'};\n' +
				'?>',
			option: {
				a1: 'A',
				a2: 'B',
				a3: 'C',
				a4: 'Parse error',
			},
			answerOption: 'a4',
			answer: 'match возвращает значение, а не выполняет код.\n' +
				'echo внутри match — синтаксическая ошибка.\n' +
				'Нужно: echo match(...) { ... };',
			num: '#32',
		},
		{
			question: 'Какой интерфейс нужно реализовать,\n' +
				'чтобы объект можно было использовать в foreach?',
			option: {
				a1: 'ArrayAccess',
				a2: 'Iterator',
				a3: 'Traversable',
				a4: 'Countable',
			},
			answerOption: 'a3',
			answer: 'Traversable — базовый интерфейс для итерации.\n' +
				'Напрямую его реализовать нельзя — нужно использовать\n' +
				'Iterator или IteratorAggregate.',
			num: '#33',
		},
		{
			question: 'Что выведет код?\n\n' +
				'<?php\n' +
				'final class User {\n' +
				'    public function __construct(private string $name) {}\n' +
				'    public function getName(): string { return $this->name; }\n' +
				'}\n' +
				'class Admin extends User {}\n' +
				'?>',
			option: {
				a1: 'Ничего',
				a2: 'Fatal error',
				a3: 'Warning',
				a4: 'Parse error',
			},
			answerOption: 'a2',
			answer: 'final-классы нельзя наследовать.\n' +
				'Попытка extends User вызовет Fatal error.\n' +
				'final запрещает расширение класса.',
			num: '#34',
		},
		{
			question: 'Какой атрибут используется для сериализации\n' +
				'свойств в PHP 8.2+?',
			option: {
				a1: '#[Serialize]',
				a2: '#[Serialized]',
				a3: '#[AllowDynamicProperties]',
				a4: '#[IgnoreSerialization]',
			},
			answerOption: 'a3',
			answer: '#[AllowDynamicProperties] разрешает динамические свойства\n' +
				'в классах без __get/__set (по умолчанию запрещены с PHP 8.2).\n' +
				'Для сериализации это может быть критично.',
			num: '#35',
		},
		{
			question: 'Что выведет код?\n\n' +
				'<?php\n' +
				'function test(array $data): array {\n' +
				'    return array_map(fn($x) => $x ** 2, $data);\n' +
				'}\n' +
				'print_r(test([1, 2, 3]));\n' +
				'?>',
			option: {
				a1: '[1, 4, 9]',
				a2: '[1, 2, 3]',
				a3: '[2, 4, 6]',
				a4: 'Ошибка',
			},
			answerOption: 'a1',
			answer: 'array_map применяет callback ко всем элементам.\n' +
				'$x ** 2 — возведение в квадрат.\n' +
				'Результат: [1, 4, 9].',
			num: '#36',
		},
		{
			question: 'Как объявить метод, который может быть вызван\n' +
				'только из наследников?',
			option: {
				a1: 'public',
				a2: 'private',
				a3: 'protected',
				a4: 'internal',
			},
			answerOption: 'a3',
			answer: 'protected делает метод доступным только в классе\n' +
				'и его наследниках.\n' +
				'private — только внутри класса, public — везде.',
			num: '#37',
		},
		{
			question: 'Что выведет код?\n\n' +
				'<?php\n' +
				'try {\n' +
				'    throw new Error("Oops");\n' +
				'} catch (Exception $e) {\n' +
				'    echo "Exception";\n' +
				'} catch (Error $e) {\n' +
				'    echo "Error";\n' +
				'}\n' +
				'?>',
			option: {
				a1: 'Exception',
				a2: 'Error',
				a3: 'Ничего',
				a4: 'Fatal error',
			},
			answerOption: 'a2',
			answer: 'Error и Exception — разные ветви иерархии.\n' +
				'Error не наследует Exception (начиная с PHP 7).\n' +
				'Первый catch не сработает, второй — да.',
			num: '#38',
		},
		{
			question: 'Какой результат выполнения?\n\n' +
				'<?php\n' +
				'class Container {\n' +
				'    public function __get($name) {\n' +
				'        return "missing: $name";\n' +
				'    }\n' +
				'}\n' +
				'$c = new Container();\n' +
				'echo $c->email;\n' +
				'?>',
			option: {
				a1: 'missing: email',
				a2: 'null',
				c3: 'Notice',
				d4: 'Ошибка',
			},
			answerOption: 'a1',
			answer: '__get вызывается при обращении к несуществующему\n' +
				'публичному свойству.\n' +
				'Возвращает "missing: email".',
			num: '#39',
		},
		{
			question: 'Что делает код?\n\n' +
				'<?php\n' +
				'$queue = new SplQueue();\n' +
				'$queue->enqueue("A");\n' +
				'$queue->enqueue("B");\n' +
				'echo $queue->dequeue();\n' +
				'?>',
			option: {
				a1: 'A',
				a2: 'B',
				a3: 'AB',
				a4: 'Ошибка',
			},
			answerOption: 'a1',
			answer: 'SplQueue реализует очередь FIFO (первым пришёл —\n' +
				'первым ушёл). enqueue() добавляет, dequeue() извлекает\n' +
				'первый элемент — "A".',
			num: '#40',
		},
		{
			question: 'Какой интерфейс обязывает реализовать метод\n' +
				'jsonSerialize()?',
			option: {
				a1: 'Jsonable',
				a2: 'JsonSerializable',
				a3: 'Serializable',
				a4: 'Arrayable',
			},
			answerOption: 'a2',
			answer: 'JsonSerializable требует метод jsonSerialize(),\n' +
				'который вызывается json_encode() для кастомной сериализации.\n' +
				'Стандартный способ контролировать JSON-вывод.',
			num: '#41',
		},
		{
			question: 'Что выведет код?\n\n' +
				'<?php\n' +
				'#[Attribute]\n' +
				'class Route {\n' +
				'    public function __construct(public string $path) {}\n' +
				'}\n' +
				'#[Route("/api/users")]\n' +
				'function getUsers() {}\n' +
				'reflection... (не используется)\n' +
				'echo "OK";\n' +
				'?>',
			option: {
				a1: 'OK',
				a2: 'Ошибка',
				a3: 'Пусто',
				a4: 'Fatal error',
			},
			answerOption: 'a1',
			answer: 'Атрибуты без рефлексии не влияют на выполнение.\n' +
				'Код просто определяет класс и функцию.\n' +
				'Выведется "OK", если echo есть (в примере — да).',
			num: '#42',
		},
		{
			question: 'Какой тип возврата у функции,\n' +
				'не возвращающей значение?',
			option: {
				a1: 'void',
				a2: 'null',
				a3: 'mixed',
				a4: 'ничего не указывать',
			},
			answerOption: 'a1',
			answer: 'void указывает, что функция ничего не возвращает.\n' +
				'Попытка вернуть значение вызовет ошибку.\n' +
				'Это помогает при строгой типизации.',
			num: '#43',
		},
		{
			question: 'Что выведет код?\n\n' +
				'<?php\n' +
				'$x = "3.14";\n' +
				'echo (int)$x;\n' +
				'?>',
			option: {
				a1: '3',
				a2: '3.14',
				a3: '0',
				a4: 'Ошибка',
			},
			answerOption: 'a1',
			answer: 'Приведение строки к int отбрасывает дробную часть.\n' +
				'PHP читает число до первого нецифрового символа.\n' +
				'(int)"3.14" → 3.',
			num: '#44',
		},
		{
			question: 'Какой механизм заменяет create_function()?',
			option: {
				a1: 'eval()',
				a2: 'Closure::fromCallable()',
				a3: 'fn() и function()',
				a4: 'call_user_func()',
			},
			answerOption: 'a3',
			answer: 'create_function() устарел и удалён. Его замена —\n' +
				'анонимные функции: function() или fn().\n' +
				'Они безопасны, быстры и читаемы.',
			num: '#45',
		},
		{
			question: 'Что выведет код?\n\n' +
				'<?php\n' +
				'class A {\n' +
				'    public static function who() {\n' +
				'        echo static::class;\n' +
				'    }\n' +
				'}\n' +
				'class B extends A {}\n' +
				'B::who();\n' +
				'?>',
			option: {
				a1: 'A',
				a2: 'B',
				a3: 'Ошибка',
				a4: 'null',
			},
			answerOption: 'a2',
			answer: 'static::class использует позднее статическое связывание.\n' +
				'Выведет класс, откуда вызван метод — B.\n' +
				'self::class вывел бы A.',
			num: '#46',
		},
		{
			question: 'Какой PSR описывает автозагрузку классов?',
			option: {
				a1: 'PSR-1',
				a2: 'PSR-4',
				a3: 'PSR-12',
				a4: 'PSR-7',
			},
			answerOption: 'a2',
			answer: 'PSR-4 определяет стандарт автозагрузки через namespace\n' +
				'и структуру каталогов.\n' +
				'Используется Composer (autoload).',
			num: '#47',
		},
		{
			question: 'Что выведет код?\n\n' +
				'<?php\n' +
				'function gen() {\n' +
				'    yield from [1, 2];\n' +
				'    yield from [3];\n' +
				'}\n' +
				'echo implode("", iterator_to_array(gen()));\n' +
				'?>',
			option: {
				a1: '123',
				a2: '12',
				a3: '3',
				a4: 'Ошибка',
			},
			answerOption: 'a1',
			answer: 'yield from делегирует генерацию другому итератору.\n' +
				'Генератор вернёт 1, 2, 3.\n' +
				'implode объединит в строку "123".',
			num: '#48',
		},
		{
			question: 'Какой тип ошибки вызывает деление на ноль\n' +
				'с целыми числами в PHP 8+?',
			option: {
				a1: 'Warning',
				a2: 'DivisionByZeroError',
				a3: 'ArithmeticError',
				a4: 'TypeError',
			},
			answerOption: 'a2',
			answer: 'Начиная с PHP 8, деление на ноль выбрасывает\n' +
				'DivisionByZeroError (наследник Error).\n' +
				'Раньше было Warning.',
			num: '#49',
		},
		{
			question: 'Что выведет код?\n\n' +
				'<?php\n' +
				'$a = 10;\n' +
				'$b = &$a;\n' +
				'$c = $b;\n' +
				'$a = 20;\n' +
				'echo $c;\n' +
				'?>',
			option: {
				a1: '10',
				a2: '20',
				a3: 'null',
				a4: 'Ошибка',
			},
			answerOption: 'a1',
			answer: '$c = $b копирует значение (10), а не ссылку.\n' +
				'После этого $a меняется на 20, но $c остаётся 10.\n' +
				'Ссылка есть только между $a и $b.',
			num: '#50',
		},
		{
			question: 'Какой механизм позволяет выполнять\n' +
				'асинхронный код в PHP 8.1+?',
			option: {
				a1: 'async/await',
				a2: 'Fibers',
				a3: 'Promises',
				a4: 'Threads',
			},
			answerOption: 'a2',
			answer: 'Fibers (PHP 8.1) — легковесные кооперативные потоки.\n' +
				'Позволяют приостанавливать и возобновлять выполнение.\n' +
				'База для асинхронных библиотек (например, ReactPHP).',
			num: '#51',
		},
		{
			question: 'Что выведет код?\n\n' +
				'<?php\n' +
				'interface Logger {\n' +
				'    public function log(string $msg): void;\n' +
				'}\n' +
				'class FileLogger implements Logger {\n' +
				'    public function log($msg) { echo $msg; }\n' +
				'}\n' +
				'(new FileLogger())->log("Test");\n' +
				'?>',
			option: {
				a1: 'Test',
				a2: 'Ошибка типизации',
				a3: 'Пусто',
				a4: 'Fatal error',
			},
			answerOption: 'a1',
			answer: 'В PHP допустимо опускать тип в реализации метода,\n' +
				'если родительский тип совместим (LSP).\n' +
				'Код работает и выведет "Test".',
			num: '#52',
		},
	],
};

export default PHPQuestions;
