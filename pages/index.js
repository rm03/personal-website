import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import profilePic from '../public/static/pfp2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin, faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home – Rohan Moniz</title>
        <meta name="description" content="My personal website" />
        <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.floatContainer}>
          <div className={styles.imageWrapper}>
            <Image className={styles.borderCircle} src={profilePic} height={144} width={144} draggable={false} placeholder='blur'></Image>
          </div>
          <div className={styles.info}>
            <h2>Hi, I'm</h2>
            <h1>Rohan Moniz</h1>
            <h3>student, runner & chess enthusiast</h3>
          </div>
        </div>
        <div className={styles.socials}>
          <li className={styles.email}>
            <Link href="mailto:rmoniz@sas.upenn.edu" legacyBehavior>
              <FontAwesomeIcon icon={ faEnvelopeSquare } size="2x"/>
            </Link>
          </li>
          <li className={styles.linkedin}>
            <Link href="https://www.linkedin.com/in/rohan-moniz/" legacyBehavior>
              <FontAwesomeIcon icon={ faLinkedin } size="2x"/>
            </Link>
          </li>
          <li className={styles.github}>
            <Link href="https://www.github.com/rm03" legacyBehavior>
              <FontAwesomeIcon icon={ faGithubSquare } size="2x"/>
            </Link>
          </li>
          <li className={styles.spotify}>
            <Link href="https://open.spotify.com/user/musicmaster522" legacyBehavior>
              <FontAwesomeIcon icon={ faSpotify } size="2x"/>
            </Link>
          </li>
        </div>
      </main>
    </div>
  )
}
