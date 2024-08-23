import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>RainbowKit App</title>
        <meta
          content="Generated by @rainbow-me/create-rainbowkit"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Welcome to ByteOnChain
        </h1>
        <ConnectButton />


       
        <footer className={styles.footer}>
          <p>Made with ❤️ by your frens at <a href="http://borderless.cryptosmartnow.io" target="_blank" rel="noopener noreferrer">  BorderlessHub </a></p>  
      </footer>
        
      </main>

     
    </div>
  );
};

export default Home;
