import React from 'react';
import FAIcon from '../../GUI/FAIcon/FAIcon';

const appHeader = () => (
    <header>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <a class="navbar-brand" href="index.html">
                <FAIcon type='code'/>
                <span className='pl-1'>ReactPlayGround</span>
            </a>
        </nav>
    </header>
);

export default appHeader;