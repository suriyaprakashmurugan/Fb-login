import React from 'react';
import { auth } from '../../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom'

export default function Content() {
  const navigate = useNavigate()
  const [user, loading, error] = useAuthState(auth);
  
  console.log(loading, error)
  
  const handleSignout = ()=>{
    auth.signOut();
    navigate('/')
  }
  return (
    <div>
        <h5>hello</h5><h1>Mr {user?.displayName}</h1>
        <button onClick={handleSignout}>SignOut</button>
    </div>
  )
}
