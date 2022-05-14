import Head from "next/head";
import Navbar from "../components/Navbar";
import Banner from "../components/banner/Banner";
import Highlight from "../components/highlight/Highlight";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import GiftCard from "../components/GiftCard";

export default function Home() {
  return (
    <div className={styles.homepage_container}>
      <Head>
        <title>Crystal Nails | Homepage</title>
      </Head>

      <Navbar />
      <main>
        <Banner />
        <Highlight />
        <GiftCard />
      </main>

      <Footer />
    </div>
  );
}
