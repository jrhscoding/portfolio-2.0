import React from "react";

function Footer() {
    return (
        <footer className="bg-light text-center text-lg-start fixed-bottom">
            <div className="text-center p-3">
                <a className="text-dark" href="https://github.com/jrhscoding">
                    <img className="img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" href="https://github.com/jrhscoding" />
                </a>
                <a className="text-dark" href="https://www.linkedin.com/in/joseph-hernandez-8694b5255/">
                <img className="img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" href="https://www.linkedin.com/in/joseph-hernandez-8694b5255/" />
                </a>
                <a className="text-dark" href="https://twitter.com/livelovejosiee">
                <img className="img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" href="https://twitter.com/livelovejosiee" />
                </a>
            </div>
        </footer>
    )
}

export default Footer;