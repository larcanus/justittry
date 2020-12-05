import './App.css';
import HeadTop from './components/headtop'
import Navbar from './components/navbar'
import FootDown from './components/footdown'
import MainComp from './components/maincomp'

const Metods =  {
    name:'Test name',
    data: {
        1:{
            question: 'С помощью каких символов можно оставить комментарий разработчика в JavaScrip?',
            option: {
                a1:'/',
                a2:'//',
                a3:'<--!',
                a4:'\\',
            },
            answerOption: 'a2',
            answer: `Однострочные комментарии начинаются с двойной косой черты //.\n` +
                `Многострочные комментарии начинаются косой чертой со звёздочкой /* и \n ` +
                `заканчиваются звёздочкой с косой чертой */. `,
        },
        2:{
            question: '                                             Что выведет консоль?\n' +
                'function example() {\n' +
                '  let x = 1;\n' +
                '  if (true) {\n' +
                '    let x = 2; \n' +
                '  }\n' +
                '  console.log(x);\n' +
                '}',
            option: {
                a1:'1',
                a2:'undefined',
                a3:'2',
                a4:'error',
            },
            answerOption: 'a1',
            answer: 'Областью видимости переменных, объявленных ключевым словом let, является блок, в котором они объявлены,\n' +
                ' и все его подблоки.',
        },
        3:{
            question: 'Сколько типов данных, являющихся примитивами, определено в стандарте в ECMAScript 6 ? ',
            option: {
                a1:'5',
                a2:'7',
                a3:'6',
                a4:'4',
            },
            answerOption: 'a3',
            answer: 'Undefined (Неопределенный тип)  : typeof instance === "undefined"\n' +
                'Boolean (Булев, Логический тип) : typeof instance === "boolean"\n' +
                'Number (Число) : typeof instance === "number"\n' +
                'String (Строка) : typeof instance === "string"\n' +
                'BigInt  : typeof instance === "bigint"\n' +
                'Symbol (в ECMAScript 6)  : typeof instance === "symbol"',
        },
        4:{
            question: '                                             Что выведет консоль?\n' +
                "const ex = Boolean( '0' )\n" +
                'console.log( !( ex ) )',
            option: {
                a1:'0',
                a2:'1',
                a3:'false',
                a4:'true',
            },
            answerOption: 'a3',
            answer: 'В JavaScript, если строка не пустая, то она всегда true \n' +
                'ex = true\n' +
                '!(ex) = false',

        },
        5:{
            question: '5',
            option: {
                a1:'0',
                a2:'1',
                a3:'false',
                a4:'true',
            },
            answerOption: 'a3',
            answer: 'В JavaScript, если строка не пустая, то она всегда true \n' +
                'ex = true\n' +
                '!(ex) = false',

        },
        6:{
            question: '6',
            option: {
                a1:'0',
                a2:'1',
                a3:'false',
                a4:'true',
            },
            answerOption: 'a3',
            answer: 'В JavaScript, если строка не пустая, то она всегда true \n' +
                'ex = true\n' +
                '!(ex) = false',

        },
        7:{
            question: '7',
            option: {
                a1:'0',
                a2:'1',
                a3:'false',
                a4:'true',
            },
            answerOption: 'a3',
            answer: 'В JavaScript, если строка не пустая, то она всегда true \n' +
                'ex = true\n' +
                '!(ex) = false',

        },
        8:{
            question: '8',
            option: {
                a1:'0',
                a2:'1',
                a3:'false',
                a4:'true',
            },
            answerOption: 'a3',
            answer: 'В JavaScript, если строка не пустая, то она всегда true \n' +
                'ex = true\n' +
                '!(ex) = false',

        },
        9:{
            question: '9',
            option: {
                a1:'0',
                a2:'1',
                a3:'false',
                a4:'true',
            },
            answerOption: 'a3',
            answer: 'В JavaScript, если строка не пустая, то она всегда true \n' +
                'ex = true\n' +
                '!(ex) = false',

        },
        10:{
            question: '10',
            option: {
                a1:'0',
                a2:'1',
                a3:'false',
                a4:'true',
            },
            answerOption: 'a3',
            answer: 'В JavaScript, если строка не пустая, то она всегда true \n' +
                'ex = true\n' +
                '!(ex) = false',

        },
        11:{
            question: '11',
            option: {
                a1:'0',
                a2:'1',
                a3:'false',
                a4:'true',
            },
            answerOption: 'a3',
            answer: 'В JavaScript, если строка не пустая, то она всегда true \n' +
                'ex = true\n' +
                '!(ex) = false',

        },
        12:{
            question: '12',
            option: {
                a1:'0',
                a2:'1',
                a3:'false',
                a4:'true',
            },
            answerOption: 'a3',
            answer: 'В JavaScript, если строка не пустая, то она всегда true \n' +
                'ex = true\n' +
                '!(ex) = false',

        },
        13:{
            question: '13',
            option: {
                a1:'0',
                a2:'1',
                a3:'false',
                a4:'true',
            },
            answerOption: 'a3',
            answer: 'В JavaScript, если строка не пустая, то она всегда true \n' +
                'ex = true\n' +
                '!(ex) = false',

        },
        14:{
            question: '14',
            option: {
                a1:'0',
                a2:'1',
                a3:'false',
                a4:'true',
            },
            answerOption: 'a3',
            answer: 'В JavaScript, если строка не пустая, то она всегда true \n' +
                'ex = true\n' +
                '!(ex) = false',

        },
        15:{
            question: '15',
            option: {
                a1:'0',
                a2:'1',
                a3:'false',
                a4:'true',
            },
            answerOption: 'a3',
            answer: 'В JavaScript, если строка не пустая, то она всегда true \n' +
                'ex = true\n' +
                '!(ex) = false',

        },
        16:{
            question: '16',
            option: {
                a1:'0',
                a2:'1',
                a3:'false',
                a4:'true',
            },
            answerOption: 'a3',
            answer: 'В JavaScript, если строка не пустая, то она всегда true \n' +
                'ex = true\n' +
                '!(ex) = false',

        },
        17:{
            question: '17',
            option: {
                a1:'0',
                a2:'1',
                a3:'false',
                a4:'true',
            },
            answerOption: 'a3',
            answer: 'В JavaScript, если строка не пустая, то она всегда true \n' +
                'ex = true\n' +
                '!(ex) = false',

        },
        18:{
            question: '18',
            option: {
                a1:'0',
                a2:'1',
                a3:'false',
                a4:'true',
            },
            answerOption: 'a3',
            answer: 'В JavaScript, если строка не пустая, то она всегда true \n' +
                'ex = true\n' +
                '!(ex) = false',

        },
        19:{
            question: '19',
            option: {
                a1:'0',
                a2:'1',
                a3:'false',
                a4:'true',
            },
            answerOption: 'a3',
            answer: 'В JavaScript, если строка не пустая, то она всегда true \n' +
                'ex = true\n' +
                '!(ex) = false',

        },
        20:{
            question: '                                            20',
            option: {
                a1:'0',
                a2:'1',
                a3:'false',
                a4:'true',
            },
            answerOption: 'a3',
            answer: 'В JavaScript, если строка не пустая, то она всегда true \n' +
                'ex = true\n' +
                '!(ex) = false',

        },
    },

    chooze(){
    },
}




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeadTop />
      </header>

      <aside>
        <Navbar func={Metods} />
      </aside>

      <main>
        <MainComp test={Metods} />
      </main>

      <footer>
        <FootDown />
      </footer>
    </div>
  );
}


export default App;
