import React, { useState, useEffect } from 'react';

import { Product, FooterBanner, HeroBanner } from '../components';

const Home = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    const query = '*[_type == "product"]';

    client.fetch(query).then((data) => {
      setProducts(data);
    })
  })

  return (
    <>
      <HeroBanner />

      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Description of products or selling statement</p>
      </div>

      <div className='products-container'>
        {['Product 1', 'Product 2'].map((product) => product)}
      </div>

      <FooterBanner />
    </>
  )
}

export default Home;
