import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Col } from 'antd';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/firebase';


export default function Sigup() {

    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [passWord, setPassWord] = useState('');

    const register = async (e) => {
        e.preventDefault()

        try {
          const user = await createUserWithEmailAndPassword(
            auth,
            email,
            passWord
          );
          navigate('/');
          console.log(user);
        } catch (error) {
          console.log(error.message);
        }
      };

    return (
        <div className ='logIn'>
            <Col>
            <div className='card'>
            
                <form autoComplete='false'> 
                    
                    <label className='inp' >Email id<br/>
                        <input placeholder='Enter email' className='inputDesign' type='email' onChange={(e)=>setEmail(e.target.value)} required/><br/>
                    
                    </label><br/>
                    <label className='inp' >Password<br/>
                        <input placeholder='Enter password' className='inputDesign' type='Password' onChange={(e)=>setPassWord(e.target.value)} required/><br/>
                    
                    </label><br/> 
                    <button className='but-Style' onClick={register}>Register</button><br/>
                    <Link className='reg-link' to='/'>Excisting user to Login?</Link>
                </form>
            </div>
            </Col>
        </div>
      )
}

