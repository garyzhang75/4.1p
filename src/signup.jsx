import React from "react";
import Signup from "./signup.css"

const signup = ()=>{
    return(
        <div>
        <form action="/signup" method="post">
        <div class="container">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
        <hr/>
        <label for="email"><b>Email</b></label>
        <input type="email" placeholder="Enter Email" name="email" required/>
        <div class="clearfix">
            <button type="submit" class="signupbtn">Sign Up</button>
        </div>
       </div>
       </form>
       </div>
    )
};

export default signup;