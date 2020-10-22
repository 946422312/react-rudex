import React, { Component } from 'react'
import './list.css'

import ListItem from './ListItem'
import axios from 'axios'
class MyList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            liArr: ["ssss"],
            value: '',
            sssz:'ss11sss'
        }
        this.delThis.bind(this)
    }
    componentDidMount(){
        axios.get('/api/toDolist').then().catch(()=>{
            this.setState(()=>({liArr:[123,456]}))
        })
    }
    render() {
        return (
            <div>
                <input type='text' value={this.state.value} onChange={(e) => { this.hanldchange(e) }} />
                <button onClick={(e) => { this.addNew(e) }}>新增</button>
                <ul ref={(ul)=>{this.ul=ul}}>
                  {this.state.liArr.map((item,index)=>{
                      return <ListItem delthis={this.delThis.bind(this)} index={index} key={index} content={item}></ListItem>
                  })}

                </ul>
            </div>
        )
    }
    hanldchange(e) {
        console.log(e.target.value)
        this.setState({
            value: e.target.value
        })
    }
    addNew() {
        let list = [...this.state.liArr];
        list.push(this.state.value)
        this.setState({
            liArr: list,
            value: ''
        },()=>{
            console.log('ref使用'+this.ul.querySelectorAll('li').length)
        })
    }
    delThis(v) {
        console.log(v)
        debugger
        const list=[...this.state.liArr];
        list.splice(v,1)
        this.setState({
            liArr:list
        })
    }



}

export default MyList