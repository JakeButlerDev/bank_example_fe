import Head from 'next/head'
import Image from 'next/image'
import Splash from '../commonNextjs/Splash'
import Bank from '../components/Bank'
import Banks from '../components/Banks'
import Main from '../components/Main'
import Person from '../components/Person'
import Persons from '../components/Persons'
import styles from '../styles/Home.module.css'
import splashImg from '../public/assets/splash.jpg'
import NavBar from '../components/Navigation/NavBar'

export default function Home() {
  return (
    // THIS IS NOT HTML, IT IS JSX
    <div 
      // className={styles.container}
      style={{      // This is how we can CSS inline with a JS object
          minHeight:"150vh",
          // padding: "4rem 0",
          flex: 1,
          display:"flex",
          flexDirection:"column",
          // justifyContent: "center",
          // alignItems: "center",
          // color: "purple"
      }}
      // ____
      // ^ How to multi-line a style tag
    >

      <NavBar /> 
      
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Splash 
        image={splashImg}
      >
        <div style={{
          display: "flex",
          width: "60%",
          flexDirection: "column"
        }}>
          <h1 
            style={{textShadow: '1px 1px white'}}   // Adds shadow to lower right of wording
          >Dev Bank</h1>

          <h2 
            style={{textShadow: '1px 0 0 #fff, 0 -1px 0 #fff, 0 1px 0 #fff, -1px 0 0 #fff'}}  // Adds shadow all the way around wording
          >More Problems, More Money</h2>
        </div>
      </Splash>
      

      {/* <Banks /> */}

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
