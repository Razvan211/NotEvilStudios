import React from 'react'
import './ProjectCards.css'
import { Link } from 'react-router-dom';


export default function ProjectCards(props) {
  return (
    <div className="project-card" >
      <div className='project-card-top' >
      <img src={props.img}  alt={props.alt} className="project-card-image" />
      </div>
  <div className="project-card-body">
    <h5 className="project-card-title">{props.title}</h5>
    <p className="project-card-text">{props.description}</p>
    <a  as={Link} href={props.link}  rel='noreferrer'  className="btn btn-dark ">Go to project</a>
  </div>
</div>
  )
}

