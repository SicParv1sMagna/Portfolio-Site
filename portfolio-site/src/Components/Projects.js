import React from 'react';

const Projects = () => {
    return (
        <div className="projects">
            <div className="projects-container">
                <div className="projects-text">
                    <h1>Projects</h1>
                </div>
                <div className='ProjectsContainer'>
                    <div className='Project'>
                        <div className='ProjectText'>
                            <h2>Chill Radio Beats</h2>
                            <p>A music application, which contains different music genres for relaxing. You can choose every station for listening. Built with React.js, JavaScript.</p>
                            <div className='ButtonContainer'>
                                <a href='https://razordandelion-jahee4--67737895221233.stormkit.dev/'><button className='LinkButton'>Live Preview</button></a>
                                <a href='https://github.com/SicParv1sMagna/Chill-Radio-Beats'><button className='GitHubButton'>GitHub</button></a>
                            </div>
                        </div>
                    </div>
                    <div className='ProjectPhoto'>
                        asd
                    </div>
                </div>
                <div className='ProjectsContainer'>
                    <div className='Project'>
                        <div className='ProjectText'>
                            <h2>Web Messenger</h2>
                            <p>A messenger application built with Socket.io, React.js, node.js. I was practicing Back-end.</p>
                            <div className='ButtonContainer'>
                                {/* <a href=''><button className='LinkButton'>Live Preview</button></a> */}
                                <a href='https://github.com/SicParv1sMagna/React-Web-Messenger'><button className='GitHubButton'>GitHub</button></a>
                            </div>
                        </div>
                    </div>
                    <div className='ProjectPhoto'>
                        asd
                    </div>
                </div>
                <div className='ProjectsContainer'>
                    <div className='Project'>
                        <div className='ProjectText'>
                            <h2>Weather App</h2>
                            <p>A weather application, which shows the weather in different cities. Built with React.js, JavaScript, OpenWeatherMap API.</p>
                            <div className='ButtonContainer'>
                                <a href='https://tubular-souffle-07f62e.netlify.app/'><button className='LinkButton'>Live Preview</button></a>
                                <a href='https://github.com/SicParv1sMagna/React-Weather-App'><button className='GitHubButton'>GitHub</button></a>
                            </div>
                        </div>
                    </div>
                    <div className='ProjectPhoto'>
                        asd
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;