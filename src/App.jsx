import Headtop from './modules/header/containers/headtop';
import Navbar from './modules/header/containers/navbar';
import Footdown from './modules/footer/components/footdown';
import Maincomp from './modules/body/components/maincomp';
import CheckTest from './modules/body/containers/checktest';
import { Switch, Route, useHistory } from 'react-router-dom';
import React, { useEffect } from 'react';
import debugApi from './common/debugApi';
import { useStore } from "react-redux";

function App() {
    const history = useHistory();
    const store = useStore();

    useEffect(() => {
        debugApi.initialize(store, history);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <header className='header'>
                <Headtop/>
            </header>

            <Switch>
                <Route path='/test'>
                    <CheckTest/>
                </Route>

                <Route exact path='/'>
                    <aside>
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
    );
}

export default App;
