import React from 'react';

const About = () => {
    return (
        <div className="about"><a name='About'></a>
            <div className="about-container">
                <div className="about-text">
                    <h1>Hello There!</h1>
                    <h1>I'am <span className='name'>Timur Ayushiev</span>!</h1>
                    <p>A second year computer science student from Moscow. I'am intrested in Front-end development, Game development, Data Science.</p>
                    <p>You can contact me by mail: <span style={{color:'rgb(255, 205, 53)'}}>tayushiev@gmail.com</span></p>
                </div>
                <img className='photo' src='../photo.png'></img>
            </div>
        </div>
    );
}

export default About;