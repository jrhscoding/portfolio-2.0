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
                <About/>
            </div>
        )
    } else if (currentPageSelected === 'portfolio') {

        const projects = [
            {
                name: 'Camp Me Outside',
                image: require('../../assets/img/camp.png'),
                liveLink: 'https://francisca-hernandez.github.io/Camp-Me-Outside/',
                githubLink: 'https://github.com/francisca-hernandez/Camp-Me-Outside'
            },
            {
                name: 'Mind Over Matter',
                image: require('../../assets/img/mind.png'),
                liveLink: 'https://mind-over-matter-2.herokuapp.com/',
                githubLink: 'https://github.com/francisca-hernandez/Mind-Over-Matter'
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
                    />
                    <Project
                        name={projects[1].name}
                        image={projects[1].image}
                        liveLink={projects[1].liveLink}
                        githubLink={projects[1].githubLink}
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