const PythonQuestions = {
	jun: [
		{
			question: 'Что выведет этот код?\n\n' +
				'x = "5"\n' +
				'y = 5\n' +
				'print(x == y)',
			option: {
				a1: 'True',
				a2: 'False',
				a3: 'TypeError',
				a4: '1',
			},
			answerOption: 'a2',
			answer: 'Оператор == сравнивает значения, но учитывает типы.\n' +
				'В Python "5" (str) не равно 5 (int).\n' +
				'Для строгого сравнения используется is.',
			num: '#1',
		},
		{
			question: 'Какой тип имеет значение 3.14 в Python?',
			option: {
				a1: 'int',
				a2: 'float',
				a3: 'double',
				a4: 'decimal'
			},
			answerOption: 'a2',
			answer: 'В Python целые числа имеют тип int (например, 5),\n' +
				'а числа с десятичной точкой — тип float (например, 3.14).\n' +
				'Типа double в Python нет: float реализован как 64-битное число (аналог double в C).\n' +
				'Для точных вычислений (например, в финансах) используется модуль decimal.',
			num: '#2',
		},
		{
			question: 'Что выведет код?\n\n' +
				'print("0" if "0" else "false")',
			option: {
				a1: '0',
				a2: 'false',
				a3: 'True',
				a4: 'Ошибка',
			},
			answerOption: 'a1',
			answer: 'В Python непустая строка всегда True.\n' +
				'Строка "0" не пустая, поэтому условие истинно.\n' +
				'Только пустая строка "" считается False.',
			num: '#3',
		},
		{
			question: 'Какой модификатор доступа по умолчанию\n' +
				'у атрибутов класса в Python?',
			option: {
				a1: 'public',
				a2: 'private',
				a3: 'protected',
				a4: 'Все атрибуты публичные',
			},
			answerOption: 'a4',
			answer: 'В Python нет настоящих модификаторов доступа.\n' +
				'Все атрибуты публичные по умолчанию.\n' +
				'_ и __ - это соглашения, а не ограничения.',
			num: '#4',
		},
		{
			question: 'Что выведет код?\n\n' +
				'a = None\n' +
				'print(a or "default")',
			option: {
				a1: 'None',
				a2: 'default',
				a3: 'False',
				a4: 'Ошибка',
			},
			answerOption: 'a2',
			answer: 'Оператор or возвращает первое истинное значение.\n' +
				'None считается ложным значением.\n' +
				'Поэтому возвращается "default".',
			num: '#5',
		},
		{
			question: 'Что выведет код?\n\n' +
				'def test(x=5):\n' +
				'    return x * 2\n' +
				'print(test("10"))',
			option: {
				a1: '20',
				a2: '1010',
				a3: 'TypeError',
				a4: '10',
			},
			answerOption: 'a2',
			answer: 'В Python оператор * для строк означает повторение.\n' +
				'"10" * 2 создаёт строку "1010".\n' +
				'Автоматического приведения типов не происходит.',
			num: '#6',
		},
		{
			question: 'Какой результат выполнения?\n\n' +
				'arr = [1, 2, 3]\n' +
				'print(len(arr[10:]))',
			option: {
				a1: '0',
				a2: '3',
				a3: 'IndexError',
				a4: 'None',
			},
			answerOption: 'a1',
			answer: 'Срезы в Python не вызывают ошибок при выходе за границы.\n' +
				'arr[10:] вернёт пустой список [].\n' +
				'len([]) возвращает 0.',
			num: '#7',
		},
		{
			question: 'Что выведет код?\n\n' +
				's = "Hello"\n' +
				's[0] = "h"\n' +
				'print(s)',
			option: {
				a1: 'Hello',
				a2: 'hello',
				a3: 'hHello',
				a4: 'TypeError',
			},
			answerOption: 'a4',
			answer: 'Строки в Python неизменяемы (immutable).\n' +
				'Нельзя изменять отдельные символы.\n' +
				'Попытка присвоения вызовет TypeError.',
			num: '#8',
		},
		{
			question: 'Чему равно значение?\n\n' +
				'result = "5" + "10"\n' +
				'print(result)',
			option: {
				a1: '15',
				a2: '510',
				a3: 'TypeError',
				a4: '5 10',
			},
			answerOption: 'a2',
			answer: 'Оператор + для строк выполняет конкатенацию.\n' +
				'"5" + "10" создаёт новую строку "510".\n' +
				'Для сложения чисел нужно преобразование: int("5") + int("10").',
			num: '#9',
		},
		{
			question: 'Что выведет код?\n\n' +
				'x = [1, 2, 3]\n' +
				'y = x\n' +
				'y.append(4)\n' +
				'print(len(x))',
			option: {
				a1: '3',
				a2: '4',
				a3: 'TypeError',
				a4: 'None',
			},
			answerOption: 'a2',
			answer: 'Списки - изменяемые объекты.\n' +
				'y = x создаёт ссылку на тот же список.\n' +
				'Изменение y изменяет и x. Длина станет 4.',
			num: '#10',
		},
		{
			question: 'Что выведет код?\n\n' +
				'x = 5\n' +
				'del x\n' +
				'print(x)',
			option: {
				a1: '5',
				a2: 'None',
				a3: 'NameError',
				a4: '0',
			},
			answerOption: 'a3',
			answer: 'del удаляет переменную из области видимости.\n' +
				'После del x переменная больше не существует.\n' +
				'Обращение к ней вызовет NameError.',
			num: '#11',
		},
		{
			question: 'Что произойдет при выполнении?\n\n' +
				'count = 0\n' +
				'match count:\n' +
				'    case 0:\n' +
				'        count += 2\n' +
				'    case _:\n' +
				'        count += 3\n' +
				'print(count)',
			option: {
				a1: '2',
				a2: '3',
				a3: '5',
				a4: '0',
			},
			answerOption: 'a1',
			answer: 'match-case (Python 3.10+) не имеет fall-through.\n' +
				'Выполняется только первый совпавший case.\n' +
				'case 0 выполнится, count станет 2.',
			num: '#12',
		},
		{
			question: 'Что выведет код?\n\n' +
				'for i in range(3):\n' +
				'    print(i if i % 2 == 0 else continue)',
			option: {
				a1: '02',
				a2: '13',
				a3: '024',
				a4: 'SyntaxError',
			},
			answerOption: 'a4',
			answer: 'continue нельзя использовать в тернарном операторе.\n' +
				'Это оператор управления потоком, а не выражение.\n' +
				'Код вызовет синтаксическую ошибку.',
			num: '#13',
		},
		{
			question: 'Что выведет код?\n\n' +
				'USER = {"name": "Ivan"}\n' +
				'USER["name"] = "Tom"\n' +
				'print(USER["name"])',
			option: {
				a1: 'Tom',
				a2: 'Ivan',
				a3: 'TypeError',
				a4: 'NameError',
			},
			answerOption: 'a1',
			answer: 'В Python константы - это соглашение (UPPER_CASE).\n' +
				'Словари изменяемы, можно менять их содержимое.\n' +
				'Выведет "Tom".',
			num: '#14',
		},
		{
			question: 'Что вернет type()?\n\n' +
				'arr = [1, 2, 3]\n' +
				'print(type(arr).__name__)',
			option: {
				a1: 'array',
				a2: 'list',
				a3: 'Array',
				a4: 'List',
			},
			answerOption: 'a2',
			answer: 'type() возвращает тип объекта.\n' +
				'__name__ даёт строковое имя типа.\n' +
				'Для списков это "list".',
			num: '#15',
		},
		{
			question: 'Что выведет код?\n\n' +
				'class User:\n' +
				'    def __init__(self, name="Guest"):\n' +
				'        self.name = name\n' +
				'user = User()\n' +
				'print(user.name)',
			option: {
				a1: 'Guest',
				a2: 'None',
				a3: 'AttributeError',
				a4: 'Пустая строка',
			},
			answerOption: 'a1',
			answer: '__init__ - конструктор класса.\n' +
				'Параметр name имеет значение по умолчанию "Guest".\n' +
				'При создании без аргументов используется "Guest".',
			num: '#16',
		},
		{
			question: 'Что выведет код?\n\n' +
				'import re\n' +
				'matches = re.findall(r"[a-z]", "test")\n' +
				'print(len(matches))',
			option: {
				a1: '1',
				a2: '4',
				a3: '0',
				a4: 'TypeError',
			},
			answerOption: 'a2',
			answer: 're.findall() находит все совпадения с паттерном.\n' +
				'Паттерн [a-z] находит каждую строчную букву.\n' +
				'В "test" 4 буквы, поэтому len = 4.',
			num: '#17',
		},
		{
			question: 'Чему равно значение?\n\n' +
				'def test() -> str | None:\n' +
				'    return None\n' +
				'result = test() or "default"\n' +
				'print(result)',
			option: {
				a1: 'None',
				a2: 'default',
				a3: 'TypeError',
				a4: 'Пустая строка',
			},
			answerOption: 'a2',
			answer: 'str | None означает Union тип (Python 3.10+).\n' +
				'Функция возвращает None.\n' +
				'Оператор or заменяет None на "default".',
			num: '#18',
		},
		{
			question: 'Что выведет код?\n\n' +
				'x = 2\n' +
				'x ^= 5\n' +
				'print(x)',
			option: {
				a1: '6',
				a2: '7',
				a3: '8',
				a4: '3',
			},
			answerOption: 'a2',
			answer: 'Побитовый XOR: 2 ^ 5 = 7 (в двоичной системе).\n' +
				'010 XOR 101 = 111 (в десятичной: 7).\n' +
				'x ^= 5 эквивалентно x = x ^ 5.',
			num: '#19',
		},
		{
			question: 'Что произойдет?\n\n' +
				'def test():\n' +
				'    yield 1\n' +
				'    yield 2\n' +
				'gen = test()\n' +
				'print(next(gen))',
			option: {
				a1: '1',
				a2: '2',
				a3: 'None',
				a4: 'TypeError',
			},
			answerOption: 'a1',
			answer: 'yield создает генератор.\n' +
				'next() возвращает следующее значение.\n' +
				'Первый вызов next() вернёт 1.',
			num: '#20',
		},
		{
			question: 'Чему равно значение?\n\n' +
				'user = {\n' +
				'    "name": "Mike",\n' +
				'    "age": None\n' +
				'}\n' +
				'age = user.get("age") or 18\n' +
				'print(age)',
			option: {
				a1: '18',
				a2: 'None',
				a3: '0',
				a4: 'KeyError',
			},
			answerOption: 'a1',
			answer: 'get() возвращает значение или None.\n' +
				'user["age"] равно None.\n' +
				'Оператор or заменяет None на 18.',
			num: '#21',
		},
		{
			question: 'Что возвращает метод .timestamp() у объекта datetime с временной зоной?',
			option: {
				a1: 'Возвращает Unix timestamp',
				a2: 'Возвращает микросекунды',
				a3: 'Возвращает день месяца',
				a4: 'Возвращает строку даты',
			},
			answerOption: 'a1',
			answer: 'timestamp() возвращает Unix timestamp.\n' +
				'Это количество секунд с 1 января 1970 года.\n' +
				'Используется для работы с датами.',
			num: '#22',
		},
		{
			question: 'Для чего используется array.array?',
			option: {
				a1: 'Для работы с типизированными массивами',
				a2: 'Для работы с бинарными данными',
				a3: 'Для работы с коллекциями',
				a4: 'Для работы со строками',
			},
			answerOption: 'a1',
			answer: 'array.array - массив с фиксированным типом элементов.\n' +
				'Эффективнее списков для числовых данных.\n' +
				'Используется для оптимизации памяти.',
			num: '#23',
		},
		{
			question: 'Что выведет код?\n\n' +
				'def gen():\n' +
				'    i = 0\n' +
				'    while True:\n' +
				'        yield i\n' +
				'        i += 1\n' +
				'g = gen()\n' +
				'print(next(g))\n' +
				'print(next(g))',
			option: {
				a1: '0 1',
				a2: '1 2',
				a3: '0 0',
				a4: 'Бесконечный цикл',
			},
			answerOption: 'a1',
			answer: 'Генератор приостанавливается на yield.\n' +
				'Первый next() вернёт 0, второй - 1.\n' +
				'Состояние сохраняется между вызовами.',
			num: '#24',
		},
		{
			question: 'Чему равно значение?\n\n' +
				'arr = [\n' +
				'    "5" == 5,\n' +
				'    5 == 5\n' +
				']\n' +
				'print(sum(arr))',
			option: {
				a1: '0',
				a2: '1',
				a3: '2',
				a4: 'True',
			},
			answerOption: 'a2',
			answer: 'Первое сравнение False (разные типы).\n' +
				'Второе сравнение True.\n' +
				'sum([False, True]) = 1 (True = 1, False = 0).',
			num: '#25',
		},
		{
			question: 'Что выведет код?\n\n' +
				'x = [1, 2, 3]\n' +
				'y = x\n' +
				'del y\n' +
				'print(x)',
			option: {
				a1: '[1, 2, 3]',
				a2: 'None',
				a3: 'NameError',
				a4: '[]',
			},
			answerOption: 'a1',
			answer: 'del удаляет только ссылку, не объект.\n' +
				'x продолжает существовать со значением [1, 2, 3].\n' +
				'Удаляется только связь между y и списком.',
			num: '#26',
		},
	],
	mid: [
		{
			question: 'Что выведет код?\n\n' +
				'from enum import Enum\n' +
				'class Status(Enum):\n' +
				'    ACTIVE = "active"\n' +
				'    INACTIVE = "inactive"\n' +
				'print(Status.ACTIVE.value)',
			option: {
				a1: 'active',
				a2: 'ACTIVE',
				a3: 'Status.ACTIVE',
				a4: 'AttributeError',
			},
			answerOption: 'a1',
			answer: 'Enum с явными значениями хранит их в .value.\n' +
				'Status.ACTIVE.value возвращает "active".\n' +
				'Доступен с Python 3.4+.',
			num: '#27',
		},
		{
			question: 'Как правильно объявить строгую типизацию?',
			option: {
				a1: 'use strict_types',
				a2: 'from __future__ import annotations',
				a3: 'strict_types = True',
				a4: 'typing.strict_mode()',
			},
			answerOption: 'a2',
			answer: 'from __future__ import annotations включает\n' +
				'отложенную оценку аннотаций типов.\n' +
				'Обязательна для использования новых возможностей типизации.',
			num: '#28',
		},
		{
			question: 'Что выведет код?\n\n' +
				'from typing import Never\n' +
				'def test() -> Never:\n' +
				'    raise Exception("Error")\n' +
				'print("OK")\n' +
				'test()',
			option: {
				a1: 'OK',
				a2: 'Exception',
				a3: 'Ничего',
				a4: 'OK + Exception',
			},
			answerOption: 'a4',
			answer: 'Сначала выполнится print("OK"), затем вызов test().\n' +
				'Never означает, что функция не завершится нормально.\n' +
				'Будет выведено "OK", затем брошено исключение.',
			num: '#29',
		},
		{
			question: 'Какой результат?\n\n' +
				'class A:\n' +
				'    def test(self) -> "A":\n' +
				'        return self\n' +
				'class B(A):\n' +
				'    pass\n' +
				'b = B()\n' +
				'print(type(b.test()).__name__)',
			option: {
				a1: 'A',
				a2: 'B',
				a3: 'TypeError',
				a4: 'None',
			},
			answerOption: 'a2',
			answer: 'Метод test() возвращает self.\n' +
				'В классе B self - это экземпляр B.\n' +
				'type(b.test()) вернёт класс B.',
			num: '#30',
		},
		{
			question: 'Что сделает код?\n\n' +
				'fn = lambda x: x * 2\n' +
				'print(fn(5))',
			option: {
				a1: '10',
				a2: '5',
				a3: 'SyntaxError',
				a4: 'None',
			},
			answerOption: 'a1',
			answer: 'lambda - анонимная функция.\n' +
				'Короткий синтаксис для однострочных функций.\n' +
				'Возвращает 5 * 2 = 10.',
			num: '#31',
		},
		{
			question: 'Что выведет код?\n\n' +
				'result = match 2:\n' +
				'    case 1: "A"\n' +
				'    case 2: "B"\n' +
				'    case _: "C"\n' +
				'print(result)',
			option: {
				a1: 'A',
				a2: 'B',
				a3: 'C',
				a4: 'SyntaxError',
			},
			answerOption: 'a4',
			answer: 'match - это оператор, а не выражение\n' +
				'и не может использоваться в правой части присваивания\n',
			num: '#32',
		},
		{
			question: 'Какой протокол нужно реализовать,\n' +
				'чтобы объект можно было использовать в for?',
			option: {
				a1: '__getitem__',
				a2: '__iter__',
				a3: '__next__',
				a4: '__len__',
			},
			answerOption: 'a2',
			answer: '__iter__ возвращает итератор для цикла for.\n' +
				'Итератор должен иметь метод __next__.\n' +
				'Это протокол итерации в Python.',
			num: '#33',
		},
		{
			question: 'Что выведет код?\n\n' +
				'from typing import final\n' +
				'@final\n' +
				'class User:\n' +
				'    def __init__(self, name: str):\n' +
				'        self.name = name\n' +
				'class Admin(User):\n' +
				'    pass',
			option: {
				a1: 'Ничего',
				a2: 'TypeError',
				a3: 'Warning от mypy',
				a4: 'SyntaxError',
			},
			answerOption: 'a3',
			answer: '@final - это подсказка для type checker.\n' +
				'Python не запрещает наследование в runtime.\n' +
				'mypy выдаст предупреждение при проверке типов.',
			num: '#34',
		},
		{
			question: 'Какой декоратор используется для создания\n' +
				'dataclass в Python 3.7+?',
			option: {
				a1: '@dataclass',
				a2: '@data',
				a3: '@struct',
				a4: '@record',
			},
			answerOption: 'a1',
			answer: '@dataclass автоматически генерирует __init__,\n' +
				'__repr__, __eq__ и другие методы.\n' +
				'Упрощает создание классов для хранения данных.',
			num: '#35',
		},
		{
			question: 'Что выведет код?\n\n' +
				'def test(data: list[int]) -> list[int]:\n' +
				'    return [x ** 2 for x in data]\n' +
				'print(test([1, 2, 3]))',
			option: {
				a1: '[1, 4, 9]',
				a2: '[1, 2, 3]',
				a3: '[2, 4, 6]',
				a4: 'TypeError',
			},
			answerOption: 'a1',
			answer: 'List comprehension применяет выражение ко всем элементам.\n' +
				'x ** 2 - возведение в квадрат.\n' +
				'Результат: [1, 4, 9].',
			num: '#36',
		},
		{
			question: 'Как объявить метод, доступный только\n' +
				'внутри класса (по соглашению)?',
			option: {
				a1: 'public_method',
				a2: '_protected_method',
				a3: '__private_method',
				a4: 'private method',
			},
			answerOption: 'a3',
			answer: '__method (два подчеркивания) - name mangling.\n' +
				'Python изменяет имя на _ClassName__method.\n' +
				'Это соглашение о приватности, не строгое ограничение.',
			num: '#37',
		},
		{
			question: 'Что выведет код?\n\n' +
				'try:\n' +
				'    raise ValueError("Oops")\n' +
				'except Exception as e:\n' +
				'    print("Exception")\n' +
				'except ValueError as e:\n' +
				'    print("ValueError")',
			option: {
				a1: 'Exception',
				a2: 'ValueError',
				a3: 'Ничего',
				a4: 'SyntaxError',
			},
			answerOption: 'a1',
			answer: 'Обработчики проверяются сверху вниз.\n' +
				'ValueError наследует Exception.\n' +
				'Первый except перехватит исключение.',
			num: '#38',
		},
		{
			question: 'Какой результат выполнения?\n\n' +
				'class Container:\n' +
				'    def __getattr__(self, name):\n' +
				'        return f"missing: {name}"\n' +
				'c = Container()\n' +
				'print(c.email)',
			option: {
				a1: 'missing: email',
				a2: 'None',
				a3: 'AttributeError',
				a4: 'TypeError',
			},
			answerOption: 'a1',
			answer: '__getattr__ вызывается при обращении к\n' +
				'несуществующему атрибуту.\n' +
				'Возвращает "missing: email".',
			num: '#39',
		},
		{
			question: 'Что сделает код?\n\n' +
				'from collections import deque\n' +
				'queue = deque()\n' +
				'queue.append("A")\n' +
				'queue.append("B")\n' +
				'print(queue.popleft())',
			option: {
				a1: 'A',
				a2: 'B',
				a3: 'AB',
				a4: 'IndexError',
			},
			answerOption: 'a1',
			answer: 'deque реализует двустороннюю очередь.\n' +
				'append() добавляет справа, popleft() извлекает слева.\n' +
				'Это FIFO (первым пришёл - первым ушёл) - "A".',
			num: '#40',
		},
		{
			question: 'Какой протокол обязывает реализовать метод\n' +
				'для сериализации в JSON?',
			option: {
				a1: '__json__',
				a2: '__dict__',
				a3: '__serialize__',
				a4: 'Нет стандартного протокола',
			},
			answerOption: 'a4',
			answer: 'В Python нет встроенного протокола для JSON.\n' +
				'Используется default параметр json.dumps() или\n' +
				'кастомный JSONEncoder с методом default().',
			num: '#41',
		},
		{
			question: 'Что выведет код?\n\n' +
				'from functools import lru_cache\n' +
				'@lru_cache(maxsize=2)\n' +
				'def fib(n):\n' +
				'    return n if n < 2 else fib(n-1) + fib(n-2)\n' +
				'print(fib(5))',
			option: {
				a1: '5',
				a2: '8',
				a3: '13',
				a4: 'TypeError',
			},
			answerOption: 'a1',
			answer: 'lru_cache кэширует результаты функции.\n' +
				'fib(5) вычисляет 5-е число Фибоначчи: 0,1,1,2,3,5.\n' +
				'Результат: 5.',
			num: '#42',
		},
		{
			question: 'Что выведет код?\n\n' +
				'class Meta(type):\n' +
				'    def __new__(cls, name, bases, attrs):\n' +
				'        attrs["created"] = True\n' +
				'        return super().__new__(cls, name, bases, attrs)\n' +
				'class User(metaclass=Meta):\n' +
				'    pass\n' +
				'print(User.created)',
			option: {
				a1: 'True',
				a2: 'False',
				a3: 'AttributeError',
				a4: 'TypeError',
			},
			answerOption: 'a1',
			answer: 'Метакласс изменяет процесс создания класса.\n' +
				'Meta.__new__ добавляет атрибут created=True.\n' +
				'User.created будет True.',
			num: '#43',
		},
		{
			question: 'Какой результат выполнения?\n\n' +
				'import asyncio\n' +
				'async def test():\n' +
				'    return "OK"\n' +
				'result = test()\n' +
				'print(type(result).__name__)',
			option: {
				a1: 'str',
				a2: 'coroutine',
				a3: 'Future',
				a4: 'Task',
			},
			answerOption: 'a2',
			answer: 'async def создаёт корутину.\n' +
				'Вызов test() возвращает объект coroutine.\n' +
				'Для выполнения нужен await или asyncio.run().',
			num: '#44',
		},
		{
			question: 'Что выведет код?\n\n' +
				'from typing import TypeVar, Generic\n' +
				'T = TypeVar("T")\n' +
				'class Box(Generic[T]):\n' +
				'    def __init__(self, value: T):\n' +
				'        self.value = value\n' +
				'box = Box(5)\n' +
				'print(type(box.value).__name__)',
			option: {
				a1: 'T',
				a2: 'int',
				a3: 'Generic',
				a4: 'TypeVar',
			},
			answerOption: 'a2',
			answer: 'Generic[T] - это подсказка типа для type checker.\n' +
				'В runtime T не влияет на тип.\n' +
				'box.value имеет тип int.',
			num: '#45',
		},
		{
			question: 'Что сделает код?\n\n' +
				'from contextlib import contextmanager\n' +
				'@contextmanager\n' +
				'def test():\n' +
				'    print("Enter")\n' +
				'    yield "OK"\n' +
				'    print("Exit")\n' +
				'with test() as value:\n' +
				'    print(value)',
			option: {
				a1: 'Enter OK Exit',
				a2: 'OK Enter Exit',
				a3: 'Enter Exit OK',
				a4: 'SyntaxError',
			},
			answerOption: 'a1',
			answer: '@contextmanager создаёт контекстный менеджер.\n' +
				'Код до yield выполняется при входе.\n' +
				'Код после yield - при выходе. Порядок: Enter, OK, Exit.',
			num: '#46',
		},
		{
			question: 'Что выведет код?\n\n' +
				'class Descriptor:\n' +
				'    def __get__(self, obj, objtype=None):\n' +
				'        return "descriptor"\n' +
				'class User:\n' +
				'    name = Descriptor()\n' +
				'u = User()\n' +
				'print(u.name)',
			option: {
				a1: 'descriptor',
				a2: 'None',
				a3: 'AttributeError',
				a4: 'Descriptor',
			},
			answerOption: 'a1',
			answer: 'Descriptor - это протокол дескриптора.\n' +
				'__get__ вызывается при обращении к атрибуту.\n' +
				'Возвращает "descriptor".',
			num: '#47',
		},
		{
			question: 'Какой результат выполнения?\n\n' +
				'from typing import Protocol\n' +
				'class Drawable(Protocol):\n' +
				'    def draw(self) -> None: ...\n' +
				'class Circle:\n' +
				'    def draw(self) -> None:\n' +
				'        print("Circle")\n' +
				'def render(obj: Drawable):\n' +
				'    obj.draw()\n' +
				'render(Circle())',
			option: {
				a1: 'Circle',
				a2: 'TypeError',
				a3: 'AttributeError',
				a4: 'None',
			},
			answerOption: 'a1',
			answer: 'Protocol определяет структурную типизацию.\n' +
				'Circle соответствует Drawable (имеет метод draw).\n' +
				'Код выполнится и выведет "Circle".',
			num: '#48',
		},
		{
			question: 'Что выведет код?\n\n' +
				'from weakref import WeakValueDictionary\n' +
				'class User:\n' +
				'    pass\n' +
				'cache = WeakValueDictionary()\n' +
				'u = User()\n' +
				'cache["user"] = u\n' +
				'del u\n' +
				'print(len(cache))',
			option: {
				a1: '0',
				a2: '1',
				a3: 'KeyError',
				a4: 'TypeError',
			},
			answerOption: 'a1',
			answer: 'WeakValueDictionary хранит слабые ссылки.\n' +
				'После del u объект удаляется сборщиком мусора.\n' +
				'Запись в cache автоматически удаляется. len = 0.',
			num: '#49',
		},
		{
			question: 'Что сделает код?\n\n' +
				'from dataclasses import dataclass, field\n' +
				'@dataclass\n' +
				'class User:\n' +
				'    name: str\n' +
				'    tags: list = field(default_factory=list)\n' +
				'u1 = User("Tom")\n' +
				'u2 = User("Bob")\n' +
				'u1.tags.append("admin")\n' +
				'print(len(u2.tags))',
			option: {
				a1: '0',
				a2: '1',
				a3: 'AttributeError',
				a4: 'TypeError',
			},
			answerOption: 'a1',
			answer: 'field(default_factory=list) создаёт новый список для каждого экземпляра.\n' +
				'u1.tags и u2.tags - разные объекты.\n' +
				'u2.tags остаётся пустым. len = 0.',
			num: '#50',
		},
		{
			question: 'Что выведет код?\n\n' +
				'from typing import Literal\n' +
				'def process(mode: Literal["read", "write"]):\n' +
				'    return mode\n' +
				'print(process("delete"))',
			option: {
				a1: 'delete',
				a2: 'TypeError',
				a3: 'ValueError',
				a4: 'None',
			},
			answerOption: 'a1',
			answer: 'Literal - это подсказка типа для type checker.\n' +
				'В runtime проверка не выполняется.\n' +
				'Код выполнится и вернёт "delete".',
			num: '#51',
		},
		{
			question: 'Какой результат выполнения?\n\n' +
				'class Singleton:\n' +
				'    _instance = None\n' +
				'    def __new__(cls):\n' +
				'        if cls._instance is None:\n' +
				'            cls._instance = super().__new__(cls)\n' +
				'        return cls._instance\n' +
				's1 = Singleton()\n' +
				's2 = Singleton()\n' +
				'print(s1 is s2)',
			option: {
				a1: 'True',
				a2: 'False',
				a3: 'TypeError',
				a4: 'None',
			},
			answerOption: 'a1',
			answer: '__new__ контролирует создание экземпляра.\n' +
				'Singleton возвращает один и тот же объект.\n' +
				's1 и s2 - это один объект. is вернёт True.',
			num: '#52',
		},
	],
	senior: [
		{
			question: 'Что выведет код?\n\n' +
				'import sys\n' +
				'class A:\n' +
				'    pass\n' +
				'a = A()\n' +
				'print(sys.getrefcount(a) > 1)',
			option: {
				a1: 'True',
				a2: 'False',
				a3: 'TypeError',
				a4: '1',
			},
			answerOption: 'a1',
			answer: 'sys.getrefcount() возвращает количество ссылок на объект.\n' +
				'Сам вызов getrefcount создаёт временную ссылку.\n' +
				'Результат всегда > 1.',
			num: '#53',
		},
		{
			question: 'Что сделает код?\n\n' +
				'from typing import overload\n' +
				'@overload\n' +
				'def process(x: int) -> int: ...\n' +
				'@overload\n' +
				'def process(x: str) -> str: ...\n' +
				'def process(x):\n' +
				'    return x\n' +
				'print(process(5))',
			option: {
				a1: '5',
				a2: 'TypeError',
				a3: 'None',
				a4: 'SyntaxError',
			},
			answerOption: 'a1',
			answer: '@overload - это подсказка для type checker.\n' +
				'В runtime используется последняя реализация.\n' +
				'Код выполнится и вернёт 5.',
			num: '#54',
		},
		{
			question: 'Что выведет код?\n\n' +
				'class Meta(type):\n' +
				'    def __call__(cls, *args, **kwargs):\n' +
				'        print("Creating")\n' +
				'        return super().__call__(*args, **kwargs)\n' +
				'class User(metaclass=Meta):\n' +
				'    pass\n' +
				'u = User()',
			option: {
				a1: 'Creating',
				a2: 'Ничего',
				a3: 'TypeError',
				a4: 'User',
			},
			answerOption: 'a1',
			answer: 'Meta.__call__ вызывается при создании экземпляра.\n' +
				'User() вызывает Meta.__call__.\n' +
				'Выведет "Creating".',
			num: '#55',
		},
		{
			question: 'Какой результат выполнения?\n\n' +
				'from typing import TypedDict\n' +
				'class User(TypedDict):\n' +
				'    name: str\n' +
				'    age: int\n' +
				'u: User = {"name": "Tom"}\n' +
				'print(u)',
			option: {
				a1: '{"name": "Tom"}',
				a2: 'TypeError',
				a3: 'KeyError',
				a4: 'None',
			},
			answerOption: 'a1',
			answer: 'TypedDict - это подсказка типа.\n' +
				'В runtime это обычный dict.\n' +
				'Код выполнится, выведет {"name": "Tom"}.',
			num: '#56',
		},
		{
			question: 'Что выведет код?\n\n' +
				'import gc\n' +
				'class Node:\n' +
				'    def __init__(self):\n' +
				'        self.ref = None\n' +
				'a = Node()\n' +
				'b = Node()\n' +
				'a.ref = b\n' +
				'b.ref = a\n' +
				'del a, b\n' +
				'print(gc.collect() > 0)',
			option: {
				a1: 'True',
				a2: 'False',
				a3: 'TypeError',
				a4: 'None',
			},
			answerOption: 'a1',
			answer: 'Создана циклическая ссылка между a и b.\n' +
				'gc.collect() находит и удаляет циклы.\n' +
				'Возвращает количество удалённых объектов > 0.',
			num: '#57',
		},
		{
			question: 'Что сделает код?\n\n' +
				'from typing import ParamSpec, TypeVar\n' +
				'P = ParamSpec("P")\n' +
				'R = TypeVar("R")\n' +
				'def decorator(func: Callable[P, R]) -> Callable[P, R]:\n' +
				'    def wrapper(*args: P.args, **kwargs: P.kwargs) -> R:\n' +
				'        return func(*args, **kwargs)\n' +
				'    return wrapper',
			option: {
				a1: 'Типизированный декоратор',
				a2: 'SyntaxError',
				a3: 'TypeError',
				a4: 'Ничего',
			},
			answerOption: 'a1',
			answer: 'ParamSpec сохраняет сигнатуру функции.\n' +
				'Декоратор не изменяет типы параметров и возврата.\n' +
				'Это правильная типизация декоратора.',
			num: '#58',
		},
		{
			question: 'Что выведет код?\n\n' +
				'class Descriptor:\n' +
				'    def __set_name__(self, owner, name):\n' +
				'        self.name = name\n' +
				'    def __get__(self, obj, objtype=None):\n' +
				'        return self.name\n' +
				'class User:\n' +
				'    email = Descriptor()\n' +
				'print(User.email)',
			option: {
				a1: 'email',
				a2: 'Descriptor',
				a3: 'None',
				a4: 'AttributeError',
			},
			answerOption: 'a1',
			answer: '__set_name__ вызывается при создании класса.\n' +
				'Сохраняет имя атрибута "email".\n' +
				'__get__ возвращает это имя.',
			num: '#59',
		},
		{
			question: 'Какой результат выполнения?\n\n' +
				'from typing import NewType\n' +
				'UserId = NewType("UserId", int)\n' +
				'def get_user(id: UserId) -> str:\n' +
				'    return f"User {id}"\n' +
				'print(get_user(5))',
			option: {
				a1: 'User 5',
				a2: 'TypeError',
				a3: 'None',
				a4: 'SyntaxError',
			},
			answerOption: 'a1',
			answer: 'NewType создаёт подтип для type checker.\n' +
				'В runtime это identity функция.\n' +
				'Код выполнится, выведет "User 5".',
			num: '#60',
		},
		{
			question: 'Что выведет код?\n\n' +
				'import asyncio\n' +
				'async def main():\n' +
				'    task = asyncio.create_task(asyncio.sleep(1))\n' +
				'    await asyncio.sleep(0)\n' +
				'    print(task.done())\n' +
				'asyncio.run(main())',
			option: {
				a1: 'False',
				a2: 'True',
				a3: 'TypeError',
				a4: 'None',
			},
			answerOption: 'a1',
			answer: 'create_task запускает корутину в фоне.\n' +
				'await asyncio.sleep(0) передаёт управление.\n' +
				'sleep(1) не завершится за это время. done() = False.',
			num: '#61',
		},
		{
			question: 'Что сделает код?\n\n' +
				'from typing import Annotated\n' +
				'def validate(x: Annotated[int, "positive"]):\n' +
				'    return x > 0\n' +
				'print(validate.__annotations__)',
			option: {
				a1: '{"x": Annotated[int, "positive"]}',
				a2: '{"x": int}',
				a3: '{"x": "positive"}',
				a4: 'TypeError',
			},
			answerOption: 'a1',
			answer: 'Annotated добавляет метаданные к типу.\n' +
				'__annotations__ сохраняет полную аннотацию.\n' +
				'Метаданные доступны для валидации.',
			num: '#62',
		},
		{
			question: 'Что выведет код?\n\n' +
				'class A:\n' +
				'    def __init_subclass__(cls, **kwargs):\n' +
				'        super().__init_subclass__(**kwargs)\n' +
				'        cls.registered = True\n' +
				'class B(A):\n' +
				'    pass\n' +
				'print(B.registered)',
			option: {
				a1: 'True',
				a2: 'False',
				a3: 'AttributeError',
				a4: 'TypeError',
			},
			answerOption: 'a1',
			answer: '__init_subclass__ вызывается при создании подкласса.\n' +
				'Добавляет атрибут registered=True в класс B.\n' +
				'B.registered будет True.',
			num: '#63',
		},
		{
			question: 'Какой результат выполнения?\n\n' +
				'from typing import Self\n' +
				'class Builder:\n' +
				'    def set_name(self, name: str) -> Self:\n' +
				'        self.name = name\n' +
				'        return self\n' +
				'b = Builder().set_name("Test")\n' +
				'print(type(b).__name__)',
			option: {
				a1: 'Builder',
				a2: 'Self',
				a3: 'NoneType',
				a4: 'TypeError',
			},
			answerOption: 'a1',
			answer: 'Self (Python 3.11+) указывает на тип текущего класса.\n' +
				'set_name возвращает self (экземпляр Builder).\n' +
				'type(b) вернёт Builder.',
			num: '#64',
		},
		{
			question: 'Что выведет код?\n\n' +
				'from collections.abc import Sequence\n' +
				'class MyList:\n' +
				'    def __getitem__(self, index):\n' +
				'        return index\n' +
				'    def __len__(self):\n' +
				'        return 5\n' +
				'print(isinstance(MyList(), Sequence))',
			option: {
				a1: 'True',
				a2: 'False',
				a3: 'TypeError',
				a4: 'AttributeError',
			},
			answerOption: 'a1',
			answer: 'Sequence - это абстрактный базовый класс.\n' +
				'MyList реализует __getitem__ и __len__.\n' +
				'isinstance проверит протокол и вернёт True.',
			num: '#65',
		},
		{
			question: 'Что сделает код?\n\n' +
				'from typing import TypeGuard\n' +
				'def is_str_list(val: list) -> TypeGuard[list[str]]:\n' +
				'    return all(isinstance(x, str) for x in val)\n' +
				'data = ["a", "b"]\n' +
				'if is_str_list(data):\n' +
				'    print(data[0].upper())',
			option: {
				a1: 'A',
				a2: 'TypeError',
				a3: 'AttributeError',
				a4: 'None',
			},
			answerOption: 'a1',
			answer: 'TypeGuard сужает тип для type checker.\n' +
				'После проверки data имеет тип list[str].\n' +
				'Код выполнится, выведет "A".',
			num: '#66',
		},
		{
			question: 'Что выведет код?\n\n' +
				'import sys\n' +
				'class A:\n' +
				'    __slots__ = ("x",)\n' +
				'a = A()\n' +
				'a.x = 1\n' +
				'print(hasattr(a, "__dict__"))',
			option: {
				a1: 'False',
				a2: 'True',
				a3: 'AttributeError',
				a4: 'TypeError',
			},
			answerOption: 'a1',
			answer: '__slots__ отключает __dict__ для экономии памяти.\n' +
				'Атрибуты хранятся в фиксированных слотах.\n' +
				'hasattr(a, "__dict__") вернёт False.',
			num: '#67',
		},
		{
			question: 'Какой результат выполнения?\n\n' +
				'from typing import Unpack, TypedDict\n' +
				'class Person(TypedDict):\n' +
				'    name: str\n' +
				'    age: int\n' +
				'def greet(**kwargs: Unpack[Person]):\n' +
				'    return kwargs["name"]\n' +
				'print(greet(name="Tom", age=25))',
			option: {
				a1: 'Tom',
				a2: 'TypeError',
				a3: 'KeyError',
				a4: 'None',
			},
			answerOption: 'a1',
			answer: 'Unpack[TypedDict] типизирует **kwargs.\n' +
				'Type checker проверит соответствие Person.\n' +
				'Код выполнится, вернёт "Tom".',
			num: '#68',
		},
		{
			question: 'Что выведет код?\n\n' +
				'from typing import reveal_type\n' +
				'x = [1, 2, 3]\n' +
				'reveal_type(x)',
			option: {
				a1: 'Ошибка в runtime',
				a2: 'list[int]',
				a3: 'list',
				a4: 'Ничего',
			},
			answerOption: 'a4',
			answer: 'reveal_type - это функция для type checker.\n' +
				'reveal_type существует в runtime (начиная с Python 3.11).\n' +
				'и не вызывает ошибку, но обычно используется только в анализе типов.\n',
			num: '#69',
		},
		{
			question: 'Что сделает код?\n\n' +
				'from typing import ClassVar\n' +
				'from dataclasses import dataclass\n' +
				'@dataclass\n' +
				'class Counter:\n' +
				'    count: ClassVar[int] = 0\n' +
				'    name: str\n' +
				'c1 = Counter("A")\n' +
				'c2 = Counter("B")\n' +
				'Counter.count = 5\n' +
				'print(c1.count)',
			option: {
				a1: '5',
				a2: '0',
				a3: 'AttributeError',
				a4: 'TypeError',
			},
			answerOption: 'a1',
			answer: 'ClassVar указывает на атрибут класса.\n' +
				'dataclass не включает его в __init__.\n' +
				'c1.count обращается к Counter.count = 5.',
			num: '#70',
		},
		{
			question: 'Что выведет код?\n\n' +
				'from typing import Never\n' +
				'def error() -> Never:\n' +
				'    raise Exception()\n' +
				'def test(x: int) -> int:\n' +
				'    if x < 0:\n' +
				'        error()\n' +
				'    return x * 2\n' +
				'print(test(5))',
			option: {
				a1: '10',
				a2: 'Exception',
				a3: 'TypeError',
				a4: 'None',
			},
			answerOption: 'a1',
			answer: 'Never означает, что функция не возвращает управление.\n' +
				'test(5) не вызывает error().\n' +
				'Код выполнится, вернёт 10.',
			num: '#71',
		},
		{
			question: 'Какой результат выполнения?\n\n' +
				'from typing import Final\n' +
				'class Config:\n' +
				'    MAX_SIZE: Final = 100\n' +
				'Config.MAX_SIZE = 200\n' +
				'print(Config.MAX_SIZE)',
			option: {
				a1: '200',
				a2: '100',
				a3: 'TypeError',
				a4: 'AttributeError',
			},
			answerOption: 'a1',
			answer: 'Final - это подсказка для type checker.\n' +
				'В runtime нет защиты от изменения.\n' +
				'Код выполнится, выведет 200.',
			num: '#72',
		},
	],
};

export default PythonQuestions;
