// pages/index.js
import Head from "next/head";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Head>
        <title>Hello World</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white p-8 rounded-lg shadow">
        <h1 className="text-2xl font-bold text-center text-blue-500">
          Hello World
        </h1>
      </main>
    </div>
  );
}