import React, { useState } from "react";
import "../styles/Login.css";
import Input from "../components/Input";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth} from "../firebase";
import Navbar from "../components/Navbar";
import {useNavigate} from 'react-router-dom';
import SyncLoader from "react-spinners/SyncLoader";
function Login() {
  const navigate=useNavigate()
  const[isLoading,setIsLoading]=useState(false)
  const [showSignup, setShowSignup] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const login = async () => {
    const { email, password } = values;
            
    setIsLoading(true);
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      if (user) {
                
        setIsLoading(false);
        localStorage.setItem("token", user.user.accessToken);
        navigate('/')
    
        return;
      }
    } catch (error) {
      if (error){
        
        setIsLoading(false);
        
        window.alert("Invalid credentials")};

      console.log(error.message);
    }
  };

  const signup = async () => {
    const { email, password } = values;
    setIsLoading(true)
    try {
      const user = await createUserWithEmailAndPassword(
        auth,

        email,
        password
      );
      if (user) {
        setIsLoading(false)
        window.alert("user created");
      }

      //   setSignup(false);
      //   setIsLoading(false);
      return;
    } catch (error) {
      if (error) {
        setIsLoading(false)
        window.alert(error);

        // setIsLoading(false);
        console.log(error);
      }
    }
  };

 

  return (
    <>
      <Navbar />
     
      <div class="main-login">
        <div className="login-container">
          {!showSignup && (
            <div className="input-container">
              <p className="title">Login</p>
              <p className="label">Email</p>
              <Input
                type="email"
                name="email"
                onChange={handleChange}
                value={values.email}
              />
              <p className="label">Password</p>
              <Input
                type="password"
                name="password"
                onChange={handleChange}
                value={values.password}
              />
              <div className="button-container">
                <a onClick={login} href="#!" className="btn">
                  {isLoading ?  <SyncLoader color='white'  size={10} /> : "Login"}
                </a>
              </div>
              <p className="signup-text" onClick={() => setShowSignup(true)}>
                Don't have an account? <span>Signup</span>
              </p>
            </div>
          )}
          {showSignup && (
            <div className="input-container">
              <p className="title">Signup</p>
              <p className="label">Email</p>
              <Input
                type="email"
                name="email"
                onChange={handleChange}
                value={values.email}
              />
              <p className="label">Password</p>
              <Input
                type="password"
                name="password"
                onChange={handleChange}
                value={values.password}
              />
              <div className="button-container">
                <a onClick={signup} href="#!" className="btn">
                {isLoading ?  <SyncLoader color='white'  size={10} /> : "Signup"}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Login;
