import React from 'react'
import { useState, useReducer } from 'react'

export default function Cal() {
    function reducer (state, action){
        switch (action.type) {
            case '+': return {...state, count: action.a + action.b}
            case '-': return {...state, count: action.a - action.b}
            case '*': return {...state, count: action.a * action.b}
            case '/': return {...state, count: action.a / action.b}
            default: return state
        }
    }

    var [result, dispatch] = useReducer(reducer, {count: 0})
    var [a, setA] = useState(0)
    var [b, setB] = useState(0)

    function handleClick(operator) {
        dispatch({ type: operator, a, b });
    }

    function setValueA(e){
        setA(parseInt(e.target.value))
    }

    function setValueB(e){
        setB(parseInt(e.target.value))
    }

    return (
    <>
        <input type="text" onChange={setValueA}/>
        <br/>
        <input type="text" onChange={setValueB}/>
        <br />
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('/')}>/</button>
        <br />
        <span>{result.count}</span>
    </>
  )
}
