import React from 'react';

const NavBar = () => {
    return (
            <div className='NavBarContainer'>
                <div className='Links'>
                    <a className='NavBarLink' href='#About' style={{color:'rgb(255, 205, 53)'}}>About</a>
                    <a className='NavBarLink' href='#Projects'style={{color:'rgb(255, 205, 53)'}}>Projects</a>
                    <a className='NavBarLink' href='#Skills' style={{color:'rgb(255, 205, 53)'}}>Skills</a>
                    <a className='NavBarLink' href='#Achievements' style={{color:'rgb(255, 205, 53)'}}>Achievements</a>
                </div>
            </div>
    );
}

export default NavBar;