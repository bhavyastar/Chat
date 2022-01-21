import React, { useState } from 'react'
import Cookies from 'universal-cookie';
import axios  from 'axios';
import signinImage from '../assets/signup.jpg';
const Auth = () => {
    const [ isSignup, setISignup ] = useState(true);
    const handleChange = () => {}
    return (
        <div className="auth__form-container">
             <div className="auth__form-container_fields">
                 <div className="auth__form-container_fields-content">
                     <p>{isSignup? 'Sign Up' : 'Sign In'}</p>
                     <form onsubmit={() => {}} >
                           { isSignup &&  (
                               <div className="auth__form-container_fields-content_in">
                                   <label htmlFor="fullName">Full Name</label>
                                   <input 
                                       name="fullName"
                                       type="text"
                                       placeholder="Full Name"
                                       onChange={handleChange}
                                       required
                                    />
                               </div>
                           )}
                           </form>
                 </div>
            
        </div>
        </div>    
        )
}

export default Auth
