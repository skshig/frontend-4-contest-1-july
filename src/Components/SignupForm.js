import React, { useState } from 'react'
import photo from "../images/photo.jpg"

const SignupForm = ()=>{
let [name, setName] = useState("");
let [email, setEmail] = useState("");
let [password, setPassword] = useState("");
let [confirmPassword, setconfirmPassword] = useState("");
let [error, setError] = useState("");
let [successMessage, setSuccessMessage] = useState("")

function formSubmit(event){
    event.preventDefault();
    if(name === "" || email === "" || password === "" || confirmPassword === ""){
        setError("Please do not leave any fields empty")
    if(name == "" ){
        setError("Name cannot be empty")
            return
    }
    if( email=="" ){
        setError("email cannot be empty")
            return
    }
    if(password==""){
        setError("Password cannot be empty")
        return
    }
    if(confirmPassword=="" ){
        setError("Confirm Password cannot be empty")
        return
    }
    if(password !== confirmPassword){
        setError("Password and comfirm Password do not match")
    }
}
    else {
        setSuccessMessage("Form Submitted Successfully!")
    }
}
    return (
        <div className='signup-form'>
            <div className='pic'>
                <img src={photo} alt="" />
            </div>
            <form  className="complete-form">
                <header>
                    <div className="heading-section">
                        <span><h1>Create Account</h1></span>
                    </div>
                </header>
                <div className='signup-with'>
                    <h3>Signup with Google</h3>
                    <h3>Signup with Facebook</h3>
                    </div>
                <main className="form-fields">
                    <div className="inputs">
                        <div className="name"><label htmlFor="name"></label><br/>
                        <input type="text" name="name" placeholder='Full Name' onChange={(event)=>setName(event.target.value)} />
                    </div>

                        <div className="email"><label htmlFor="email"></label><br/>
                        <input type="email" name="email" placeholder='Email' onChange={(event)=>setEmail(event.target.value)} />
                    </div>

                        <div className="password">
                           <div className="password"><label htmlFor="password"></label><br/>
                            <input type="password" name="password" placeholder='Password' onChange={(event)=>setPassword(event.target.value)} />
                        </div>

                        <div className="confirm-password"><label htmlFor="confirm-password"></label><br/>
                            <input type="password" name="confirm-password" placeholder='Confirm Password' onChange={(event)=>setconfirmPassword(event.target.value)}  />
                        </div>
                        </div>
                   
                    <div className="signup-button">
                        <label htmlFor="signup"></label>
                        <button type="submit" name="signup" value="Signup" onClick={formSubmit} >Create Account</button>
                    </div>
                    </div>
                </main>
            </form>

            {
            error && 
                <p>{error}</p>
                }
            {
                !error && 
                <p>{successMessage}</p>
            }
            </div>
    )
}

export default SignupForm;
