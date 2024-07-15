import React, { useState } from 'react';
import './index.scss';
import { HeartIcon, CartIcon } from '../../../assets'; // Import icons

const CollectionItems = [
  // Sample data for the collection items
  { id: 1, title: 'Product 1', rating: 5, reviews: 20, price: '$100', src: 'product1.jpg' },
  { id: 2, title: 'Product 2', rating: 4, reviews: 15, price: '$120', src: 'product2.jpg' },
  { id: 3, title: 'Product 3', rating: 3, reviews: 30, price: '$90', src: 'product3.jpg' },
  { id: 4, title: 'Product 4', rating: 5, reviews: 10, price: '$150', src: 'product4.jpg' },
  { id: 5, title: 'Product 5', rating: 4, reviews: 25, price: '$200', src: 'product5.jpg' },
  { id: 6, title: 'Product 6', rating: 5, reviews: 18, price: '$110', src: 'product6.jpg' }
];

const GalleryOne = () => {
  const [showMore, setShowMore] = useState(false);

  const isMobile = window.innerWidth <= 480;
  const visibleItems = showMore || !isMobile ? CollectionItems : CollectionItems.slice(0, 4);

  return (
    <div className="gallery-one">
      <div className="gallery-one__container">
        <h1 className="gallery-one__header">Explore Our New Collection</h1>
        <div className="gallery-one__gallery">
          {visibleItems.map(item => (
            <div key={item.id} className="gallery-one__gallery-item">
              <img src={`../../../../images/collection/${item.src}`} alt={`Item ${item.id}`} className="gallery-one__gallery-img" />
              <div className="icon icon--heart">
                <img src={HeartIcon} alt="Favorite" />
              </div>
              <div className="gallery-one__info">
                <div className="gallery-one__details">
                  <div>
                    <h3 className="gallery-one__title">{item.title}</h3>
                    <div className="gallery-one__rating">
                      {'★'.repeat(item.rating)}
                      <span>({item.reviews})</span>
                    </div>
                  </div>
                  <div className="gallery-one__price">{item.price}</div>
                </div>
                <div className="icon icon--cart">
                  <img src={CartIcon} alt="Add to cart" />
                </div>
              </div>
            </div>
          ))}
        </div>
        {isMobile && !showMore && CollectionItems.length > 4 && (
          <button className="gallery-one__view-more" onClick={() => setShowMore(true)}>
            View More
          </button>
        )}
      </div>
    </div>
  );
};

export default GalleryOne;
