import React, { useEffect, useState } from "react"
import HeaderTwo from "../common components/HeaderTwo";
import "./index.css"

function UserProducts(){
    const [items,setItems]=useState([])
    
    useEffect(async() => {
        try {
                const response = await fetch('http://localhost:5000/products',{
                    method:'GET',
                    mode:'cors',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Credentials':'true'
                      }
                })
                const productdata = await response.json();
                console.log(productdata)
                if (!productdata.status === 200) {
                    const error = new Error(response.error);
                    throw error;
                }        
                setItems(productdata.products)
        } catch (error) {
            console.log(error)
        }

    }, [])
    return(
        <div className="user-main">
            <div className="user-header">
                <HeaderTwo/>
            </div>
            <h2>YOUR PRODUCTS PAGE</h2>
            <div className="user-cont">
                {items.map((item)=>{
                    return (
                        <div className="user-box">
                        <div className="user-bx-cont">
                            <div>
                            <img className="user-image" src={item.image}/>
                            </div>                     
                        
                        <div>
                            <h5>{item.title}</h5>
                            <h3>{item.category}</h3>
                            <h2 className="user-price">Price: {item.price}</h2>
                            <button className="user-remove-btn">Remove from Cart</button>
                        </div>
                        </div>
                    </div>
                    )
                })}
   
            </div>
        </div>
    )
}

export default UserProducts;