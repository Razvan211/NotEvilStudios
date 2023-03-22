import React from 'react'
import './MemberCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub, faWix, faYoutube, faInternetExplorer } from '@fortawesome/free-brands-svg-icons';




function MemberCard(props) {
  return (
    <div className="team-card" >
    <img src={props.img} className="team-card-image" alt={props.alt}/>
    <div className="team-card-body">
      <h4 className="team-card-title">{props.name}</h4>
      <h5 className='team-card-roles'>{props.roles}</h5>
      <div className='team-info'>
      <div className='team-card-about'>
      <p className="team-card-text">{props.info}</p>
      </div>
      <div className='team-card-socials'>
      <p className="team-card-media">
        
        {props.showTwitter &&( <a href={props.twitter} rel='noreferrer' target="_blank" >
        <FontAwesomeIcon icon={faTwitter} />
        </a>)}
        
        {props.showFacebook &&(<a href={props.facebook} rel='noreferrer' target="_blank" >
        <FontAwesomeIcon icon={faFacebook} />
        </a>)}
        
        {props.showInstagram &&(<a href={props.instagram} rel='noreferrer' target="_blank" >
        <FontAwesomeIcon icon={faInstagram} />
        </a>)}
        
        {props.showLinkedIn && ( <a href={props.linkedin} rel='noreferrer' target="_blank" >
        <FontAwesomeIcon icon={faLinkedin} />
        </a>)}
       
       {props.showGitHub && ( <a href={props.github} rel='noreferrer' target="_blank" >
        <FontAwesomeIcon icon={faGithub} />
        </a>)}

        {props.showWix && ( <a href={props.wix} rel='noreferrer' target="_blank" >
        <FontAwesomeIcon icon={faWix} />
        </a>)}

        {props.showYoutube && ( <a href={props.youtube} rel='noreferrer' target="_blank" >
        <FontAwesomeIcon icon={faYoutube} />
        </a>)}

        {props.showWebsite && ( <a href={props.website} rel='noreferrer' target="_blank" >
        <FontAwesomeIcon icon={faInternetExplorer} />
        </a>)}
       
      </p>
      </div>
      </div>
    </div>
  </div>
  )
}

export default MemberCard