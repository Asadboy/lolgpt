// pages/lolgpt.tsx
import Link from "next/link";
import Head from "next/head";

const LoLGPT = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>LoLGPT Chat - LoLGPT</title>
        <meta
          name="description"
          content="Interact with the League of Legends chatbot"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">LoLGPT Chat</h1>
        <p className="mt-3 text-2xl">
          Talk to our League of Legends GPT-powered bot!
        </p>

        <div className="mt-6 text-2xl">
          <Link href="/championselect">Back to Champion Select</Link>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <Link href="/">Back to Home</Link>
      </footer>
    </div>
  );
};

export default LoLGPT;
