'use client'

import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import { love_ya_like_a_sister, work_sans } from './fonts';

export default function Footer() {
    return (
        <>
        <style type='text/css'>
            {`
            #footer {
             background-color: blue;
             color: white;
            }
            
            `}
        </style>

        <Container id='footer' fluid className='footer' >
            <Row className='text-center'>
                <Col >
                    <h1 className={love_ya_like_a_sister.className} style={{ lineHeight: '140px', fontSize: '80px' }}>Tiendita "La Mixteca"</h1>
                </Col>
                <Col className={work_sans.className}>
                   
                </Col>
                <Col className={work_sans.className}>
                    <h3 className={love_ya_like_a_sister.className} >Sobre Nosotros</h3>
                    <p>Términos y Condiciones</p>
                    <p>Políticas de privacidad</p>
                    <p>Tratamiento de datos</p>
                </Col>
            </Row>
        </Container>
        </>
    );
}