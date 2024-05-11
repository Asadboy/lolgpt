// pages/championselect.tsx
import Link from "next/link";
import Head from "next/head";
import React from "react";
import "../app/globals.css";

const ChampionSelect = () => {
  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>Champion Select - LoLGPT</title>
        <meta name="description" content="Select your champion" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex items-center justify-center w-full h-24 border-t">
        <h1 className="text-6xl font-bold">Champion Select</h1>
      </div>
      <div className="flex items-center justify-center w-full h-19 border-t">
        <p className="mt-3 text-2xl">Choose your champion and role</p>
      </div>

      <main className="flex-grow grid grid-cols-5">
        <div className="bg-gray-100 col-span-2 h-full">
          <div className="flex items-center justify-center h-20">
            <h2 className="text-2xl font-bold">Left Column Title</h2>
          </div>
          <div className="flex-grow">Left Column Content</div>
        </div>
        <div className="bg-gray-200 col-span-3 h-full">
          <div className="flex items-center justify-center h-20">
            <h2 className="text-2xl font-bold">Left Column Title</h2>
          </div>
          <div className="flex-grow">Left Column Content</div>
        </div>
      </main>
      <div className="flex items-center justify-center w-full h-24 border-t">
        <Link href="/lolgpt">Lock In</Link>
      </div>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <Link href="/">Back to Home</Link>
      </footer>
    </div>
  );
};

export default ChampionSelect;
