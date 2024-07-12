import './index.scss'
import {ContactSupport, DeliveryIcon, DiscountIcon} from '../../../assets'


const Promotion = () => {
  return (
      <div className="promotion">
         <div className="promotion__container"> 
            <div className="promotion-items">
                <div className="promotion-item">
                <p className="promotion-item__icon">  </p>
                <p className="promotion-item__title"> Free shipping </p>
                <p className="promotion-item__description"> On all orders over $75 </p>
                </div>
                <div className="promotion-item">
                <p className="promotion-item__icon">  </p>
                <p className="promotion-item__title"> Free shipping </p>
                <p className="promotion-item__description"> On all orders over $75 </p>
                </div>
                <div className="promotion-item">
                <p className="promotion-item__icon">  </p>
                <p className="promotion-item__title"> Free shipping </p>
                <p className="promotion-item__description"> On all orders over $75 </p>
            </div>
          </div>
        </div>

        
      </div>
  );
}

export default Promotion;
