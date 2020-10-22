
import {createStore} from 'redux'
import rudecer from './rudecer'
const store = new createStore(rudecer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store