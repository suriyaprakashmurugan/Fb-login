import React, { useState } from 'react';
import { Col } from 'antd';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { async } from '@firebase/util';


export default function PhoneAuth() {

    const [number, setNumber]  = useState('');
    const [otp, setOtp] = useState('');
    const [valid, setValid] = useState(true);
    const [conformObject, setConformObject] = useState('');

    const setUpRecaptcha = (number) => {
        const recaptchaVerifier = new RecaptchaVerifier(
            'recaptcha-container', {}, auth
        )
        recaptchaVerifier.render();
        return signInWithPhoneNumber(auth, number, recaptchaVerifier)
    }

    const getOTP = async(e) =>{
        e.preventDefault();
        console.log(number);
        try{
            const response = await setUpRecaptcha(number);
            console.log(response);
            setConformObject(response);
            setValid(false);
        }catch(error){
            console.log(error.message);
        }
    }

    const verifyOtp = async(e) =>{
        e.preventDefault();
        console.log(otp);
        try{
            const user = await conformObject.confirm(otp);
            console.log(user);
        }catch(error){
            alert(error.message);
        }
    }

    return (
    <div className ='logIn'>
        <Col>
        <div className='card'>
        
            { valid ?
            <form autoComplete='false'> 
            <label className='inp'>Phone no<br/>
            <PhoneInput defaultCountry='PH'
                placeholder="Enter phone number" value={number} onChange={setNumber}/>
            
            </label><br/> 
            <div id="recaptcha-container" />
            <button className='but-Style' onClick={getOTP}>Send OTP</button><br/><br/>
            
            <Link className='reg-link' to='/emailAuth'>sigin-up with gmail?</Link>
        </form> : 
        <form autoComplete='false'> 
        <label className='inp'>OTP<br/>
        <input className='inputDesign' type='number' onChange={(e)=>{setOtp(e.target.value)}} placeholder='Enter your otp' required/><br/>
        </label><br/> 
        <button className='but-Style' onClick={verifyOtp}>Verify OTP</button><br/><br/>
        
        <Link className='reg-link' to='/emailAuth'>sigin-up with gmail?</Link>
    </form>

            }
            <div className="ggl_but">
              {/* <h2></h2> */}
            </div>
        </div>
        </Col>
    </div>
  )
}

