import React from "react";
import Signup from "./signup.css"

const signup = ()=>{
    return(
        <div>
        <form action="/signup" method="post">
        <div class="container">
        <p>Sign   up   for   our   daily   insider <label for="email"><b>Email</b></label>
        <input type="email" placeholder="Enter Email" name="email" required/></p>
       
        <div class="clearfix">
            <button type="submit" class="signupbtn">subscribe</button>
        </div>
       </div>
       </form>
       </div>
    )
};

export default signup;