import React from "react";
import HeaderOne from "../common components/HeaderOne";
import Footer from "../common components/Footer";
import "./index.css";
import { Link } from "react-router-dom"

//import style from "./index.module.css"

function Signin() {
    return (
        <div className="container">
            <div className="header">
                <HeaderOne />
            </div>
            <div className="signin">
                <div className="signin-block">
                    <h1 className="sigin-heading">SignIn</h1>
                    <form className="signin-form">
                        <div className="email-block">
                            <h3 className="">Email/Phone</h3>
                            <input type="text" className="sign-form"></input>
                        </div>
                        <div className="pass-block">
                            <h3 className="signin-label">Password</h3>
                            <input type="password" className="sign-form"></input>
                        </div>
                        <p className="sign-forgot">Forgot Password?</p>
                        <button type="sumbit" className="sign-sumbit-btn">SignIn</button>
                    </form>
                    <div className="reg-block">
                        <p className="reg-para">Don't Have Any Account?</p>
                        <Link to='/register'><button type="sumbit" value="Register" className="reg-sumbit-btn">Register</button>
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Signin;