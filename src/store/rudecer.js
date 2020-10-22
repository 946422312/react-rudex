

import {CHANGE_INPUT_VALUE,CHANGE_LIST,DEL_ITEM} from './actionTypes'
const defaultState={
    list:[1,2],
    inputValue:''
}
export default (state=defaultState,action)=>{
    // eslint-disable-next-line 
    if(action.type===CHANGE_INPUT_VALUE){
        let newState=JSON.parse(JSON.stringify(state))
        newState.inputValue=action.value
        return newState
    }
    if(action.type===CHANGE_LIST){
        let newState=JSON.parse(JSON.stringify(state))
        newState.list=[...newState.list,action.value]
        newState.inputValue=""
        return newState
    }
    if(action.type===DEL_ITEM){
        const newState=JSON.parse(JSON.stringify(state))
        newState.list=newState.list.splice(action.value,1)
        return newState
    }
    return state
}