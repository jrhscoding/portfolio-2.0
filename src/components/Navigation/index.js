import React from 'react';

function Navigation(props) {
    let {currentPageSelected} = props;

    if (currentPageSelected==='about') {
        return (
            <div>
                <h1>About Me</h1>
            </div>
        )
    } else if (currentPageSelected==='project') {
        return (
            <div>
                <h1>Projects</h1>
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