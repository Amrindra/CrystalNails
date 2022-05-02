import Head from 'next/head';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <Navbar />
        <Banner />
      </main>
    </div>
  );
}
