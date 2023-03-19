import React from 'react'
import './ProjectCards.css'


export default function ProjectCards(props) {
  return (
    <div className="card" >
  <img src={props.img}  alt={props.alt} class="card-image"/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
    <a href={props.link} rel='noreferrer' target={'_blank'} className="btn btn-dark">Go somewhere</a>
  </div>
</div>
  )
}

