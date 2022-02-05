import React, { useState } from 'react';
import './App.css';
import About from '../src/components/About/About';
import Contact from '../src/components/Contact/Contact';
import Nav from '../src/components/Nav/Nav';
import Footer from '../src/components/Footer/Footer';
import Projects from '../src/components/Projects/Projects';
import Resume from '../src/components/Resume/Resume'
import Header from '../src/components/Header/Header';



function App() {
  const pages = [<About />, <Contact />, <Projects />, <Resume />]
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
