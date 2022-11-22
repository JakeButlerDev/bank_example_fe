import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Main from '../components/Main'

export default function Home() {
  return (
    // THIS IS NOT HTML, IT IS JSX
    <div 
      // className={styles.container}
      style={{      // This is how we can CSS inline with a JS object
          minHeight: "100vh",
          padding: "4rem 0",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "purple"
      }}
      // ____
      // ^ How to multi-line a style tag
    >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 style={{color: "green"}}>My Bank App</h1>
        <p>Welcome to your future security</p>
      </main>

      <Main />

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}