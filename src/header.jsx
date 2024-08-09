import React from "react";


function  Header(){
    return(
        <div>
        <div class="topnav">
        <a class="active" href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <div class="search-container">
          <form action="/action_page.php">
          <input type="text" placeholder="Search.." name="search"></input>
          </form>
        </div>
      </div>
      </div>
    )
};

export default Header;