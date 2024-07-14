import { React, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './index.scss';
import CollectionItems from './data';
import { HeartIcon, CartIcon, ChevronRightIcon, ChevronLeftIcon } from '../../../assets';

const collectionsImgPath = '../../../../images/collection/';

const Collection = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(CollectionItems.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const currentItems = CollectionItems.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="collection">
      <div className="collection__container">
        <div className="collection-top">
          <h1 className="collection__header">Explore Our New Collection</h1>
          <p className="collection__description">Some dummy text describing the collection.</p>
        </div>

        <div className="collection__gallery">
          <TransitionGroup component={null}>
            {currentItems.map((item, index) => (
              <CSSTransition key={item.id} timeout={300} classNames="fade">
                <div
                  key={item.id}
                  className={`collection__gallery-item collection__gallery-item--${
                    index === 0 ? 'large' : index === 1 ? 'medium' : index === 2 ? 'small' : 'medium'
                  }`}
                >
                  <img src={`${collectionsImgPath}${item.src}`} alt={`Item ${item.id}`} />
                  <div className="icon icon--heart">
                    <img src={HeartIcon} alt="Favorite" />
                  </div>
                  <div className="icon icon--cart">
                    <img src={CartIcon} alt="Add to cart" />
                    <span>Add to cart</span>
                  </div>
                </div>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <div className="collection__carousel">
          {currentPage > 0 && (
            <div className="collection__carousel-nav collection__carousel-nav--left" onClick={handlePrevPage}>
              <img src={ChevronLeftIcon} alt="Previous" />
            </div>
          )}
          {[...Array(totalPages)].map((_, idx) => (
            <div
              key={idx}
              className={`collection__carousel-indicator ${idx === currentPage ? 'active' : ''}`}
              onClick={() => setCurrentPage(idx)}
            >
              {idx + 1}
            </div>
          ))}
          <div className="collection__carousel-nav collection__carousel-nav--right" onClick={handleNextPage}>
            <img src={ChevronRightIcon} alt="Next" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
