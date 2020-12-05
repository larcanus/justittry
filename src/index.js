import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


let btn_prev = document.querySelector('#gallery .buttons .prev');
let btn_next = document.querySelector('#gallery .buttons .next');
let quest = document.querySelectorAll('#gallery .buttons .question .divQuestions');
let buttons = document.querySelectorAll('.divButtonsNumbers button');

let i = 0
let checkable;

let change = (n) => {
    i = n
}
let changeCheck = (n) => {
    checkable = n
}

if( !checkable ) {
    buttons[i].style.backgroundColor = '#4284d4';
}




 for(let n = 0; n<buttons.length; n++ ){



     ((n) => {

         buttons[n].addEventListener("click", (event) => {
            //проверяем на существование ответа
             if( buttons[n].dataset.check === 'true' ) {
                 changeCheck(true)
             }
             let numberBut = event.target.innerHTML - 1
             console.log(checkable)
             if( !checkable ) {

                 buttons[i].style.backgroundColor = '#9ca09c'
                 buttons[numberBut].style.backgroundColor = '#4284d4';
             }

             quest[i].style.display = 'none';
             quest[numberBut].style.display = 'block';

             change(numberBut)
         })
     })(n);

 }


btn_prev.onclick = () => {

    if( i !== 0) {
        quest[i].style.display = 'none';

        if( !checkable ) {
            buttons[i].style.backgroundColor = '#9ca09c';
        }
        i -=  1;
        if(i < 0){
            i = quest.length - 1;
        }
        quest[i].style.display = 'block';
        if( !checkable ) {
            buttons[i].style.backgroundColor = '#4284d4';
        }
    }
}

btn_next.onclick = () => {
    if ( i !== quest.length - 1 ){
        hiddenDiv(quest[i])
        if( !checkable ) {
            buttons[i].style.backgroundColor = '#9ca09c';
        }
        i += 1
        if(i >= quest.length){
            i = 0;
        }
        quest[i].style.display = 'block';
        if( !checkable ) {
            buttons[i].style.backgroundColor = '#4284d4';
        }
    }
}

function hiddenDiv(numPrev) {
    numPrev.style.display = 'none';
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
