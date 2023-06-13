import React from 'react';
import Head from 'next/head';

import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
    return (
        <div className='layout'>
            <Head>
                <title>Furry Pal News Store</title>
            </Head>
            <header>
                <NavBar />
            </header>
            <main className='main'>
                {children}
            </main>
            <Footer>
                <Footer />
            </Footer>
        </div>
    )
}

export default Layout;
