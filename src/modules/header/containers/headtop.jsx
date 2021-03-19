import React, {Component} from 'react';
import Login from '../components/login';
import Just from '../../../common/images/Justistry.png';
import {connect} from 'react-redux';
import {handleLogin,handleLogout} from '../actions/handleLogin';
import {Link} from 'react-router-dom';

class Headtop extends Component {

    render() {
        const {
            login,
            handleLogInAction,
            handleLogOutAction,
        } = this.props;

        return (
            <div className='divHeader'>
                <Link to='/'><img className='imgHead' src={Just} alt='Justitry'/></Link>
                <Login handleLogInAction={handleLogInAction}
                       handleLogOutAction={handleLogOutAction}
                       login={login}
                       error={login.error}
                       isFetching={login.isFetching}/>
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
        // 'приклеили' в this.props.handleLoginAction функцию, которая умеет диспатчить handleLogin
        handleLogInAction: () => dispatch(handleLogin()),
        handleLogOutAction: () => dispatch(handleLogout()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Headtop);
