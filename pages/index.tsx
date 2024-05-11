// pages/index.tsx
import Link from "next/link";
import Head from "next/head";
import "../app/globals.css";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-gradient-to-r-dark text-white">
      <Head>
        <title>Welcome to LoLGPT</title>
        <meta
          name="description"
          content="Explore the League of Legends chatbot"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="text-center mt-12 ">
        <h1 className="text-8xl font-bold text-primary h-20">LoLGPT</h1>
        <h2 className="text-3xl text-secondary mt-8">
          Your AI Leauge of Legends Companion.
        </h2>
      </header>

      <main className="flex flex-col items-center  flex-grow px-4 md:px-0">
        <div className="py-8">
          <p className="text-center text-gray-300 mt-8 max-w-4xl">
            Asadboy and Kar Wah crafted this innovative project during a
            hackathon, aiming to enhance strategic planning in gaming with
            cutting-edge AI. Created in just 24 hours, we are eager to evolve
            this tool. Your feedback and suggestions are invaluable as we aim to
            enhance its capabilities.
          </p>
        </div>
        <div className="py-8 flex items-center justify-center w-7/12 h-40 border">
          <p>~Insert Video Here~ </p>
        </div>
        <div className="py-8">
          <p className="text-center text-gray-300 mt-8 max-w-4xl">
            To use this project go continue to the champion select screen, drag
            in the champions in your game into our nice and easy drag and drop
            summoners rift map. Once you have made all your selections head over
            to LolGPT where you can use premade questions or type your own and
            get feedback, itemization or gameplay tips and tricks!.
          </p>
        </div>
        <Link href="/championselect" passHref legacyBehavior>
          <a className="mt-8 bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300">
            Continue to Champion Select
          </a>
        </Link>
      </main>

      <footer className="w-full text-center py-4 border-t border-gray-700">
        <span className="text-sm text-gray-400">Made by AmjidChan</span>
        <div className="text-xs text-gray-500 mt-2">
          This is not affiliated with Riot Games.
        </div>
      </footer>
    </div>
  );
};

export default Home;
