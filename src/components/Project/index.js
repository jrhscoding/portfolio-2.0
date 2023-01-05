import React from "react";

function Project(props) {

    const { name, image, liveLink, githubLink, description } = props;

    return (
        <div className="card col mx-1">
            <div className="card-body mx-2">
                <img src={image} className="card-img-top float-center" alt={name} />
                <h5 className="card-title my-2">{name}</h5>
                <p className="card-text">{description}</p>
                <a href={liveLink} className="btn btn-primary mx-1">Link to deployed Webpage</a>
                <a href={githubLink} className="btn btn-primary my-2">Link to GitHub Repo</a>
            </div>
        </div>
    )
}

export default Project;