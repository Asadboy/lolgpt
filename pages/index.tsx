// pages/index.tsx
import Link from "next/link";
import Head from "next/head";
import "../app/globals.css";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-dark text-white">
      <Head>
        <title>Welcome to LoLGPT</title>
        <meta
          name="description"
          content="Explore the League of Legends chatbot"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="text-center p-5">
        <h1 className="font-header text-6xl text-primary">LoLGPT</h1>
        <p className="mt-3 text-accent font-body">
          Asadboy and Kar Wah made this project as part of a hackathon. We
          wanted to make it easier for people to strategize their games with AI.
        </p>
        <p className="text-gray-300 font-body">
          As this project was made in 24 hours, we are still open to suggestions
          and feedback. If there is enough use, we are happy to update this
          project.
        </p>
        <p className="text-secondary font-body">
          Click continue to go to champ select.
        </p>
        <div className="mt-6">
          <Link href="/championselect" passHref legacyBehavior>
            <a className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Continue
            </a>
          </Link>
        </div>
      </header>

      <footer className="flex items-center justify-center w-full h-24 border-t border-gray-700">
        <a
          className="flex items-center justify-center text-gray-400 hover:text-white"
          href="https://openai.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by OpenAI
        </a>
      </footer>
    </div>
  );
};

export default Home;
