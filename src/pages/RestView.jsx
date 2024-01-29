import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import RestReview from '../components/RestReview';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function RestView() {
  const { id } = useParams();
  console.log('id:', id);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const allRestaurant = useSelector((state) => state.restaurantSlice.allRestuarant.restaurants)
  const selectedRestaurant = allRestaurant?.filter(item => item.id == id)
  console.log('selected res', selectedRestaurant);
  return (
    <>
    allRestaurant.length
      <Row className='mt-5 mb-5 '>
        <Col md={1}></Col>
        <Col md={3} lg={3}>
          <img width={'300px'} height={'500px'} src={selectedRestaurant[0]?.photograph} />
        </Col>

        <Col md={7} lg={7}>
          <hr />
          <h4 className='text-center'><span className='text-warning me-2'>Restaurant</span> Details </h4>
          <hr />
          <ListGroup>
            <ListGroup.Item> <h4 className='text-center'>{selectedRestaurant[0].name}</h4> </ListGroup.Item>
            <ListGroup.Item> {selectedRestaurant[0].neighborhood}</ListGroup.Item>
            <ListGroup.Item>{selectedRestaurant[0].address}</ListGroup.Item>
            <ListGroup.Item>{selectedRestaurant[0].cuisine_type}</ListGroup.Item>
            <ListGroup.Item className='text-center p-3'> <button className='btn btn-warning' onClick={handleShow}>Operating Hours</button>
              <RestReview selectedRestaurant={selectedRestaurant}/>
            </ListGroup.Item>

          </ListGroup>
          <hr />
        </Col>
        <Col md={1} lg={1}></Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item>Monday: <span className='text-primary'>{selectedRestaurant[0].operating_hours.Monday}</span> </ListGroup.Item>
            <ListGroup.Item>Tuesday: <span className='text-primary'>{selectedRestaurant[0].operating_hours.Tuesday}</span></ListGroup.Item>
            <ListGroup.Item>Wednesday: <span className='text-primary'>{selectedRestaurant[0].operating_hours.Wednesday}</span></ListGroup.Item>
            <ListGroup.Item>Thursday: <span className='text-primary'>{selectedRestaurant[0].operating_hours.Thursday}</span></ListGroup.Item>
            <ListGroup.Item>Friday: <span className='text-primary'>{selectedRestaurant[0].operating_hours.Friday}</span></ListGroup.Item>
            <ListGroup.Item>Saturday: <span className='text-primary'>{selectedRestaurant[0].operating_hours.Saturday}</span></ListGroup.Item>
            <ListGroup.Item>Sunday: <span className='text-primary'>{selectedRestaurant[0].operating_hours.Sunday}</span></ListGroup.Item>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default RestView