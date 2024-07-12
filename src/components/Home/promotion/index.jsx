import React from 'react';
import './index.scss';
import { ContactSupport, DeliveryIcon, DiscountIcon } from '../../../assets';

const icons = {
  DeliveryIcon,
  ContactSupport,
  DiscountIcon,
};

const Promotion = () => {
  const PromotionItems = [
    {
      icon: 'DeliveryIcon',
      title: 'Free Delivery',
      body: 'On every order above $100',
    },
    {
      icon: 'ContactSupport',
      title: 'Online Support',
      body: '24/7 customer care',
    },
    {
      icon: 'DiscountIcon',
      title: 'Discounted Sale',
      body: '20% discount off sales above $250',
    },
  ];

  return (
    <div className="promotion">
      <div className="promotion__container">
        <div className="promotion-items">
          {PromotionItems.map((item, index) => (
            <div key={index} className="promotion-item">
              <div>
                <img src={icons[item.icon]} alt={`${item.icon.toLowerCase()}-icon`} />
              </div>
              <div className="promotion-item__text">
                <p className="promotion-item__title">{item.title} </p>
                <p className="promotion-item__description">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Promotion;
