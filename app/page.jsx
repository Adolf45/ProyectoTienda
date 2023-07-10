'use client'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { love_ya_like_a_sister, work_sans } from './fonts';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaHamburger } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Stack } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { AiOutlineStar } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IoAddOutline } from 'react-icons/io5';
import { IoTrashOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons/lib';


const categorias = [
{ id: 1,name: "Golosinas", src: "categorias/Golosina.jpg" },
{ id: 3,name: "Limpieza ", src: "categorias/TOC-limpieza.jpg" },
{ id: 6,name: "Higiene personal", src: "categorias/hingiene.jpeg" },
{ id: 7,name: "Botanas ", src: "categorias/botanas.jpg" },
{ id: 8,name: "Abarrotes", src: "categorias/aba.jpeg" },
{ id: 10,name: "Bebidas", src: "categorias/bebi.jpeg" }];

export default function Home() {
  const [modalshow, setModalshow] = useState(false);
  const handleCloseModal = () => setModalshow(false);
  const handleShowModal = () => setModalshow(true);

  return (
    <>
      <Container fluid style={{background:'gray'}}>
        <Stack gap={1} className="col-md-6 mx-auto">
            <h1 id='home-title' className={love_ya_like_a_sister.className}>
              <span>
                Busca tus productos favoritos
              </span><br></br>
              <span style={{ marginleft : "200px;"}}>
                
              </span>
            </h1>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
          
              </InputGroup.Text>
              <Form.Control type='text' placeholder='Comida, golosinas y más...' />
              <Button variant="primary" id="button-addon2">
                Buscar
              </Button>
            </InputGroup>
        </Stack>
      </Container>

      <Container className="mx-md-5">
        <h1 className={love_ya_like_a_sister.className} style={{ marginleft: "48px", margin:20}}> Categorías</h1>
      </Container>    
      <Stack direction="horizontal" gap={3}>
          { categorias.map( (categoria) => (
          <Card key={categoria.id} style={{ width: '18rem', height:"205px", marginTop:"20px", marginBottom:"20px"}}>
              <Card.Img variant="top" src={categoria.src} />
              <Card.Body>
                <Card.Title>{categoria.name}</Card.Title>
              </Card.Body>
             </Card>
          ))}
      </Stack>,


      <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">Golosinas</option>
      <option value="2">Limpieza</option>
      <option value="3">Botanas</option>
      <option value="4">Abarrotes</option>
      <option value="5">Bebidas</option>
    </Form.Select>


      <Container className="mx-md-5 my-md-5">
        <h1 className={love_ya_like_a_sister.className} style={{ marginleft: "48px", marginTop: "30px"}}> Productos</h1>
      </Container> 
      <Stack direction='horizontal' gap={5} className="mx-md-5 my-md-5">
        <Card style={{ width: '24rem' }}>
            <Card.Img variant="top" src="cereal.jpeg" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title >
                <Stack direction="horizontal" gap={2}>
                  <div className={work_sans.className}>
                  <p className='title-card'>Cereal Kellug´s</p>
                  </div>
                  <div className="ms-auto shadow-text fw-bold" >$30</div>
                </Stack>
              </Card.Title>
              <Stack direction="horizontal" gap={1}>
                {/*               {Array.from({ length: 5 }).map((_, index) => (
                  < div key={index}>
                    <IconContext.Provider value={{ color: "red", size: '20px' }} >
                      <div className=" ms-auto">
                        <AiOutlineStar />
                      </div>
                    </IconContext.Provider>
                  </div>
                ))} */}
                <IconContext.Provider value={{ color: "red", size: '20px' }} >
                  <div className=" ms-auto">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                  </div>
                </IconContext.Provider>

                <div className="shadow-text fw-bold mx-2 "  style={{fontSize:'20px'}}>4.2</div>
              </Stack>
              <Card.Text className={work_sans.className} style={{ margin: '20px' }}>
                <div style={{fontWeight:'600'}}>
               
                </div>
              </Card.Text>
              <Stack direction="horizontal" gap={1}>
                <div>
                </div>
                <div className='ms-auto'>
                  <button variant="link" onClick={handleShowModal}>
                    Ver mas
                  </button>
                </div>
              </Stack>
            </Card.Body>
        </Card>
        <Card style={{ width: '24rem' }}>
            <Card.Img variant="top" src="leche.jpeg" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title >
                <Stack direction="horizontal" gap={2}>
                  <div className={work_sans.className}>
                  <p className='title-card'>Leche Entera Lala</p>
                  </div>
                  <div className="ms-auto shadow-text fw-bold" >$35.00</div>
                </Stack>
              </Card.Title>
              <Stack direction="horizontal" gap={1}>
                {/*               {Array.from({ length: 5 }).map((_, index) => (
                  < div key={index}>
                    <IconContext.Provider value={{ color: "red", size: '20px' }} >
                      <div className=" ms-auto">
                        <AiOutlineStar />
                      </div>
                    </IconContext.Provider>
                  </div>
                ))} */}
                <IconContext.Provider value={{ color: "red", size: '20px' }} >
                  <div className=" ms-auto">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                  </div>
                </IconContext.Provider>

                <div className="shadow-text fw-bold mx-2 "  style={{fontSize:'20px'}}>4.2</div>
              </Stack>
              <Card.Text className={work_sans.className} style={{ margin: '20px' }}>
                <div style={{fontWeight:'600'}}>
              
                </div>
              </Card.Text>
              <Stack direction="horizontal" gap={1}>
                <div>
                </div>
                <div className='ms-auto'>
                  <button variant="link" onClick={handleShowModal}>
                    Ver mas
                  </button>
                </div>
              </Stack>
            </Card.Body>
        </Card>
        <Card style={{ width: '24rem' }}>
            <Card.Img variant="top" src="Toto.jpg" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title >
                <Stack direction="horizontal" gap={2}>
                  <div className={work_sans.className}>
                  <p className='title-card'>Nachos Tostitos</p>
                  </div>
                  <div className="ms-auto shadow-text fw-bold" >$15.00</div>
                </Stack>
              </Card.Title>
              <Stack direction="horizontal" gap={1}>
                {/*               {Array.from({ length: 5 }).map((_, index) => (
                  < div key={index}>
                    <IconContext.Provider value={{ color: "red", size: '20px' }} >
                      <div className=" ms-auto">
                        <AiOutlineStar />
                      </div>
                    </IconContext.Provider>
                  </div>
                ))} */}
                <IconContext.Provider value={{ color: "red", size: '20px' }} >
                  <div className=" ms-auto">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                  </div>
                </IconContext.Provider>

                <div className="shadow-text fw-bold mx-2 "  style={{fontSize:'20px'}}>4.2</div>
              </Stack>
              <Card.Text className={work_sans.className} style={{ margin: '20px' }}>
                <div style={{fontWeight:'600'}}>
                </div>
              </Card.Text>
              <Stack direction="horizontal" gap={1}>
                <div>
                </div>
                <div className='ms-auto'>
                  <button variant="link" onClick={handleShowModal}>
                    Ver mas
                  </button>
                </div>
              </Stack>
            </Card.Body>
        </Card>
      </Stack>     
      
                
      
     
      <Modal
        size="md"
        show={modalshow}
        onHide={handleCloseModal}
      >
        <Card style={{ width: '100%' }} >
          <Card.Img variant="top" src="./hamburguesa-texas.jpg" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
          <Card.Body>
            <Card.Title >
              <Stack direction="horizontal" gap={2}>
                <div className={work_sans.className}>
                <p className='title-card'>Nachos Tostitos</p>
                </div>
                <div className="ms-auto shadow-text fw-bold" >$205.00</div>
              </Stack>
            </Card.Title>
            <Stack direction="horizontal" gap={1}>
              {/*               {Array.from({ length: 5 }).map((_, index) => (
                < div key={index}>
                  <IconContext.Provider value={{ color: "red", size: '20px' }} >
                    <div className=" ms-auto">
                      <AiOutlineStar />
                    </div>
                  </IconContext.Provider>
                </div>
              ))} */}
              <IconContext.Provider value={{ color: "red", size: '20px' }} >
                <div className=" ms-auto">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </div>
              </IconContext.Provider>

              <div className="shadow-text fw-bold mx-2 "  style={{fontSize:'20px'}}>4.2</div>
            </Stack>
            <Card.Text className={work_sans.className} style={{ margin: '20px' }}>
              <div style={{fontWeight:'600'}}>
              Hamburguesa con carne de res angus, salsa bbq cerveza, tocino, echalote, cebolla frita, mix de queso, chile serrano, chipotle mayo.
              </div>
            </Card.Text>
            <Stack direction="horizontal" gap={1}>
              <div>
                <button className='button-card d-flex'>
                  <IconContext.Provider value={{ color: "white", size: '25px' }} >
                    <AiOutlineShoppingCart style={{ marginTop: '10%' }} />
                  </IconContext.Provider>
                  <p className='letter mx-2 fw-bold' >Agregar </p>
                </button>
              </div>
              <div className='ms-auto'>
                <button className='button-card-right '>
                  <div className=' d-flex justify-content-around'>
                    <IconContext.Provider value={{ size: '25px', color: 'red' }} >
                      <IoTrashOutline style={{ marginTop: '10%' }} />
                      <div><p className='fw-bold' style={{fontSize:'20px'}}>1</p></div>
                      <IoAddOutline style={{ marginTop: '10%', color: 'red' }} />
                    </IconContext.Provider>
                  </div>
                </button>
              </div>
            </Stack>
          </Card.Body>
        </Card>
      </Modal>
    </>
  )
}
