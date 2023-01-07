import styles from '../styles/About.module.css';
import newPic from '../public/static/pic.png';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import useSWR from 'swr';
import Artist from '../components/Artist';
import Song from '../components/Song';

const fetcher = (url: string) => fetch(url).then(r => r.json());

export default function About() {
  const { data: song } = useSWR('/api/currentsong', fetcher, {
    refreshInterval: 5000, fallbackData: {
      album: '',
      albumImageUrl: '/static/default.jpg',
      artist: '',
      isPlaying: false,
      songUrl: '',
      title: '',
    }
  });
  const { data: topArtists } = useSWR('/api/artists', fetcher);
  const { data: topTracks } = useSWR('/api/tracks', fetcher);

  const playingText = song.isPlaying ? 'Now playing' : 'Last played';
  const waveVisibility = song.isPlaying ? 'visible' : 'hidden';

  return (
    <div className={styles.container}>
      <Head>
        <title>About – Rohan Moniz</title>
        <meta name='description' content='My personal website' />
        <link rel='icon' type='image/x-icon' href='/static/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <h1>About Me</h1>
        <div className={styles.content}>
          <div className={styles.about}>
            <div className={styles.aboutText}>
              <p>
                Hey! I’m a second-year student at the <strong>University of Pennsylvania</strong> pursuing a Bachelor of Science in Engineering (BSE) in <strong>Computer Science</strong>. I’m an avid learner and problem-solver, have an insatiable curiosity, and really enjoy working with others. In terms of technical skills, I am proficient in <strong>Java</strong> and <strong>Python</strong> and have experience with HTML/CSS, JavaScript, OCaml, and <Link href='/resume.pdf' passHref legacyBehavior><strong className={styles.grabHover}>more</strong></Link>. I’m looking to improve, expand, and apply my skillset to solve real-world problems through projects and internships.
              </p>
              <p>
                In my spare time, I enjoy running along the Schuylkill River, playing tennis, playing chess, watching Formula 1 races, keeping up-to-date with world news, exploring new places, reselling sneakers, and challenging my friends to a fun game of Super Smash Bros.
              </p>
              <div className={styles.imageWrapper}>
                <Image className={styles.borderCircle} src={newPic} width={300} height={400} draggable={false} alt='Yosemite National Park, Summer 2022'></Image>
                <p>Yosemite National Park, Summer 2022</p>
              </div>
              <h2>Some fun facts:</h2>
              <ul>
                <li>I’m a huge <strong className={styles.funFactBold}>mint chocolate chip</strong> ice cream 🍦 fan (it doesn’t taste like toothpaste 😐)</li>
                <li>I would love to visit <strong className={styles.funFactBold}>Singapore</strong> 🇸🇬 one day! In particular, the cuisine is something that I’ve wanted to try for a while</li>
                <li>I recently learned how to drive a <strong className={styles.funFactBold}>manual car</strong> 🚗 (shoutout to my friend Nihaar)</li>
                <li>The coolest sport I’ve tried is <strong className={styles.funFactBold}>surfing</strong> 🏄‍♂️ </li>
              </ul>
            </div>
            <h2 className='w-100'>Music:</h2>
            <Row>
              <Col sm className='mb-4'>
                <Link href={song.songUrl} className='pt-0' passHref>
                  <Card className='bg-dark text-white'>
                    <Card.Img src={song.albumImageUrl} style={{
                      filter: 'opacity(50%)'
                    }} />
                    <Card.ImgOverlay>
                      <Row className='mb-1 align-items-center'>
                        <Col xs='auto' md='auto' className='pe-0'>
                          <Card.Text className={styles.np}>{playingText}
                          </Card.Text>
                        </Col>
                        <Col xs className='ps-1 pe-0'>
                          <div className={styles.boxContainer} style={{ visibility: waveVisibility }}>
                            <div className={[styles.box, styles.box1].join(' ')}></div>
                            <div className={[styles.box, styles.box2].join(' ')}></div>
                            <div className={[styles.box, styles.box3].join(' ')}></div>
                            <div className={[styles.box, styles.box4].join(' ')}></div>
                            <div className={[styles.box, styles.box5].join(' ')}></div>
                          </div>
                        </Col>
                      </Row>
                      <Card.Title>{song.title}</Card.Title>
                      <Card.Text>
                        {song.artist}
                      </Card.Text>
                    </Card.ImgOverlay>
                  </Card>
                </Link>
              </Col>
              <Col sm className='mb-4'>
                <Card className='bg-dark text-white'>
                  <Card.Body>
                    <Card.Title className='mb-3'>Top Songs</Card.Title>
                    {topTracks?.map((track: any, key: number) => (
                      <Song title={track.title} url={track.url} artist={track.artist} coverImage={track.coverImage} key={key} />
                    ))}
                  </Card.Body>
                </Card>
              </Col>
              <Col sm className='mb-4'>
                <Card className='bg-dark text-white'>
                  <Card.Body>
                    <Card.Title className='mb-3'>Top Artists</Card.Title>
                    {topArtists?.map((artist: any, key: number) => (
                      <Artist name={artist.name} url={artist.url} coverImage={artist.coverImage} key={key} />
                    ))}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
          <div className={styles.imageWrapperWide}>
            <Image className={styles.borderCircle} src={newPic} width={300} height={400} draggable={false} placeholder='blur' alt='Yosemite National Park, Summer 2022'></Image>
            <p>Yosemite National Park, Summer 2022</p>
          </div>
        </div>
      </main>
    </div>
  )
}
