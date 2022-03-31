import React, { useState, useEffect } from "react"
import HeaderTwo from "../common components/HeaderTwo"
import "./index.css"
import bag from "../images/addtobag.jpg"
import Product from "../Sub-Home/SubHome";
import {Link} from "react-router-dom"


function HomePage() {
    const [isSelected,setIsSelected]=useState(false)
    const [curproductid,setCurProductId]=useState(null)
    const [fake, setFake] = useState([]);
    console.log(fake)
    
    const toggleSelected=()=>{
        setIsSelected(!isSelected)
    }

    const handleClick=(product)=>{
        console.log(product)
        setCurProductId(product)
        toggleSelected()
    }
    let id=curproductid
   // console.log(curproduct)

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
                setFake(productdata.products)
        } catch (error) {
            console.log(error)
        }

    }, [])
    //'https://fakestoreapi.com/products'
 
    //products()

    return (
        <div className="home">
            <div className="home-header">
                <HeaderTwo />
            </div>

            <h2>PRODUCTS HOME PAGE</h2>
            <div className="container1">
                {fake.map((product,index) => {
                    return (
                        <>
                            <div className="box" >
                                <div className="content">
                                    <div>
                                    <img className="image" key={index} src={product.image}></img>
                                    </div>
                                    <div>
                                    <h5 key={index}>{product.title}</h5>
                                    
                                    <h3 className="category" key={index}>Category: {product.category}</h3>
                                    <h2 className="price" key={index}>Price: {product.price}</h2>
                                    <button className="view-buttton" onClick={()=>handleClick(product)}>View</button>
                                    {isSelected && <Product product={curproductid} handleSelected={toggleSelected}/>}
                                    
                                   
                                    </div>
                                </div>
                                
                            </div>
                        </>
                    )
                })}


            </div>
                
        </div>
    )
}

export default HomePage;