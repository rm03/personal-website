import styles from '../styles/Projects.module.css';
import chessProject from '../public/static/chess.png';
import pennbookProject from '../public/static/pennbook.png';
import trcProject from '../public/static/trc.jpg';
import vapeescapeProject from '../public/static/vapeescape.jpg';
import Head from 'next/head';
import Stack from 'react-bootstrap/Stack'
import Project from '../components/Project';


export default function Projects() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Projects – Rohan Moniz</title>
                <meta name='description' content='My personal website' />
                <link rel='icon' type='image/x-icon' href='/static/favicon.ico' />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>Projects</h1>
                <Stack gap={3} className='align-items-center'>
                    <Project
                        name='PennBook'
                        githubUrl='https://github.com/rm03/pennbook'
                        duration='November 2022 – December 2022'
                        description={['Miniature cloud-based version of Facebook containing account creation, posts, and comments functionality, instant messaging, friend networks, and an adsorption algorithm designed to provide news recommendations to users. Final group project for Scalable and Cloud Computing (NETS 2120).']}
                        skills={['Node.js', 'HTML/CSS', 'Bootstrap', 'Apache Spark', 'AWS DynamoDB', 'AWS EC2', 'AWS S3']}
                        image={pennbookProject}
                        imageWidth={100} />
                    <Project
                        name='Top 10 – The Roku Channel'
                        duration='July 2022'
                        description={['Feature for The Roku Channel that displays the ten most viewed titles (TV shows, movies, and documentaries) in the user\'s region during the current week in an effort to increase viewership (not pictured). Created in four-person team consisting of interns and FTEs dispersed across 4 different time zones during company-wide hackathon.', 'Developed API that pulls viewership data in real-time from databases.']}
                        skills={['Python', 'Flask', 'Apache Presto', 'HTML/CSS']}
                        image={trcProject}
                        imageWidth={100} />
                    <Project
                        name='Chess'
                        githubUrl='https://github.com/rm03/chess'
                        duration='December 2021'
                        description={['Chess game built from scratch with fully functioning GUI and complex game logic (check, castling, en passant, stalemate, etc). Final project for Programming Languages and Techniques I (CIS 120).']}
                        skills={['Java', 'Java Swing']}
                        image={chessProject}
                        imageWidth={80}
                        centerImage />
                    <Project
                        name='VapeEscape'
                        duration='July 2019 – June 2020'
                        description={['An affordable and practical solution for schools and businesses to be notified of vaping or smoking in unauthorized areas such as bathrooms. Consists of basic iOS app alert notification system connected to Raspberry Pi-based prototype.', 'Developed by four-person team during Summer 2019. Created a comprehensive twenty-page business plan for commercializing the product; analyzed the competitive landscape, determined product positioning and conceptualized a go-to-market strategy including a tailored pricing plan and a two-year budget.', 'Winner of \'Eliminating and Reducing Teen Vaping\' category at the 2019-20 Conrad Challenge, a global STEM innovation competition.']}
                        skills={['Python', 'Arduino', 'Raspberry Pi', 'Swift']}
                        image={vapeescapeProject}
                        imageWidth={80}
                        centerImage />
                </Stack>
            </main>
        </div>
    )
}