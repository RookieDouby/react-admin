import React, { Component } from 'react'
import {
    Button
} from 'antd'

const testHOC = (WrapperedComponent) => {
    return class HOCComponent extends Component {
        render() {
            return (
                <>
                    <WrapperedComponent />
                    <div>高阶组件</div>
                </>
            )
        }
    }
}

@testHOC
class App extends Component {
    render() {
        return (
            <div>
                <Button type="primary">测试按钮</Button>
            </div>
        )
    }
}

export default App;
