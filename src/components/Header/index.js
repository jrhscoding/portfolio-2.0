import React, { useState } from 'react';
import Navigation from '../Navigation';

function Header() {

    const pageSelections = ['about', 'portfolio']

    const [currentPageSelected, setCurrentPageSelected] = useState(pageSelections[0]);
   
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <span className="navbar-brand">JRH's Coding</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <span role="button" onClick={() => setCurrentPageSelected(pageSelections[0])} className="nav-link pe-auto">About Me</span>
                            </li>
                            <li className="nav-item">
                                <span role="button" onClick={() => setCurrentPageSelected(pageSelections[1])} className="nav-link">Projects</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Navigation currentPageSelected={currentPageSelected}/>
        </div>
    )
}

export default Header;