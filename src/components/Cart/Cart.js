import React from 'react';
import './Cart.css'

const Cart = ({cart,handleremovetocart}) => {
    let message;
    if(cart.length==0)
    {
        message=<p>please at lest buy one iteam!!!!</p>
    }
    else{
        message=<p>
            Thank you for buying happy day !!!
        </p>
    }
    return (
        <div>
            <h2>Order summary</h2>
            <h5>Order quantity:{cart.length}</h5>
        {
            cart.map(tshirt=><p>{tshirt.name} 
            <button className='btn' onClick={()=>handleremovetocart(tshirt)}>X</button></p>)
        }
        {
            message
        }
        </div>
    );
};

export default Cart;