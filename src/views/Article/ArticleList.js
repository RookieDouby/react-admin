import React, { Component } from 'react'
import {
    Card,
    Table,
    Button,
    Tag,
} from 'antd'
import { getArticleList } from '../../request'
import moment from 'moment'

const titleDisplayMapper = {
    id: 'id',
    title: '标题',
    author: '作者',
    createAt: '创建时间',
    amount: '阅读量',
}

export default class ArticleList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            articleList: [],
            columns: [
                {
                    title: '姓名',
                    dataIndex: 'author',
                    key: 'author',
                },
                {
                    title: '标题',
                    dataIndex: 'title',
                    key: 'title',
                },
                {
                    title: '阅读量',
                    dataIndex: 'amount',
                    key: 'amount',
                },

            ],
            total: 0,
        }
    }

    // 获取模拟接口数据
    getData = () => {
        this.setState({
            isLoading: true,
        })
        getArticleList()
        .then((res) => {
            const columnKeys = Object.keys(res.list[0])
            const columns = columnKeys.map(item => {
                // 根据阅读量渲染不同颜色
                if (item === 'amount') {
                    return {
                        title: titleDisplayMapper[item],
                        key: item,
                        render: (text, record, index) => {
                            return <Tag color={record.amount > 1000 ? 'magenta' : 'green'}>{ record.amount }</Tag>
                        },
                    }
                } if (item === 'createAt') {
                    return {
                        title: titleDisplayMapper[item],
                        key: item,
                        render: (text, record, index) => {
                            const { createAt } = record
                            return moment(createAt).format('YYYY年MM月DD日 hh:mm:ss')
                        },
                    }
                }
                return {
                    title: titleDisplayMapper[item],
                    dataIndex: item,
                    key: item,
                }
            })
            columns.push({
                title: '操作',
                key: 'actions',
                render: (text, record, index) => {
                    return (
                       <Button.Group>
                           <Button type="primary">编辑</Button>
                           <Button>查看</Button>
                           <Button danger>删除</Button>
                       </Button.Group>
                    )
                }
            })
            this.setState({
                articleList: res.list,
                total: res.total,
                columns,
            })
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            this.setState({
                isLoading: false,
            })
        })
    }

    componentDidMount() {
        this.getData()
    }

    render() {
        return (
            <div>
                <Card title="文章列表" bordered={false}>
                    <Table
                        loading={this.state.isLoading}
                        dataSource={this.state.articleList}
                        columns={this.state.columns} pagination={{
                            pageSize: 10,
                            total: this.state.total,
                            hideOnSinglePage: true,
                            showTotal: (total) => `共${total}条`
                        }}
                        rowKey={record => record.id}
                    />
                </Card>
            </div>
        )
    }
}
