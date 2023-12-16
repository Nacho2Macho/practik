import React from 'react'
import '../HelloUser/Hello.scss';

export default function Hello() {
    return (
        <h2 className='hello'>Hello, <span className='hello__user'>Человек</span></h2>
    )
}
