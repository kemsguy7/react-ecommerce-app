
import React from "react";
import { Link } from "react-router-dom";
//import "./index.scss";
import Hero from "./hero";
import Promotion from "./promotion";
import Collection from "./collection";


const Home = () => {
  
  return (
    <div> 
      <Hero />
      <Promotion />
      {/* <Collection /> */}
    </div>
    
  );
};

export default Home;




