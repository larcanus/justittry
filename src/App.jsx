import checkUserAgent from './common/utils';
import StubMobile from './modules/header/components/stabMobile';
import Headtop from './modules/header/containers/headtop';
import Navbar from './modules/header/containers/navbar';
import Footdown from './modules/footer/components/footdown';
import Maincomp from './modules/body/components/maincomp';
import CheckTest from './modules/body/containers/checktest';
import {Switch, Route} from 'react-router-dom';
import React from 'react';

function App() {
    return checkUserAgent() ? (
        <div className='App'>
            <header className='App-header'>
                <Headtop/>
            </header>

            <Switch>
                <Route path='/test'>
                    <CheckTest/>
                </Route>

                <Route exact path='/'>
                    <aside className='navBarAside'>
                        <Navbar/>
                    </aside>
                    <main>
                        <Maincomp/>
                    </main>
                </Route>
            </Switch>

            <footer>
                <Footdown/>
            </footer>
        </div>
    ) : ( <StubMobile/> );
}

export default App;
