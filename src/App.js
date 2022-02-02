import React, { useState } from 'react';

import './App.css';
import About from '../src/components/About';
import Contact from '../src/components/Contact';
import Nav from '../src/components/Nav';
import Footer from '../src/components/Footer';
import Projects from '../src/components/Projects';

function App() {
  const pages = [<About />, <Contact />, <Projects />]
  const [currentPage, setCurrentPage] = useState(pages[0])
  const name = 'John Nguyen'

  return (
    <div className="App">
     <Nav setCurrentPage={setCurrentPage} pages={pages}/>
     {currentPage}
     <Footer />
    </div>
  );
}

export default App;
