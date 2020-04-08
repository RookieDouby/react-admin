import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd';
import * as Icon from '@ant-design/icons';

import logo from './logo.png'

import './Frame.less'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
var iconType = 'DashboardOutlined';

class Frame extends Component {

    handleNavigation = ({ key }) => {
        this.props.history.push(key)
    }
    render() {
        return (
            <Layout style={{minHeight: '100%'}}>
                    <Header className="header hd-header" style={{backgroundColor: '#fff'}}>
                        <div className="hd-logo">
                            <img src={logo} alt="" />
                        </div>
                    </Header>
                    <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            selectedKeys={[this.props.location.pathname]}
                            style={{ height: '100%', borderRight: 0 }}
                            onClick={this.handleNavigation}
                        >
                            {
                                this.props.menus.map(item => {
                                    return (
                                        <Menu.Item key={item.pathname}>
                                            {item.icon}
                                            {item.title}
                                        </Menu.Item>
                                    )
                                })
                            }
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '16px 24px 24px' }}>
                        <Content
                            className="site-layout-background"
                            style={{
                                margin: 0,
                            }}
                        >
                            {
                                this.props.children
                            }
                        </Content>
                    </Layout>
                    </Layout>
                </Layout>
        )
    }
}

export default withRouter(Frame)