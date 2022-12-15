import React from 'react';
import CardImg from "../../images/Card-Img.jpg";
import "./ProjectCard.css"

function ProjectCard() {
    return(
        <div className='card'>
            <img src={CardImg} alt="" />
            <p className='card-subtitle'>HTML SCSS PYTHON FLASK</p>
            <div className='card-content'>
                <p className='card-title'>ChertNodes</p>
                <p className='card-desc'>Minecraft servers hosting</p>
                <div className="card-btn">
                    <a className='live-btn'>Live</a>
                    <a className='repository-btn'>Repositório</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;