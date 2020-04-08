import {
    Dashboard,
    Login,
    ArticleList,
    ArticleEdit,
    Settings,
    NotFound
} from '../views'
import React from 'react'
import {
    DashboardOutlined,
    UnorderedListOutlined,
    SettingFilled,
} from '@ant-design/icons';

export const mainRoutes = [
    {
        pathname: '/login',
        component: Login,
    },
    {
        pathname: '/404',
        component: NotFound,
    },

]

export const adminRoutes = [
    {
        pathname: '/admin/dashboard',
        component: Dashboard,
        title: '主页面',
        isNav: true,
        icon: <DashboardOutlined/>,
    },
    {
        pathname: '/admin/article',
        component: ArticleList,
        exact: true,
        title: '文章列表',
        isNav: true,
        icon: <UnorderedListOutlined/>,
    },
    {
        pathname: '/admin/article/edit/:id',
        component: ArticleEdit,
        title: '文章编辑',
        isNav: false,
        icon: <UnorderedListOutlined/>,
    },
    {
        pathname: '/admin/settings',
        component: Settings,
        title: '设置',
        isNav: true,
        icon: <SettingFilled />,
    },
]