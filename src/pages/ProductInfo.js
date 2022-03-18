import React, { useEffect } from "react";
import "../styles/ProductInfo.css";
import Navbar from "../components/Navbar";
import {Context} from '../Context'
import {useContext} from 'react';
import gsap from "gsap";


function ProductInfo() {
 const {handleCart,item}=useContext(Context)

useEffect(()=>{
  gsap.from(".shoe-image",{
    opacity:0,
    stagger:.1,
    delay:.3,
    ease: "power2.inOut",
    scale:3

  })
  gsap.from(".title",{
    opacity:0,
    stagger:.1,
    delay:.3,
    ease: "power2.inOut",


  })
  gsap.from(".price",{
    opacity:0,
    stagger:.2,
    delay:.5,
    ease: "power2.inOut",

  })
  gsap.from(".desc",{
    opacity:0,
    stagger:.2,
    delay:.7,
    ease: "power2.inOut",

  })
  gsap.from(".btn",{
    opacity:0,
    stagger:.2,
    delay:.9,
    ease: "power4.inOut",
    scale:2

  })

},[])



  return (
    <>
      <Navbar />
      <div className="container">
        <div className="container-img">
          <img
            src={item.image}
            alt="shoe"
            className="shoe-image"
          />
        </div>
        <div className="shoe-details">
          <p className="title">{item.name}</p>
          <p className="price">Price: ${item.price}</p>

          <p className="desc-title">Description:</p>
          <p className="desc">
           {item.description}
          </p>

          <a href="#!" className="btn" onClick={()=>handleCart(item)}>
            add to cart
          </a>
        </div>
      </div>
    </>
  );
}

export default ProductInfo;
