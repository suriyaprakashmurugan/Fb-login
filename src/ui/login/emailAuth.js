import React, { useRef } from 'react'
import { auth } from '../../firebase/firebase';
import { Col } from 'antd';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";

const EmailAuth = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const signIn = e => {
        e.preventDefault();

// const auth = getAuth();
signInWithEmailAndPassword(auth, emailRef.current.value,
    passwordRef.current.value)
  .then((userCredential) => {
    // Signed in 
    console.log(userCredential.user)
    // ...
  })
  .catch((error) => {
     console.log(error.code);
     console.log(error.message);
  });
    }
    return (
        
        <div className ='logIn'>
        <Col>
        <div className='card'>
        
            <form autoComplete='false'> 
                <label className='inp'>Email<br/>
                    <input className='inputDesign' ref={emailRef} type="email" />                
                </label><br/>
                <label className='inp'>Password<br/>
                <input className='inputDesign' ref={passwordRef} type="password" />
                    
                
                </label><br/> 
                <button type='submit' className='but-Style' onClick={signIn}>login</button><br/>
                <Link className='reg-link' to='/phoneAuth'>sigin-up with phone?</Link>
            </form>
        </div>
        </Col>
    </div>
    )
}

export default EmailAuth;