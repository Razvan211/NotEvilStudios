import React from "react";
import "./LandingPage.css";
import cat from "../images/CatAstrophe/CatAstrophe.png";
import ProjectCards from "./ProjectCards";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function LandingPage() {
	return (
		<div>
			<div className="mission-container">
				<h1 className="mission-title">Not Evil Studios</h1>
				<p className="mission-text">
					Not Evil Studios is an indie game development studio with 7 team members based in the
					Southwest of England. At the moment, our in progress projects include Fling, a 2D physics
					based mobile game, as well as Cat-Astrophe, a 3D PC game where Cats fight one another with
					Fishy weapons.
				</p>
			</div>
			<div className="projects">
				<h2 className="projects-title">Projects</h2>

				<p className="projects-text">
					Our team is excited to share these projects with you, and we hope that you'll enjoy
					exploring the worlds we've created. So click on a card, and let the adventure begin!
				</p>

				<div className="projects-container">
					<Container fluid>
						<Row style={{ padding: "2%" }}>
							<Col xs={12} md={6} lg={{offset: 3}}>
								<ProjectCards
									img={cat}
									title="Cat-Astrophe"
									description="In a world where cats stay on two legs and fight with fish as weapons."
									link="/catastrophe"
											/>
							</Col>
						</Row>

						<Row style={{ padding: "2%" }}>
							<Col></Col>
						</Row>
					</Container>
				</div>
			</div>
		</div>
	);
}
