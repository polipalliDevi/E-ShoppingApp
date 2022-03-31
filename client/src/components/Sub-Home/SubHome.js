import React, { useEffect } from "react";
import "./index.css";
import HeaderTwo from "../common components/HeaderTwo";
import Footer from "../common components/Footer"

function Product(props){
    console.log(props.product)
    //let id=props._id

    return (
        
       <div className="product-main">
           <div className="product-popup">
           <div className="home-header">
                <HeaderTwo />
            </div>
            <div className="product">
                <div className="product-content">
                <img  classNmae="product-image" src={props.product.image}></img>
                <div>
                <h5 className="prodcut-titile">Title: {props.product.title}</h5>
                <h3 className="prodcut-des">Description: {props.product.description}</h3>
                <h5 className="product-cat">Category: {props.product.category}</h5>
                <h2 className="proudct-price">Price: {props.product.price}</h2>
                <button className="product-cart">Add To Cart</button>
                </div>
                
                <button className="product-close" onClick={()=>props.handleSelected()}>X</button>
                </div>
                
            </div>
            <div>
                <Footer/>
            </div>
            </div>

       </div>
    )
}

export default Product;