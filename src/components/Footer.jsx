import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='d-flex justify-content-center align-items-center mt-5 bg-dark'>
        <div className='footer d-flex align-items-center justify-content-evenly mt-5'>
          <div className='website' style={{ width: '400px' }}>
            <h5>   <i class="fa-solid fa-utensils m-3"></i>Food-Circle</h5>
            <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat reiciendis dicta neque nobis, quidem molestiae natus tempora vero vel, cumque quae quos culpa esse atque magnam voluptate non eos! Sint!</p>
          </div>
          <div className='links d-flex flex-column ms-5'>
            <h4>Links</h4>
            <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
            {/* <Link to='/cart' style={{ textDecoration: 'none', color: 'white' }}>Cart</Link>
            <Link to='/wishlist' style={{ textDecoration: 'none', color: 'white' }}>Wishlist</Link> */}
          </div>
          <div className='guides d-flex flex-column ms-5 '>
            <h4>Guides</h4>
            <Link to='https://react.dev/' target='_blank' style={{ textDecoration: 'none', color: 'white' }}>React</Link>
            <Link to='https://react-bootstrap.github.io/' target='_blank' style={{ textDecoration: 'none', color: 'white' }}>React Bootstrap</Link>
            <Link to='https://bootswatch.com/' target='_blank' style={{ textDecoration: 'none', color: 'white' }}>Boots Watch</Link>
          </div>
          <div className='contactus ms-5'>
            <h3>Contact Us</h3>
            <div className='d-flex'>
              <input type="text" className='form-control' placeholder='Enter your email' />
              <button className='btn btn-light ms-2'>Subscribe</button>
            </div>
            <div className=' d-flex justify-content-evenly align-items-center mt-2'>
              <Link><i class="fa-brands fa-instagram fa-2x" style={{ color: 'white' }}></i></Link>
              <Link ><i class="fa-brands fa-twitter fa-2x" style={{ color: 'white' }}></i></Link>
              <Link ><i class="fa-brands fa-linkedin fa-2x" style={{ color: 'white' }}></i></Link>
              <Link ><i class="fa-brands fa-facebook fa-2x" style={{ color: 'white' }}></i></Link>
            </div>
          </div>
        </div>

      </div>
      <p className='mt-5 text-center'>Copyright &copy;2024 Food-Circle Bulit with React & Redux</p>

    </>
  )
}

export default Footer