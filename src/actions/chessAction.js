export const ADD_ITEM = 'ADD_ITEM';
export const ADD_X_POSITION = 'ADD_X_POSITION';
export const ADD_Y_POSITION = 'ADD_Y_POSITION';

export const addItem = (item) => ({
    type: ADD_ITEM,
    payload: item
})

export const add_x_postion = (item) => ({
    type: ADD_X_POSITION,
    payload: item
})

export const add_y_postion = (item) => ({
    type: ADD_Y_POSITION,
    payload: item
})