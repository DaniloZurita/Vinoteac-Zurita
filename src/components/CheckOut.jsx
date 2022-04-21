import React from 'react'
import { Link } from 'react-router-dom'

const CheckOut = () => {
    return(
        <>
           <Link to='/cart'><button className='btn-primary'>Cargar en mi carrito!</button></Link>
        </>
    );
}

export default CheckOut;