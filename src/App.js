import { useState } from 'react';
import { signOut } from 'firebase/auth';
import './App.css';
import { auth, googleProvider, fbProvider, githubProvider} from './firebase';

function App() {

  const [user, setUser] = useState(null);

  const googleLogin = async() => {
    try{
      await auth.signInWithPopup(googleProvider);
      setUser(await auth.currentUser);
      // console.log(auth)
    }catch(error){
      console.log(error)
    }
  }

  const FacebookLogin = async() => {
    try{
      await auth.signInWithPopup(fbProvider);
      setUser(await auth.currentUser);
    }catch(error){
      console.log(error)
    }
  }

  const GithubLogin = async() => {
    try{
      await auth.signInWithPopup(githubProvider);
      setUser(await auth.currentUser);
    }catch(error){
      console.log(error)
    }
  }

  const LoginOut = () => {
    signOut(auth).then(()=>{
      setUser(null)
      // console.log(auth)
    }).catch((error)=>{
      console.log(error)
    })
  }

  return (
    <div>
    <div className="App">
      <div className='btn' onClick={googleLogin}>
        <img className='btn-img' src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png' alt='Google'/>
        <button className='dom-but'>Google Sign-up</button>
      </div>
      <div className='btn' onClick={FacebookLogin}>
        <img className='btn-img' src='https://seeklogo.com/images/F/facebook-icon-circle-logo-09F32F61FF-seeklogo.com.png' alt='Google'/>
        <button className='dom-but'>Facebook Sign-up</button>
      </div>
      <div className='btn' onClick={GithubLogin}>
        <img className='btn-img' src='https://cdn.icon-icons.com/icons2/2368/PNG/512/github_logo_icon_143772.png' alt='Google'/>
        <button className='dom-but'>Github Sign-up</button>
      </div>
      
    </div>
    <h1>{user?.email}</h1>
    {
      user?
      <div className='btn' onClick={LoginOut}>
        <button className='out-but'>Sign-out</button>
      </div> :''

    }
    </div>
  );
}

export default App;
