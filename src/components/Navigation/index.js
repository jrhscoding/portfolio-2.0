import React from 'react';
import Project from '../Project';
import Contact from '../Contact';
import Resume from '../Resume';
import About from '../About';

function Navigation(props) {
    let { currentPageSelected } = props;

    if (currentPageSelected === 'about') {
        return (
            <div>
                <About />
            </div>
        )
    } else if (currentPageSelected === 'portfolio') {

        const projects = [
            {
                name: 'Camp Me Outside',
                image: require('../../assets/img/camp.png'),
                liveLink: 'https://francisca-hernandez.github.io/Camp-Me-Outside/',
                githubLink: 'https://github.com/francisca-hernandez/Camp-Me-Outside',
                description: 'A simple campsite locator and scary campfire story generator'
            },
            {
                name: 'Mind Over Matter',
                image: require('../../assets/img/mind.png'),
                liveLink: 'https://mind-over-matter-2.herokuapp.com/',
                githubLink: 'https://github.com/francisca-hernandez/Mind-Over-Matter',
                description: 'A wellness app designed to help you track your daily mood'
            },
            {
                name: 'Hidden Gems',
                image: require('../../assets/img/hiddengem.png'),
                liveLink: 'https://stormy-retreat-53284.herokuapp.com/',
                githubLink: 'https://github.com/francisca-hernandez/Hidden-Gems',
                description: 'A journal entry type app to keep track of "Hidden Gems" you would like to revisit'
            }
        ];

        return (
            <div className='container'>
                <div className='row mb-5'>
                    <Project
                        name={projects[0].name}
                        image={projects[0].image}
                        liveLink={projects[0].liveLink}
                        githubLink={projects[0].githubLink}
                        description={projects[0].description}
                    />
                    <Project
                        name={projects[1].name}
                        image={projects[1].image}
                        liveLink={projects[1].liveLink}
                        githubLink={projects[1].githubLink}
                        description={projects[1].description}
                    />
                    <Project
                        name={projects[2].name}
                        image={projects[2].image}
                        liveLink={projects[2].liveLink}
                        githubLink={projects[2].githubLink}
                        description={projects[2].description}
                    />
                </div>
            </div>
        )
    } else if (currentPageSelected === 'contact') {
        return (
            <div>
                <Contact />
            </div>
        )
    } else if (currentPageSelected === 'resume') {
        return (
            <div>
                <Resume />
            </div>
        )
    }

    // return (

    // )
}

export default Navigation;