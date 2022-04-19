import { Button } from 'bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'

const CheckOut = () => {
    return(
        <>
           <Link to='/cart'><button className='btn-primary'>Finalizar Compra</button></Link>
        </>
    );
}

export default CheckOut;