import React from "react";

function Project(props) {

    const { name, image, liveLink, githubLink } = props;

    return (
        <div className="card col mx-1">
            <img src={image} className="card-img-top mx-2 my-4" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href={liveLink} className="btn btn-primary mx-1">Link to deployed Webpage</a>
                    <a href={githubLink} className="btn btn-primary my-2">Link to GitHub Repo</a>
                </div>
        </div>
    )
}

export default Project;