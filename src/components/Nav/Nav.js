import React from 'react';
import '../Nav/Nav.css'
import 'bootstrap/dist/css/bootstrap/.css'
import { Navbar } from 'react-bootstrap';

function Nav({ setCurrentPage, pages }) {
    return (
        <Navbar bg='dark' variant='dart'>
            <Navbar.Brand>
                JN 
            </Navbar.Brand>
        
        </Navbar>


//        <div className='d-flex justify-content-between'>
//            <h1 style={{margin: '20px'}}>John Nguyen</h1>
//            <ul className='nav'>
//                <li className='nav-item myNavItem' onClick={ ()=> setCurrentPage(pages[0])}>About</li>
//                <li className='nav-item myNavItem' onClick={ ()=> setCurrentPage(pages[1])}>Contact</li>
//                <li className='nav-item myNavItem' onClick={ ()=> setCurrentPage(pages[2])}>Projects</li>
//                <li className='nav-item myNavItem' onClick={ ()=> setCurrentPage(pages[3])}>Resume</li>
//            </ul>
//        </div>
    )
}

export default Nav;