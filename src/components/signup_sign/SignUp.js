import React from 'react'
import { NavLink } from 'react-router-dom';
import './signup.css';
import { Divider } from '@mui/material';
import { useState } from 'react';

const SignUp = () => {

    const[udata,setData]=useState({
        fname:"",
        email:"",
        mobile:"",
        password:"",
        cpassword:""
    });

    const adddata=(e)=>{
        const{name,value}=e.target;
    }

  return (
    <section>
    <div className="sign_container">
        <div className="sign_header">
            <img src="./blacklogoamazon.png" alt="signupimg" />
        </div>
        <div className="sign_form">
            <form>
                <h1>Create account</h1>
                <div className="form_data">
                    <label htmlFor="name">Your name</label>
                    <input type="text"
                    onChange={adddata}
                    value={udata.fname}
                    name="fname" />
                </div>
                <div className="form_data">
                    <label htmlFor="email">email</label>
                    <input type="email"
                    onChange={adddata}
                    value={udata.email}
                    name="email" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="mobile">Mobile number</label>
                            <input type="number" 
                            onChange={adddata}
                            value={udata.mobile}
                            name="mobile"/>
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type="password" 
                            name="password"
                            onChange={adddata}
                            value={udata.password}
                             placeholder="At least 6 characters" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="passwordg">Password again</label>
                            <input type="password"
                            onChange={adddata}
                            value={udata.cpassword}
                            name="cpassword" />
                        </div>
                        <button type="submit" className="signin_btn" >Continue</button>

                        <Divider />

                        <div className="signin_info">
                        <p>Already have an account?</p>
                        <NavLink to="/login">Sign in</NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </section>

  )
}

export default SignUp
