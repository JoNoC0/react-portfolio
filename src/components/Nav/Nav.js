import React from 'react';
import css from '../Nav/Nav.css'

function Nav({ setCurrentPage, pages }) {
    return (
       <div className='d-flex justify-content-between'>
           <h1 style={{margin: '20px'}}>John Nguyen</h1>
           <ul className='nav'>
               <li className='nav-item myNavItem' onClick={ ()=> setCurrentPage(pages[0])}>About</li>
               <li className='nav-item myNavItem' onClick={ ()=> setCurrentPage(pages[1])}>Contact</li>
               <li className='nav-item myNavItem' onClick={ ()=> setCurrentPage(pages[2])}>Projects</li>
               <li className='nav-item myNavItem' onClick={ ()=> setCurrentPage(pages[3])}>Resume</li>
           </ul>
       </div>
    )
}

export default Nav;