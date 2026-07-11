import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';

const Home = () => {
  return (
    <div>
      <Head>
        <title>E-commerce Website</title>
        <meta name="description" content="Shop the latest products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="min-h-screen p-4">
        <h1 className="text-center text-4xl font-bold">Welcome to Our Store</h1>
        <ProductList />
      </main>
      <Footer />
    </div>
  );
};

export default Home;