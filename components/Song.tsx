import type { SongType } from '../lib/types';
import Image from 'next/image';
import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Song({ title, url, artist, coverImage }: SongType) {
    return (
        <Row className='mb-3 align-items-center'>
            <Col md='auto' className='pe-0'>
                <Link href={url} passHref>
                    <Image
                        title={title}
                        src={coverImage.url}
                        width={50}
                        height={50}
                        style={{ borderRadius: 'calc(0.375rem - 1px)' }}
                        alt={title}
                    />
                </Link>
            </Col>
            <Col><Card.Text>{title}<br></br><small style={{ fontSize: '0.75em' }} >{artist}</small></Card.Text></Col>
        </Row>
    );
}