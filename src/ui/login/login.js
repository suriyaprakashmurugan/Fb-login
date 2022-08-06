import React, { useState } from 'react';
import { Col } from 'antd';
import { Link } from 'react-router-dom';
import {  auth } from '../../firebase/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";


export default function Login() {

  const [newUser, setNewUser] = useState(null)

  const [loginEmail, setLoginEmail] = useState()
  const [loginPassWord, setLoginPassWord] = useState()

      
      const login = async (e) => {
        e.preventDefault()

        try {
          const users = await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassWord
          );
          setNewUser(users.user);
          console.log(users);
        } catch (error) {
          console.log(error.message);
        }
      };

  return (
    <div className ='logIn'>
        <Col>
        <div className='card'>
        
            <form autoComplete='false'> 
                <label className='inp'>Email<br/>
                    <input className='inputDesign' type='email' onChange={(e)=>{setLoginEmail(e.target.value)}} placeholder='Enter your email ' required/><br/>
                
                </label><br/>
                <label className='inp'>Password<br/>
                    <input className='inputDesign' type='Password' onChange={(e)=>{setLoginPassWord(e.target.value)}} placeholder='Enter your password' required/><br/>
                
                </label><br/> 
                <button type='submit' className='but-Style' onClick={login}>login</button><br/>
                <Link className='reg-link' to='/sigup'>Your new user please Register here?</Link><br/><br/>
                <Link className='reg-link' to='/phoneAuth'>sigin-up with phone?</Link>
            </form>
            <div className="ggl_but">
              <h2>{newUser?.email}</h2>
            {/* <GoogleButton type="light" onClick={signInWithGoogle}/> */}
            </div>
        </div>
        </Col>
    </div>
  )
}