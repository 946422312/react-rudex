import {CHANGE_INPUT_VALUE, CHANGE_LIST, DEL_ITEM} from './actionTypes'
const actionChangeInput=(value)=>{
    return {
        value,
        type:CHANGE_INPUT_VALUE
    }
}
const actionChangeList=(value)=>{
    return {
        value,
        type:CHANGE_LIST
    }
}
const actionDelItem =(value)=>{
    return {
        value,
        type:DEL_ITEM
    }
}
export  {
    actionChangeInput,
    actionChangeList,
    actionDelItem
}