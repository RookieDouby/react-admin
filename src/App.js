import React, { Component } from 'react'
import {
    Button
} from 'antd'

import { adminRouter } from './routes'
import { Switch, Redirect, Route } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <div>
                <div>这是公共的部分</div>
                <Switch>
                    {
                        adminRouter.map(route => {
                            return (
                                <Route
                                    key={route.pathname}
                                    path={route.pathname}
                                    exact={route.exact}
                                    render={(routerProps) => {
                                        return <route.component {...routerProps} />
                                    }}
                                />
                            )
                        })
                    }
                    <Redirect to={adminRouter[0].pathname} from="/admin" exact/>
                    <Redirect to="/404" />
                </Switch>
            </div>
        )
    }
}

export default App;
