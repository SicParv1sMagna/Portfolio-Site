import React from 'react';

const NavBar = () => {
    return (
            <div className='NavBarContainer'>
                    <span className='spanBtn'>
                    <a className='NavBarLink' href='#About'>About</a>
                    </span>
                    <span className='spanBtn'>
                        <a className='NavBarLink' href='#Projects'>Projects</a>
                    </span>
                    <span className='spanBtn'>
                        <a className='NavBarLink' href='#Skills'>Skills</a>
                    </span>
                    <span className='spanBtn'>
                        <a className='NavBarLink' href='#Achievements'>Achievements</a>
                    </span>
            </div>
    );
}

export default NavBar;