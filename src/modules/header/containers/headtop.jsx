import React, {Component} from 'react';
import Just from '../../../common/images/Justistry.png';
import {connect} from 'react-redux';
import {handleLogin,handleLogout} from '../actions/handleLogin';
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

const mapStateToProps = (store) => {
    return {
        login: store.login, // вытащили из стора (из редьюсера login все в переменную this.props.login)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleLogInAction: () => dispatch(handleLogin()),
        handleLogOutAction: () => dispatch(handleLogout()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Headtop);
