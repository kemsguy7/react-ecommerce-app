import './index.scss';

const SecondPromotion = () => {
  return (
    <div className="second-promotion">
      <div className="second-promotion__container">
        <div className="second-promotion__info"> 
          <p className="second-promotion__title"> Take advantage of the ongoing ‘Buy one Get One free’ </p>
          <p className="second-promotion__subtitle"> Don't miss out on our incredible 'Buy One, Get One Free' offer! Double your style and savings with this limited-time deal </p>
          <p className="second-promotion__call_to_action"> <button className="second-promotion__call_to_action_button"> Buy Now </button> </p>
        </div> 

        <div className="second-promotion__image"> 
          <img src='../../../../images/second-promotion-image.png'  alt="hero-img" />
        </div>
      </div>
    </div>
  );
}

export default SecondPromotion;
