import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ className, children }) => {
  return (
    <div className={className}>
      <div className="wrapper">
        <nav></nav>
        <div className="content">
          <Header />
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
