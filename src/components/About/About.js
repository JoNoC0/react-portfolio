import React from 'react';
import profilepic from '../images/John.jpg';
import '../Footer/Footer.css';

function About() {
    return (
        <section className="my-5" >
      <h1 id="about">About Me</h1>
      {/* <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" /> */}
      <div className="my-2">
      <img 
            src={profilepic}
            width='25%'
            height='25%'
            alt='profile pic'
        ></img> 
        <br />
        <p>
        I am a Full Stack Web Developer. A Father. Ambitious. Always Learning. Highly Motivated. <br />
        Love Spending Time with My Kids. Going to New Places and Learning About Culture.<br />
        Ready to Meet Any New Challenges Head On.
        </p>
      </div>
    </section>
    )
}

export default About;