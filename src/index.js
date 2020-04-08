import React from 'react'
import { render } from 'react-dom'

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { mainRoutes } from './routes'

import App from './App'
import './index.less';

render(
    <Router>
        {/* <div>这里是公共部分</div> */}
        <Switch>
            <Route
                path="/admin"
                render={(routerProps) => {
                    return <App {...routerProps} />
                }}
            />
            {
                mainRoutes.map(route => {
                    return (
                        <Route
                            key={route.pathname}
                            path={route.pathname}
                            render={routerProps => {
                                return <route.component {...routerProps} />
                            }}
                        />
                    )
                })
            }
            <Redirect to="/admin" from="/" exact />
            <Redirect to="/404" />
        </Switch>
    </Router>,
    document.getElementById('root')
)