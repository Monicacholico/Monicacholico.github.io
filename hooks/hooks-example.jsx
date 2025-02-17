import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Hello from './hello';
import {someAction} from '../../redux/action';

const HooksExample = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const[isToggled, setIsToggled] = useState(false);
    // const isToggled = useSelector(state => state.myReducer.isToggled); // for second example of this
    const dispatch = useDispatch()

    const handleClick = () => {
        setIsToggled(!isToggled);
    }
    // const handleClick = () => {   // for second example
    //     dispatch(someAction(!isToggled));  
    // }

    //componentDidMount, componentWillUpdate + more in one;

    // useEffect(() => {
    //     console.log("Render Me in HooksExample");

    //     return () => {
    //         console.log("My Component is now unmounting")
    //     }
    // }, [firstName])
    
    // return <h1>Second Example</h1>;
    return ( 
        <React.Fragment>
            <input placeholder="FirstName" onChange={(e) => {setFirstName(e.target.value)}} />
            <input placeholder="LastName" onChange={(e) => {setLastName(e.target.value)}} />
            <button type="button" onClick={handleClick}>
                Click me!
            </button>
            <p>{firstName + "" + lastName} </p>
            {isToggled && <Hello/>}
        </React.Fragment>
    );
};


export default HooksExample;
///// Example with hook useEffect

import React, {useEffect} from 'react';

const Hello = () => {
    useEffect( () => {
        console.log("Render Me in Hello!")

        return () => {
            console.log("my component is now unmounting")
        }
    }, [])
    return <h1>Second component</h1>
}

export default Hello;