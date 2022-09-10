import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/About.module.css'
import newPic from '../public/pic.png'


export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About – Rohan Moniz</title>
        <meta name="description" content="My personal website" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <h1>About Me</h1>
      <div className={styles.floatContainer}>
        <div className={styles.about}>
        <a>
            Hey! I’m a second-year student at the <strong className={styles.aboutBold}>University of Pennsylvania</strong> pursuing a Bachelor of Science in Engineering (BSE) in <strong className={styles.aboutBold}>Computer Science</strong>. I’m an avid learner and problem-solver, have an insatiable curiosity, and really enjoy working with others. In terms of technical skills, I am proficient in <strong className={styles.aboutBold}>Java</strong> and <strong className={styles.aboutBold}>Python</strong> and have experience with HTML, CSS, JavaScript, OCaml, and more (if you’re interested, click <Link href="/resume.pdf"><strong className={styles.aboutBold}>here</strong></Link>). I’m looking to improve, expand, and apply my skillset to solve real-world problems through projects and internships.
        </a>
        <a>
            In my spare time, I enjoy running along the Schuylkill River, playing tennis, playing chess, watching Formula 1 races, keeping up-to-date with world news, exploring new places, reselling sneakers, and challenging my friends to a fun game of Super Smash Bros. 
        </a>
        <div className={styles.imageWrapper}>
            <Image className={styles.borderCircle} src={newPic} layout="fixed" width={300} height={400} draggable={false}></Image>
            <a>Yosemite National Park, Summer 2022</a>
        </div>
        <h2>Some fun facts:</h2>
        <ul>
            <li>I’m a huge <strong className={styles.funFactBold}>mint chocolate chip</strong> ice cream 🍦 fan (no, it doesn’t taste like toothpaste)</li>
            <li>I would love to visit <strong className={styles.funFactBold}>Singapore</strong> 🇸🇬 one day! In particular, the cuisine, which is influenced by other Asian countries like India and China, is something that I’ve wanted to try for a while</li>
            <li>I recently learned how to drive a <strong className={styles.funFactBold}>manual car</strong> 🚗 (shoutout to my friend Nihaar)</li>
            <li>The coolest sport I’ve tried is <strong className={styles.funFactBold}>surfing</strong> 🏄‍♂️ </li>
        </ul>
        </div>
        <div className={styles.imageWrapperWide}>
            <Image className={styles.borderCircle} src={newPic} layout="fixed" width={300} height={400} draggable={false}></Image>
            <a>Yosemite National Park, Summer 2022</a>
        </div>
      </div>
      </main>
    </div>
  )
}
