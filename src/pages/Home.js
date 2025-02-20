import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import About from '../components/About';
import Awards from '../components/Awards';
import Facilities from '../components/Facilities';
import Info from '../components/Info';
import List from '../components/List';
import Pedagogy from '../components/Pedagogy';
import Poster from '../components/Poster';
import Testimonials from '../components/Testimonials';

const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setShow(true);
  }, []);

  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div>
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Admissions Open 2025-26<br />Enquire Now</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Student Name *</Form.Label>
                <Form.Control type="text" placeholder="Student Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Parent Name</Form.Label>
                <Form.Control type="text" placeholder="Parent Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Phone Number *</Form.Label>
                <Form.Control type="number" placeholder="Phone Number" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Grade</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option value="12">Grade 12(Science)</option>
                  <option value="12">Grade 12(Commerce)</option>
                  <option value="12">Grade 12(Humanities)</option>
                  <option value="11">Grade 11(Science)</option>
                  <option value="11">Grade 11(Commerce)</option>
                  <option value="11">Grade 11(Humanities)</option>
                  <option value="10">Grade 10</option>
                  <option value="9">Grade 9</option>
                  <option value="8">Grade 8</option>
                  <option value="7">Grade 7</option>
                  <option value="1">Grade 7</option>
                  <option value="2">Grade 6</option>
                  <option value="3">Grade 5</option>
                  <option value="4">Grade 4</option>
                  <option value="5">Grade 3</option>
                  <option value="6">Grade 2</option>
                  <option value="7">Grade 1</option>
                  <option value="4">UKG</option>
                  <option value="5">LKG</option>
                  <option value="6">Nursery</option>
                  <option value="7">Playgroup</option>
                </Form.Select>
              </Form.Group>                            
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
        
        <Poster />
        <About />
        <Info />
        <Awards />
        <Facilities />
        <List />        
        <Pedagogy />
        <Testimonials />

        <div className='buttons'>
          <Button as="a" variant="primary" className='admission_btn' onClick={handleShow}>
            Admission Open
          </Button>
          <div className='wtsap_btn' onClick={()=>handleClick("")}>
            <img src='/images/icons/whatsapp.png' className='yt_icon' alt='whatsapp' />
            <span className='icon_text'>Whatsapp</span>
          </div>
          <div className='fb_btn' onClick={()=>handleClick("")}>
            <img src='/images/icons/facebook.png' className='yt_icon' alt='facebook' />
            <span className='icon_text'>Facebook</span>
          </div>
          <div className='insta_btn' onClick={()=>handleClick('https://www.instagram.com/vardaan_group_of_schools?utm_source=qr')}>
            <img src='/images/icons/instagram.png' className='yt_icon' alt='instagram' />
            <span className='icon_text'>Instagram</span>
          </div>
          <div className='yt_btn' onClick={()=>handleClick('https://www.youtube.com/@vardaanschooldungarpur4830')}>
            <img src='/images/icons/youtube.png' className='yt_icon' alt='youtube' />
            <span className='icon_text'>Youtube</span>
          </div>
        </div>
    </div>
  )
}

export default Home
