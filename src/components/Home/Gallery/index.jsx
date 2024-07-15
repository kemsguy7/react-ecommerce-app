import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import { HeartIcon, CartIcon, ChevronRightIcon, ChevronLeftIcon } from '../../../assets';

const Gallery = ({ items, rows, showCarousel }) => {
  const itemsPerRow = 3;
  const totalItems = rows * itemsPerRow;

  
  return (
    <div className="gallery">
      <h1 className="gallery__header">Recently Viewed</h1>
      <div className="gallery__container">
        {items.slice(0, totalItems).map((item, index) => (
          <div key={item.id} className="gallery__item">
            <img src={item.src} alt={item.alt} className="gallery__image" />
            <div className="gallery__icon gallery__icon--heart">
              <img src={HeartIcon} alt="Favorite" />
            </div>
            <div className="gallery__details">
              <div className="gallery__details-left">
                <h2 className="gallery__title">{item.title}</h2>
                <div className="gallery__price-rating">
                  <span className="gallery__price">{item.price}</span>
                  <div className="gallery__rating">
                    {item.rating} ({item.ratingCount})
                  </div>
                </div>
              </div>
              <div className="gallery__details-right">
                <img src={CartIcon} alt="Add to cart" className="gallery__cart-icon" />
              </div>
            </div>
          </div>
        ))}
      </div>
      {showCarousel && (
        <div className="gallery__carousel">
          {/* Add carousel navigation here */}
        </div>
      )}
    </div>
  );
};

Gallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      ratingCount: PropTypes.number.isRequired,
    })
  ).isRequired,
  rows: PropTypes.number,
  showCarousel: PropTypes.bool,
};

Gallery.defaultProps = {
  rows: 2,
  showCarousel: false,
};

export default Gallery;
