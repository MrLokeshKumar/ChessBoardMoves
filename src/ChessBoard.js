import React,{ useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {add_x_postion, add_y_postion, addItem} from './actions/chessAction'

const ChessBoard = () => {
    const dispatch = useDispatch()
    const chessReducerData = useSelector(state => state)
    const { xcordVal, ycordVal, movesList } = chessReducerData || {}

    console.log('@lokesh movesList', movesList);

    useEffect(() => {
        addPossibility(xcordVal+2, ycordVal+1)
        addPossibility(xcordVal+2, ycordVal-1)

        addPossibility(xcordVal-2, ycordVal+1)
        addPossibility(xcordVal-2, ycordVal-1)

        addPossibility(xcordVal-1, ycordVal+2)
        addPossibility(xcordVal+1, ycordVal+2)

        addPossibility(xcordVal+1, ycordVal-2)
        addPossibility(xcordVal-1, ycordVal-2)

        
    },[xcordVal,ycordVal])

    const handleButtonPress = (i,j) => {
        dispatch(add_x_postion(i))
        dispatch(add_y_postion(j))
    }

    let possibilities = []
    const addPossibility = (x,y) => {
        possibilities.push([x,y])
        console.log('@lokesh possibilities', possibilities)
        dispatch(addItem(possibilities))

    }

    const checkPositions = (value) => {
        if (
            movesList.some(
              (row) => JSON.stringify(row) === JSON.stringify(value)
            )
          ) {
            return true;
          } else {
            return false;
          }

    }

    const _renderColumns = (i) => {
            let column = []
            if(i%2 == 0){
                for(let j = 0; j < 8 ; j++){
                    console.log('@lokesh j if',j)
                    column.push(
                        <TouchableOpacity style={[
                            styles.columnStyle, 
                            xcordVal == i && ycordVal == j ? {backgroundColor: "green"}  : checkPositions([i,j]) ? {backgroundColor: "pink"} :
                            j%2 == 0 ? {backgroundColor: 'white'} : {backgroundColor: 'black'},
                        ]}
                        onPress={() => handleButtonPress(i,j)}
                        />
                    )
                }
            }else{
                for(let j = 0; j < 8 ; j++){
                    column.push(
                        <TouchableOpacity style={[
                            styles.columnStyle, 
                            xcordVal === i && ycordVal === j ? {backgroundColor: "green"} : checkPositions([i,j])? {backgroundColor: "pink"} :
                            j%2 == 0 ? {backgroundColor: 'black'} : {backgroundColor: 'white'}
                        ]}
                        onPress={() => handleButtonPress(i,j)}
                        />
                    )
                }
            }
            return column
    }

    const _renderRows = () => {
        let rows = [];
        for(let i = 0 ; i < 8 ; i++ ){
            rows.push(
                <View style = {styles.rowStyle}>
                    {_renderColumns(i)}
                </View>
            )
        }
        console.log(rows);
        return rows
    }
    
    return(
        <View style={styles.mainContainer}>
            {_renderRows()}
        </View>
    )}

export default ChessBoard;

const styles = StyleSheet.create({
    mainContainer: {
        width: 400,
        height: 400,
    },
    rowStyle: {
        width: 400,
        height: 50,
        flexDirection: 'row'
    },
    columnStyle: {
        width: 50,
        height: 50,
        
    }
})
