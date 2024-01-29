import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { search } from '../Redux/restaurantSlice';

function Header() {
  const dispatch=useDispatch()
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"> <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>FOOD CIRCLE  </Link>  <i class="fa-solid fa-utensils"></i></Navbar.Brand>
          <input type="text" className='form-control w-25 bg-light'
          onChange={(e)=>dispatch(search(e.target.value))} />
          <img height={'50px'} width={'50px'} src="https://png.pngtree.com/png-clipart/20220903/ourmid/pngtree-chef-restaurant-logo-png-image_6136204.png" alt="" />

        </Container>
      </Navbar>
    </>
  )
}

export default Header