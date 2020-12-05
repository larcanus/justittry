import React, {useState} from 'react'
import Question from './question'
import arrow1 from '../arrow.png'
import arrow2 from '../arrow2.png'


const MainComp = (props) => {

    const [testName, setTest] = useState(props.test.name)
    const [flag, setFlag] = useState( false)
    const [data, setData] = useState( props.test.data)

    let checkAnswers = () => {
        setFlag( true)
    }

    return (
        <div className='divMain'>
            <p>MainComp</p>
            <p>props =  {testName}</p>
            <div className='divButtonsNumbers'>
                <button className="buttonNumber">1</button>
                <button className="buttonNumber">2</button>
                <button className="buttonNumber">3</button>
                <button className="buttonNumber">4</button>
                <button className="buttonNumber">5</button>
                <button className="buttonNumber">6</button>
                <button className="buttonNumber">7</button>
                <button className="buttonNumber">8</button>
                <button className="buttonNumber">9</button>
                <button className="buttonNumber">10</button>
                <button className="buttonNumber">11</button>
                <button className="buttonNumber">12</button>
                <button className="buttonNumber">13</button>
                <button className="buttonNumber">14</button>
                <button className="buttonNumber">15</button>
                <button className="buttonNumber">16</button>
                <button className="buttonNumber">17</button>
                <button className="buttonNumber">18</button>
                <button className="buttonNumber">19</button>
                <button className="buttonNumber">20</button>
            </div>


            <div id='gallery'>
                <div className="buttons">
                    <button className="prev"><img  src={arrow1} alt='arrow1'/></button>
                         <div className='question'>
                             <Question data={data} flag={flag} position={'1'}/>
                             <Question data={data} flag={flag} position={'2'}/>
                             <Question data={data} flag={flag} position={'3'}/>
                             <Question data={data} flag={flag} position={'4'}/>
                             <Question data={data} flag={flag} position={'5'}/>
                             <Question data={data} flag={flag} position={'6'}/>
                             <Question data={data} flag={flag} position={'7'}/>
                             <Question data={data} flag={flag} position={'8'}/>
                             <Question data={data} flag={flag} position={'9'}/>
                             <Question data={data} flag={flag} position={'10'}/>
                             <Question data={data} flag={flag} position={'11'}/>
                             <Question data={data} flag={flag} position={'12'}/>
                             <Question data={data} flag={flag} position={'13'}/>
                             <Question data={data} flag={flag} position={'14'}/>
                             <Question data={data} flag={flag} position={'15'}/>
                             <Question data={data} flag={flag} position={'16'}/>
                             <Question data={data} flag={flag} position={'17'}/>
                             <Question data={data} flag={flag} position={'18'}/>
                             <Question data={data} flag={flag} position={'19'}/>
                             <Question data={data} flag={flag} position={'20'}/>
                         </div>
                    <button className="next"><img  src={arrow2} alt='arrow2'/></button>
                </div>
            </div>

            <button type='button'  onClick={ checkAnswers }>Проверить </button>
        </div>

    )
}

export default MainComp;