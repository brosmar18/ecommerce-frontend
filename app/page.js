import React from 'react';

const home = () => {
  return (
    <>
      HeroBanner

      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Description of products or selling statement</p>
      </div>

      <div className='products-container'>
        {['Product 1', 'Product 2'].map((product) => product)}
      </div>

      Footer
    </>
  )
}

export default home;
