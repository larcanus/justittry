import React, {Component} from 'react';
import Just from '../../../common/images/Justistry.png';
import {Link} from 'react-router-dom';

class Headtop extends Component {
    render() {
        return (
            <div className='divHeader'>
                <Link to='/'><img className='imgHead' src={Just} alt='Justitry'/></Link>
            </div>
        );
    }
};


export default Headtop;
