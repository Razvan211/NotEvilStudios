import React from "react";
import "./CatAstrophe.css";
import cat from "../images/CatAstrophe/CatAstrophe.png";
import storyM from "../images/CatAstrophe/StoryMode.png"
import survivalM from "../images/CatAstrophe/SurvivalMode.png"
import kittyM from "../images/CatAstrophe/KittyFightingClub.png"
import mainCat from "../images/CatAstrophe/MainCat.png"
import drWhiskers from "../images/CatAstrophe/Dr.Whiskers.png"
import levels from "../images/CatAstrophe/Levels.png"
import { Container, Row, Col} from "react-bootstrap";


function CatAstrophe() {
	return (
    <div className="catastrophe">	
	<img src={cat} alt="CatAstrophe banner" className="img-fluid" />	
	<div className="catastrophe-info">
	<h2>
	Cat-Astrophe is a wacky low-poly 3D fighter game where you play as cats that walk on two legs 
	combatting other cats with a variety of different fish based weapons.
	</h2>
	<a href="https://www.kickstarter.com/projects/notevilstudios/cat-astrophe" rel="noreferrer" target="_blank" size="lg" className="btn btn-dark">Support our project</a>
	<a href="https://notevilstudios.itch.io/cat-astrophe-demo"rel="noreferrer" className="btn btn-dark ">Download Alpha</a>
	
	<h2 className="subtitle">Game Modes</h2>
	<img src={storyM} alt="story mode" className="img-fluid"/>
	<h3>
	In story mode, you step into the paws of our protagonist cat as you fight your way up the tower in 
	order to eventually stop Dr. Whiskers. You will go through stage based levels, taking place on different
    floors of the tower, with a steady progression of difficulty as you climb all 100 floors.
	</h3>
	<img src={survivalM} alt="survival mode" className="img-fluid"/>
	<h3>
	When you start a survival mode run, you're given a set inventory of weapons, items, and stats to use to
	help you climb the tower. After each set of 5 levels, you get one of 3 set buffs, and every player gets 
	the same choice of 3 on every level that gives buffs. This means we can run seasonal updates where everyone 
	competes to climb the highest up the tower, and no one has a larger advantage than anyone else.
	</h3>
	<img src={kittyM} alt="kitty fighting club mode" className="img-fluid"/>
    <h3>In this mode, up to 4 players take part in a variety of game types to determine the best cat in a mixture of PvP action.</h3>
	<a href="https://www.kickstarter.com/projects/notevilstudios/cat-astrophe" rel="noreferrer" target="_blank" size="lg" className="btn btn-dark">Support our project</a>
	<a href="https://notevilstudios.itch.io/cat-astrophe-demo"rel="noreferrer" className="btn btn-dark ">Download Alpha</a>
	<h2 className="subtitle">Models</h2>
    <Container fluid className="cat-container">
		<Row>
			<Col className="cat-col" md={12} lg={12}><img src={mainCat} alt="kitty fighting club mode" className="img-fluid"/></Col>
			<Col className="cat-col" md={12} lg={12}><img src={drWhiskers} alt="kitty fighting club mode" className="img-fluid"/></Col>
			<Col className="cat-col" md={12} lg={12}><img src={levels} alt="kitty fighting club mode" className="img-fluid"/></Col>
		</Row>
	</Container>
    </div>
	
	</div>		
	
	);
}

export default CatAstrophe;
