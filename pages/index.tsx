// pages/index.tsx
import Link from "next/link";
import Head from "next/head";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Welcome to LoLGPT</title>
        <meta
          name="description"
          content="Explore the League of Legends chatbot"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to <span className="text-blue-600">LoLGPT</span>
        </h1>
        <p className="mt-3 text-2xl">Get started by selecting your champion!</p>

        <div className="mt-6 text-2xl">
          <Link
            href="/championselect"
            className="text-blue-600 hover:underline"
          >
            Go to Champion Select
          </Link>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
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
