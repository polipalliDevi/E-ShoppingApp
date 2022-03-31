import React from "react";
import {Link} from "react-router-dom"
import HeaderOne from "../common components/HeaderOne";
import "./index.css"


function Register(){
return(
    <div className="container">
    <div className="header">
        <HeaderOne/>
    </div>
    <div className="signin">
        <div className="signin-block">
            <h1 className="sigin-heading">Register</h1>
            <form className="signin-form">
                <h3 className="signin-label1">Name</h3>
                <input className="sigin-input1" type='text'/>
                <br/>
                <h3 className="signin-label2">Email</h3>
                <input className="sigin-input2" type='text'/>
                <br/>
                <h3 className="signin-label3">Phone</h3>
                <input className="sigin-input3" type='text'/>
                <br/>
                <h3 className="signin-label4">City</h3>
                <input className="sigin-input4" type='text'/>
                <br/>
                <h3 className="signin-label5">Password</h3>
                <input className="sigin-input5" type='text'/>
                <br/>
                <div className="div-btn">
                    <button className="btn">Register</button>
                </div>
            </form>
            <div className="sign-block">
                <p className="para">Already Have An Account?</p>
                <Link to='/'><button className="sign-btn">Signin</button></Link>
            </div>
        </div>
    </div>


</div>
)
}


export default Register;