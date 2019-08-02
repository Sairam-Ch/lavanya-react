import React from 'react';
import { tsPropertySignature } from '@babel/types';
import { pseudoRandomBytes } from 'crypto';
import './Person.css';
const person = (props) => {
    return(
        <div className = 'Person'>
        <p onClick={props.click}>My name is {props.name} and the mobile number is {props.mobile}         <br/>
        </p>
        <input type="text" onChange={props.changed}  />
        </div>
    );
}

export default person
