import Head from 'next/head';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Highlight from '../components/Highlight';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <Navbar />
        <Banner />
        <Highlight />
      </main>
    </div>
  );
}
