import React, { Component, Fragment } from 'react';
import './views/list.css'
import 'antd/dist/antd.css';
import { Input, Button, List } from "antd"
import store from './store'
import {actionChangeInput,actionChangeList,actionDelItem} from './store/actionCreateor'
class App extends Component {
  constructor(props) {
    super(props)
    this.hanldSubscribe=this.hanldSubscribe.bind(this) //this指向改变必须放置store订阅之前才能绑定给当前组件
    this.submitValue=this.submitValue.bind(this)
    // this.delThisItem=this.delThisItem.bind(this)
    this.state = store.getState()
    store.subscribe(this.hanldSubscribe)
  }
  hanldSubscribe(){
    this.setState(()=>(store.getState()))
  }
  hanldChange(e){
    let action=actionChangeInput(e.target.value)
    store.dispatch(action)
  }
  submitValue(){
    console.log(JSON.stringify(this.state.inputValue))
    let action=actionChangeList(this.state.inputValue)
    store.dispatch(action)
  }
  delThisItem(index){
    let action=actionDelItem()
    store.dispatch(action)
  }
  render() {
    return (
      <Fragment>
        <Input placeholder="请输入" value={this.state.inputValue} onChange={this.hanldChange} style={{ "width": "300px" }}></Input><Button onClick={this.submitValue} type="primary">提交</Button>
        <List 
          bordered
          dataSource={this.state.list}
          style={{ "width": "300px" }}
          renderItem={(item,index) => (
            <List.Item onClick={this.delThisItem.bind(this,index)}>
              {item}
            </List.Item>
          )}
        />
        <List>

        </List>
      </Fragment>
    )
  }
}

export default App;