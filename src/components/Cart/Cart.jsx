import React from 'react';
import "./Cart.css"

const Cart = ({cart}) => {
    // console.log(cart)
    // const{cart}=props
    let total=0;
    for (const product of cart){
        total=total+product.price
    }
    return (
        <div className='cart'>
             <h4>Order Summary</h4>
             <p>Selected Items:{cart.length}</p>
             <p>Total Price:{total}</p>
             <p>Total Shipping Charge:</p>
             <p>Tax:</p>
             <p>Grand Total:</p>

        </div>
    );
};

export default Cart;