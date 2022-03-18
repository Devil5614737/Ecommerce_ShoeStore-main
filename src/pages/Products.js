import React from "react";
import "../styles/Products.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Context } from "../Context";
import { useContext, useEffect } from "react";
import Input from "../components/Input";
import gsap from "gsap";

function Products() {
  const { data, productDesc, loading, searchTerm, setSearchTerm } =
    useContext(Context);
  const navigate = useNavigate();

  const showInfo = () => {
    navigate("/productInfo");
  };

  let t1 = gsap.timeline();

  useEffect(() => {
    t1.from(".card", {
      opacity: 0,
      duration: 0.12, // seconds
      delay: 0.5,
      ease: "power1.inOut",
      stagger: .1,
      scale: -1,
      
    //   y: 132,
    //   x: 200,
    });
  },[]);

  return (
    <>
      <Navbar />
      <div className="cards">
        <Input
          id="searchBar"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeHolder="search by name"
          autofocus="true"
        />
        {loading ? (
         <p style={{fontSize:'3rem'}}>Loading....</p>
        ) : (
          <div className="card-container" onClick={showInfo}>
            {data
              .filter((shoe) => {
                if (searchTerm === "") {
                  return shoe;
                } else if (
                  shoe.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return shoe;
                }
              })
              .map((items) => (
                <div className="card" key={items.id}>
                  <img
                    onClick={() => productDesc(items)}
                    className="card-image"
                    src={items.image}
                    alt="  shoe"
                  />
                  <div className="price-container">
                    <p className="shoe-name">{items.name}</p>
                    <p className="shoe-price">${items.price}</p>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Products;
