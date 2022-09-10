import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Projects.module.css'
import newPic from '../public/pic.png'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export default function Projects() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projects & Experience – Rohan Moniz</title>
        <meta name="description" content="My personal website" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <h1>Experience</h1>
      <Row xs={1} md={1} className={styles.experience}>
        <Col>
        <Card bg="dark" key="Dark" text="white" style={{ flex: 1}}>
        <Card.Body>
            <Card.Title>Software Engineering Intern – Roku, Inc.</Card.Title>
            <Card.Text>
                <i>San Jose, CA –– May 2022 – August 2022</i>
            </Card.Text>
            <Card.Text as="div">
            <ul>
                <li>Worked within Advertising Engineering group, part of Roku’s $2B+ platform business</li>
                <li>Built an automated validation framework using Python for Automatic Content Recognition (ACR) and Dynamic Linear
                Ad insertion (DLA), core technologies of Roku’s advertising platform</li>
                <li>Leveraged Roku OS infrastructure to regularly run ACR validation framework across 10 TV platforms with over 1,000 models between them, ensuring that ACR is not impacted by firmware releases and maintaining business continuity</li>
                <li>Collaborated daily within and outside of team and participated in meetings to learn more about the business and technical aspects of Roku’s advertising platform
                </li>
            </ul>
            </Card.Text>
            </Card.Body>
        </Card>
        </Col>
        
    </Row>
    
    <h1 className={styles.title}>Projects</h1>
    <Row xs={1} md="auto" className={styles.projects}>
        <Col>
        <Card bg="dark" key="Dark" text="white" style={{ flex: 1 }}>
        <Card.Body>
            <Card.Title>Top 10 – The Roku Channel</Card.Title>
            <Card.Text>
                <i>July 2022</i>
            </Card.Text>
            <Card.Text as="div">
            <ul>
                <li>Participated in Roku's company-wide hackathon with team consisting of interns and FTEs dispersed across 4 time zones</li>
                <li>Created a feature for The Roku Channel that displays the ten most viewed titles (TV shows, movies, and documentaries) in the user's region during the current week to increase viewership</li>
                <li>Developed an API that pulls viewership data in real-time using Flask and Presto</li>
            </ul>
            </Card.Text>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card bg="dark" key="Dark" text="white" style={{ flex: 1 }}>
        <Card.Body>
            <Card.Title>Chess</Card.Title>
            <Card.Text>
                <i>December 2021</i>
            </Card.Text>
            <Card.Text as="div">
            <ul>
                <li>Built chess game with fully functioning GUI from scratch using Java & Java Swing</li>
                <li>Implemented complex game logic (check, castling, en passant, stalemate etc.)</li>
            </ul>
            </Card.Text>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card bg="dark" key="Dark" text="white" style={{ flex: 1 }}>
        <Card.Body>
            <Card.Title>VapeEscape</Card.Title>
            <Card.Text>
                <i>July 2019 – June 2020</i>
            </Card.Text>
            <Card.Text as="div">
            <ul>
                <li>Developed an affordable and practical solution for schools and businesses to be notified of vaping or smoking in unauthorized areas such as bathrooms as part of a four-person team</li>
                <li>Built a basic iOS app alert notification system connected to the Raspberry Pi-based prototype</li>
                <li>Created a comprehensive twenty-page business plan for commercializing the product</li>
                <li>Analyzed the competitive landscape, determined product positioning and conceptualized a go-to-market strategy including a tailored pricing plan and a two-year budget</li>
                <li>Winner of "Eliminating and Reducing Teen Vaping" category at the 2019-20 Conrad Challenge, a global STEM innovation competition</li>
            </ul>
            </Card.Text>
            </Card.Body>
        </Card>
        </Col>
    </Row>
      </main>
    </div>
  )
}