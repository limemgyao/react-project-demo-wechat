import React, {useEffect, useState} from 'react';
import './App.less';
import 'antd-mobile/dist/antd-mobile.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Loading from './pages/loading/loading'
import {} from 'antd-mobile';

import Login from './pages/login/login'
import RootRouter from './routes/Router'

/*import Header from "./pages/header/header";*/

function App(prop: any) {

    // 登陆状态判断
    const [loginFlag, setLoginFlag] = useState<boolean>(false);
    const isLogin = sessionStorage.getItem('token') || '';
    const [collapsed, setCollapsed] = useState<any>(false)

    useEffect(() => {
        if (isLogin) {
            setLoginFlag(true)
        } /*else {
            setLoginFlag(true)
        }*/
    }, [])

    const toggle = () => {
        setCollapsed(!collapsed)
    };

    return (
        <div className="App">
            <Router>
                <Loading/>
                {
                    loginFlag ?
                        <RootRouter/>
                        :
                        <Route exact path='*' component={Login}></Route>
                }
                {
                    /*loginFlag ?
                        <div className={'lx_body'}>
                            <MenuNav/>
                            <div className={'lx_con'}>
                                <Header/>
                                <div className={'lx_con_con'}>
                                    <RootRouter/>
                                </div>
                            </div>
                        </div>*/
                    /*<Switch>
                        {/!*<Route exact path='/' component={MenuNav}></Route>
                        <Route path='/serverError' component={ServerError}></Route>
                        <Route path='*' component={NotFound}></Route>
                        <Redirect to='/home'></Redirect>
                        <Route exact path='/index' component={IndexPage}></Route>*!/}
                    </Switch>*/
                    /*:
                    <Route exact path='*' component={Login}></Route>*/
                }
            </Router>
        </div>
    );
}

export default App;
