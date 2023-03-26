import React from 'react'
import './ProjectCards.css'


export default function ProjectCards(props) {
  return (
    <div className="project-card" >
  <img src={props.img}  alt={props.alt} className="project-card-image"/>
  <div className="project-card-body">
    <h5 className="project-card-title">{props.title}</h5>
    <p className="project-card-text">{props.description}</p>
    <a  href={props.link} rel='noreferrer' target={'_blank'} className="btn btn-dark ">Download</a>
  </div>
</div>
  )
}

