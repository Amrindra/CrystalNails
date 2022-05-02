import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <Navbar />
      </main>
    </div>
  );
}
