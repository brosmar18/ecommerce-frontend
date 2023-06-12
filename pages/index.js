import React from 'react';

import { client } from '../library/client';
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <div className="products-heading">
        <h2 className="products-heading__title">Best Seller Products</h2>
        <p className="products-heading__desc">Description of products or selling statement</p>
      </div>

      <div className="products-container">
        Products Container
      </div>

      <FooterBanner />
    </div>
  )
}

export default Home;
