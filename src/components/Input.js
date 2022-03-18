import React from 'react';
import '../styles/Login.scss'

function Input({type,...props}) {
    return (
     <input className='input' type={type} {...props} />
    )
}

export default Input
