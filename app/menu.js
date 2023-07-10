'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import Logo from "../public/logo.png";
import Card from 'react-bootstrap/Card';

function Menu (){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <  >
           <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div style={{padding:0, margin:0}}  className="container-fluid">
  
  <Card.Img variant="top" src="logo.png" style={{  width: '20%', height: '100px'}} /> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-
      icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <div className="container">
      <Link href="/" style={{display:'inline-block',float: 'left',marginRight:30}}>
        Home
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/about" style={{marginRight:30}}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#contact">
              Contacto 
            </Link>
          </li>
        </ul>
      </div>
    </div>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </>
    );
}

export default Menu;