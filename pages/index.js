import Head from 'next/head';
import { useState, useEffect } from 'react';
import Greeting from '../components/Greeting';
import TimeDisplay from '../components/TimeDisplay';
import SearchBar from '../components/SearchBar';
import BackgroundImage from '../components/BackgroundImage';
import MotivatingQuote from '../components/MotivatingQuote';

export default function Home({ initialTime }) {
  return (
    <div>
      <Head>
        <title>Welcome Kevin!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BackgroundImage />
      <div className="content">
        <Greeting name="Kevin" />
        <TimeDisplay initialTime={initialTime} /> {/* Pass initialTime prop */}
        <div className="search-bar-container">
          <SearchBar />
        </div>
        <MotivatingQuote />
      </div>

      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
          background-color: #f0f0f0;
          color: #333;
        }
        .content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
        }
        .search-bar-container {
          width: 400px; /* Adjust the width as needed */
          margin: 0 auto; /* Center the search bar */
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch the initial time from the server
  const initialTime = new Date().toString();

  return {
    props: {
      initialTime,
    },
  };
}
