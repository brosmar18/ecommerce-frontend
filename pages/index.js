import React from 'react';

import client from '../library/client';
import { Product, FooterBanner, HeroBanner } from '../components';


const Home = ({ products, bannerData }) => (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      {console.log(bannerData)}
      <div className="products-heading">
        <h2 className="products-heading__title">Best Seller Products</h2>
        <p className="products-heading__desc">Description of products or selling statement</p>
      </div>

      {/* <div className="products-container">
        {products?.map((product) => <Product key={product._id} product={product} />)}
      </div> */}
      <Product products={products}/>

      <FooterBanner />
    </div>
  );

  export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);

    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);

    return {
      props: { products, bannerData }
    }
  }


export default Home;
