import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import IndexPage from '../pages/index/index';

function RootRouter(props: any, ref: any) {

    const route = [
        {'path': '/index', 'component': IndexPage},
        {'path': '/', 'component': IndexPage},
    ]
    const getComponents = () => {
        let components = [];
        components.push(...route);
        return components;
    }

    const routes = getComponents().map((item, index) => {
        return (
            <Route
                exact
                key={index}
                path={item.path}
                render={props =>
                    <item.component key={props.match.params.type}{...props}/>
                }
            />
        );
    });

    return (
        <Switch>
            {routes}
        </Switch>
    )
}

export default RootRouter
