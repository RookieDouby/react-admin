import React from 'react'
import { render } from 'react-dom'

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { mainRoutes } from './routes'

// 国际化部分
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN';
import enUS from 'antd/es/locale/en_US';

import App from './App'
import './index.less';

render(
    <ConfigProvider locale={zhCN}>
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
        </Router>
    </ConfigProvider>,
    document.getElementById('root')
)