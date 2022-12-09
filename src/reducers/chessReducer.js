import {ADD_ITEM, ADD_X_POSITION, ADD_Y_POSITION} from '../actions/chessAction'

const initialState = {
    movesList: [],
    xcordVal: '',
    ycordVal: ''
}

export const chessReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_ITEM:
            console.log('@lokesh action', action);
            return ({
                ...state,
                movesList: action.payload
            })
        case ADD_X_POSITION:
            return ({
                ...state,
                xcordVal: action.payload
            })
        case ADD_Y_POSITION:
            return ({
                ...state,
                ycordVal: action.payload
            })
        default:
            return state
    }
}