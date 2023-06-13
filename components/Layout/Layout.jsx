import React from 'react';
import Head from 'next/head';

import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
    return (
        <div className={styles['layout']}>
            <Head>
                <title>Furry Pal News Store</title>
            </Head>
            <header>
                <NavBar />
            </header>
            <main className={styles['main']}>
                {children}
            </main>
            <Footer>
                <Footer />
            </Footer>
        </div>
    )
}

export default Layout;
