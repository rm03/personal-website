import styles from '../styles/Home.module.css';
import profilePic from '../public/static/pfp2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home – Rohan Moniz</title>
        <meta name='description' content='My personal website' />
        <link rel='icon' type='image/x-icon' href='/static/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <Image className={styles.borderCircle} src={profilePic} height={144} width={144} draggable={false} placeholder='blur' alt='Profile picture'></Image>
          </div>
          <div className={styles.info}>
            <h2>Hi, I&apos;m</h2>
            <h1>Rohan Moniz</h1>
            <h3>student, runner & chess enthusiast</h3>
          </div>
        </div>
        <div className={styles.socials}>
          <li className={styles.email}>
            <Link href='mailto:rmoniz@seas.upenn.edu' passHref legacyBehavior>
              <FontAwesomeIcon icon={faEnvelopeSquare} size='2x' />
            </Link>
          </li>
          <li className={styles.linkedin}>
            <Link href='https://www.linkedin.com/in/rohan-moniz/' passHref legacyBehavior>
              <FontAwesomeIcon icon={faLinkedin} size='2x' />
            </Link>
          </li>
          <li className={styles.github}>
            <Link href='https://www.github.com/rm03' passHref legacyBehavior>
              <FontAwesomeIcon icon={faGithubSquare} size='2x' />
            </Link>
          </li>
          <li className={styles.spotify}>
            <Link href='https://open.spotify.com/user/musicmaster522' passHref legacyBehavior>
              <FontAwesomeIcon icon={faSpotify} size='2x' />
            </Link>
          </li>
        </div>
      </main>
    </div>
  )
}
