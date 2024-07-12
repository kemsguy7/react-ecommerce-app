import React from 'react';
import './index.scss';
import { HeartIcon, CartIcon, ChevronRightIcon, ChevronLeftIcon } from '../../../assets'; // Assuming you have these icons in your assets

const Collection = () => {
  return (
    <div className="collection">
      <div className="collection__container">
        <h1 className="collection__header">Explore Our New Collection</h1>
        <p className="collection__description">Some dummy text describing the collection.</p>
        <div className="collection__gallery">
          <div className="collection__gallery-item collection__gallery-item--large">
            <img src="path/to/your/image1.jpg" alt="Item 1" />
            <div className="icon icon--heart"><HeartIcon /></div>
            <div className="icon icon--cart">
              <CartIcon />
              <span>Add to cart</span>
            </div>
          </div>
          <div className="collection__gallery-item collection__gallery-item--small">
            <img src="path/to/your/image2.jpg" alt="Item 2" />
            <div className="icon icon--heart"><HeartIcon /></div>
            <div className="icon icon--cart">
              <CartIcon />
              <span>Add to cart</span>
            </div>
          </div>
          <div className="collection__gallery-item collection__gallery-item--medium">
            <img src="path/to/your/image3.jpg" alt="Item 3" />
            <div className="icon icon--heart"><HeartIcon /></div>
            <div className="icon icon--cart">
              <CartIcon />
              <span>Add to cart</span>
            </div>
          </div>
          <div className="collection__gallery-item collection__gallery-item--medium">
            <img src="path/to/your/image4.jpg" alt="Item 4" />
            <div className="icon icon--heart"><HeartIcon /></div>
            <div className="icon icon--cart">
              <CartIcon />
              <span>Add to cart</span>
            </div>
          </div>
        </div>
        <div className="collection__carousel">
          <div className="collection__carousel-indicator active">1</div>
          <div className="collection__carousel-indicator">2</div>
          <div className="collection__carousel-indicator">3</div>
          <div className="collection__carousel-nav collection__carousel-nav--right">
            <ChevronRightIcon />
          </div>
          <div className="collection__carousel-nav collection__carousel-nav--left">
            <ChevronLeftIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
