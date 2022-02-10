import React from 'react';
import images from '../images/react-resume.png'
import resumePdf from '../images/JNresume.pdf'

function Resume() {
    return (
        <div className='resume-containter'>
            <h1>Resume</h1>
            <img src={images} height='600' width='auto'>
            </img>
            <br />
            <a href={resumePdf}>
            <button className='resume-download'>Download Resume</button>
            </a>
        </div>
        
    )
}

export default Resume;