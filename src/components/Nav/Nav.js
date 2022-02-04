import React from 'react';

function Nav({ setCurrentPage, pages }) {
    return (
       <div className='d-flex justify-content-between'>
           <h1>John Nguyen</h1>
           <ul className='nav'>
               <li className='nav-item' style={{margin: '5px', }} onClick={ ()=> setCurrentPage(pages[0])}>About</li>
               <li className='nav-item myNavItem' onClick={ ()=> setCurrentPage(pages[1])}>Contact</li>
               <li className='nav-item myNavItem' onClick={ ()=> setCurrentPage(pages[2])}>Projects</li>
           </ul>
       </div>
    )
}

export default Nav;