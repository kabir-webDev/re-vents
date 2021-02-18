import React from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { ADD_NAME, decrement, increment} from './testReducer';

function Sandbox() {
    const dispatch = useDispatch();
    const data = useSelector(state => state);
    console.log(data);
    return (
        <div>
            <h1>Sandbox</h1>
            <h2>Updated Number is: {data.data}</h2>
            <Button onClick={()=> dispatch(increment(2))} content="INCREMENT" color='teal'/>
            <Button onClick={()=> dispatch(decrement(1))} content="DECREMENT" color='red'/>
            <Button onClick={()=> dispatch({type: ADD_NAME})} content="Add User" color='green'/>
        </div>
    )
}

export default Sandbox
