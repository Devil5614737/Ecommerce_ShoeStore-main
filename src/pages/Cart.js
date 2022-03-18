import React, { useEffect,useState } from 'react';
import '../styles/Cart.css';
import TrashIcon from '../assets/TrashIcon.svg';
import Navbar from '../components/Navbar';
import {useContext} from 'react';
import {Context} from '../Context'
import {useNavigate} from 'react-router-dom'
import { Scrollbars } from 'react-custom-scrollbars';


function Cart() {
    const navigate=useNavigate()
    let [dis,setDis]=useState()
   const {cartItems,handleDelete,increaseQuantity,decreaseQuantity}=useContext(Context)

   let quantityCount=cartItems.map(item=>item.quantity)


   let totalQuantity=quantityCount.reduce((a,b)=>a+b,0)


   useEffect(()=>{
       let discount=Math.floor(Math.random() *50)
       setDis(discount)

   },[])

   let price=cartItems.map(item=>
       item.price * item.quantity
   )

   let total=price.reduce((a,b)=>a+b,0)

   let totalPrice=Math.floor(total - (dis/100 * total))
  

   let a=cartItems.map(item=>item.name)

const handlePurchase=()=>{
    window.alert(`Your purchased: ${a}`  )
}

    return (
        <>
        <Navbar/>

     <div className="container">
{cartItems.length<=0 ?  <p className="empty-text">
      your cart is empty {!localStorage.getItem('token') && <span onClick={()=>navigate('/login')}>login</span>}
  </p> : <Scrollbars autoHide='true' style={{ width: 500, height: 400 }}>
       <div className="cart-items">
                {cartItems.map(items=>  <div className="cart-item">
                     <img className='cart-item-image' src={items.image} alt="" />
                     <p className="cart-item-name">{items.name}</p>
                    <div onClick={()=>increaseQuantity(items)} className="qty-btn" >
                        +
                    </div>
                    <p className="quantity">
                        {items.quantity}
                    </p>
                    <div  className="qty-btn" onClick={()=>decreaseQuantity(items)} >
                        -
                    </div>
                    <img onClick={()=>handleDelete(items)} src={TrashIcon} alt="icon" className="delete-icon" />
                 </div>)}
      
      
             </div>
  </Scrollbars>}
 
        
         <div className="cart-price-info">
             <div className="cart-title">
                 <p> Quanity</p>
                 <p className='count'>x{totalQuantity}</p>
             </div>
             <div className="cart-title">
                 
                 <p> Discount</p>
                 <p className='count'>{dis}%</p>
             </div>
             <div className="line"></div>
             <div className="cart-title">
                 <p> Total</p>
                 <p className='count'>${totalPrice}</p>
             </div>
             <a href="#!" className="checkout-btn" onClick={handlePurchase}>checkout</a>
         </div>
     </div>
     </>
    )
}

export default Cart
