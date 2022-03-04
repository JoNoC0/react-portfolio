import React from 'react';
import images from '../images/react-resume.png'
import resumePdf from '../images/JNresume.pdf'

function Resume() {
    return (
        <div className='resume-containter'>
            <h1>Resume</h1>
            <input type="image" img src={images} alt='resume' height='600' width='auto'>
            </input>
            <br />
            <a href={resumePdf}>
            <button className='resume-download'>Download Resume</button>
            </a>
        </div>
        
    )
}

export default Resume;