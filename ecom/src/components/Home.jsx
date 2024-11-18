import React from 'react';
import "./Home.css"
import { Link } from 'react-router-dom';
const Home = () => {
   

  return (
  <div>
   
    <div className="title1"> <h1 >Shopping</h1></div>
    <div className="heading"> <p className="categ">Categories</p> </div>
<div className="one" >
    <div className="items">
    <div className="items1">

   
    <Link className="mens"to="/Mens">
    <div className="men" >
       Men's Shopping 
    </div>
    </Link>
  
    <Link className="womens" to="/Womens">
    <div className="women" >
         Women's Shopping 
    </div>
    </Link>
    </div>
    
</div>
<br/>
<div className="two">
    <div className="items2">
    <Link className="electronicss" to="/Electronic">
    <div className="electronics" >
 Electronics
    </div>
    </Link>
    <Link className="jewelerys" to="/Jewelerys">
    <div className="jewelery" >
        Jewellerys
    
    </div>
    </Link>
      </div>
      </div>
</div> 
   </div>

  )
}

export default Home;