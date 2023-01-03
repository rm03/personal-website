import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Projects.module.css'
import chessProject from '../public/static/chess.png'
import pennbookProject from '../public/static/pennbook.png'
import trcProject from '../public/static/trc.jpg'
import vapeescapeProject from '../public/static/vapeescape.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Stack from 'react-bootstrap/Stack'
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export default function Projects() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Projects – Rohan Moniz</title>
                <meta name="description" content="My personal website" />
                <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Projects</h1>
                <Stack gap={3} className="align-items-center">
                    <Card className="w-75" bg="dark" key="Dark" text="white" style={{ flex: 1 }}>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <Card.Title>PennBook&nbsp;&nbsp;
                                    <Link href="https://github.com/rm03/pennbook" className={styles.gh}>
              <FontAwesomeIcon icon={ faGithub }   />
            </Link>
                                    </Card.Title>

                                    <Card.Text>
                                        <small><i>November 2022 – December 2022</i></small>
                                    </Card.Text>
                                    <Card.Text as="div">
                                        Miniature cloud-based version of Facebook containing account creation, posts, and comments functionality, instant messaging, friend networks, and an adsorption algorithm designed to provide news recommendations to users. Final group project for Scalable and Cloud Computing (NETS 2120).
                                    </Card.Text>
                                    <div className='mt-3 tags'>
                                        <Badge pill bg="primary">
                                            Node.js
                                        </Badge>{' '}
                                        <Badge pill bg="primary">
                                            HTML/CSS
                                        </Badge>{' '}
                                        <Badge pill bg="primary">
                                            Bootstrap
                                        </Badge>{' '}
                                        <Badge pill bg="primary">
                                            Apache Spark
                                        </Badge>{' '}
                                        <Badge pill bg="primary">
                                            AWS DynamoDB
                                        </Badge>{' '}
                                        <Badge pill bg="primary">
                                            AWS EC2
                                        </Badge>{' '}
                                        <Badge pill bg="primary">
                                            AWS S3
                                        </Badge>{' '}
                                    </div>
                                </Col>
                                <Col className='img-big'>
                                    <Image src={pennbookProject} style={{
                                        maxWidth: '100%',
                                        height: 'auto',
                                      }} placeholder='blur' alt='pennbook' />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card className="w-75" bg="dark" key="Dark" text="white" style={{ flex: 1 }}>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <Card.Title>Top 10 – The Roku Channel</Card.Title>
                                    <Card.Text>
                                        <small><i>July 2022</i></small>
                                    </Card.Text>
                                    <Card.Text as="div">
                                        Feature for The Roku Channel that displays the ten most viewed titles (TV shows, movies, and documentaries) in the user's region during the current week in an effort to increase viewership (not pictured). Created in four-person team consisting of interns and FTEs dispersed across 4 different time zones during company-wide hackathon.<br></br><br></br>Developed API that pulls viewership data in real-time from databases.
                                    </Card.Text>
                                    <div className='mt-3 tags'>
                                        <Badge pill bg="primary">
                                            Python
                                        </Badge>{' '}
                                        <Badge pill bg="primary">
                                            Flask
                                        </Badge>{' '}
                                        <Badge pill bg="primary">
                                            Apache Presto
                                        </Badge>{' '}
                                        <Badge pill bg="primary">
                                            HTML/CSS
                                        </Badge>{' '}
                                    </div>
                                </Col>
                                <Col className='img-big'>
                                    <Image src={trcProject} style={{
                                        maxWidth: '100%',
                                        height: 'auto',
                                      }} placeholder='blur' alt='trcproject' />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card className="w-75" bg="dark" key="Dark" text="white" style={{ flex: 1 }}>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <Card.Title>Chess&nbsp;&nbsp;
                                    <Link href="https://github.com/rm03/java-chess" className={styles.gh}>
                                    <FontAwesomeIcon icon={ faGithub }   />
                                  </Link>
                                    </Card.Title>
                                    <Card.Text>
                                        <small><i>December 2021</i></small>
                                    </Card.Text>
                                    <Card.Text as="div">
                                        Chess game built from scratch with fully functioning GUI and complex game logic (check, castling, en passant, stalemate, etc). Final project for Programming Languages and Techniques I (CIS 120).
                                    </Card.Text>
                                    <div className='mt-3 tags'>
                                        <Badge pill bg="primary">
                                            Java
                                        </Badge>{' '}
                                        <Badge pill bg="primary">
                                            Java Swing
                                        </Badge>{' '}
                                    </div>
                                </Col>
                                <Col className='text-center img-big'>
                                    <Image src={chessProject} style={{
                                        maxWidth: '80%',
                                        height: 'auto',
                                      }} placeholder='blur' alt='chessproject' />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card className="w-75" bg="dark" key="Dark" text="white" style={{ flex: 1 }}>
                        <Card.Body>
                            <Row>

                                <Col>
                                    <Card.Title>VapeEscape</Card.Title>
                                    <Card.Text>
                                        <small><i>July 2019 – June 2020</i></small>
                                    </Card.Text>
                                    <Card.Text as="div">
                                        An affordable and practical solution for schools and businesses to be notified of vaping or smoking in unauthorized areas such as bathrooms. Consists of basic iOS app alert notification system connected to Raspberry Pi-based prototype. 
                                        <br></br><br></br>Developed by four-person team during Summer 2019. Created a comprehensive twenty-page business plan for commercializing the product; analyzed the competitive landscape, determined product positioning and conceptualized a go-to-market strategy including a tailored pricing plan and a two-year budget. <br></br><br></br><b>Winner of "Eliminating and Reducing Teen Vaping" category at the 2019-20 Conrad Challenge</b>, a global STEM innovation competition.
                                    </Card.Text>
                                    <div className='mt-3 tags'>
                                        <Badge pill bg="primary">
                                            Python
                                        </Badge>{' '}
                                        <Badge pill bg="primary">
                                            Arduino
                                        </Badge>{' '}
                                        <Badge pill bg="primary">
                                            Raspberry Pi
                                        </Badge>{' '}
                                        <Badge pill bg="primary">
                                            Swift
                                        </Badge>{' '}
                                    </div>
                                </Col>
                                <Col className='text-center img-big'>
                                    <Image src={vapeescapeProject} style={{
                                        maxWidth: '80%',
                                        height: 'auto',
                                      }} placeholder='blur' alt='vapeescapeproject' />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Stack>

            </main>
        </div>
    )
}