import {createStore } from 'redux'
import {chessReducer} from './reducers/chessReducer'

const store = createStore(chessReducer);

export default store;