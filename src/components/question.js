import React, {useState} from 'react'


const Question = (props) => {
    let pos = props.position

    const { answer, answerOption, question, option } = props.data[pos]

    const [q, setQ] = useState({})
    let answerDiv = null

    if( props.flag === true ){

        let div =document.getElementsByClassName( 'divQuestions' )
        let allInput = div[pos-1].getElementsByClassName( pos )
        let buttonsNumberQuest = document.querySelectorAll('.divButtonsNumbers button');

        for( let i = 0; i < allInput.length; i++ ) {

            if( allInput[i].checked ){
               let label = allInput[ i ].parentNode

               if( allInput[ i ].value === answerOption ){
                   label.style.setProperty ('background-color', '#99e59b' )
                   buttonsNumberQuest[pos-1].style.backgroundColor = '#99e59b';

               } else {
                   label.style.setProperty( 'background-color', '#d26f6f' )
                   buttonsNumberQuest[pos-1].style.backgroundColor = '#d26f6f';

               }
                buttonsNumberQuest[pos-1].setAttribute('data-check', 'true')
                answerDiv = <div className='divAnswerFull'><pre>{ answer }</pre></div>
            }

        }
    }

    const handler = (event) => {
        if( props.flag !== true ) {
            let { name, value, checked } = event.target
            if( checked ){
                setQ({...q, [ name ]: value } )
            } else {
                setQ({...q, [ name ]: 0 } )
            }
        }


    }

    return (
        <div className='divQuestions'>
            <div className='spanQuestion'>
                <pre>{question}</pre>
            </div>

            <div className='divAnswer' >
                <label className='labelAnswer' style={{backgroundColor:'#e4f5ff'}}>
                    <input className={pos} name="1" type="checkbox" value="a1"  onClick={handler}/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{option.a1}
                </label>
                <label className='labelAnswer' style={{backgroundColor:'#e4f5ff'}}>
                    <input className={pos} name="2" type="checkbox" value="a2"  onChange={handler}/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{option.a2}
                </label>
            </div>

            <div className='divAnswer'>
                <label className='labelAnswer' style={{backgroundColor:'#e4f5ff'}}>
                    <input className={pos} name="3" type="checkbox" value="a3"  onChange={handler}/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{option.a3}
                </label>
                <label className='labelAnswer' style={{backgroundColor:'#e4f5ff'}}>
                    <input className={pos} name="4" type="checkbox" value="a4"  onChange={handler}/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{option.a4}
                </label>
            </div>
            {answerDiv}
        </div>
    )
}

export default Question;