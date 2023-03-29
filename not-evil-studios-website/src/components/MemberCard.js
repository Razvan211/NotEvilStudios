import React from "react";
import "./MemberCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faTwitter,
	faInstagram,
	faLinkedin,
	faGithub,
	faWix,
	faYoutube,
	faInternetExplorer,
} from "@fortawesome/free-brands-svg-icons";
import Col from "react-bootstrap/Col";

function MemberCard(props) {
	return (
		<Col xs={12} md={6} lg={4}>
			<div className="team-card">
				<div className="team-image">
					<img src={props.img} className="team-card-image" alt={props.alt} />
				</div>

				<div className="team-card-body">
					<div className="team-info">
						<h4 className="team-card-title">{props.name}</h4>
						<h5 className="team-card-roles">{props.roles}</h5>

						<div className="team-card-about">{props.info}</div>
					</div>
				</div>
				<div className="team-card-socials">
					<p className="team-card-media ">
						{props.showTwitter && (
							<a href={props.twitter} rel="noreferrer" target="_blank">
								<FontAwesomeIcon icon={faTwitter} />
							</a>
						)}

						{props.showFacebook && (
							<a href={props.facebook} rel="noreferrer" target="_blank">
								<FontAwesomeIcon icon={faFacebook} />
							</a>
						)}

						{props.showInstagram && (
							<a href={props.instagram} rel="noreferrer" target="_blank">
								<FontAwesomeIcon icon={faInstagram} />
							</a>
						)}

						{props.showLinkedIn && (
							<a href={props.linkedin} rel="noreferrer" target="_blank">
								<FontAwesomeIcon icon={faLinkedin} />
							</a>
						)}

						{props.showGitHub && (
							<a href={props.github} rel="noreferrer" target="_blank">
								<FontAwesomeIcon icon={faGithub} />
							</a>
						)}

						{props.showWix && (
							<a href={props.wix} rel="noreferrer" target="_blank">
								<FontAwesomeIcon icon={faWix} />
							</a>
						)}

						{props.showYoutube && (
							<a href={props.youtube} rel="noreferrer" target="_blank">
								<FontAwesomeIcon icon={faYoutube} />
							</a>
						)}

						{props.showWebsite && (
							<a href={props.website} rel="noreferrer" target="_blank">
								<FontAwesomeIcon icon={faInternetExplorer} />
							</a>
						)}
					</p>
				</div>
			</div>
		</Col>
	);
}

export default MemberCard;
