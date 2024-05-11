// pages/championselect.tsx
import Link from "next/link";
import Head from "next/head";

const ChampionSelect = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Champion Select - LoLGPT</title>
        <meta name="description" content="Select your champion" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">Champion Select</h1>
        <p className="mt-3 text-2xl">Choose your champion and role</p>

        <div className="mt-6 text-2xl">
          <Link href="/lolgpt">Proceed to Chat</Link>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <Link href="/">Back to Home</Link>
      </footer>
    </div>
  );
};

export default ChampionSelect;
