import React from 'react';

export default class Navigation extends React.Component {
    render(){
        return (
            <nav className='navbar'>
                <span className='navbar-links'>
                    <a className='nav-link' href='#'>
                        <h3 className='website-name'>Website Name</h3>
                    </a>
                    <a className='nav-link' href='#'>
                        Home
                    </a>
                    <a className='nav-link' href='#'>
                        About
                    </a>
                    <a className='nav-link' href='#'>
                        Contact
                    </a>
                </span>
            </nav>
        );
    }
}