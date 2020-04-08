import Loadable from 'react-loadable'
// import Loadable from './selfLoadable'
import { Loading } from '../components'

import Dashboard from './Dashboard'
import Login from './Login'
import ArticleList from './Article/ArticleList'
import ArticleEdit from './Article/ArticleEdit'
import Settings from './Settings'
import NotFound from './NotFound'

// const Dashboard = Loadable({
//     loader: () => import('./Dashboard'),
//     loading: Loading,
// })
// const Login = Loadable({
//     loader: () => import('./Login'),
//     loading: Loading,
// })
// const ArticleList = Loadable({
//     loader: () => import('./Article/ArticleList'),
//     loading: Loading,
// })
// const ArticleEdit = Loadable({
//     loader: () => import('./Article/ArticleEdit'),
//     loading: Loading,
// })
// const Settings = Loadable({
//     loader: () => import('./Settings'),
//     loading: Loading,
// })
// const NotFound = Loadable({
//     loader: () => import('./NotFound'),
//     loading: Loading,
// })



export {
    Dashboard,
    Login,
    ArticleList,
    ArticleEdit,
    Settings,
    NotFound
}