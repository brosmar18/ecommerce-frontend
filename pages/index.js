import React from 'react';

import client from '../library/client';
import { Product, FooterBanner, HeroBanner } from '../components';


const Home = ({ products, bannerData }) => (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <Product products={products}/>

      <FooterBanner footerBanner={bannerData && bannerData[0]}/>
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
