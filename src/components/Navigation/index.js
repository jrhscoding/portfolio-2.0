import React from 'react';
import Project from '../Project';

function Navigation(props) {
    let {currentPageSelected} = props;

    if (currentPageSelected==='about') {
        return (
            <div>
                <h1>About Me</h1>
            </div>
        )
    } else if (currentPageSelected==='portfolio') {
        return (
            <div>
                <h1>Portfolio</h1>
                <Project/>
            </div>
        )
    } else {
        return (
            <div>
                <h1> no selection</h1>
            </div>
        )
    }

    // return (

    // )
}

export default Navigation;