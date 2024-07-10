import './index.scss'
const Hero = () => {
  return (
      <div className="hero">
         <div className="hero__info"> 
          <p className="hero__title"> Discover<br/>  your perfect <span class="hero__unique"> sneakers</span> here </p>
          <p className="hero__subtitle"> Explore the latest trends and timeless classics in sneakers, all in one place: from casual kicks to high-performance athletic shoes. We've got your feet covered  </p>
          <p className="hero__call_to_action"> <button className="hero__call_to_action_button"> Explore now </button> </p>
         </div> 

         <div className="hero__image"> 
            <img src='../../../../images/hero-shoe.png'  alt="hero-img" />
         </div>
     
      </div>
  );
}

export default Hero;
