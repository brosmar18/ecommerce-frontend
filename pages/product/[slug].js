import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import client, { urlFor } from '../../library/client';
import { Product } from '../../components';

import styles from './[slug].module.scss';

const ProductDetails = ({ products, product }) => {
    const { image, name, details, price } = product;
    const [index, setIndex] = useState(0);

    return (
        <div>
            <div className={styles.productDetailContainer}>
                <div>
                    <div>
                        <img src={urlFor(image && image[0])}className={styles.productDetailImage}/>
                    </div>
                    <div className={styles.smallImagesContainer}>
                        {image?.map((item, i) => (
                            <img
                                key={i}
                                src={urlFor(item)}
                                className={`i == index ? ${styles.smallImage} ${styles.selectedImage} : ${styles.smallImage}`}
                                onMouseEnter={() => setIndex(i)}
                            />
                        ))}
                    </div>
                </div>
                <div className={styles.productDetailsDesc}>
                    <h1>{name}</h1>
                    <div className={styles.reviews}>
                        <div>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                        </div>
                        <p className={styles.reviews__num}>(20)</p>
                    </div>
                    <h4 className={styles.productDetailContainer__details}>Details: </h4>
                    <p className={styles.productDetailContainer__detailsRender}>{details}</p>
                    <p className={styles.price}>${price}</p>
                    <div className={styles.quantity}>
                        <h3>Quantity:</h3>
                        <p className={styles.quantityDesc}>
                            <span className={styles.minus} onClick={''}><AiOutlineMinus /></span>
                            <span className={styles.num}>0</span>
                            <span className={styles.plus} onClick={''}><AiOutlinePlus /></span>
                        </p>
                    </div>
                    <div className={styles.buttons}>
                        <button type='button' className={styles.addToCart}>Add to Cart</button>
                        <button type='button' className={styles.buyNow}>Buy Now</button>
                    </div>
                </div>
            </div>

            <div className={styles.maylikeProductsWrapper}>
                <h2>You May also like</h2>
                <div className={styles.marquee}>
                    <div className={`${styles.maylikeProductsContainer} ${styles.track}`}>
                        {products.map((item) => (
                            <Product key={item._id} product={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

    const products = await client.fetch(query);

    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: { slug } }) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]'

    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);

    console.log(product);

    return {
        props: {
            products, product }
    }
}

export default ProductDetails;
