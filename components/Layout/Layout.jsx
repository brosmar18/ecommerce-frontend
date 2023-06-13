import React from 'react';
import Head from 'next/head';

import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const Layout = () => {
    return (
        <div className='layout'>
            <Head>
                <title>Furry Pal News Store</title>
            </Head>
            <header>
                <NavBar />
            </header>
        </div>
    )
}
