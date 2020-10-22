import React, { Component } from 'react'
class ListItem extends Component {
    // eslint-disable-next-line 
    constructor(props){
        super(props)
    }
    render(){
        const {content,index,delthis}=this.props
        return (
        <li onClick={()=>{delthis(index)}}>{content}---{index}</li>
        )
    }
}

export default ListItem