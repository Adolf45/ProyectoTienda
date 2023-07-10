import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

import { love_ya_like_a_sister, work_sans } from './fonts';
import { Button } from 'react-bootstrap';

export default function CardInfo() {
    return (
        <div className=' container'>
            <Row className=' d-flex'>
                <Col className=' mt-4'>
                    <Card className='card-info' style={{ width: '24rem' }} >
                        <Card.Img className='card-imag' variant="top" src="./registra.jpg" />
                        <Card.Body>
                            <Card.Title >
                                <div className={work_sans.className}>
                                    <p className='title-card text-center'>Registra tu restaurante o fonda</p>
                                </div>
                            </Card.Title>
                            <Card.Text className={work_sans.className}>
                                Descubre los beneficios que tienen nuestros aliados que ya trabajan con la plataforma.
                            </Card.Text>
                            <Stack direction="horizontal" gap={1}>
                                <div className=' ms-auto'>
                                    <Button className={work_sans.className} variant='person' style={{ borderradius: '18px', color: '#FFFFFF', fontWeight: 'bolder', fontSize: '19px',padding:'15px' }}>
                                        Mas información
                                    </Button>
                                </div>
                            </Stack>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className=' mt-4'>
                    <Card className='card-info' style={{ width: '24rem' }} >
                        <Card.Img className='card-imag' variant="top" src="./tienda.jpg" />
                        <Card.Body>
                            <Card.Title >
                                <div className={work_sans.className}>
                                    <p className='title-card text-center'>Registra tu restaurante o fonda</p>
                                </div>
                            </Card.Title>
                            <Card.Text className={work_sans.className}>
                                Descubre los beneficios que tienen nuestros aliados que ya trabajan con la plataforma.
                            </Card.Text>
                            <Stack direction="horizontal" gap={1}>
                                <div className=' ms-auto'>
                                    <Button className={work_sans.className} variant='person' style={{ borderradius: '18px', color: '#FFFFFF', fontWeight: 'bolder', fontSize: '19px',padding:'15px'  }}>
                                        Mas información
                                    </Button>
                                </div>
                            </Stack>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className=' mt-4'>
                    <Card className='card-info' style={{ width: '24rem' }} >
                        <Card.Img className='card-imag' variant="top" src="./cafeteria.jpg" />
                        <Card.Body>
                            <Card.Title >
                                <div className={work_sans.className}>
                                    <p className='title-card text-center'>Registra tu restaurante o fonda.</p>
                                </div>
                            </Card.Title>
                            <Card.Text className={work_sans.className}>
                                Descubre los beneficios que tienen nuestros aliados que ya trabajan con la plataforma.
                            </Card.Text>
                            <Stack direction="horizontal" gap={1}>
                                <div className=' ms-auto'>
                                    <Button className={work_sans.className} variant='person' style={{ borderradius: '18px', color: '#FFFFFF', fontWeight: 'bolder', fontSize: '19px',padding:'15px'  }}>
                                        Mas información
                                    </Button>
                                </div>
                            </Stack>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </div>
    )
}