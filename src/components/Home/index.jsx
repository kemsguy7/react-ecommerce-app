
import React from "react";
import { Link } from "react-router-dom";
//import "./index.scss";
import Hero from "./hero";
import Promotion from "./promotion";
import Collection from "./collection";
import SecondPromotion from "./secondPromotion";


const Home = () => {
  
  return (
    <div> 
      <Hero />
      <Promotion />
      <Collection />
      <SecondPromotion />
    </div>
    
  );
};

export default Home;




