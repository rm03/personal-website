import type { ArtistType } from '../lib/types';
import Image from 'next/image';
import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Artist({ name, url, coverImage }: ArtistType) {
    return (
        <Row className='mb-3 align-items-center'>
            <Col md='auto' className='pe-0'>
                <Link href={url} passHref>
                    <Image
                        title={name}
                        src={coverImage.url}
                        width={50}
                        height={50}
                        style={{ borderRadius: 'calc(0.375rem - 1px)' }}
                        alt={name}
                    />
                </Link>
            </Col>
            <Col>
                <Card.Text>
                    {name}
                </Card.Text>
            </Col>
        </Row>
    );
}