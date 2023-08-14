import React, { useState } from 'react'
import "./Cart.scss"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useDispatch, useSelector } from 'react-redux';
import { removeItem,emptyCart } from '../../redux/cartReducer';

const Cart = () => {
    const products = useSelector(state => state.cart.products);
    const dispatch = useDispatch();
    const totalPrice = () => {
        let total = 0;
        products.forEach((item) => { total += item.quantity * item.price; 
        })
        return total.toFixed(2);
    }
    return (
        <div className="cart">
            <h1>Your Orders</h1>
            {
                products?.map((item) => (
                    <div className="item" key={item.id}>
                        <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
                        <div className="details">
                            <h1>{item.title}</h1>
                            <p>{item.desc?.substring(0, 30)}</p>
                            <div className="price">{item.quantity} x ₹ {item.price}</div>
                        </div>
                        <DeleteOutlinedIcon className='delete' onClick={()=> dispatch(removeItem(item.id) )} />
                    </div>
                ))
            }
            <div className="total">
                <span>SUBTOTAL</span>
                <span>₹ {totalPrice()}</span>
            </div>
            <button> PLACE YOUR ORDER</button>
            <span className="reset" onClick={()=>dispatch(emptyCart() )}>Empty your List</span>
        </div>
    )
}

export default Cart