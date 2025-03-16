import React from 'react'
import { useState, useReducer } from 'react'

export default function PlusMinus() {
    const [count, setCount] = useState(0)

  function reducer (state, action){
    console.log(action);
    switch (action.type) {
      case '+': return {...state, count: state.count + 1}
      case '-': return {...state, count: state.count - 1}
      default: return state
    }
  }

  var [result, dispatch] = useReducer(reducer, {count: 0})

  function handleClickPlus (){
    dispatch({type: '+'})
  }

  function handleClickMinus (){
    dispatch({type: '-'})
  }
  return (
    <>
        <span>{result.count}</span>
        <br/>
        <br/>
        <button onClick={handleClickPlus}>+</button>
        <button onClick={handleClickMinus}>-</button>
    </>
  )
}
