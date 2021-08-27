import React from 'react'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import "./Login.css";

class Login extends React.Component{
constructor(){
     super()
     this.state={

     }
}
render(){
     return(
          <div>
               <div>
                    <Header/>
                    <Navbar/>
               </div>
               <div className = 'loginpage'>
                    <div className='newlogin' id='newloginid'>
                         <h1>New User Login</h1>
                         <h4>Let's get started</h4>
                         <h4>Tell us your phone number to Email</h4>
                         <input type='number' placeholder='enter a mobile number'/>
                         <br/>
                         <br/>
                         <input type='email' placeholder='enter a email-id'/>
                         <br/>
                         <br/>
                         <button>&nbsp;GET OTP&nbsp;</button>
                    </div>
               <hr/>
                    <div className = 'loginname' id='loginid'>
                         <h1>Already Login Account</h1>
                         <label>Mobile - number&nbsp;:</label>
                         <input type='number' placeholder='enter a mobile number'/>
                         <br/>
                         <br/>
                         <label>Email - id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</label>
                         <input type='email' placeholder='enter email-id'/>
                          <br/>
                         <br/>
                         <label>Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</label>
                         <input type='password' placeholder='enter your password'/>
                         <br/>
                         <br/>
                         <button className='loginbutton' id='loginbuttonid'>&nbsp;&nbsp;&nbsp;LOGIN&nbsp;&nbsp;&nbsp;</button>
                    </div>
               </div>
               <div>
                    <Footer/>
               </div>
          </div>
     )
}
}
export default Login;